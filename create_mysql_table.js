const sequelize = require('./config/database');
const { DataTypes } = require('sequelize');

// 定义用户表模型
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    comment: '用户名'
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
    comment: '密码'
  }
}, {
  tableName: 'users',
  timestamps: true
});

async function createTable() {
  try {
    // 测试数据库连接
    await sequelize.authenticate();
    console.log('MySQL数据库连接成功！');
    
    // 检查并创建表
    await sequelize.sync({
      alter: true,  // 如果表存在，只修改结构而不删除
      logging: console.log
    });
    
    console.log('\n表创建或更新成功！');
    console.log('表名: users');
    console.log('字段:');
    console.log('- id: 主键，自增长');
    console.log('- username: 用户名 (唯一，必填)');
    console.log('- password: 密码 (必填)');
    console.log('- createdAt: 创建时间');
    console.log('- updatedAt: 更新时间');
    
  } catch (error) {
    console.error('数据库操作失败:', error.message);
    console.error('详细错误:', error);
  } finally {
    await sequelize.close();
  }
}

createTable();