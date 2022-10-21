import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { auth, db } from "../../../firebase";
import DateOfBirth from "../DateOfBirth";
import "./styles.scss";

const Register = () => {
  const [toggle, setToggle] = useState(false);
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

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="container">
      <div class="modal">
        <div class="modal-signup">
          <Link to="/login">
            <div class="modal-close" onClick={handleClick}>
              X
            </div>
          </Link>

          <div class="modal-signup-heading">
            <p class="modal-signup-name">Đăng ký</p>

            <p class="modal-signup-child-name">Nhanh chóng và dễ dàng.</p>
          </div>

          <div class="modal-signup-name">
            <input
              type="text"
              placeholder="Họ"
              onChange={(e) => setFirtName(e.target.value)}
              required
              name="firstname"
            />

            <input
              type="text"
              placeholder="Tên"
              onChange={(e) => setLastName(e.target.value)}
              required
              name="lastname"
            />
          </div>

          <div class="modal-signup-email">
            <input
              type="email"
              placeholder="Số di động hoặc email"
              onChange={(e) => setEmail(e.target.value)}
              required
              name="email"
            />
          </div>

          <div class="modal-signup-password">
            <input
              type="password"
              placeholder="Mật khẩu mới"
              onChange={(e) => setPassword(e.target.value)}
              required
              name="password"
            />
          </div>

          <div class="modal-date-birth">
            <label for="">Ngày sinh</label>

            <div class="modal-date-alert">
              <a>&#63;</a>
            </div>
          </div>

          <div class="modal-date-selection">
            <div class="select-choice">
              <select
                name="dateOfBirth"
                id=""
                onChange={(e) => setBirthday([...birthday, e.target.value])}
              >
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>

                <option value="">5</option>

                <option value="">6</option>

                <option value="">7</option>

                <option value="">8</option>

                <option value="">9</option>

                <option value="">10</option>

                <option value="">11</option>

                <option value="">12</option>

                <option value="">13</option>

                <option value="">14</option>

                <option value="">15</option>

                <option value="">16</option>

                <option value="">17</option>

                <option value="">18</option>

                <option value="">19</option>

                <option value="">20</option>

                <option value="">21</option>

                <option value="">22</option>

                <option value="">23</option>

                <option value="">24</option>

                <option value="">25</option>

                <option value="">26</option>

                <option value="">27</option>

                <option value="">28</option>

                <option value="">29</option>

                <option value="">30</option>

                <option value="">31</option>
              </select>
            </div>
            <div class="select-choice">
              <select
                name="dateOfBirth"
                id=""
                onChange={(e) => setBirthday([...birthday, e.target.value])}
              >
                <option value="">Jan</option>

                <option value="">Feb</option>

                <option value="">Mar</option>

                <option value="">Apr</option>

                <option value="">May</option>

                <option value="">Jun</option>

                <option value="">Jul</option>

                <option value="">Aug</option>

                <option value="">Sep</option>

                <option value="">Auc</option>

                <option value="">Nav</option>

                <option value="">Dec</option>
              </select>
            </div>
            <div class="select-choice">
              <select
                name="dateOfBirth"
                id=""
                onChange={(e) => setBirthday([...birthday, e.target.value])}
              >
                <option value="">1950</option>

                <option value="">1951</option>

                <option value="">1952</option>

                <option value="">1953</option>

                <option value="">1954</option>

                <option value="">1955</option>

                <option value="">1956</option>

                <option value="">1957</option>

                <option value="">1958</option>

                <option value="">1959</option>

                <option value="">1960</option>

                <option value="">1961</option>

                <option value="">1962</option>

                <option value="">1963</option>

                <option value="">1964</option>

                <option value="">1965</option>

                <option value="">1966</option>

                <option value="">1967</option>

                <option value="">1968</option>

                <option value="">1969</option>

                <option value="">1970</option>

                <option value="">1971</option>

                <option value="">1972</option>

                <option value="">1973</option>

                <option value="">1974</option>

                <option value="">1975</option>

                <option value="">1976</option>

                <option value="">1977</option>

                <option value="">1978</option>

                <option value="">1979</option>

                <option value="">1980</option>

                <option value="">1981</option>

                <option value="">1982</option>

                <option value="">1983</option>

                <option value="">1984</option>

                <option value="">1985</option>

                <option value="">1986</option>

                <option value="">1987</option>

                <option value="">1988</option>

                <option value="">1989</option>

                <option value="">1990</option>

                <option value="">1991</option>

                <option value="">1992</option>

                <option value="">1993</option>

                <option value="">1994</option>

                <option value="">1995</option>

                <option value="">1996</option>

                <option value="">1997</option>

                <option value="">1998</option>

                <option value="">1999</option>

                <option value="">2000</option>

                <option value="">2001</option>

                <option value="">2002</option>

                <option value="">2003</option>

                <option value="">2004</option>

                <option value="">2005</option>

                <option value="">2006</option>

                <option value="">2007</option>

                <option value="">2008</option>

                <option value="">2009</option>

                <option value="">2010</option>

                <option value="">2011</option>

                <option value="">2012</option>

                <option value="">2013</option>

                <option value="">2014</option>

                <option value="">2015</option>

                <option value="">2016</option>

                <option value="">2017</option>

                <option value="">2018</option>

                <option value="">2019</option>

                <option value="">2020</option>
              </select>
            </div>
          </div>

          <div class="modal-gender">
            <label for="">Giới tính</label>

            <div class="modal-gender-alert">
              <a>&#63;</a>
            </div>
          </div>

          <div class="modal-gender-choice">
            <div class="modal-gender-name">
              <label for="">Nữ</label>

              <input
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="sex"
                required
              />
            </div>

            <div class="modal-gender-name">
              <label for="">Nam</label>

              <input
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="sex"
                required
              />
            </div>

            <div class="modal-gender-name">
              <label for="">Tuỳ chỉnh</label>

              <input
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="sex"
                required
              />
            </div>
          </div>

          <div class="modal-signup-terms">
            <span>Người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Facebook. <a href="#">Tìm hiểu thêm</a>.</span>
            <p>
              Bằng cách nhấp vào Đăng ký, bạn đồng ý với <a href="#">Điều khoản, Chính sách
              quyền riêng tư</a> và <a href="#">Chính sách cookie</a> của chúng tôi. Bạn có thể nhận
              được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
            </p>
          </div>

          <div class="modal-signup-button">
            <button onClick={register} type="submit">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
