import React, { useState } from 'react';

  const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // Logic đăng nhập (tạm thời lưu vào localStorage)
      localStorage.setItem('user', JSON.stringify({ username }));
      alert('Đăng nhập thành công!');
    };

    return (
      <div className="login-page">
        <h2>Đăng nhập</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Tên đăng nhập:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mật khẩu:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    );
  };

  export default Login;