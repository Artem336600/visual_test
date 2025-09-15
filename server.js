const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
    },
  },
}));

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname), {
  maxAge: '1d',
  etag: true,
  lastModified: true
}));

// API routes for demo data
app.get('/api/teams', (req, res) => {
  res.json({
    teams: [
      {
        id: '1',
        name: 'Frontend Team',
        description: 'Команда разработки фронтенда',
        members: ['Алексей Иванов', 'Мария Петрова', 'Дмитрий Сидоров'],
        projects: ['React Dashboard', 'Mobile App', 'API Integration']
      },
      {
        id: '2',
        name: 'Backend Team',
        description: 'Команда разработки бэкенда',
        members: ['Иван Козлов', 'Елена Морозова', 'Анна Лебедева'],
        projects: ['Backend API', 'Database Design', 'Microservices']
      }
    ]
  });
});

app.get('/api/tasks/:teamId', (req, res) => {
  const { teamId } = req.params;
  const tasks = {
    '1': [
      { id: '1-1', title: 'Создать компонент навигации', description: 'Разработать основной компонент навигации для приложения', responsible: 'Алексей Иванов', deadline: '2024-01-15', status: 'todo' },
      { id: '1-2', title: 'Настроить роутинг', description: 'Настроить маршрутизацию между страницами', responsible: 'Мария Петрова', deadline: '2024-01-20', status: 'inprocess' },
      { id: '1-3', title: 'Добавить аутентификацию', description: 'Реализовать систему входа и регистрации', responsible: 'Дмитрий Сидоров', deadline: '2024-01-25', status: 'testing' }
    ],
    '2': [
      { id: '2-1', title: 'Создать REST endpoints', description: 'Разработать API endpoints для основных функций', responsible: 'Иван Козлов', deadline: '2024-01-18', status: 'todo' },
      { id: '2-2', title: 'Добавить валидацию', description: 'Реализовать валидацию входных данных', responsible: 'Елена Морозова', deadline: '2024-01-22', status: 'inprocess' }
    ]
  };
  
  res.json({ tasks: tasks[teamId] || [] });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: '1.0.0'
  });
});

// Catch-all handler: send back index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Deligate Demo Server running on port ${PORT}`);
  console.log(`📱 Access the app at: http://localhost:${PORT}`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  process.exit(0);
});
