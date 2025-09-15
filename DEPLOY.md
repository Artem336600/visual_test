# 🚀 Инструкция по деплою на Railway

## Подготовка к деплою

### 1. Подготовка репозитория

```bash
# Инициализация Git (если еще не сделано)
git init

# Добавление всех файлов
git add .

# Первый коммит
git commit -m "Initial commit: Deligate Demo ready for deployment"

# Добавление удаленного репозитория
git remote add origin https://github.com/your-username/deligate-demo.git

# Отправка в GitHub
git push -u origin main
```

### 2. Создание аккаунта Railway

1. Перейдите на [railway.app](https://railway.app)
2. Нажмите "Start a New Project"
3. Войдите через GitHub
4. Авторизуйте доступ к репозиториям

## 🚀 Деплой через веб-интерфейс

### Шаг 1: Создание проекта
1. Нажмите "New Project"
2. Выберите "Deploy from GitHub repo"
3. Найдите и выберите репозиторий `deligate-demo`

### Шаг 2: Настройка деплоя
Railway автоматически:
- Обнаружит `package.json`
- Установит зависимости (`npm install`)
- Запустит приложение (`npm start`)

### Шаг 3: Получение URL
1. Дождитесь завершения деплоя
2. Скопируйте URL приложения
3. Откройте в браузере для проверки

## 🛠 Деплой через CLI

### Установка Railway CLI
```bash
npm install -g @railway/cli
```

### Авторизация
```bash
railway login
```

### Инициализация проекта
```bash
# В папке проекта
railway init

# Выберите:
# - Create new project
# - Название: deligate-demo
```

### Деплой
```bash
# Деплой кода
railway up

# Проверка статуса
railway status

# Просмотр логов
railway logs
```

## ⚙️ Настройка переменных окружения

### Через веб-интерфейс
1. Откройте проект в Railway
2. Перейдите в "Variables"
3. Добавьте переменные:
   ```
   NODE_ENV=production
   PORT=3000
   ```

### Через CLI
```bash
# Добавление переменных
railway variables set NODE_ENV=production
railway variables set PORT=3000

# Просмотр переменных
railway variables
```

## 🔍 Проверка деплоя

### Health Check
```bash
# Проверка здоровья приложения
curl https://your-app.railway.app/health
```

### Основные страницы
- Главная: `https://your-app.railway.app/`
- Команды: `https://your-app.railway.app/dashboard.html`
- Задачи: `https://your-app.railway.app/tasks.html`
- Расписание: `https://your-app.railway.app/schedule.html`

## 📊 Мониторинг

### Логи
```bash
# Просмотр логов в реальном времени
railway logs --follow

# Логи за последний час
railway logs --since 1h
```

### Метрики
1. Откройте проект в Railway
2. Перейдите в "Metrics"
3. Мониторьте:
   - CPU usage
   - Memory usage
   - Network traffic
   - Response times

## 🔧 Обновление приложения

### Автоматический деплой
```bash
# Изменения в коде
git add .
git commit -m "Update: new features"
git push origin main

# Railway автоматически пересоберет и задеплоит
```

### Ручной деплой
```bash
# Принудительный деплой
railway up --detach
```

## 🚨 Устранение проблем

### Проблема: Приложение не запускается
```bash
# Проверка логов
railway logs

# Проверка переменных окружения
railway variables

# Проверка package.json
cat package.json
```

### Проблема: 404 ошибки
- Убедитесь, что `server.js` правильно настроен
- Проверьте, что все HTML файлы в корне проекта
- Проверьте маршруты в Express

### Проблема: Медленная загрузка
- Проверьте размер файлов
- Убедитесь, что включено сжатие gzip
- Проверьте CDN настройки

## 📈 Оптимизация производительности

### 1. Кэширование
```javascript
// В server.js уже настроено
app.use(express.static(path.join(__dirname), {
  maxAge: '1d',
  etag: true,
  lastModified: true
}));
```

### 2. Сжатие
```javascript
// Уже включено
app.use(compression());
```

### 3. Безопасность
```javascript
// Уже настроено
app.use(helmet());
```

## 🔄 CI/CD Pipeline

### GitHub Actions (опционально)
Создайте `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Railway

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Deploy to Railway
      uses: railway-app/railway-deploy@v1
      with:
        railway-token: ${{ secrets.RAILWAY_TOKEN }}
```

## 📞 Поддержка

- **Railway Docs**: [docs.railway.app](https://docs.railway.app)
- **Railway Discord**: [discord.gg/railway](https://discord.gg/railway)
- **GitHub Issues**: [github.com/your-username/deligate-demo/issues](https://github.com/your-username/deligate-demo/issues)

---

**Готово!** 🎉 Ваше приложение Deligate Demo теперь доступно в интернете!
