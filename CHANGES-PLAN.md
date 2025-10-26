# План изменений Site Builder

**Дата создания:** 2025-10-26
**Статус:** Готов к согласованию

---

## Описание

Фундаментальная переработка архитектуры проекта Site Builder.
Переход от автоматизированной сборки к ручной разработке с элементным подходом.

---

## Ключевые изменения

### 1. Папка modules/ — опциональные инструменты

**Концепция:** Создать папку `modules/` для опциональных инструментов, которые запускаются только по запросу.

**Структура:**
```
modules/
├── minification/
│   ├── minify.py        # Минификация CSS для production
│   └── README.md
├── accessibility/
│   ├── check.py         # Проверка WCAG
│   └── README.md
├── performance/
│   ├── audit.py         # Lighthouse audit
│   └── README.md
└── figma-mcp/
    ├── (файлы из claude-talk-to-figma-mcp)
    └── README.md        # Инструкция по подключению и использованию
```

**Требования к модулям:**
- Каждый модуль в отдельной папке
- Обязательный README.md с описанием, командами, примерами, зависимостями
- Запуск только по запросу (не используются по умолчанию)

**Figma MCP Server:**
- MCP сервер для интеграции Claude с Figma
- Позволяет верстать из дизайна Figma напрямую в проект
- Копируется из `/Users/andrejtsibin/Documents/Development/Claude Talk to Figma MCP/claude-talk-to-figma-mcp`
- **Workflow:**
  1. Запуск сервера: `cd modules/figma-mcp && bun socket`
  2. Подключение Figma Plugin
  3. Работа через Claude: "Talk to Figma, channel {channel-ID}"
  4. Верстка элементов из Figma в `library/elements/` или `library/sections/`

---

### 2. Отказ от Python-автоматизации

**КРИТИЧЕСКОЕ:** Полный и окончательный отказ от автоматической сборки.

**Причина:** Автоматизация негибкая и ограничивает разработку.

**Что удаляется навсегда:**
- `scripts/assemble.py` — удалить (НЕ архивировать)
- Папка `scripts/` — удалить полностью
- `templates/selected-sections.json` — удалить
- `templates/sections.yaml` — удалить

**Новый подход:**
- Полностью ручная разработка лендингов
- Никакой автоматизации через Python — НИКОГДА
- Полный контроль над результатом

---

### 3. templates/ — только business-data.md

**Решение:** Единственный файл для данных клиента.

**Структура:**
```
templates/
└── business-data.md    # Единственный файл (перезаписывается для каждого проекта)
```

**Правила:**
- Никаких `business-data-client1.md`, `business-data-client2.md` и т.д.
- Перед новым проектом — перезаписывать содержимое
- Используется только как справочник для ручного заполнения контента

---

### 4. Единый JavaScript — library/js/main.js

**Почему:** JavaScript на лендингах минимален (бургер-меню, слайдеры, табы, модалки, аккордеоны, плавная прокрутка).

**Решение:**
```
library/js/
└── main.js    # Все функции в одном файле
```

**Workflow:**
1. Копируем `library/js/main.js` → `output/scripts/main.js`
2. Комментируем/удаляем ненужные функции
3. При необходимости корректируем классы (но обычно не нужно, т.к. универсальная система с BEM)

**Преимущества:**
- Один HTTP-запрос вместо нескольких
- Все функции в одном месте
- Универсальные классы → JS почти не требует изменений

---

### 5. Элементный подход — философия разработки

**КРИТИЧЕСКОЕ:** Полная смена философии — от готовых секций к элементному подходу.

**Проблема текущего подхода:**
- Готовые секции = монолитные блоки (негибкие)
- Дублирование элементов в каждой секции
- Нет библиотеки переиспользуемых элементов
- Сложная поддержка (изменить кнопку → править во всех секциях)

**Новая философия: от элементов к секциям**

> **Секция — это не монолитный блок, а композиция элементов.**
>
> Кнопка = элемент
> Форма = элемент
> Список = элемент
> Колонки = элемент
> Секция = элемент (контейнер)
>
> **Hero = Секция + Колонки + Кнопка + Изображение**

**Этап 1: Создать библиотеку элементов**

Создаём каждый возможный элемент:
```
library/elements/
├── buttons/          # button-primary, button-secondary, button-outline, button-ghost
├── forms/            # input, textarea, select, checkbox, radio
├── lists/            # ul-styled, checklist, numbered-list
├── cards/            # card-basic, card-with-image, card-pricing
├── accordions/
├── tabs/
├── sliders/
├── modals/
├── grid/             # grid-2-cols, grid-3-cols, grid-4-cols
├── spacing/
└── sections/         # section-narrow, section-wide, section-full-width (контейнеры)
```

**Требования к элементу:**
- Привязан к CSS переменным из design-system
- Полностью адаптивный (320px → 1440px+)
- Красивый дизайн + анимации
- Законченный и независимый

**Этап 2: Собирать секции из элементов**

Секции = комбинация готовых элементов (как LEGO).

**Что удалить:**
- Все папки из `library/sections/*` — УДАЛИТЬ
- Оставить пустую папку `library/sections/` для будущих секций
- Начинаем с нуля: сначала элементы, потом секции

**ВАЖНО:** Сделать git commit перед удалением (для истории).

---

### 6. Демонстрационные файлы с ID

**Концепция:** Создать каталоги элементов и секций с уникальными ID для быстрой ссылки.

**Файлы:**
```
library/
├── demo-elements.html    # Каталог всех элементов с ID
├── demo-sections.html    # Каталог всех секций с ID
└── ui-kit.html           # Визуальный справочник (для просмотра)
```

**Система именования:**

Элементы: `button-primary`, `input-text`, `grid-2-cols`, `card-basic`, `accordion-1`, `tabs-1`, `modal-1`

Секции: `header-1`, `hero-2`, `features-3`, `pricing-1`, `faq-2`, `contacts-1`, `footer-1`

**Примеры использования:**
```
"Claude Code, собери лендинг из header-1, hero-3, features-2, footer-1"
"Claude Code, создай секцию services-3 из grid-3-cols, card-basic, button-primary"
"Claude Code, покажи все варианты hero секций"
```

**Workflow:**
1. Открываем `demo-sections.html` или `demo-elements.html`
2. Находим нужные элементы/секции по ID
3. Копируем HTML код
4. Собираем лендинг

**Отличие файлов:**
- `ui-kit.html` — визуальный справочник для просмотра (красивый дизайн)
- `demo-elements.html` — технический каталог для работы (ID, код, примеры)
- `demo-sections.html` — каталог секций для сборки

---

### 7. Трёхуровневая структура library/

**Концепция:** Чёткая иерархия — стили → элементы → секции.

```
library/
├── design-system/    # УРОВЕНЬ 1: CSS переменные, reset, utilities
├── elements/         # УРОВЕНЬ 2: Строительные блоки (кнопки, формы, сетки)
├── sections/         # УРОВЕНЬ 3: Готовые секции (собираются из элементов)
├── js/
│   └── main.js
├── demo-elements.html
├── demo-sections.html
└── ui-kit.html
```

**Workflow:**
1. Используем `design-system/` для базовых стилей
2. Создаём `elements/` (кнопки, формы и т.д.)
3. Комбинируем элементы в `sections/`
4. Собираем лендинг из секций вручную

---

### 8. Минималистичная структура output/ с готовым шаблоном

**Концепция:** Папка `output/` содержит готовую структуру проекта с заготовками файлов. Мы просто **заполняем и заменяем** данные, а не создаём файлы заново.

```
output/
├── index.html           # Уже создан с подключенными шрифтами, стилями, скриптами
├── styles/              # Готовая папка (заменяем CSS внутри)
│   ├── reset.css
│   ├── variables.css
│   └── main.css         # Все стили элементов и секций (собираем из library)
├── images/              # Готовая папка (заменяем изображения)
└── scripts/             # Готовая папка (заменяем JS)
    └── main.js
```

**Содержимое index.html (шаблон):**
```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Название проекта</title>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Remix Icon -->
  <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">

  <!-- Styles -->
  <link rel="stylesheet" href="styles/reset.css">
  <link rel="stylesheet" href="styles/variables.css">
  <link rel="stylesheet" href="styles/main.css">
</head>
<body>
  <!-- Здесь собираем секции лендинга -->


  <!-- Scripts -->
  <script src="scripts/main.js" defer></script>
</body>
</html>
```

**Подключаемые стили (порядок важен):**
1. `reset.css` — сброс браузерных стилей
2. `variables.css` — CSS переменные (цвета, шрифты, размеры)
3. `main.css` — все стили элементов и секций страницы (собираем из `library/elements/` и `library/sections/`)

**Правила:**
- Файлы и папки **уже созданы** в `output/`
- Для нового проекта — **заменяем содержимое** файлов, а не создаём заново
- `index.html` — меняем `<title>` и добавляем секции в `<body>`
- `styles/main.css` — собираем из CSS файлов `library/elements/` и `library/sections/`
- `images/` — добавляем/заменяем изображения
- `scripts/main.js` — копируем актуальный JS (комментируем ненужные функции)

**ВАЖНО — отказ от placeholders:**
- ❌ **Больше НЕТ placeholders** типа `{{hero.title}}`, `{{button.text}}` и т.д.
- ✅ **Всегда реальный текст** в элементах и секциях
- Пример кнопки: `<button class="btn btn--primary">Вызвать мастера</button>` (НЕ `{{button.text}}`)
- Контент пишется сразу, а не заполняется через placeholders

**Workflow для нового лендинга:**
1. Открываем готовый `output/index.html`
2. Меняем `<title>` на название проекта
3. Вставляем секции с **реальным текстом** в `<body>` (НЕ placeholders)
4. Собираем `output/styles/main.css` из CSS файлов элементов и секций
5. Копируем изображения в `output/images/`
6. Копируем/обновляем `output/scripts/main.js` (комментируем ненужное)
7. Готово — открываем в браузере

**Преимущества:**
- Не нужно каждый раз создавать файлы и папки
- Все уже подключено (шрифты, иконки, стили, скрипты)
- Просто заполняем контентом
- Готово к открытию в браузере

---

### 9. Документация только в docs/

**Правило:** Вся документация только в `docs/`.

**Требования:**
- Не создавать документы в корне (кроме README.md, CLAUDE.md)
- Структурировать: руководства, техническая документация, архитектурные решения

---

## Итоговая структура проекта

```
/site-builder/
├── library/
│   ├── design-system/        # variables.css, reset.css (utilities.css УДАЛЁН)
│   ├── elements/             # buttons/, forms/, grid/, cards/, accordions/, tabs/, etc.
│   ├── sections/             # header/, hero/, features/, footer/, etc. (создаются заново)
│   ├── js/
│   │   └── main.js
│   ├── demo-elements.html
│   ├── demo-sections.html
│   └── ui-kit.html
│
├── templates/
│   └── business-data.md
│
├── output/
│   ├── index.html
│   ├── styles/
│   ├── images/
│   └── scripts/
│
├── modules/
│   ├── minification/
│   │   ├── minify.py
│   │   └── README.md
│   ├── accessibility/
│   │   ├── check.py
│   │   └── README.md
│   └── performance/
│       ├── audit.py
│       └── README.md
│
├── docs/
│   └── USAGE.md
│
├── CLAUDE.md
├── README.md
└── CHANGES-PLAN.md (временный)
```

---

## Что удалить

- `scripts/` — вся папка
- `scripts/assemble.py` — навсегда (НЕ архивировать)
- `library/sections/*` — все существующие секции
- `library/design-system/utilities.css` — больше не нужен
- `templates/selected-sections.json`
- `templates/sections.yaml`
- Все `.min.css` файлы (пока не используются)

---

## Что создать

- `modules/` + подпапки (minification, accessibility, performance) + README.md
- `library/elements/` + подпапки для каждого элемента (с реальным текстом, БЕЗ placeholders)
- `library/js/main.js`
- `library/demo-elements.html`
- `library/demo-sections.html`
- `library/ui-kit.html`
- `output/index.html` (готовый шаблон с подключенными шрифтами, только 3 стиля: reset, variables, main)
- `output/styles/reset.css`
- `output/styles/variables.css`
- `output/styles/main.css` (собирается из элементов и секций)
- `output/images/` (пустая папка)
- `output/scripts/main.js`

---

## Ответы на вопросы

✅ **1. Резервная копия:** НЕ нужна. Есть достаточно коммитов в истории, можем вернуться при необходимости (хотя вряд ли понадобится, т.к. полностью меняем философию).

✅ **2. Хранение готовых проектов:** НЕ сохраняем. Удаляем старые лендинги, они не нужны.

✅ **3. Миграция:** Поэтапно, в новой сессии (контекстное окно текущей сессии заканчивается).

✅ **4. Дополнительные модули:** Добавить. Проверить, есть ли уже модули в проекте (performance audit и т.д.) и разложить их по папкам `modules/` с README.md.

---

**Примечание:** Этот файл временный и будет удалён после внесения всех изменений.
