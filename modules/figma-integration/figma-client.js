#!/usr/bin/env bun

/**
 * Figma WebSocket Client - Complete API
 * Usage: bun figma-client.js <channel> <command> [params]
 *
 * Available Commands:
 * - get_document_info: Get information about the current document
 * - get_selection: Get currently selected nodes
 * - get_node_info: Get information about a specific node (params: {nodeId})
 * - create_rectangle: Create a rectangle (params: {x, y, width, height, fill})
 * - create_text: Create text node (params: {x, y, text, fontSize, fontFamily})
 * - create_frame: Create a frame (params: {x, y, width, height, name})
 * - modify_node: Modify node properties (params: {nodeId, properties})
 * - delete_node: Delete a node (params: {nodeId})
 * - export_node: Export node as image (params: {nodeId, format, scale})
 */

const WEBSOCKET_URL = 'ws://localhost:3055';

async function sendCommand(channel, command, params = {}) {
  return new Promise((resolve, reject) => {
    const commandId = `cmd_${Date.now()}`;
    let hasJoined = false;

    const ws = new WebSocket(WEBSOCKET_URL);

    ws.addEventListener('open', () => {
      console.log('[INFO] Connected to WebSocket server');

      // Join channel first
      ws.send(JSON.stringify({
        type: 'join',
        channel: channel,
        id: commandId
      }));
    });

    ws.addEventListener('message', (event) => {
      try {
        const message = JSON.parse(event.data);
        console.log('[DEBUG] Received:', JSON.stringify(message, null, 2));

        // Wait for join confirmation
        if (message.type === 'system' && !hasJoined) {
          hasJoined = true;
          console.log('[INFO] Joined channel:', channel);

          // Now send the actual command
          const commandMessage = {
            type: 'message',
            channel: channel,
            message: {
              command: command,
              params: params,
              id: commandId
            }
          };

          console.log('[INFO] Sending command:', command);
          ws.send(JSON.stringify(commandMessage));
        }

        // Handle command result
        if (message.type === 'broadcast' && message.message) {
          const result = message.message;

          if (result.id === commandId && result.result) {
            console.log('[SUCCESS] Command result received');
            ws.close();
            resolve(result.result);
          } else if (result.id === commandId && result.error) {
            console.log('[ERROR] Command error:', result.error);
            ws.close();
            reject(new Error(result.error));
          }
        }
      } catch (error) {
        console.error('[ERROR] Failed to parse message:', error);
      }
    });

    ws.addEventListener('error', (error) => {
      console.error('[ERROR] WebSocket error:', error);
      reject(error);
    });

    ws.addEventListener('close', () => {
      console.log('[INFO] Connection closed');
    });

    // Timeout after 10 seconds
    setTimeout(() => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
        reject(new Error('Command timeout'));
      }
    }, 10000);
  });
}

// Command shortcuts
const commands = {
  // Document commands
  getDocument: (channel) => sendCommand(channel, 'get_document_info'),
  getSelection: (channel) => sendCommand(channel, 'get_selection'),
  getNode: (channel, nodeId) => sendCommand(channel, 'get_node_info', { nodeId }),

  // Creation commands
  createRectangle: (channel, params) => sendCommand(channel, 'create_rectangle', params),
  createText: (channel, params) => sendCommand(channel, 'create_text', params),
  createFrame: (channel, params) => sendCommand(channel, 'create_frame', params),
  createEllipse: (channel, params) => sendCommand(channel, 'create_ellipse', params),

  // Modification commands
  modifyNode: (channel, nodeId, properties) => sendCommand(channel, 'modify_node', { nodeId, properties }),
  deleteNode: (channel, nodeId) => sendCommand(channel, 'delete_node', { nodeId }),

  // Export commands
  exportNode: (channel, nodeId, format = 'PNG', scale = 1) =>
    sendCommand(channel, 'export_node', { nodeId, format, scale }),
};

// CLI usage
if (import.meta.main) {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log(`
Figma WebSocket Client
======================

Usage: bun figma-client.js <channel> <command> [params]

Available Commands:
  get_document_info        Get document information
  get_selection           Get current selection
  get_node_info           Get node info (requires: nodeId)
  create_rectangle        Create rectangle (optional: x, y, width, height, fill)
  create_text             Create text (optional: x, y, text, fontSize, fontFamily)
  create_frame            Create frame (optional: x, y, width, height, name)
  modify_node             Modify node (requires: nodeId, properties)
  delete_node             Delete node (requires: nodeId)
  export_node             Export node (requires: nodeId, optional: format, scale)

Examples:
  bun figma-client.js wxgfg3t3 get_selection
  bun figma-client.js wxgfg3t3 get_node_info '{"nodeId":"123:456"}'
  bun figma-client.js wxgfg3t3 create_text '{"x":0,"y":0,"text":"Hello","fontSize":24}'
  bun figma-client.js wxgfg3t3 export_node '{"nodeId":"123:456","format":"PNG","scale":2}'
`);
    process.exit(1);
  }

  const [channel, command, ...rest] = args;
  const params = rest.length > 0 ? JSON.parse(rest.join(' ')) : {};

  sendCommand(channel, command, params)
    .then((result) => {
      console.log('\n[RESULT]');
      console.log(JSON.stringify(result, null, 2));
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n[FAILED]', error.message);
      process.exit(1);
    });
}

export { sendCommand, commands };
