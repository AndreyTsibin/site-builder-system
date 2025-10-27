# Figma Integration Module

WebSocket-интеграция с Figma для быстрого получения дизайна и генерации HTML/CSS.

---

## Quick Start (30 секунд)

```bash
# 1. Запустить WebSocket сервер
./modules/figma-integration/start-server.sh

# 2. В Figma: запустить Figma Plugin → скопировать channel ID
# 3. Готово! Используй команды ниже
```

---

## Что это?

Модуль позволяет получать данные из Figma (текст, стили, структуру) через WebSocket и генерировать готовый HTML/CSS код для site-builder.

**Преимущества:**
- ✅ Получаешь реальный текст из дизайна (без Lorem Ipsum!)
- ✅ Видишь все стили: шрифты, цвета, отступы
- ✅ Автоматически генерируешь HTML/CSS на основе дизайна
- ✅ Работает с компонентами, фреймами, текстами, кнопками

---

## Установка (один раз)

### 1. Установить Figma Plugin

1. Открой Figma Desktop
2. Menu → Plugins → Development → Import plugin from manifest...
3. Выбери файл: `modules/figma-integration/server/src/claude_mcp_plugin/manifest.json`
4. Плагин установлен ✅

### 2. Проверить Bun

```bash
bun --version
# Должно показать версию (1.2+)
```

Если Bun не установлен: https://bun.sh

---

## Использование

### Шаг 1: Запустить WebSocket сервер

```bash
./modules/figma-integration/start-server.sh
```

**Вывод:**
```
🚀 Starting Figma Integration Server...
✅ Starting WebSocket server on port 3055...
📡 Status endpoint: http://localhost:3055/status
```

### Шаг 2: Подключить Figma Plugin

1. Открой дизайн в Figma
2. Запусти плагин: **Plugins → Development → Claude MCP Plugin**
3. Скопируй **channel ID** (например: `wxgfg3t3`)

### Шаг 3: Получить данные из Figma

#### A. Через Claude Code (рекомендуется)

Просто скажи мне (Claude):

```
Получи из Figma (channel wxgfg3t3) выделенную секцию и создай HTML/CSS
```

Я автоматически:
1. Получу данные через `figma-client.js`
2. Проанализирую структуру
3. Сгенерирую HTML/CSS с реальным текстом
4. Создам файлы в `library/sections/` или `library/elements/`

#### B. Вручную через CLI

```bash
# Получить выделенный элемент
bun modules/figma-integration/figma-client.js wxgfg3t3 get_selection

# Получить информацию о конкретном узле
bun modules/figma-integration/figma-client.js wxgfg3t3 get_node_info '{"nodeId":"123:456"}'

# Получить информацию о документе
bun modules/figma-integration/figma-client.js wxgfg3t3 get_document_info
```

---

## Доступные команды

### 📄 Получение данных

| Команда | Описание | Пример |
|---------|----------|--------|
| `get_selection` | Получить выделенные элементы | `bun figma-client.js CH get_selection` |
| `get_node_info` | Получить детали узла | `bun figma-client.js CH get_node_info '{"nodeId":"123:456"}'` |
| `get_document_info` | Информация о документе | `bun figma-client.js CH get_document_info` |

### 🎨 Создание элементов (опционально)

| Команда | Описание | Параметры |
|---------|----------|-----------|
| `create_rectangle` | Создать прямоугольник | `{x, y, width, height, fill}` |
| `create_text` | Создать текст | `{x, y, text, fontSize, fontFamily}` |
| `create_frame` | Создать фрейм | `{x, y, width, height, name}` |
| `create_ellipse` | Создать эллипс | `{x, y, width, height, fill}` |

### ✏️ Модификация (опционально)

| Команда | Описание | Параметры |
|---------|----------|-----------|
| `modify_node` | Изменить свойства | `{nodeId, properties}` |
| `delete_node` | Удалить узел | `{nodeId}` |

### 📸 Экспорт (опционально)

| Команда | Описание | Параметры |
|---------|----------|-----------|
| `export_node` | Экспорт в PNG/SVG/JPG | `{nodeId, format, scale}` |

**Примечание:** `CH` = channel ID (например, `wxgfg3t3`)

---

## Workflow: От дизайна к коду

### Сценарий 1: Создать Hero секцию

```bash
# 1. Выдели Hero секцию в Figma
# 2. В Claude Code напиши:
```

```
Получи из Figma (channel wxgfg3t3) выделенную Hero секцию.
Создай файлы:
- library/sections/hero/hero-figma.html
- library/sections/hero/hero-figma.css

Используй:
- Реальный текст из дизайна
- CSS переменные из variables.css
- BEM методологию
- Mobile-first адаптив
```

### Сценарий 2: Создать кнопку

```bash
# 1. Выдели кнопку в Figma
# 2. В Claude Code напиши:
```

```
Получи из Figma (channel wxgfg3t3) выделенную кнопку.
Создай элемент:
- library/elements/buttons/button-figma/button-figma.html
- library/elements/buttons/button-figma/button-figma.css

Используй переменные: --primary, --font-size-3, --space-4
```

---

## Структура модуля

```
modules/figma-integration/
├── README.md                 # Эта документация
├── start-server.sh          # Быстрый запуск сервера
├── figma-client.js          # WebSocket клиент (CLI + API)
└── server/                  # WebSocket сервер
    ├── dist/                # Скомпилированные файлы
    ├── src/                 # Исходники
    └── package.json         # Зависимости
```

---

## Примеры команд

### Получить выделенный элемент

```bash
bun modules/figma-integration/figma-client.js wxgfg3t3 get_selection
```

**Результат:**
```json
{
  "selectionCount": 1,
  "selection": [
    {
      "id": "4174:1818",
      "name": "Hero Section",
      "type": "COMPONENT"
    }
  ]
}
```

### Получить детали узла

```bash
bun modules/figma-integration/figma-client.js wxgfg3t3 get_node_info '{"nodeId":"4174:1818"}'
```

**Результат:** Полная структура с текстами, стилями, children

### Создать текст в Figma (опционально)

```bash
bun modules/figma-integration/figma-client.js wxgfg3t3 create_text '{
  "x": 100,
  "y": 100,
  "text": "Hello World",
  "fontSize": 24,
  "fontFamily": "Roboto"
}'
```

---

## Troubleshooting

### Ошибка: "Connection timeout"

**Проблема:** WebSocket сервер не запущен

**Решение:**
```bash
./modules/figma-integration/start-server.sh
```

### Ошибка: "Channel not found"

**Проблема:** Figma Plugin отключился

**Решение:**
1. Закрой и снова открой плагин в Figma
2. Получи новый channel ID
3. Используй новый ID в командах

### Ошибка: "No selection"

**Проблема:** Ничего не выделено в Figma

**Решение:**
1. Выдели нужный элемент/фрейм в Figma
2. Повтори команду `get_selection`

### WebSocket сервер не стартует

**Проблема:** Порт 3055 занят

**Решение:**
```bash
# Убить процесс на порту 3055
lsof -ti:3055 | xargs kill -9

# Перезапустить
./modules/figma-integration/start-server.sh
```

---

## API Reference (для разработчиков)

### JavaScript API

```javascript
import { sendCommand, commands } from './figma-client.js';

// Получить выделение
const selection = await commands.getSelection('wxgfg3t3');

// Получить узел
const node = await commands.getNode('wxgfg3t3', '123:456');

// Создать текст
await commands.createText('wxgfg3t3', {
  x: 0,
  y: 0,
  text: 'Hello',
  fontSize: 24
});

// Универсальная команда
const result = await sendCommand('wxgfg3t3', 'get_selection', {});
```

---

## Что дальше?

После получения данных из Figma:

1. **Анализируй структуру** — какие секции, элементы, компоненты
2. **Генерируй HTML** — с реальным текстом из дизайна
3. **Создавай CSS** — используй переменные из `library/styles/variables.css`
4. **Следуй BEM** — `.hero__title`, `.button--primary`
5. **Добавь в каталог** — `demo-sections.html` или `demo-elements.html`

---

## Полезные ссылки

- **WebSocket Server Status:** http://localhost:3055/status
- **Figma Plugin API:** [code.js](server/src/claude_mcp_plugin/code.js)
- **Доступные команды:** Смотри `code.js` → `handleCommand()`
- **Оригинальный репозиторий:** [claude-talk-to-figma-mcp](https://github.com/arinspunk/claude-talk-to-figma-mcp)

---

## Changelog

**v1.0.0** (2025-10-26)
- ✅ WebSocket сервер интегрирован в проект
- ✅ CLI клиент `figma-client.js` с полным API
- ✅ Startup script для быстрого запуска
- ✅ Документация с примерами

---

**Статус:** ✅ Production Ready
**Последнее обновление:** 2025-10-26
