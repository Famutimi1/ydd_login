import "../style/verify.scss";
import AuthCode from 'react-auth-code-input';
import { useState } from "react";
// import Verify from './Verify';


function Verify({curpage, setCurpage}) {

    const [result, setResult] = useState();
    const [verifycode, setVerifycode] = useState();
    const handleOnChange = (res) => {
      setResult(res);
    };
    console.log(result)

    const handlesubmit = ()=>{
        setVerifycode(result)
        console.log(verifycode)
    }

    {/* <div>
                <input type="tel" max="1" maxLength="1"/>
                <input type="tel" max="1" maxLength="1" />
                <input type="tel" max="1" maxLength="1"/>
                <input type="tel" max="1" maxLength="1"/>
                <input type="tel" max="1" maxLength="1"/>
                <input type="tel" max="1" maxLength="1"/>
    </div> */}

    return(
        <>
           { curpage === 3 &&<div className="verify">
                <h2>Verify Email</h2>
                <div className="na">To complete account creation, enter the OTP sent to your email address below</div>
                <AuthCode onChange={handleOnChange} />
                <div className="lower">
                    <button type="submit" className="btn" onClick={handlesubmit} >Verify Email</button>
                    <p>Didn’t get OTP? Check your spam box or <span>Resend</span></p>
                </div>
            </div>}
            {/* <div className="success">
                <div className="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="167" height="168" viewBox="0 0 167 168" fill="none">
                    <path d="M71.0417 121.917L130 62.9587L120.417 53.5837L71.0417 102.959L46.0417 77.9587L36.6667 87.3337L71.0417 121.917ZM83.3333 167.334C71.9445 167.334 61.1806 165.146 51.0417 160.771C40.9028 156.396 32.0486 150.424 24.4792 142.855C16.9097 135.285 10.9375 126.431 6.5625 116.292C2.1875 106.153 0 95.3892 0 84.0003C0 72.4726 2.1875 61.6392 6.5625 51.5003C10.9375 41.3614 16.9097 32.542 24.4792 25.042C32.0486 17.542 40.9028 11.6045 51.0417 7.22949C61.1806 2.85449 71.9445 0.666992 83.3333 0.666992C94.8611 0.666992 105.694 2.85449 115.833 7.22949C125.972 11.6045 134.792 17.542 142.292 25.042C149.792 32.542 155.729 41.3614 160.104 51.5003C164.479 61.6392 166.667 72.4726 166.667 84.0003C166.667 95.3892 164.479 106.153 160.104 116.292C155.729 126.431 149.792 135.285 142.292 142.855C134.792 150.424 125.972 156.396 115.833 160.771C105.694 165.146 94.8611 167.334 83.3333 167.334Z" fill="#009900"/>
                    </svg>
                </div>
                <p>Email verified successfully</p>
            </div> */}
            {/* <div className="redirect">
                <div className="rd">
                    <h1>Account Created Successfully</h1>
                    <p>You can login now or go back to the homepage</p>
                </div>
                <div className="bc">
                    <button className="bh"><span className="svgp"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="13" viewBox="0 0 9 13" fill="none">
                        <path d="M0.799951 6.5L6.79995 0.5L8.19995 1.9L3.59995 6.5L8.19995 11.1L6.79995 12.5L0.799951 6.5Z" fill="#0062FF"/>
                        </svg></span>Previous
                    </button>
                
                    <button className="lg">Next<span className="svgn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
                        <path d="M7.70005 6.5L1.70005 12.5L0.300049 11.1L4.90005 6.5L0.300048 1.9L1.70005 0.5L7.70005 6.5Z" fill="white"/>
                        </svg>
                        </span>
                    </button>
                </div>
            </div> */}
        </>
    )
}

export default Verify;