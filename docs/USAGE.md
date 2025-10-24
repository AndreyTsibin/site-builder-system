# USAGE.MD — SITE BUILDER

**Полное руководство по использованию Site Builder — от идеи до готового лендинга за 30 минут**

---

## 📋 Содержание

1. [Быстрый старт (5 минут)](#быстрый-старт-5-минут)
2. [Workflow — 4 этапа](#workflow--4-этапа)
   - [Этап 1: Планирование секций (5 мин)](#этап-1-планирование-секций-5-мин)
   - [Этап 2: Сборка структуры (2 мин)](#этап-2-сборка-структуры-2-мин)
   - [Этап 3: AI-генерация контента (15 мин)](#этап-3-ai-генерация-контента-15-мин)
   - [Этап 4: Тестирование и публикация (8 мин)](#этап-4-тестирование-и-публикация-8-мин)
3. [Команды и скрипты](#команды-и-скрипты)
4. [Troubleshooting](#troubleshooting)
5. [Best Practices](#best-practices)

---

## Быстрый старт (5 минут)

### Предварительные требования

- Python 3.8+ (для скрипта сборки)
- Claude Code CLI (для AI-генерации контента)
- Современный браузер (Chrome/Firefox/Safari)

### Проверка установки

```bash
# Проверить структуру проекта
ls -la library/ templates/ scripts/ output/

# Должно быть:
# library/design-system/ — CSS переменные
# library/sections/ — HTML/CSS/JS секции
# templates/ — Шаблоны данных
# scripts/assemble.py — Скрипт сборки
# output/ — Готовые лендинги (генерируется)
```

---

## Workflow — 4 этапа

### Этап 1: Планирование секций (5 мин)

**Цель:** Понять бизнес клиента и выбрать подходящие секции

#### Шаг 1.1: Заполнение business-data.md

1. Откройте `templates/business-data.md`
2. Заполните данные клиента (или используйте пример):
   - **Основная информация:** Тип бизнеса, название, город, год основания
   - **УТП:** 5 уникальных преимуществ
   - **Услуги и цены:** Список услуг с ценами
   - **Контакты:** Телефон, email, адрес, график работы
   - **Соцсети:** VK, Telegram, WhatsApp, Instagram
   - **Доп. информация:** О компании, целевая аудитория, SEO keywords

**Пример заполнения:**

```markdown
# Данные бизнеса: РемТехСервис

## 1. Основная информация
- Тип бизнеса: Ремонт бытовой техники (стиральные машины)
- Название: РемТехСервис
- Город: Москва
- Год основания: 2015
- Размер команды: 12 мастеров

## 2. Уникальные торговые предложения (УТП)
1. Выезд мастера за 1 час в любой район Москвы
2. Гарантия на ремонт до 3 лет
3. Ремонт на дому в 87% случаев за 1 визит
4. Бесплатная диагностика при заказе ремонта
5. Работаем круглосуточно 24/7

## 3. Контакты
- Телефон: +7 (495) 789-45-67
- Email: info@remtehservis.ru
- Адрес: г. Москва, ул. Ленина, д. 10, офис 5
- График работы: Круглосуточно 24/7
```

**💡 Совет:** Если данных нет — Claude Code сгенерирует релевантный контент на основе типа бизнеса.

#### Шаг 1.2: Выбор секций через Claude Code

**Запустите Claude Code CLI и используйте промпт:**

```
Проанализируй templates/business-data.md и предложи список секций для лендинга.

Доступные секции (P0):
- header-1: Sticky header с logo, navigation, phone, CTA, burger menu
- hero-1: Centered hero с заголовком и email-формой
- hero-2: Two-column hero с заголовком, текстом, 2 CTA кнопками и изображением
- features-2col: 2-колоночная сетка преимуществ (4 items с иконками Remix Icon)
- features-3col: 3-колоночная сетка преимуществ (6 items с иконками Remix Icon)
- cta-simple: Простой CTA блок с заголовком, текстом и кнопкой
- footer-1: 4-колоночный футер (About, Navigation, Contacts, Social)

Учитывай:
- Тип бизнеса и целевую аудиторию
- Какие секции лучше подчеркнут УТП
- Оптимальную структуру для конверсии

Выведи JSON формата:
{
  "project_name": "имя-проекта",
  "sections": [
    {"id": "header-1", "order": 1},
    {"id": "hero-2", "order": 2},
    ...
  ]
}
```

**Claude Code предложит:**

```json
{
  "project_name": "washing-machine-repair",
  "sections": [
    {"id": "header-1", "order": 1},
    {"id": "hero-2", "order": 2},
    {"id": "features-3col", "order": 3},
    {"id": "cta-simple", "order": 4},
    {"id": "footer-1", "order": 5}
  ]
}
```

#### Шаг 1.3: Сохранение конфигурации

Сохраните JSON в `templates/selected-sections.json`:

```bash
# Claude Code создаст файл автоматически после вашего подтверждения
# или создайте вручную:
cat > templates/selected-sections.json <<'EOF'
{
  "project_name": "washing-machine-repair",
  "sections": [
    {"id": "header-1", "order": 1},
    {"id": "hero-2", "order": 2},
    {"id": "features-3col", "order": 3},
    {"id": "cta-simple", "order": 4},
    {"id": "footer-1", "order": 5}
  ]
}
EOF
```

---

### Этап 2: Сборка структуры (2 мин)

**Цель:** Автоматически собрать HTML/CSS "каркас" с плейсхолдерами

#### Шаг 2.1: Запуск скрипта сборки

```bash
python scripts/assemble.py --config templates/selected-sections.json
```

**Что происходит:**

1. Скрипт читает `selected-sections.json`
2. Создаёт `output/washing-machine-repair/` с папками:
   - `css/` — design-system CSS + sections CSS
   - `js/` — JS для интерактивных секций
   - `assets/` — изображения (пока пусто)
3. Собирает `index.html`:
   - Добавляет `<!DOCTYPE html>`, `<head>` с мета-тегами, CSS links
   - Вставляет HTML секций из `library/sections/{id}/{id}.html`
   - Оставляет плейсхолдеры `{{hero.title}}`, `{{contacts.phone}}` и т.д.
4. Копирует CSS:
   - `design-system/variables.css`, `reset.css`, `utilities.css`
   - Собирает `sections.css` из CSS файлов выбранных секций
5. Копирует JS (если есть):
   - `header-1.js` для burger menu

**Результат:**

```bash
output/washing-machine-repair/
├── index.html          # HTML с плейсхолдерами {{...}}
├── css/
│   ├── variables.css
│   ├── reset.css
│   ├── utilities.css
│   └── sections.css    # Собранный CSS всех секций
├── js/
│   └── header-1.js     # Burger menu script
└── assets/             # Пока пусто (для изображений)
```

**Время выполнения:** ~0.02 секунды

#### Шаг 2.2: Проверка результата

```bash
# Открыть в браузере (увидите "скелет" с плейсхолдерами)
open output/washing-machine-repair/index.html

# Проверить незаполненные плейсхолдеры
grep "{{" output/washing-machine-repair/index.html | wc -l
# Вывод: ~30 (примерное количество плейсхолдеров)
```

---

### Этап 3: AI-генерация контента (15 мин)

**Цель:** Заполнить все плейсхолдеры релевантным контентом через Claude Code

#### Шаг 3.1: Использование универсального промпта

**Скопируйте и вставьте в Claude Code CLI:**

```
Заполни все плейсхолдеры {{...}} в output/washing-machine-repair/index.html
используя данные из templates/business-data.md.

ПРАВИЛА ЗАПОЛНЕНИЯ:
1. Данные из business-data.md используй как есть (телефоны, email, адреса)
2. Если данных нет — генерируй релевантный контент для типа бизнеса
3. НЕ используй слова "пример", "шаблон", "замените"
4. Формат телефона: +7 (999) 123-45-67 (в tel: ссылках без пробелов и скобок: +79991234567)
5. Remix Icon классы: ri-time-line, ri-shield-check-line, ri-tools-line и т.д. (см. https://remixicon.com/)
6. UTF-8 encoding обязателен для кириллицы

ПЛЕЙСХОЛДЕРЫ ПО КАТЕГОРИЯМ:

Meta-теги (SEO):
- {{meta.title}} — Заголовок страницы (60-70 символов, включает название + услугу + город)
- {{meta.description}} — Описание (120-160 символов, УТП + призыв к действию)

Header:
- {{logo.text}} — Название компании
- {{nav.item1}}, {{nav.item2}}, {{nav.item3}} — Пункты меню (обычно: Услуги, Преимущества, Контакты)
- {{contacts.phone}} — Телефон в формате +7 (999) 123-45-67
- {{header.cta_text}} — Текст кнопки в header (обычно: "Заказать", "Вызвать мастера")

Hero (главный экран):
- {{hero.title}} — H1 заголовок (конкретика + цифры, например "Ремонт стиральных машин в Москве за 1 час")
- {{hero.subtitle}} — Подзаголовок (УТП, 1-2 предложения)
- {{hero.cta_text}} — Основная кнопка (призыв к действию)
- {{hero.secondary_cta_text}} — Вторая кнопка (если есть, например "Узнать цены")
- {{hero.image_url}} — Путь к изображению (assets/hero-image.jpg)
- {{hero.image_alt}} — Alt text для изображения (описание того, что на картинке)

Features (преимущества):
- {{features.section_title}} — Заголовок секции (например "Почему выбирают нас")
- {{features.item1.icon}} — Remix Icon класс (ri-time-line, ri-shield-check-line и т.д.)
- {{features.item1.title}} — Заголовок преимущества (краткий, 2-5 слов)
- {{features.item1.text}} — Описание преимущества (1-2 предложения, конкретика + цифры)
- (аналогично для item2, item3, ... item6 если features-3col)

CTA (призыв к действию):
- {{cta.title}} — Заголовок CTA секции (вопрос или утверждение)
- {{cta.text}} — Поддерживающий текст (1-2 предложения)
- {{cta.button_text}} — Текст кнопки
- {{cta.button_link}} — Ссылка кнопки (tel:, mailto:, или якорь #contacts)

Footer:
- {{footer.about}} — Описание компании (2-3 предложения)
- {{contacts.email}} — Email
- {{contacts.address}} — Адрес
- {{contacts.work_hours}} — График работы (если есть placeholder)
- {{social.vk}}, {{social.telegram}}, {{social.whatsapp}}, {{social.instagram}} — Ссылки на соцсети
- {{footer.copyright}} — Copyright (например "© 2015-2025 РемТехСервис. Все права защищены.")

КАЧЕСТВО КОНТЕНТА:
✅ Конкретика: "гарантия 3 года", "выезд за 1 час", "ремонт от 1500₽"
✅ Цифры и факты: "12 500 выполненных заказов", "рейтинг 4.9/5", "87% ремонтов за 1 визит"
✅ Тон: профессиональный, дружелюбный, доверительный
✅ Призыв к действию: "Вызвать мастера", "Заказать звонок", "Узнать цену"
❌ Штампы: "мы лучшие", "только у нас", "гарантия качества" (без конкретики)
❌ Общие фразы: "высокое качество", "низкие цены", "индивидуальный подход"

ИКОНКИ REMIX ICON (примеры по типам бизнеса):
- Ремонт: ri-tools-line, ri-hammer-line, ri-settings-3-line
- Скорость: ri-time-line, ri-flashlight-line, ri-rocket-line
- Гарантия: ri-shield-check-line, ri-award-line, ri-medal-line
- Качество: ri-star-line, ri-checkbox-circle-line, ri-thumb-up-line
- Деньги: ri-money-dollar-circle-line, ri-wallet-line, ri-coupon-line
- Команда: ri-team-line, ri-user-star-line, ri-group-line
- Локация: ri-map-pin-line, ri-home-line, ri-building-line
- Коммуникация: ri-phone-line, ri-mail-line, ri-message-line
- Полный список: https://remixicon.com/

ПРОВЕРКА ПОСЛЕ ЗАПОЛНЕНИЯ:
1. UTF-8 encoding для кириллицы:
   head -50 output/washing-machine-repair/index.html
   (должен быть чистый русский текст, без кракозябр)

2. Незаполненные плейсхолдеры:
   grep "{{" output/washing-machine-repair/index.html
   (должно быть 0 результатов или только placeholders, которые нужно заменить на реальные данные)

3. Открыть в браузере:
   open output/washing-machine-repair/index.html
   (визуальная проверка контента)
```

#### Шаг 3.2: Claude Code заполняет контент

Claude Code:
1. Прочитает `business-data.md`
2. Прочитает `index.html`
3. Заполнит все плейсхолдеры релевантным контентом
4. Для отсутствующих данных сгенерирует правдоподобный контент
5. Сохранит обновлённый `index.html`

**Время выполнения:** ~5-10 минут (зависит от количества плейсхолдеров)

#### Шаг 3.3: Проверка результата

```bash
# 1. UTF-8 check (КРИТИЧНО для кириллицы)
head -50 output/washing-machine-repair/index.html
# Должен быть чистый русский: "РемТехСервис", "Ремонт стиральных машин"
# НЕ кракозябры: "����������"

# 2. Поиск незаполненных плейсхолдеров
grep "{{" output/washing-machine-repair/index.html
# Вывод должен быть пустым или только закомментированные примеры

# 3. Открыть в браузере
open output/washing-machine-repair/index.html
```

**💡 Совет:** Если остались незаполненные плейсхолдеры, попросите Claude Code:

```
Найди все оставшиеся {{...}} в index.html и заполни их.
Плейсхолдеры: [список найденных через grep]
```

---

### Этап 4: Тестирование и публикация (8 мин)

**Цель:** Проверить качество, производительность и совместимость

#### Шаг 4.1: Визуальное тестирование

```bash
# Открыть лендинг в браузере
open output/washing-machine-repair/index.html
```

**Чек-лист проверки:**

- [ ] **Контент:**
  - Все тексты заполнены (нет `{{...}}`)
  - Тексты релевантны бизнесу
  - Нет орфографических ошибок
  - Телефоны, email, адреса корректны

- [ ] **Функциональность:**
  - Header sticky (прилипает при скролле)
  - Burger menu работает на mobile (открыть DevTools, mobile view)
  - Телефонные ссылки (`tel:`) кликабельны
  - Email ссылки (`mailto:`) кликабельны
  - CTA кнопки ведут на правильные якоря или ссылки
  - Социальные иконки (если ссылки добавлены)

- [ ] **Адаптивность:**
  - Mobile (320px-767px): 1 колонка, burger menu visible
  - Tablet (768px-1023px): 2 колонки в features
  - Desktop (1024px+): 3 колонки, horizontal navigation

#### Шаг 4.2: Performance тестирование

**Опция 1: Lighthouse (Chrome DevTools)**

1. Открыть DevTools (F12)
2. Вкладка "Lighthouse"
3. Выбрать "Performance", "Accessibility", "Best Practices", "SEO"
4. Click "Analyze page load"

**Целевые метрики:**
- Performance: >90
- Accessibility: >90
- Best Practices: 100
- SEO: 100

**Опция 2: PageSpeed Insights (онлайн)**

1. Разместить лендинг на тестовом сервере (или использовать ngrok)
2. Открыть https://pagespeed.web.dev/
3. Вставить URL
4. Проверить mobile и desktop

#### Шаг 4.3: Accessibility проверка

```bash
# Проверка alt texts
grep -n "img" output/washing-machine-repair/index.html | grep -v "alt="
# Вывод должен быть пустым (все img имеют alt)

# Проверка aria-labels
grep -n "aria-label" output/washing-machine-repair/index.html
# Должны быть на кнопках, навигации, иконках

# Проверка heading hierarchy
grep -n "<h[1-6]" output/washing-machine-repair/index.html
# Порядок: H1 → H2 → H3 (без пропусков)
```

**Keyboard navigation тест:**
1. Открыть лендинг в браузере
2. Нажать `Tab` — фокус должен двигаться по элементам
3. `Shift + Tab` — в обратном порядке
4. `Enter` на кнопках/ссылках — должны активироваться
5. `Esc` при открытом burger menu — должен закрываться

#### Шаг 4.4: Cross-browser тестирование

**Минимальный набор:**

1. **Chrome** (latest): `open -a "Google Chrome" output/washing-machine-repair/index.html`
2. **Firefox** (latest): `open -a "Firefox" output/washing-machine-repair/index.html`
3. **Safari** (latest): `open output/washing-machine-repair/index.html`

**Проверить:**
- Layout не ломается
- Все интерактивные элементы работают
- Шрифты загружаются (Inter от Google Fonts)
- Иконки отображаются (Remix Icon от CDN)

**Mobile testing:**
- Chrome DevTools → Device Mode (F12 → Ctrl+Shift+M)
- Протестировать: iPhone SE (375px), iPad (768px), Desktop (1280px)

#### Шаг 4.5: Финальные правки

Если найдены проблемы, попросите Claude Code:

```
Исправь следующие проблемы в output/washing-machine-repair/index.html:
1. [Описание проблемы 1]
2. [Описание проблемы 2]
...
```

#### Шаг 4.6: Публикация

**Опция 1: Статический хостинг (рекомендуется)**

- **Vercel:** `vercel deploy output/washing-machine-repair/`
- **Netlify:** Drag & drop папки `output/washing-machine-repair/` в Netlify Drop
- **GitHub Pages:**
  ```bash
  cd output/washing-machine-repair/
  git init
  git add .
  git commit -m "Initial commit"
  git branch -M main
  git remote add origin https://github.com/username/repo.git
  git push -u origin main
  # Включить GitHub Pages в Settings → Pages → Source: main branch
  ```

**Опция 2: cPanel / FTP**

1. Заархивировать папку: `zip -r landing.zip output/washing-machine-repair/`
2. Загрузить на хостинг через FTP/cPanel File Manager
3. Распаковать в `public_html/` или `www/`

**Опция 3: Локальный тестовый сервер**

```bash
cd output/washing-machine-repair/
python3 -m http.server 8000
# Открыть http://localhost:8000 в браузере
```

---

## Команды и скрипты

### Основные команды

```bash
# === Сборка лендинга ===
python scripts/assemble.py --config templates/selected-sections.json

# === Проверка UTF-8 ===
head -50 output/[project-name]/index.html

# === Поиск незаполненных плейсхолдеров ===
grep "{{" output/[project-name]/index.html

# === Подсчёт плейсхолдеров ===
grep "{{" output/[project-name]/index.html | wc -l

# === Открыть в браузере ===
open output/[project-name]/index.html

# === Запуск локального сервера ===
cd output/[project-name]/
python3 -m http.server 8000
# http://localhost:8000
```

### Скрипт assemble.py — Опции

```bash
# Базовое использование
python scripts/assemble.py --config templates/selected-sections.json

# Справка (если реализовано)
python scripts/assemble.py --help
```

**Что делает скрипт:**
1. Читает `selected-sections.json`
2. Создаёт структуру папок в `output/[project_name]/`
3. Собирает `index.html` из секций
4. Копирует design-system CSS (variables, reset, utilities)
5. Собирает `sections.css` из CSS файлов секций
6. Копирует JS файлы секций (если есть)

### Полезные команды для разработки

```bash
# === Поиск по содержимому файлов ===
grep -r "search_term" library/sections/

# === Просмотр структуры секции ===
tree library/sections/header-1/

# === Просмотр первых строк CSS ===
head -20 library/design-system/variables.css

# === Валидация JSON ===
python3 -m json.tool templates/selected-sections.json

# === Проверка YAML ===
python3 -c "import yaml; yaml.safe_load(open('templates/sections-library.yaml'))"
```

---

## Troubleshooting

### Проблема 1: Кракозябры вместо кириллицы

**Симптомы:**
```bash
head -10 output/project/index.html
# Вывод: <title>����������</title>
```

**Причина:** Неправильная кодировка файла (не UTF-8)

**Решение:**
```bash
# Проверить кодировку
file -I output/project/index.html

# Если не UTF-8, переконвертировать:
iconv -f windows-1251 -t utf-8 output/project/index.html > output/project/index-fixed.html
mv output/project/index-fixed.html output/project/index.html

# Или попросить Claude Code:
"Перезапиши output/project/index.html с UTF-8 encoding, сохранив кириллицу."
```

### Проблема 2: Плейсхолдеры не заполнены

**Симптомы:**
```bash
grep "{{" output/project/index.html
# Вывод: {{hero.title}}, {{contacts.phone}}, ...
```

**Причина:** Claude Code не заполнил все плейсхолдеры

**Решение:**
```
Claude Code, заполни оставшиеся плейсхолдеры в output/project/index.html:
- {{hero.title}}
- {{contacts.phone}}
...
Используй данные из templates/business-data.md
```

### Проблема 3: Python скрипт не запускается

**Симптомы:**
```bash
python scripts/assemble.py --config templates/selected-sections.json
# Error: No module named 'yaml' или Permission denied
```

**Причина:** Отсутствует Python или библиотеки

**Решение:**
```bash
# Проверить версию Python
python3 --version
# Должно быть >= 3.8

# Установить зависимости (если нужны)
pip3 install pyyaml

# Если Permission denied:
chmod +x scripts/assemble.py
python3 scripts/assemble.py --config templates/selected-sections.json
```

### Проблема 4: Burger menu не работает

**Симптомы:** Клик на burger icon не открывает mobile menu

**Причина:** Не подключен JS файл или ошибка в скрипте

**Решение:**
```bash
# 1. Проверить наличие JS
ls -la output/project/js/
# Должен быть header-1.js (если используется header-1)

# 2. Проверить подключение в HTML
grep "header-1.js" output/project/index.html
# Должно быть: <script src="js/header-1.js"></script>

# 3. Проверить консоль браузера (F12 → Console)
# Не должно быть ошибок JavaScript

# 4. Если JS не скопировался, запустить сборку заново:
python scripts/assemble.py --config templates/selected-sections.json
```

### Проблема 5: Шрифты не загружаются

**Симптомы:** Используется системный шрифт вместо Inter

**Причина:** Нет интернета или заблокирован Google Fonts

**Решение:**
```bash
# 1. Проверить подключение Google Fonts в HTML
grep "fonts.googleapis.com" output/project/index.html

# Должно быть:
# <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">

# 2. Проверить консоль браузера (F12 → Network)
# Должны загружаться запросы к fonts.googleapis.com

# 3. Если заблокированы, скачать шрифты локально:
# - Скачать Inter с https://fonts.google.com/specimen/Inter
# - Положить в output/project/fonts/
# - Обновить CSS с @font-face
```

### Проблема 6: Layout ломается на mobile

**Симптомы:** Секции не адаптируются, горизонтальный скролл

**Причина:** Отсутствует meta viewport или ошибка в CSS

**Решение:**
```bash
# 1. Проверить meta viewport
grep "viewport" output/project/index.html

# Должно быть:
# <meta name="viewport" content="width=device-width, initial-scale=1.0">

# 2. Проверить подключение utilities.css
grep "utilities.css" output/project/index.html

# 3. Открыть DevTools (F12) → Toggle Device Toolbar (Ctrl+Shift+M)
# Проверить layout на 375px, 768px, 1024px

# 4. Если CSS не применяется:
# - Проверить пути к CSS файлам (должны быть относительные: css/variables.css)
# - Проверить консоль (F12 → Console) на ошибки 404
```

### Проблема 7: Иконки Remix Icon не отображаются

**Симптомы:** Вместо иконок — пустые квадраты или текст `ri-time-line`

**Причина:** Не подключена библиотека Remix Icon

**Решение:**
```bash
# 1. Проверить подключение Remix Icon CDN
grep "remixicon" output/project/index.html

# Должно быть:
# <link href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css" rel="stylesheet">

# 2. Проверить классы иконок в HTML
grep "ri-" output/project/index.html

# Правильный формат:
# <i class="ri-time-line"></i> ✅
# <i class="ri-time"></i> ❌ (неверный класс)

# 3. Найти правильные классы иконок:
# https://remixicon.com/ → поиск → скопировать класс (например ri-time-line)
```

### Проблема 8: Performance score низкий (<90)

**Симптомы:** Lighthouse показывает Performance 70-80

**Причина:** Большие изображения, не оптимизирован CSS/JS

**Решение:**
```bash
# 1. Оптимизировать изображения
# - Сжать PNG/JPG (TinyPNG, ImageOptim)
# - Использовать WebP формат
# - Lazy loading для below-the-fold images: loading="lazy"

# 2. Inline critical CSS (design-system)
# - Переместить variables.css, reset.css внутрь <style> в <head>

# 3. Defer non-critical JS
# - Добавить defer attribute: <script src="js/header-1.js" defer></script>

# 4. Preconnect к внешним ресурсам
# Уже есть в HTML:
# <link rel="preconnect" href="https://fonts.googleapis.com">
# <link rel="preconnect" href="https://cdn.jsdelivr.net">

# 5. Font display: swap
# Уже настроено в Google Fonts URL: &display=swap
```

### Проблема 9: Accessibility score низкий (<90)

**Симптомы:** Lighthouse Accessibility 70-80

**Причина:** Отсутствуют alt texts, ARIA labels, плохой color contrast

**Решение:**
```bash
# 1. Проверить alt texts на всех изображениях
grep -n "<img" output/project/index.html | grep -v "alt="
# Вывод должен быть пустым

# 2. Проверить ARIA labels на интерактивных элементах
grep -n "aria-label" output/project/index.html

# Должны быть на:
# - Кнопках: <button aria-label="Toggle menu">
# - Навигации: <nav aria-label="Main navigation">
# - Иконках: <i aria-hidden="true"> (декоративные)

# 3. Проверить heading hierarchy
grep -n "<h[1-6]" output/project/index.html
# Порядок: H1 → H2 → H3 (без пропусков H1 → H3)

# 4. Проверить color contrast
# Использовать Lighthouse или WebAIM Contrast Checker
# Минимум: 4.5:1 для текста, 3:1 для крупного текста

# 5. Попросить Claude Code:
"Исправь accessibility проблемы в index.html: добавь alt texts, aria-labels, исправь heading hierarchy"
```

### Проблема 10: selected-sections.json невалидный

**Симптомы:**
```bash
python scripts/assemble.py --config templates/selected-sections.json
# Error: JSONDecodeError
```

**Причина:** Синтаксическая ошибка в JSON

**Решение:**
```bash
# Валидировать JSON
python3 -m json.tool templates/selected-sections.json

# Типичные ошибки:
# ❌ Лишняя запятая: {"id": "header-1",}
# ✅ Без запятой: {"id": "header-1"}

# ❌ Одинарные кавычки: {'id': 'header-1'}
# ✅ Двойные кавычки: {"id": "header-1"}

# ❌ Комментарии: // This is header
# ✅ Без комментариев (JSON не поддерживает)

# Исправить или попросить Claude Code:
"Исправь синтаксические ошибки в templates/selected-sections.json"
```

---

## Best Practices

### 1. Структура контента

**DO:**
- ✅ Конкретные заголовки: "Ремонт стиральных машин в Москве за 1 час"
- ✅ Цифры и факты: "12 500 заказов", "гарантия 3 года", "рейтинг 4.9/5"
- ✅ Призыв к действию: "Вызвать мастера", "Заказать звонок"

**DON'T:**
- ❌ Общие фразы: "Мы лучшие", "Высокое качество"
- ❌ Штампы без конкретики: "Индивидуальный подход"
- ❌ Слова "пример", "шаблон", "замените" в готовом лендинге

### 2. Выбор секций

**Минимальная структура (5 секций):**
1. Header (обязательно)
2. Hero (hero-1 или hero-2)
3. Features (features-2col или features-3col)
4. CTA (cta-simple)
5. Footer (обязательно)

**Расширенная структура (8+ секций):**
1. Header
2. Hero-2 (с изображением)
3. Features-3col (6 преимуществ)
4. About (о компании) — P1, пока не реализовано
5. Pricing (цены/тарифы) — P1, пока не реализовано
6. Testimonials (отзывы) — P1, пока не реализовано
7. CTA-Simple
8. Footer

### 3. Иконки Remix Icon

**Выбор по категории:**

| Категория | Рекомендуемые иконки |
|-----------|---------------------|
| Скорость | ri-time-line, ri-flashlight-line, ri-rocket-line |
| Гарантия | ri-shield-check-line, ri-award-line, ri-medal-line |
| Качество | ri-star-line, ri-checkbox-circle-line, ri-thumb-up-line |
| Инструменты | ri-tools-line, ri-hammer-line, ri-settings-line |
| Деньги | ri-money-dollar-circle-line, ri-wallet-line, ri-coupon-line |
| Команда | ri-team-line, ri-user-star-line, ri-group-line |
| Локация | ri-map-pin-line, ri-home-line, ri-building-line |

**Поиск иконки:** https://remixicon.com/ → введите ключевое слово (speed, guarantee, quality)

### 4. Оптимизация изображений

**Рекомендации:**
- **Hero image:** 1920x1080px, WebP формат, <200KB
- **Feature icons:** Используйте Remix Icon (векторные, не нужны картинки)
- **Gallery images:** 800x600px, WebP, <100KB each
- **Сжатие:** TinyPNG, ImageOptim, или Squoosh

### 5. SEO Best Practices

**Meta title (60-70 символов):**
```
Название + Услуга + Город | Бренд
Пример: "Ремонт стиральных машин в Москве | РемТехСервис"
```

**Meta description (120-160 символов):**
```
УТП + Призыв к действию + Контакт
Пример: "Ремонт стиральных машин. Выезд за 1 час, гарантия до 3 лет. ☎ +7 (495) 789-45-67. Работаем 24/7."
```

**Keywords:**
- Основной: "ремонт стиральных машин москва"
- Long-tail: "ремонт стиральных машин на дому москва срочно"
- LSI: "мастер по ремонту", "замена подшипника", "ремонт lg samsung"

### 6. Тестирование перед публикацией

**Checklist:**

- [ ] Все плейсхолдеры заполнены (`grep "{{" index.html` = 0 результатов)
- [ ] UTF-8 кодировка корректна (чистая кириллица)
- [ ] Все ссылки работают (tel:, mailto:, якоря #contacts)
- [ ] Burger menu открывается/закрывается на mobile
- [ ] Адаптивность: 320px, 768px, 1024px, 1440px
- [ ] Performance: Lighthouse >90 (mobile + desktop)
- [ ] Accessibility: Lighthouse >90 (alt texts, ARIA, keyboard nav)
- [ ] Cross-browser: Chrome, Firefox, Safari
- [ ] Alt texts на всех изображениях
- [ ] Heading hierarchy: H1 → H2 → H3 (без пропусков)

### 7. Workflow для команды

**Роль 1: Менеджер/Сейлз**
- Собирает `business-data.md` от клиента
- Запускает Claude Code с промптом "Предложи секции"
- Подтверждает список секций

**Роль 2: Claude Code (автоматизация)**
- Создаёт `selected-sections.json`
- Запускает `python scripts/assemble.py`
- Заполняет плейсхолдеры через AI-генерацию

**Роль 3: QA/Тестировщик**
- Проверяет контент (орфография, релевантность)
- Тестирует функциональность (links, burger menu)
- Проверяет адаптивность и performance

**Роль 4: Дизайнер (опционально)**
- Добавляет кастомные изображения в `assets/`
- Настраивает цвета в `css/variables.css` (если нужен ребрендинг)

### 8. Частые кастомизации

**Изменить цвета (брендинг):**
```bash
# Редактировать output/project/css/variables.css
# Найти:
--primary: hsl(220, 90%, 56%);  /* Синий */

# Заменить на:
--primary: hsl(340, 82%, 52%);  /* Красный */

# Сохранить и обновить в браузере (Ctrl+F5)
```

**Добавить секцию вручную:**
1. Обновить `templates/selected-sections.json` (добавить новую секцию в массив)
2. Запустить `python scripts/assemble.py --config templates/selected-sections.json`
3. Заполнить новые плейсхолдеры через Claude Code

**Удалить секцию:**
1. Убрать из `selected-sections.json`
2. Пересобрать: `python scripts/assemble.py --config templates/selected-sections.json`
3. Или удалить HTML блок секции вручную из `index.html`

---

## Appendix: Шаблон selected-sections.json

```json
{
  "project_name": "project-name-slug",
  "sections": [
    {"id": "header-1", "order": 1},
    {"id": "hero-2", "order": 2},
    {"id": "features-3col", "order": 3},
    {"id": "cta-simple", "order": 4},
    {"id": "footer-1", "order": 5}
  ]
}
```

**Доступные ID секций (P0):**
- `header-1` — Sticky header
- `hero-1` — Centered hero с формой
- `hero-2` — Two-column hero с изображением
- `features-2col` — 2-колоночная сетка (4 items)
- `features-3col` — 3-колоночная сетка (6 items)
- `cta-simple` — Простой CTA блок
- `footer-1` — 4-колоночный footer

---

## Appendix: Контакты и поддержка

**Документация:**
- [README.md](../README.md) — Обзор проекта
- [ARCHITECTURE.md](ARCHITECTURE.md) — Техническая архитектура
- [PLANNING.md](PLANNING.md) — Roadmap (4 спринта)
- [TASKS.md](TASKS.md) — 38 задач с промптами

**Инструменты:**
- [Remix Icon](https://remixicon.com/) — 2800+ иконок
- [Google Fonts](https://fonts.google.com/) — Шрифты (Inter)
- [PageSpeed Insights](https://pagespeed.web.dev/) — Тестирование производительности
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) — Проверка контрастности

**AI:**
- [Claude Code](https://claude.com/code) — Генерация контента
- [Anthropic Agent Skills](https://skills.anthropic.com/) — Fullstack Architect skill

---

**Version:** 1.0
**Last Update:** 2025-10-24
**Status:** ✅ Production Ready
**Total Time:** ~30 minutes (от идеи до готового лендинга)
