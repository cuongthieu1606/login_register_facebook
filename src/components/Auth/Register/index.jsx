import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, db } from "../../../firebase";
import "./styles.scss";

const Register = () => {
  const history = useHistory("");
  const [firstName, setFirtName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState([]);
  const [gender, setGender] = useState("");

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      if (auth.user) {
        auth.user
          .updateProfile({
            displayName: firstName + " " + lastName,
            photoURL:
              "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-1/275282738_1585064715184698_2517423966837833117_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=rxmEbg8GAQIAX_EvObs&_nc_ht=scontent.fhan2-2.fna&oh=00_AT-YjTmmksl9rLJyYiusS9bBlhhy08QIIlfGeWDHjOfX6w&oe=63531879",
          })
          .then((s) => {
            db.collection("users")
              .doc(auth.user.uid)
              .set({
                uid: auth.user.uid,
                displayName: auth.user.displayName,
                email: auth.user.email,
                photoURL:
                  "https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-1/275282738_1585064715184698_2517423966837833117_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=rxmEbg8GAQIAX_EvObs&_nc_ht=scontent.fhan2-2.fna&oh=00_AT-YjTmmksl9rLJyYiusS9bBlhhy08QIIlfGeWDHjOfX6w&oe=63531879",
                birthday,
                gender,
                bio: "",
              })
              .then((r) => {
                history.push("/");
              });
          });
      }
    });
  };
  return (
    <div className="register">
      <div className="register__container">
        <h1>Đăng ký</h1>
        <p>Nhanh chóng và dễ dàng.</p>
        <div className="hr3">
          <hr />
        </div>
        <form action="">
          <div className="row">
            <input
              onChange={(e) => setFirtName(e.target.value)}
              type="name"
              className="register__name"
              placeholder="Họ"
              required
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="name"
              className="register__name"
              placeholder="Tên"
              required
            />
          </div>
          <center>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
            />
          </center>
          <center>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Mật khẩu mới"
              required
            />
          </center>
          <h5 className="register__date">Ngày sinh</h5>

          <div className="row">
            <select
              className="register__date2"
              onChange={(e) => setBirthday([...birthday, e.target.value])}
            >
              <option value="Day">Ngày</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>

            <select
              className="register__date3"
              onChange={(e) => setBirthday([...birthday, e.target.value])}
            >
              <option value="Month">Tháng</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>

            <select
              className="register__date3"
              onChange={(e) => setBirthday([...birthday, e.target.value])}
            >
              <option value="Year">Năm</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
            </select>
          </div>

          <h5 className="register__gender">Giới tính</h5>

          <div className="register__radiocontainer">
            <div className="wrapper">
              <label>Nữ</label>
              <input
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="gender"
                required
              />
            </div>

            <div className="wrapper">
              <label>Nam</label>
              <input
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="gender"
                required
              />
            </div>

            <div className="wrapper">
              <label>Tuỳ chỉnh</label>
              <input
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="gender"
                required
              />
            </div>
          </div>
          <div className="register__content">
            <p className="register__policy">
              Người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ
              của bạn lên Facebook.
              <span>Tìm hiểu thêm.</span>
              <br />
              Bằng cách nhấp vào Đăng ký, bạn đồng ý với{" "}
              <span>Điều khoản, Chính sách quyền riêng tư</span> và{" "}
              <span>Chính sách cookie</span> của chúng tôi. Bạn có thể nhận được
              thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
            </p>
          </div>

          <center>
            <button
              onClick={register}
              type="submit"
              className="register__register"
            >
              Đăng ký
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Register;
