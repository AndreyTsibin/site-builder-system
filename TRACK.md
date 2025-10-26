# Трекинг внедрения изменений Site Builder

**Дата начала:** 2025-10-26
**Базовый документ:** [CHANGES-PLAN.md](CHANGES-PLAN.md)
**Статус:** В процессе — Диалог 1

---

## Диалог 1: Подготовка и очистка

### Этап 1.1: Коммит текущего состояния
- [x] Проверить git status
- [x] Создать коммит "chore: snapshot before restructuring"

### Этап 1.2: Удаление старых файлов
- [x] Удалить `scripts/` (вся папка)
- [x] Удалить все секции в `library/sections/*`
- [x] Удалить `library/design-system/utilities.css`
- [x] Удалить `templates/selected-sections.json`
- [x] Удалить `templates/sections.yaml`
- [x] Коммит "refactor: remove old automation and sections"

### Этап 1.3: Создание структуры modules/
- [x] Создать `modules/minification/` + README.md
- [x] Создать `modules/accessibility/` + README.md
- [x] Создать `modules/performance/` + README.md
- [x] Коммит "feat: add modules structure for optional tools"

### Этап 1.4: Создание структуры library/elements/
- [ ] Создать папки: `buttons/`, `forms/`, `lists/`, `cards/`, `accordions/`, `tabs/`, `sliders/`, `modals/`, `grid/`, `spacing/`, `sections/`
- [ ] Коммит "feat: add elements structure"

### Этап 1.5: Подготовка промпта для Диалога 2
- [ ] Сформировать промпт со статусом и следующими шагами
- [ ] Обновить TRACK.md с отметками выполненных задач

---

## Диалог 2: Базовые элементы и шаблоны

### Этап 2.1: Проверка design-system
- [ ] Проверить `library/design-system/variables.css`
- [ ] Проверить `library/design-system/reset.css`
- [ ] Внести правки при необходимости

### Этап 2.2: Создание базовых элементов
- [ ] Создать элементы buttons (primary, secondary, outline, ghost)
- [ ] Создать элементы forms (input, textarea, select, checkbox, radio)
- [ ] Создать элементы grid (2-cols, 3-cols, 4-cols)
- [ ] Создать элементы cards (basic, with-image, pricing)

### Этап 2.3: Единый JavaScript
- [ ] Создать `library/js/main.js` с основными функциями

### Этап 2.4: Настройка output/ шаблона
- [ ] Создать готовый `output/index.html` с подключёнными стилями
- [ ] Настроить `output/styles/` (reset.css, variables.css, main.css)
- [ ] Настроить `output/scripts/main.js`
- [ ] Создать пустую папку `output/images/`

---

## Диалог 3: Демо файлы и финализация

### Этап 3.1: Демонстрационные файлы
- [ ] Создать `library/demo-elements.html`
- [ ] Создать `library/demo-sections.html`
- [ ] Создать `library/ui-kit.html`

### Этап 3.2: Первые секции из элементов
- [ ] Создать 2-3 примера секций (header, hero, footer)

### Этап 3.3: Тестирование системы
- [ ] Собрать тестовый лендинг
- [ ] Проверить работоспособность
- [ ] Проверить UTF-8 для кириллицы

### Этап 3.4: Финализация
- [ ] Удалить CHANGES-PLAN.md (временный файл)
- [ ] Обновить README.md
- [ ] Обновить CLAUDE.md
- [ ] Финальный коммит

---

**Последнее обновление:** 2025-10-26
