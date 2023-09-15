import { useEffect, useRef, useState } from "react";
// import { Select } from "antd";
import "../style/form3.scss";
// import "../style/form1.scss";
// import "../style/rt.css"

function Form3({ curpage, setCurpage }) {
  const [form3, setForm3] = useState({});
  const [form3change, setForm3change] = useState({});
  const [showpass, setShowpass] = useState(false);
  const [showpass2, setShowpass2] = useState(false);
  const [validation3, setValidation3] = useState({
    gv: true,
    uv: true,
    pv: true,
    cpv: true,
    pds: true,
  });

  const change = (e) => {
    const { name, value } = e.target;
    setForm3change({ ...form3change, [name]: value });
    console.log(form3change);
  };

  const isempty = (value) => {
    return value !== undefined && value !== "";
  };

  const handlesubmit = () => {
    const em = isempty(form3change.email);
    const us = isempty(form3change.username);
    const pss = isempty(form3change.password);
    const cpss = isempty(form3change.confirmpassword);
    const passthesame = form3change.password === form3change.confirmpassword;
    console.log(em);
    console.log(form3change.email);

    setValidation3({
      gv: em,
      uv: us,
      pv: pss,
      cpv: cpss,
      pds: passthesame,
    });
    const validate = em && us && pss && cpss && passthesame;
    console.log(validate);
    if (!validate) {
      return "";
    }
    setForm3(form3change);
    console.log(form3);
    setCurpage((prev) => prev + 1);
  };

  return (
    <>
      <div className="ull">
        <form onSubmit={handlesubmit}>
          <div className={`ib ${!validation3.gv && "err"}`}>
            <label className={`${!validation3.gv && "errmsg"}`}>Email</label>
            <input
              placeholder="olaolu.olowofila@gmail.|"
              type="email"
              name="email"
              onChange={change}
              value={form3change.email}
            />
            {!validation3.gv && (
              <div className="sam">This field can not be empty</div>
            )}
          </div>
          <div className={`ib ${!validation3.uv && "err"}`}>
            <label className={`${!validation3.uv && "errmsg"}`}>Username</label>
            <input
              placeholder="Username"
              name="username"
              onChange={change}
              value={form3change.username}
            />
            {!validation3.uv && (
              <div className="sam">This field can not be empty</div>
            )}
          </div>
          <div className={`ib ${!validation3.pv && "err"}`}>
            <label className={`${!validation3.pv && "errmsg"}`}>Password</label>
            <input
              type={showpass ? "text" : "password"}
              placeholder="Password"
              name="password"
              onChange={change}
              value={form3change.password}
            />
            {showpass && (
              <span
                className="svg"
                onClick={() => setShowpass((prev) => !prev)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                >
                  <path
                    d="M9.45061 9.14772C10.3254 9.14772 11.0683 8.84154 11.6795 8.22918C12.2906 7.61681 12.5961 6.87321 12.5961 5.99841C12.5961 5.12362 12.2899 4.38067 11.6776 3.76955C11.0652 3.15844 10.3216 2.85289 9.44682 2.85289C8.57202 2.85289 7.82907 3.15907 7.21796 3.77143C6.60685 4.3838 6.30129 5.1274 6.30129 6.0022C6.30129 6.87699 6.60748 7.61994 7.21984 8.23105C7.83221 8.84216 8.5758 9.14772 9.45061 9.14772ZM9.44871 8.0003C8.89316 8.0003 8.42093 7.80586 8.03204 7.41697C7.64316 7.02808 7.44871 6.55586 7.44871 6.0003C7.44871 5.44475 7.64316 4.97253 8.03204 4.58364C8.42093 4.19475 8.89316 4.0003 9.44871 4.0003C10.0043 4.0003 10.4765 4.19475 10.8654 4.58364C11.2543 4.97253 11.4487 5.44475 11.4487 6.0003C11.4487 6.55586 11.2543 7.02808 10.8654 7.41697C10.4765 7.80586 10.0043 8.0003 9.44871 8.0003ZM9.44986 11.5836C7.58079 11.5836 5.87776 11.0759 4.34077 10.0604C2.80377 9.0449 1.656 7.69154 0.897461 6.0003C1.656 4.30907 2.80339 2.95571 4.33963 1.94022C5.87585 0.924735 7.5785 0.416992 9.44757 0.416992C11.3166 0.416992 13.0197 0.924735 14.5567 1.94022C16.0936 2.95571 17.2414 4.30907 18 6.0003C17.2414 7.69154 16.094 9.0449 14.5578 10.0604C13.0216 11.0759 11.3189 11.5836 9.44986 11.5836ZM9.44871 10.5003C11.0043 10.5003 12.4418 10.0975 13.7612 9.29197C15.0807 8.48642 16.0945 7.38919 16.8029 6.0003C16.0945 4.61142 15.0807 3.51419 13.7612 2.70864C12.4418 1.90308 11.0043 1.5003 9.44871 1.5003C7.89316 1.5003 6.45566 1.90308 5.13621 2.70864C3.81677 3.51419 2.80288 4.61142 2.09454 6.0003C2.80288 7.38919 3.81677 8.48642 5.13621 9.29197C6.45566 10.0975 7.89316 10.5003 9.44871 10.5003Z"
                    fill="#555555"
                  />
                </svg>
              </span>
            )}
            {!showpass && (
              <span
                className="svg"
                onClick={() => setShowpass((prev) => !prev)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9202 12.7988C15.9725 12.5407 16 12.2736 16 12C16 9.79086 14.2091 8 12 8C11.7264 8 11.4593 8.02746 11.2012 8.07977L12.1239 9.00251C13.6822 9.06583 14.9342 10.3178 14.9975 11.8761L15.9202 12.7988ZM9.39311 10.5143C9.14295 10.9523 9 11.4595 9 12C9 13.6569 10.3431 15 12 15C12.5405 15 13.0477 14.857 13.4857 14.6069L14.212 15.3332C13.5784 15.7545 12.8179 16 12 16C9.79086 16 8 14.2091 8 12C8 11.1821 8.24547 10.4216 8.66676 9.78799L9.39311 10.5143Z"
                    fill="#222222"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.1537 17.2751L15.4193 16.5406C14.3553 17.1196 13.1987 17.5 12 17.5C10.3282 17.5 8.73816 16.7599 7.36714 15.7735C6.00006 14.79 4.89306 13.5918 4.19792 12.7478C3.77356 12.2326 3.72974 12.1435 3.72974 12C3.72974 11.8565 3.77356 11.7674 4.19792 11.2522C4.86721 10.4396 5.9183 9.29863 7.21572 8.33704L6.50139 7.62271C5.16991 8.63072 4.10383 9.79349 3.42604 10.6164L3.36723 10.6876C3.03671 11.087 2.72974 11.4579 2.72974 12C2.72974 12.5421 3.0367 12.913 3.36723 13.3124L3.42604 13.3836C4.15099 14.2638 5.32014 15.5327 6.78312 16.5853C8.24216 17.635 10.0361 18.5 12 18.5C13.5101 18.5 14.9196 17.9886 16.1537 17.2751ZM9.18993 6.06861C10.0698 5.71828 11.0135 5.5 12 5.5C13.9639 5.5 15.7579 6.365 17.2169 7.41472C18.6799 8.46727 19.849 9.73623 20.574 10.6164L20.6328 10.6876C20.9633 11.087 21.2703 11.4579 21.2703 12C21.2703 12.5421 20.9633 12.913 20.6328 13.3124L20.574 13.3836C20.0935 13.9669 19.418 14.721 18.5911 15.4697L17.883 14.7617C18.6787 14.0456 19.3338 13.3164 19.8021 12.7478C20.2265 12.2326 20.2703 12.1435 20.2703 12C20.2703 11.8565 20.2265 11.7674 19.8021 11.2522C19.107 10.4082 18 9.21001 16.6329 8.22646C15.2619 7.24007 13.6718 6.5 12 6.5C11.3056 6.5 10.6253 6.62768 9.96897 6.84765L9.18993 6.06861Z"
                    fill="#222222"
                  />
                  <path d="M5 2L21 18" stroke="#222222" />
                </svg>
              </span>
            )}
            {!validation3.pv && (
              <div className="sam">This field can not be empty</div>
            )}
          </div>
          <div
            className={`ib ${(!validation3.cpv || !validation3.pds) && "err"}`}
          >
            <label
              className={`${
                (!validation3.cpv || !validation3.pds) && "errmsg"
              }`}
            >
              Confirm Password
            </label>
            <input
              type={showpass2 ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirmpassword"
              onChange={change}
              value={form3change.confirmpassword}
            />
            {showpass2 &&<span className="svg" onClick={() => setShowpass2((prev) => !prev)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
              >
                <path
                  d="M9.45061 9.14772C10.3254 9.14772 11.0683 8.84154 11.6795 8.22918C12.2906 7.61681 12.5961 6.87321 12.5961 5.99841C12.5961 5.12362 12.2899 4.38067 11.6776 3.76955C11.0652 3.15844 10.3216 2.85289 9.44682 2.85289C8.57202 2.85289 7.82907 3.15907 7.21796 3.77143C6.60685 4.3838 6.30129 5.1274 6.30129 6.0022C6.30129 6.87699 6.60748 7.61994 7.21984 8.23105C7.83221 8.84216 8.5758 9.14772 9.45061 9.14772ZM9.44871 8.0003C8.89316 8.0003 8.42093 7.80586 8.03204 7.41697C7.64316 7.02808 7.44871 6.55586 7.44871 6.0003C7.44871 5.44475 7.64316 4.97253 8.03204 4.58364C8.42093 4.19475 8.89316 4.0003 9.44871 4.0003C10.0043 4.0003 10.4765 4.19475 10.8654 4.58364C11.2543 4.97253 11.4487 5.44475 11.4487 6.0003C11.4487 6.55586 11.2543 7.02808 10.8654 7.41697C10.4765 7.80586 10.0043 8.0003 9.44871 8.0003ZM9.44986 11.5836C7.58079 11.5836 5.87776 11.0759 4.34077 10.0604C2.80377 9.0449 1.656 7.69154 0.897461 6.0003C1.656 4.30907 2.80339 2.95571 4.33963 1.94022C5.87585 0.924735 7.5785 0.416992 9.44757 0.416992C11.3166 0.416992 13.0197 0.924735 14.5567 1.94022C16.0936 2.95571 17.2414 4.30907 18 6.0003C17.2414 7.69154 16.094 9.0449 14.5578 10.0604C13.0216 11.0759 11.3189 11.5836 9.44986 11.5836ZM9.44871 10.5003C11.0043 10.5003 12.4418 10.0975 13.7612 9.29197C15.0807 8.48642 16.0945 7.38919 16.8029 6.0003C16.0945 4.61142 15.0807 3.51419 13.7612 2.70864C12.4418 1.90308 11.0043 1.5003 9.44871 1.5003C7.89316 1.5003 6.45566 1.90308 5.13621 2.70864C3.81677 3.51419 2.80288 4.61142 2.09454 6.0003C2.80288 7.38919 3.81677 8.48642 5.13621 9.29197C6.45566 10.0975 7.89316 10.5003 9.44871 10.5003Z"
                  fill="#555555"
                />
              </svg>
            </span>}
            {!showpass2 && (
              <span
                className="svg"
                onClick={() => setShowpass2((prev) => !prev)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9202 12.7988C15.9725 12.5407 16 12.2736 16 12C16 9.79086 14.2091 8 12 8C11.7264 8 11.4593 8.02746 11.2012 8.07977L12.1239 9.00251C13.6822 9.06583 14.9342 10.3178 14.9975 11.8761L15.9202 12.7988ZM9.39311 10.5143C9.14295 10.9523 9 11.4595 9 12C9 13.6569 10.3431 15 12 15C12.5405 15 13.0477 14.857 13.4857 14.6069L14.212 15.3332C13.5784 15.7545 12.8179 16 12 16C9.79086 16 8 14.2091 8 12C8 11.1821 8.24547 10.4216 8.66676 9.78799L9.39311 10.5143Z"
                    fill="#222222"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.1537 17.2751L15.4193 16.5406C14.3553 17.1196 13.1987 17.5 12 17.5C10.3282 17.5 8.73816 16.7599 7.36714 15.7735C6.00006 14.79 4.89306 13.5918 4.19792 12.7478C3.77356 12.2326 3.72974 12.1435 3.72974 12C3.72974 11.8565 3.77356 11.7674 4.19792 11.2522C4.86721 10.4396 5.9183 9.29863 7.21572 8.33704L6.50139 7.62271C5.16991 8.63072 4.10383 9.79349 3.42604 10.6164L3.36723 10.6876C3.03671 11.087 2.72974 11.4579 2.72974 12C2.72974 12.5421 3.0367 12.913 3.36723 13.3124L3.42604 13.3836C4.15099 14.2638 5.32014 15.5327 6.78312 16.5853C8.24216 17.635 10.0361 18.5 12 18.5C13.5101 18.5 14.9196 17.9886 16.1537 17.2751ZM9.18993 6.06861C10.0698 5.71828 11.0135 5.5 12 5.5C13.9639 5.5 15.7579 6.365 17.2169 7.41472C18.6799 8.46727 19.849 9.73623 20.574 10.6164L20.6328 10.6876C20.9633 11.087 21.2703 11.4579 21.2703 12C21.2703 12.5421 20.9633 12.913 20.6328 13.3124L20.574 13.3836C20.0935 13.9669 19.418 14.721 18.5911 15.4697L17.883 14.7617C18.6787 14.0456 19.3338 13.3164 19.8021 12.7478C20.2265 12.2326 20.2703 12.1435 20.2703 12C20.2703 11.8565 20.2265 11.7674 19.8021 11.2522C19.107 10.4082 18 9.21001 16.6329 8.22646C15.2619 7.24007 13.6718 6.5 12 6.5C11.3056 6.5 10.6253 6.62768 9.96897 6.84765L9.18993 6.06861Z"
                    fill="#222222"
                  />
                  <path d="M5 2L21 18" stroke="#222222" />
                </svg>
              </span>
            )}
            {!validation3.cpv && (
              <div className="sam">This field can not be empty</div>
            )}
            {!validation3.pds && validation3.cpv && (
              <div className="sam">The password is not thesame</div>
            )}
          </div>
        </form>
        <ul>
          <li>Verify your email to complete account creation. </li>
          <li>
            You can skip now and complete later, but you will be restricted to
            some features.
          </li>
          <li>
            Verify your email later by visiting Profile Settings and selecting
            Verify Email.
          </li>
        </ul>
      </div>
      {curpage < 3 && (
        <div className="but">
          {curpage > 0 && (
            <button
              className={`prev`}
              onClick={() => setCurpage((prev) => prev - 1)}
            >
              <span className="svgp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="13"
                  viewBox="0 0 9 13"
                  fill="none"
                >
                  <path
                    d="M0.799951 6.5L6.79995 0.5L8.19995 1.9L3.59995 6.5L8.19995 11.1L6.79995 12.5L0.799951 6.5Z"
                    fill="#0062FF"
                  />
                </svg>
              </span>
              Previous
            </button>
          )}
          {curpage === 2 && (
            <div className="vf">
              {" "}
              <button className="next vn" onClick={handlesubmit}>
                Verify Email{" "}
                <span className="svgn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                  >
                    <path
                      d="M7.4 6.5L1.4 12.5L-6.11959e-08 11.1L4.6 6.5L-4.63341e-07 1.9L1.4 0.5L7.4 6.5Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
              <p>Skip and complete account creation</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Form3;
