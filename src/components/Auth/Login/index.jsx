import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../../firebase";
import "./styles.scss";

const Login = () => {
  const history = useHistory("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => {
        if (
          e.message ===
          "The password is valid or the user does not have a password."
        ) {
          alert("Please check your credentials again");
        } else if (
          e.message ===
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          // history.push("/register");
          // window.scrollTo({
          //   top: document.body.scrollHeight,
          //   left: 0,
          //   behavior: "smooth",
          // });
          alert("Please check your credentials again");
        } else {
          alert(e.message);
        }
      });
  };
  return (
    <div className="login">
      <div className="Login__about">
        <img
          className="login__logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
          alt=""
        />
        <h3>
          Facebook giúp bạn kết nối và chia sẻ <br /> với mọi người trong cuộc
          sống của bạn.
        </h3>
      </div>
      <div className="loggin__container">
        <form action="">
          <center>
            <input
              type="email"
              placeholder="Email hoặc số điện thoại"
              onChange={(e) => setEmail(e.target.value)}
            />
          </center>
          <center>
            <input
              type="password"
              placeholder="Mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
            />
          </center>
          <center>
            <button onClick={login} type="submit" className="login__login">
              Đăng nhập
            </button>
          </center>
          <center>
            <div className="sideinfo">
              <h5>Quên mật khẩu?</h5>
              <hr />
              <Link to="/register" style={{ textDecoration: "none" }}>
                <h5 className="rtd">Tạo tài khoản mới</h5>
              </Link>
            </div>
          </center>
          <center>
            <div className="content">
              <p>
                <span><a href="">Tạo Trang</a></span> dành cho người nổi tiếng, thương hiệu hoặc doanh
                nghiệp.
              </p>
            </div>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Login;
