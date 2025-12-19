const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// 注册新用户
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // 检查用户名是否已存在
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: '用户名已存在' });
    }
    
    // 创建新用户
    const user = await User.create({ username, password });
    
    // 生成JWT令牌
    const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });
    
    res.status(201).json({ message: '注册成功', token });
  } catch (error) {
    res.status(500).json({ message: '注册失败', error: error.message });
  }
});

// 用户登录
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // 查找用户
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: '用户名或密码错误' });
    }
    
    // 验证密码
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: '用户名或密码错误' });
    }
    
    // 生成JWT令牌
    const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });
    
    res.status(200).json({ message: '登录成功', token });
  } catch (error) {
    res.status(500).json({ message: '登录失败', error: error.message });
  }
});

module.exports = router;