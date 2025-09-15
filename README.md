# Deligate Demo

Демо-приложение для управления командами, задачами, расписанием и заметками с современным минималистичным интерфейсом.

## 🚀 Особенности

- **Управление командами** - создание, присоединение, управление участниками
- **Канбан-доска** - управление задачами с drag & drop
- **Расписание** - календарь с событиями и напоминаниями
- **Заметки** - AI-анализ контента с тегами и связями
- **Встречи** - планирование и анализ встреч
- **Адаптивный дизайн** - оптимизировано для мобильных устройств
- **Монохромный стиль** - минималистичный черно-белый дизайн

## 🛠 Технологии

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Стили**: Custom CSS с медиа-запросами
- **Хранение**: LocalStorage (демо-данные)
- **Деплой**: Railway

## 📱 Страницы приложения

1. **Главная** (`index.html`) - лендинг с анимацией
2. **Команды** (`dashboard.html`) - управление командами
3. **Задачи** (`tasks.html`) - канбан-доска
4. **Расписание** (`schedule.html`) - календарь событий
5. **Заметки** (`notes.html`) - AI-анализ контента
6. **Встречи** (`meetings.html`) - планирование встреч
7. **Авторизация** (`login.html`, `registration.html`)

## 🚀 Быстрый старт

### Локальная разработка

1. **Клонируйте репозиторий**
   ```bash
   git clone https://github.com/your-username/deligate-demo.git
   cd deligate-demo
   ```

2. **Установите зависимости**
   ```bash
   npm install
   ```

3. **Запустите сервер разработки**
   ```bash
   npm run dev
   ```

4. **Откройте в браузере**
   ```
   http://localhost:3000
   ```

### Продакшн запуск

```bash
npm start
```

## 🌐 Деплой на Railway

### Автоматический деплой

1. **Подключите GitHub репозиторий к Railway**
   - Зайдите на [railway.app](https://railway.app)
   - Нажмите "New Project"
   - Выберите "Deploy from GitHub repo"
   - Выберите ваш репозиторий

2. **Railway автоматически определит настройки**
   - Обнаружит `package.json`
   - Установит зависимости
   - Запустит `npm start`

3. **Получите URL приложения**
   - Railway предоставит уникальный URL
   - Например: `https://deligate-demo-production.up.railway.app`

### Ручной деплой

1. **Установите Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Войдите в аккаунт**
   ```bash
   railway login
   ```

3. **Инициализируйте проект**
   ```bash
   railway init
   ```

4. **Деплой**
   ```bash
   railway up
   ```

## 📁 Структура проекта

```
deligate-demo/
├── 📄 index.html              # Главная страница
├── 📄 dashboard.html          # Управление командами
├── 📄 tasks.html              # Канбан-доска
├── 📄 schedule.html           # Календарь
├── 📄 notes.html              # Заметки с AI
├── 📄 meetings.html           # Встречи
├── 📄 login.html              # Вход
├── 📄 registration.html       # Регистрация
├── 📄 server.js               # Express сервер
├── 📄 package.json            # Зависимости
├── 📄 railway.json            # Конфигурация Railway
├── 📄 .gitignore              # Git ignore
└── 📄 README.md               # Документация
```

## 🔧 Конфигурация

### Переменные окружения

- `PORT` - порт сервера (по умолчанию 3000)
- `NODE_ENV` - окружение (development/production)

### Railway настройки

Файл `railway.json` содержит:
- Health check endpoint: `/health`
- Restart policy: при ошибках
- Builder: NIXPACKS

## 📊 API Endpoints

- `GET /health` - проверка состояния сервера
- `GET /api/teams` - список команд
- `GET /api/tasks/:teamId` - задачи команды

## 🎨 Дизайн

### Цветовая схема
- **Фон**: #000000 (черный)
- **Текст**: #ffffff (белый)
- **Акценты**: белые границы и кнопки
- **Hover**: инвертированные цвета

### Адаптивность
- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

## 🔒 Безопасность

- Helmet.js для заголовков безопасности
- CORS настройки
- Content Security Policy
- Сжатие gzip

## 📈 Мониторинг

- Health check endpoint: `/health`
- Логирование ошибок
- Graceful shutdown
- Uptime мониторинг

## 🐛 Отладка

### Локальная разработка
```bash
# Запуск с отладкой
DEBUG=* npm run dev

# Проверка здоровья
curl http://localhost:3000/health
```

### Railway логи
```bash
# Просмотр логов
railway logs

# Подключение к серверу
railway shell
```

## 🤝 Вклад в проект

1. Fork репозитория
2. Создайте feature branch
3. Внесите изменения
4. Создайте Pull Request

## 📄 Лицензия

MIT License - см. файл LICENSE

## 📞 Поддержка

- **Issues**: [GitHub Issues](https://github.com/your-username/deligate-demo/issues)
- **Email**: support@deligate.app
- **Документация**: [Wiki](https://github.com/your-username/deligate-demo/wiki)

## 🎯 Roadmap

- [ ] Интеграция с реальным API
- [ ] Аутентификация пользователей
- [ ] Уведомления в реальном времени
- [ ] Мобильное приложение
- [ ] Темная/светлая тема
- [ ] Многоязычность

---

**Deligate Demo** - современное решение для управления командами и проектами 🚀
