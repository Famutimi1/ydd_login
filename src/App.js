import "./App.scss";
// import "./style/home.sass"
import { useState } from 'react';
import Status from "./components/Status"
import Form1 from "./components/Form1"
import Form2 from "./components/Form2"
import Form3 from "./components/Form3"
import Verify from "./components/Verify"
// import Form1 from "../components/Form/Verify"
function App() {

  const [curpage,setCurpage] = useState(0);
  console.log(curpage);
  const formoutput = (item)=>{
    console.log(item)
  }
  return (
    <div className="App">
      <div className="modale">
        {curpage < 3 &&<Status curpage={curpage} setCurpage={setCurpage}/>}
        {curpage === 0 && <Form1 curpage={curpage} setCurpage={setCurpage} formoutput = {formoutput} />}
        {curpage === 1 && <Form2 curpage={curpage} setCurpage={setCurpage} />}
        {curpage === 2 && <Form3 curpage={curpage} setCurpage={setCurpage} />}
        {curpage === 3 && <Verify curpage={curpage} setCurpage={setCurpage}/>}

        {/* {curpage < 3 &&<div className="but"> */}
          {/* {curpage >0 &&<button className={`prev`} onClick={()=>setCurpage(prev=> prev - 1)}><span className="svgp"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="13" viewBox="0 0 9 13" fill="none">
           <path d="M0.799951 6.5L6.79995 0.5L8.19995 1.9L3.59995 6.5L8.19995 11.1L6.79995 12.5L0.799951 6.5Z" fill="#0062FF"/>
           </svg></span>Previous</button>
          } */}
          {/* {curpage <= 1 &&
            <button className={`next ${curpage === 1 && "nextb"}`} onClick={()=>setCurpage(prev=> prev + 1)}>Next<span className="svgn">
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
              <path d="M7.70005 6.5L1.70005 12.5L0.300049 11.1L4.90005 6.5L0.300048 1.9L1.70005 0.5L7.70005 6.5Z" fill="white"/>
              </svg>
            </span></button>
          } */}
            {/* {curpage === 2 && <div className="vf"> <button className="next vn" onClick={()=>setCurpage(prev=> prev + 1)}>Verify Email <span className="svgn"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
              <path d="M7.4 6.5L1.4 12.5L-6.11959e-08 11.1L4.6 6.5L-4.63341e-07 1.9L1.4 0.5L7.4 6.5Z" fill="white"/>
              </svg></span></button>
              <p>Skip and complete account creation</p>
            </div>
            } */}
        {/* </div>} */}
        <div></div>
      </div>
    </div>
  );
}

export default App;
