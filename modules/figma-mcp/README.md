# Figma MCP Module

MCP сервер для интеграции Claude с Figma — позволяет верстать дизайны из Figma напрямую в проект.

## Описание

Этот модуль использует внешний [Claude Talk to Figma MCP](https://github.com/anthropics/claude-talk-to-figma-mcp) сервер для получения дизайнов из Figma и автоматической генерации HTML/CSS элементов и секций.

## Расположение MCP сервера

Оригинальный MCP сервер находится в:
```
/Users/andrejtsibin/Documents/Development/Claude Talk to Figma MCP/claude-talk-to-figma-mcp
```

## Установка и запуск

### 1. Перейти в директорию MCP сервера

```bash
cd "/Users/andrejtsibin/Documents/Development/Claude Talk to Figma MCP/claude-talk-to-figma-mcp"
```

### 2. Установить зависимости (если еще не установлены)

```bash
bun install
```

### 3. Запустить MCP сервер

```bash
bun socket
```

MCP сервер запустится и будет ждать подключения от Figma Plugin.

### 4. Подключить Figma Plugin

1. Откройте дизайн в Figma
2. Запустите Figma Plugin для MCP
3. Подключитесь к серверу (channel ID будет показан в терминале)

## Использование в Claude Code

После запуска MCP сервера и подключения Figma Plugin, вы можете работать с дизайнами прямо в Claude Code:

### Получить список компонентов

```
Talk to Figma, channel ABC123
Покажи список всех компонентов в файле
```

### Создать элемент из Figma компонента

```
Talk to Figma, channel ABC123

Создай элемент button-figma из компонента "Primary Button":
- Файл: library/elements/buttons/button-figma/button-figma.html
- CSS: library/elements/buttons/button-figma/button-figma.css
- Используй переменные: --primary, --font-size-3, --space-4
- BEM классы: .btn.btn--figma
- Mobile-first адаптив
```

### Создать секцию из Figma фрейма

```
Talk to Figma, channel ABC123

Создай секцию hero-figma из фрейма "Hero Section":
- Файл: library/sections/hero/hero-figma.html
- CSS: library/sections/hero/hero-figma.css
- Используй grid-2-cols для макета
- Реальный текст из дизайна (БЕЗ placeholders!)
- BEM методология
- Design-system переменные (--font-size-*, --space-*, и т.д.)
```

## Workflow

1. **Дизайнер создаёт макет в Figma**
2. **Запускаем MCP сервер:**
   ```bash
   cd "/Users/andrejtsibin/Documents/Development/Claude Talk to Figma MCP/claude-talk-to-figma-mcp"
   bun socket
   ```
3. **Подключаем Figma Plugin** (получаем channel ID)
4. **В Claude Code работаем с дизайном:**
   ```
   Talk to Figma, channel {ID}
   Покажи все кнопки
   ```
5. **Claude генерирует элементы:**
   - Создаёт HTML/CSS в `library/elements/` или `library/sections/`
   - Использует переменные из `library/styles/variables.css`
   - Следует BEM методологии
   - Генерирует mobile-first адаптив
   - Использует реальный текст (НЕ placeholders)

## Преимущества

✅ **Автоматическая верстка из дизайна** — Claude переводит Figma в код
✅ **Design-system из коробки** — использует все переменные (`--font-size-*`, `--space-*`, и т.д.)
✅ **BEM методология** — автоматически генерирует правильные классы
✅ **Mobile-first** — адаптивность по умолчанию
✅ **Реальный контент** — никаких placeholders
✅ **Элементный подход** — генерирует переиспользуемые компоненты

## Примеры

### Создать все кнопки из Figma

```
Talk to Figma, channel ABC123

Создай все варианты кнопок из Figma как отдельные элементы:
- button-primary (из компонента "Button/Primary")
- button-secondary (из компонента "Button/Secondary")
- button-outline (из компонента "Button/Outline")

Для каждой кнопки создай:
- HTML: library/elements/buttons/{name}/{name}.html
- CSS: library/elements/buttons/{name}/{name}.css
```

### Создать Hero секцию с реальным текстом

```
Talk to Figma, channel ABC123

Создай секцию hero-landing из фрейма "Landing/Hero":
1. Возьми текст прямо из дизайна (заголовок, описание, текст кнопок)
2. Используй grid-2-cols для layout
3. Добавь изображение с правильным alt текстом
4. Создай файлы:
   - library/sections/hero/hero-landing.html
   - library/sections/hero/hero-landing.css
```

## Важные правила

⚠️ **НЕ создавать placeholders** — всегда используй реальный текст из Figma
⚠️ **Следовать архитектуре Site Builder** — элементы в `library/elements/`, секции в `library/sections/`
⚠️ **Использовать design-system** — все переменные из `library/styles/variables.css`
⚠️ **BEM naming** — классы по методологии BEM
⚠️ **UTF-8 кодировка** — проверять кириллицу после создания файлов

## Зависимости

- **Bun runtime** — для запуска MCP сервера
- **Figma Plugin** — для подключения к Figma
- **Claude Code** — с поддержкой MCP

## Ссылки

- **MCP сервер:** `/Users/andrejtsibin/Documents/Development/Claude Talk to Figma MCP/claude-talk-to-figma-mcp`
- **Документация MCP:** [Model Context Protocol](https://modelcontextprotocol.io)
- **Figma API:** [Figma Developer Docs](https://www.figma.com/developers/api)

---

**Статус:** Опциональный модуль — используется только при работе с Figma
**Последнее обновление:** 2025-10-26
