import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./styles.scss";

const Register = () => {
  const [toggle, setToggle] = useState(false);
  const history = useHistory("");
  const [form,setForm] = useState({
    lastname:"",
    firstname:"",
    phoneNumber:"",
    email:"",
    password:"",
    dateOfBirth:"",
    monthOfBirth:"",
    yearOfBirth:"",
    sex:"",
  })

  const register = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        ...form
      }      
      const response = await axios.post('http://localhost:4000/api/auth/register',{...newUser})
      if (response.data.success) {
        console.log(response.data);
      }
    } catch (error) {
      throw error
    }
  };
  const handleOnChangeInput = (e) => {
    setForm({...form,[e.target.name]:e.target.value})
  }

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="container">
      <div className="modal">
        <div className="modal-signup">
          <Link to="/login">
            <div className="modal-close" onClick={handleClick}>
              X
            </div>
          </Link>

          <div className="modal-signup-heading">
            <p className="modal-signup-name">Đăng ký</p>

            <p className="modal-signup-child-name">Nhanh chóng và dễ dàng.</p>
          </div>

          <div className="modal-signup-name">
            <input
              type="text"
              placeholder="Họ"
              onChange={handleOnChangeInput}
              required
              name="firstname"
              value={form.firstname}
            />

            <input
              type="text"
              placeholder="Tên"
              onChange={handleOnChangeInput}
              required
              name="lastname"
              value={form.lastname}
            />
          </div>

          <div className="modal-signup-email">
            <input
              type="email"
              placeholder="Email"
              onChange={handleOnChangeInput}
              required
              name="email"
              value={form.email}
            />
          </div>

          <div className="modal-signup-password">
            <input
              type="password"
              placeholder="Mật khẩu mới"
              onChange={handleOnChangeInput}
              required
              name="password"
              value={form.password}
            />
          </div>

          <div className="modal-date-birth">
            <label for="">Ngày sinh</label>

            <div className="modal-date-alert">
              <a>&#63;</a>
            </div>
          </div>

          <div className="modal-date-selection">
            <div className="select-choice">
              <select
                name="dateOfBirth"
                id=""
                onChange={handleOnChangeInput}
                value={form.dateOfBirth}
              >
                <option value="">Date</option>
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
            </div>
            <div className="select-choice">
              <select
                name="monthOfBirth"
                id=""
                value={form.monthOfBirth}
                onChange={handleOnChangeInput}
              >
                <option value="">Month</option>
                <option value="1">Jan</option>

                <option value="2">Feb</option>

                <option value="3">Mar</option>

                <option value="4">Apr</option>

                <option value="5">May</option>

                <option value="6">Jun</option>

                <option value="7">Jul</option>

                <option value="8">Aug</option>

                <option value="9">Sep</option>

                <option value="10">Auc</option>

                <option value="11">Nav</option>

                <option value="12">Dec</option>
              </select>
            </div>
            <div className="select-choice">
              <select
                name="yearOfBirth"
                id=""
                value={form.yearOfBirth}
                onChange={handleOnChangeInput}
              >
                <option value="">Year</option>
                <option value="1950">1950</option>

                <option value="1951">1951</option>

                <option value="1952">1952</option>

                <option value="1953">1953</option>

                <option value="1954">1954</option>

                <option value="1955">1955</option>

                <option value="1956">1956</option>

                <option value="1957">1957</option>

                <option value="1958">1958</option>

                <option value="1959">1959</option>

                <option value="1960">1960</option>

                <option value="1961">1961</option>

                <option value="1962">1962</option>

                <option value="1963">1963</option>

                <option value="1964">1964</option>

                <option value="1965">1965</option>

                <option value="1966">1966</option>

                <option value="1967">1967</option>

                <option value="1968">1968</option>

                <option value="1969">1969</option>

                <option value="1970">1970</option>

                <option value="1971">1971</option>

                <option value="1972">1972</option>

                <option value="1973">1973</option>

                <option value="1974">1974</option>

                <option value="1975">1975</option>

                <option value="1976">1976</option>

                <option value="1977">1977</option>

                <option value="1978">1978</option>

                <option value="1979">1979</option>

                <option value="1980">1980</option>

                <option value="1981">1981</option>

                <option value="1982">1982</option>

                <option value="1983">1983</option>

                <option value="1984">1984</option>

                <option value="1985">1985</option>

                <option value="1986">1986</option>

                <option value="1987">1987</option>

                <option value="1988">1988</option>

                <option value="1989">1989</option>

                <option value="1990">1990</option>

                <option value="1991">1991</option>

                <option value="1992">1992</option>

                <option value="1993">1993</option>

                <option value="1994">1994</option>

                <option value="1995">1995</option>

                <option value="1996">1996</option>

                <option value="1997">1997</option>

                <option value="1998">1998</option>

                <option value="1999">1999</option>

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

                <option value="2012">2012</option>

                <option value="2013">2013</option>

                <option value="2014">2014</option>

                <option value="2015">2015</option>

                <option value="2016">2016</option>

                <option value="2017">2017</option>

                <option value="2018">2018</option>

                <option value="2019">2019</option>

                <option value="2020">2020</option>
              </select>
            </div>
          </div>

          <div className="modal-gender">
            <label for="">Giới tính</label>

            <div className="modal-gender-alert">
              <a>&#63;</a>
            </div>
          </div>

          <div className="modal-gender-choice">
            <div className="modal-gender-name">
              <label for="">Nữ</label>

              <input
                onChange={handleOnChangeInput}
                type="radio"
                name="sex"
                value={"Nữ"}
                required
              />
            </div>

            <div className="modal-gender-name">
              <label for="">Nam</label>

              <input
                onChange={handleOnChangeInput}
                type="radio"
                name="sex"
                value={"Nam"}
                required
              />
            </div>

            <div className="modal-gender-name">
              <label for="">Tuỳ chỉnh</label>

              <input
                onChange={handleOnChangeInput}
                type="radio"
                name="sex"
                value={"Tùy chỉnh"}
                required
              />
            </div>
          </div>

          <div className="modal-signup-terms">
            <span>Người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Facebook. <a href="#">Tìm hiểu thêm</a>.</span>
            <p>
              Bằng cách nhấp vào Đăng ký, bạn đồng ý với <a href="#">Điều khoản, Chính sách
              quyền riêng tư</a> và <a href="#">Chính sách cookie</a> của chúng tôi. Bạn có thể nhận
              được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
            </p>
          </div>

          <div className="modal-signup-button">
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
