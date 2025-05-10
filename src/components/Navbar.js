import React from 'react';
     import { Link } from 'react-router-dom';

     const Navbar = () => {
       return (
         <nav className="navbar">
           <div className="navbar-brand">
             <h1>Website Đọc Truyện Chữ</h1>
           </div>
           <ul className="navbar-menu">
             <li><Link to="/">Trang chủ</Link></li>
             <li><Link to="/genres">Thể loại</Link></li>
             <li><Link to="/login">Đăng nhập</Link></li>
           </ul>
         </nav>
       );
     };

     export default Navbar;