const express = require('express');
const sequelize = require('./config/database');
const cors = require('cors');

// 导入模型
const User = require('./models/User');
// 导入路由
const authRoutes = require('./routes/auth');

// 创建Express应用
const app = express();

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// 使用路由
app.use('/api/auth', authRoutes);

// 测试数据库连接并同步模型
async function initDatabase() {
  try {
    await sequelize.authenticate();
    console.log('数据库连接成功');
    
    // 同步模型到数据库
    await sequelize.sync();
    console.log('数据库模型同步完成');
  } catch (error) {
    console.error('数据库连接或同步失败:', error);
  }
}

initDatabase();

// 设置端口
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});

module.exports = app;