CREATE DATABASE IF NOT EXISTS user_login;
USE user_login;

CREATE TABLE IF NOT EXISTS user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO user (username, password) VALUES
('admin', '123456'),
('user1', '123456'),
('user2', '123456');
