# PROMPT: Design System Unification

**Date:** 2025-10-30
**Phase:** Optimization & Unification
**Goal:** Привести все 40+ секций к единому визуальному стандарту

---

## ЗАДАЧА

Необходимо пройтись по **всем компонентам секций** в проекте и привести их к **единому визуальному стилю**, чтобы при сборке финального лендинга все элементы выглядели согласованно и профессионально.

---

## ЧТО НУЖНО УНИФИЦИРОВАТЬ

### 1. **Скругления углов (Border Radius)**

**Проверить:**
- Все карточки, изображения, кнопки, формы
- Должны быть консистентные значения

**Стандарт:**
- **Карточки**: `rounded-2xl` (16px)
- **Изображения в карточках**: `rounded-xl` (12px) или следовать nested border radius формуле
- **Кнопки**: `rounded-xl` (12px)
- **Инпуты**: `rounded-lg` (8px)
- **Маленькие элементы** (badges, tags): `rounded-lg` (8px)

### 2. **Цвета кнопок (Primary CTAs)**

**Проверить:**
- Все основные CTA кнопки по всем секциям

**Стандарт:**
- **Primary CTA**: `bg-blue-700` (text: `text-white`)
- **Hover**: `hover:bg-blue-800`
- **Secondary CTA** (если есть): `bg-white` + `text-blue-700` + `border-2 border-blue-700`

**Примечание:** Синий цвет (#1e40af / blue-700) - основной бренд-цвет для ниши ремонта техники.

### 3. **Размеры заголовков (Typography)**

**Проверить:**
- Все H2, H3, H4 заголовки в секциях

**Стандарт:**
```
H2 (section titles):     text-3xl md:text-4xl lg:text-5xl font-bold
H3 (card/item titles):   text-2xl md:text-3xl font-bold
H4 (small headings):     text-xl md:text-2xl font-semibold
```

**Цвет заголовков:**
- По умолчанию: `text-gray-900`
- На темном фоне: `text-white`

### 4. **Обводка vs Тень (Borders vs Shadows)**

**Проверить:**
- Карточки, изображения - не обрезаются ли тени из-за overflow

**Стандарт:**
- **Предпочтительно**: Обводка `border-2 border-gray-200`
- **Hover**: `hover:border-blue-700`
- **Тени использовать**: Только если нет проблем с обрезанием (например, на элементах без overflow:hidden)

### 5. **Spacing между элементами**

**Проверить:**
- Gap между карточками в grid
- Отступы внутри карточек (padding)

**Стандарт:**
- **Gap в grid**: `gap-6 md:gap-8` (для 2-3 колонок), `gap-8 lg:gap-12` (для Hero 2-колонок)
- **Padding карточек**: `p-6` или `p-6 md:p-8`
- **Section padding**: `py-16 md:py-20 lg:py-24` (уже соблюдается)

### 6. **Иконки (Remix Icons)**

**Проверить:**
- Размеры иконок, цвета

**Стандарт:**
- **Иконки в кнопках**: `text-xl` или `text-2xl`
- **Иконки в карточках**: `text-4xl` или `text-5xl`
- **Цвет**: `text-blue-700` (на белом фоне) или `text-white` (на синем фоне)

### 7. **Форма и инпуты**

**Проверить:**
- Все поля ввода в Contact формах, Calculator'ах

**Стандарт:**
```
Input:
  class="w-full px-4 py-3 rounded-lg border-2 border-gray-300
         focus:border-blue-700 focus:outline-none"

Button:
  class="px-8 py-4 bg-blue-700 text-white font-semibold
         rounded-xl hover:bg-blue-800 transition-colors"
```

### 8. **Бейджи и теги (Badges/Tags)**

**Проверить:**
- Category badges, status badges, experience badges

**Стандарт:**
```
Badge:
  class="px-3 py-1 md:px-4 md:py-2 bg-blue-700 text-white
         text-xs md:text-sm font-semibold rounded-lg"
```

---

## ПРОЦЕСС РАБОТЫ

**Подход:** Категория за категорией (не файл за файлом)

**Порядок:**

1. **Heroes** (6 файлов) - самые важные
2. **CTA** (3 файла)
3. **Contact** (3 файла)
4. **Pricing** (3 файла)
5. **Benefits** (3 файла)
6. **Testimonials** (3 файла)
7. **FAQ** (3 файла)
8. **Portfolio** (3 файла)
9. **Team** (3 файла)
10. **Stats** (3 файла)
11. **Calculator** (2 файла)
12. **Headers** (3 файла)
13. **Footers** (5 файлов)

**Для каждой категории:**

1. Открыть все файлы категории
2. Проверить по чек-листу выше (скругления, цвета, размеры)
3. Внести изменения
4. Тестировать в index.astro (импортировать все варианты категории)
5. Проверить мобильную и десктоп версии
6. Commit после каждой категории

**Commit format:**
```
refactor: unify [category] sections design

- Standardize border-radius to rounded-2xl/xl/lg
- Update all CTA buttons to blue-700
- Fix H2/H3 heading sizes
- Replace shadows with borders where needed

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

---

## ВАЖНЫЕ ПРАВИЛА

1. **НЕ меняй логику компонентов** - только визуальные стили
2. **НЕ трогай Props интерфейсы** - они работают корректно
3. **НЕ меняй структуру HTML** - только Tailwind классы
4. **Сохраняй мобильную адаптивность** - все breakpoints должны остаться
5. **UTF-8 проверка** - после Edit с кириллицей всегда `head -5 filename`

---

## КАК НАЧАТЬ

**Шаг 1:** Прочитай этот промпт полностью

**Шаг 2:** Начни с категории **Heroes** (самые важные секции)

**Шаг 3:** Открой все 6 файлов Hero секций:
- `src/components/sections/heroes/Hero1.astro`
- `src/components/sections/heroes/Hero2.astro`
- `src/components/sections/heroes/Hero3.astro`
- `src/components/sections/heroes/Hero4.astro`
- `src/components/sections/heroes/Hero5.astro`
- `src/components/sections/heroes/Hero6.astro`

**Шаг 4:** Проверь каждый файл по чек-листу:
- Скругления углов
- Цвета кнопок (синие)
- Размеры H2/H3
- Обводка vs тень
- Spacing

**Шаг 5:** Внеси изменения

**Шаг 6:** Тестируй все 6 Hero в `index.astro`

**Шаг 7:** Commit и переходи к следующей категории

---

## ОЖИДАЕМЫЙ РЕЗУЛЬТАТ

После завершения унификации:

✅ Все кнопки синие (blue-700)
✅ Все скругления консистентные (rounded-2xl/xl/lg)
✅ Все H2 одного размера, все H3 одного размера
✅ Нет обрезанных теней (используются borders)
✅ Единый spacing между элементами
✅ Все секции выглядят как части одного дизайн-системы

**Финальный чек:** Собрать демо-лендинг с 10-15 разными секциями и убедиться, что все выглядит гармонично.

---

**Удачи! Работай методично, категория за категорией. Не спеши.** 🔥
