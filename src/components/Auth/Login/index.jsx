import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../../firebase";
import Footer from "../Footer";
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
          history.push("/register");
          window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: "smooth",
          });
          alert("Please check your credentials again");
        } else {
          alert(e.message);
        }
      });
  };
  return (
    <div className="container">
      <div className="main">
        <div className="main-left">
          <img
            className="facebook-logo"
            src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
            alt=""
          />

          <h3 className="facebook-status">
            Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
            của bạn.
          </h3>
        </div>

        <div className="main-right">
          <div className="main-right-login">
            <div className="main-right-email">
              <input
                type="email"
                placeholder="Email hoặc số điện thoại"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
            </div>

            <div className="main-right-password">
              <input
                type="password"
                placeholder="Mật khẩu"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
              />
            </div>

            <div className="main-right-button">
              <button onClick={login} type="submit">
                Đăng nhập
              </button>
            </div>

            <div className="main-right-link">
              <a href="">Quên mật khẩu?</a>
            </div>

            <div className="main-right-line"></div>

            <div className="main-right-account">
              <Link to="/register">
                <button id="signup-account">Tạo tài khoản mới</button>
              </Link>
            </div>
          </div>
          <div className="main-right-page-link">
            <span><a href="">Tạo Trang</a> dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.</span>
          </div>
        </div>
      </div>

      {/* <div className="footer"></div> */}
    </div>
  );
};

export default Login;
