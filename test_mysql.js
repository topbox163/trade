const sequelize = require('./config/database');
const User = require('./models/User');

async function testMySQLConnection() {
  try {
    // 测试连接
    await sequelize.authenticate();
    console.log('MySQL连接成功！');

    // 插入测试数据
    const testUser = await User.create({
      username: 'testuser123',
      password: 'testpassword123'
    });
    console.log('\n测试数据插入成功！');
    console.log('用户ID:', testUser.id);
    console.log('用户名:', testUser.username);

    // 查询验证
    const foundUser = await User.findOne({
      where: { username: 'testuser123' }
    });
    console.log('\n数据查询验证成功！');
    console.log('查询结果:', foundUser ? '找到用户' : '未找到用户');
    if (foundUser) {
      console.log('查询到的用户名:', foundUser.username);
    }

    // 查询所有用户
    const allUsers = await User.findAll();
    console.log('\n所有用户数据:');
    allUsers.forEach(user => {
      console.log(`- ID: ${user.id}, 用户名: ${user.username}, 创建时间: ${user.createdAt}`);
    });

  } catch (error) {
    console.error('测试失败:', error.message);
    console.error('详细错误:', error);
  } finally {
    await sequelize.close();
  }
}

testMySQLConnection();