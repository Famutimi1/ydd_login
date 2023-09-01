import "./App.scss";
// import "./style/home.sass"
import { useState } from 'react';
import Status from "./components/Status"
import Form1 from "./components/Form1"
import Form2 from "./components/Form2"
// import Form1 from "../components/Form/Form3"
// import Form1 from "../components/Form/Verify"
function App() {

  const [curpage,setCurpage] = useState(0);
  console.log(curpage);
  return (
    <div className="App">
      <div className="modale">
        <Status curpage={curpage} setCurpage={setCurpage}/>
        {curpage === 0 && <Form1 curpage={curpage} setCurpage={setCurpage}  />}
        {curpage === 1 && <Form2 curpage={curpage} setCurpage={setCurpage} />}
        <div className="but">
          {curpage >0 && <button className="prev" onClick={()=>setCurpage(prev=> prev - 1)}>prev</button>}
          {curpage <= 1 && <button className="next" onClick={()=>setCurpage(prev=> prev + 1)}>next</button>}
          {curpage === 2 && <button className="next">verify email</button>}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
