import { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
// import { Select } from "antd";
import "../style/form1.scss";
// import "../style/rt.css"

function Form1({ curpage, setCurpage,formoutput }) {
  const [formchangev, setFormchangev] = useState({});
  const [phonevalue, setPhonevalue] = useState("");
  const [genderchangev, setGenderchangev] = useState("");
  const [maritalchangev, setMaritalchangev] = useState("");
  const [form1, setForm1] = useState([]);
  const [moption, setMoption] = useState(false);
  const [genderdrop, setGenderdrop] = useState(false);
  const [dropvalue, setDropvalue] = useState("");
  const [validation, setValidation] = useState({
    fv:true,
    lv:true,
    dv:true,
    pv:true,
    gv:true,
    mav:true
  });
  const drop = ["Select", "Married", "Single", "Widow", "Widower"];
  const gender = ["Male", "Female"];

  const mlife = useRef();
  const firstname = useRef();
  const lastname = useRef();
  const dofb = useRef();
  const phoneref = useRef();
  // const genderr = useRef();
  // const marital = useRef();
  const phone = useRef();

  const phonechange = (phone)=>{
    setPhonevalue(phone)
  }

  const formchange = () => {
    // setPhonevalue(phone)
    setFormchangev({
      first: firstname.current.value,
      lastn: lastname.current.value,
      dofb: dofb.current.value,
      // genderr:e.target.value,
      // marital:e.target.value
    });
    console.log(formchangev);
  };

  const clik = () => {
    console.log("rrrrrrr");
  };

  const genderchange = (e) => {
    // const test = (e.target.value)
    setGenderchangev(e.target.value);
    console.log(genderchangev);
    setGenderdrop(false);
  };

  const maritalchange = (e) => {
    // const test2 = (e.target.value)
    setMaritalchangev(e.target.value);
    console.log(maritalchangev);
    setMoption(false);
  };

  // const Go =()=>{
  //   setMoption(false)
  // }

  const isempty = (value) => {
      return value.trim().length !== 0
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(firstname.current.value);
    console.log("fff")
    const firstvalid_valid = isempty(firstname.current.value)
    const lastn_valid = isempty(lastname.current.value)
    const dofb_valid = isempty(dofb.current.value)
    const phone_valid = isempty(phonevalue)
    const genderchangev_valid = isempty(genderchangev)
    const maritalchangev_valid = isempty(maritalchangev)

    setValidation({
      fv:firstvalid_valid,
      lv:lastn_valid,
      dv:dofb_valid,
      pv:phone_valid,
      gv:genderchangev_valid,
      mav:maritalchangev_valid
    })

    console.log(validation.fv)

    const validate = firstvalid_valid && lastn_valid && dofb_valid &&genderchangev_valid && maritalchangev_valid && phone_valid
    console.log(validate)

    if(!validate){
      return""
    }
    setForm1([
      {...formchangev,
      phonevalue,
      genderchangev,
      maritalchangev,}
    ]);
    if(form1){
      console.log(form1);
    }
    // formoutput(form1)
    setCurpage(prev=> prev + 1)
  };

  return (
    <>
      <div>
        <form onSubmit={handlesubmit}>
          <div className={`ib ${!validation.fv && "err"}`}>
            <label className={`${!validation.fv && "errmsg"}`}>First Name</label>
            <input placeholder="Olaolu" ref={firstname} onChange={formchange} />
            {!validation.fv && <div className="sam">This field can not be empty</div>}
          </div>
          <div className={`ib ${!validation.lv && "err"}`}>
            <label className={` ${!validation.lv && "errmsg"}`}>Last Name</label>
            <input placeholder="Surname" ref={lastname} onChange={formchange} />
            {!validation.lv && <div className="sam">This field can not be empty</div>}
          </div>
          <div className={`ib ${!validation.dv && "err"}`}>
            <label className={`${!validation.dv && "errmsg"}`}>Date of Birth</label>
            <input type="date" ref={dofb} onChange={formchange} />
            {!validation.lv && <div className="sam">This field can not be empty</div>}
          </div>
          {/* <select class="ui dropdown ib c">
            <option  value="">Gender</option>
            <option  value="1">Male</option>
            <option  value="0">Female</option>
          </select> */}
          <div className={`ib b1 ${!validation.gv && "err"}`} onClick={() => setGenderdrop(true)}>
            <label className={` ${!validation.fv && "errmsg"}`}>Gender</label>
            <div className={ "select"}>{genderchangev ? genderchangev : "select"}</div>
            <span className="svg">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="expand_more"
                  d="M6 7.70078L0 1.70078L1.4 0.300781L6 4.90078L10.6 0.300781L12 1.70078L6 7.70078Z"
                  fill="#555555"
                />
              </svg>
            </span>
            {genderdrop && (
              <div className="drop b2">
                <div className="forms">
                  {gender.map((mapi) => {
                    return (
                      <>
                        <label htmlFor={mapi} className="ul">
                          {mapi}
                        </label>
                        <input
                          // ref={genderr}
                          name="1"
                          type="radio"
                          value={mapi}
                          id={mapi}
                          onChange={genderchange}
                          onClick={clik}
                          placeholder="Select"
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            )}
            {!validation.gv && <div className="sam">This field can not be empty</div>}
          </div>
          <div className={`ib b ${!validation.mav && "err"}`} onClick={() => setMoption(true)}>
            <label className={` ${!validation.mav && "errmsg"}`}>Marital Status</label>
            <div className={ maritalchangev ? "" : "select"}>{maritalchangev ? maritalchangev : "select"}</div>
            <span className="svg">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="expand_more"
                  d="M6 7.70078L0 1.70078L1.4 0.300781L6 4.90078L10.6 0.300781L12 1.70078L6 7.70078Z"
                  fill="#555555"
                />
              </svg>
            </span>
            <div>
              <span>{dropvalue}</span>
              <span></span>
            </div>
            {/* moption &&  */}
            {moption && (
              <div className="drop b2">
                <form>
                  {drop.map((mapi, index) => {
                    return (
                      <>
                        <label htmlFor={mapi} className="ul">
                          {mapi}
                        </label>
                        <input
                          // ref={marital}
                          name="2"
                          type="radio"
                          value={mapi}
                          id={mapi}
                          onChange={maritalchange}
                          placeholder="Select"
                        />
                      </>
                    );
                  })}
                </form>
              </div>
            )}
            {!validation.mav && <div className="sam">This field can not be empty</div>}
          </div>
          <div className={`ib ${!validation.pv && "err"}`}>
            {/* <label>first name</label> */}
            <PhoneInput
              className={` phone ${!validation.pv && "errmsg"}`}
              country={"ng"}
              ref={phoneref}
              // enableSearch={true}
              value={phonevalue}
              onChange={phonechange}
            />
            {!validation.pv && <div className="sam">This field can not be empty</div>}
          </div>
        </form>
      </div>
      {curpage < 3 &&<div className="but">
        {curpage <= 1 &&
          <button type="submit" className={`next ${curpage === 1 && "nextb"}`} onClick={handlesubmit}>Next<span className="svgn">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
              <path d="M7.70005 6.5L1.70005 12.5L0.300049 11.1L4.90005 6.5L0.300048 1.9L1.70005 0.5L7.70005 6.5Z" fill="white"/>
              </svg>
          </span></button>
        }
        </div>
      }
    </>
  );
}

export default Form1;
