import { useState,useRef } from "react";

function Form2({ curpage, setCurpage }) {
    const [moption, setMoption] = useState(false);
    const [dropvalue, setDropvalue] = useState("Select");
    const drop = ["Select", "Married", "Single", "Widow", "Widower"];
    const gender =["Male","Female"]
    const mlife = useRef()
    var change;
    const dropchange = () => {
      // change = e.target.value;
      setDropvalue(mlife.current.value);
      console.log(dropvalue);
    };
  
    // useEffect(() => {
    //   setDropvalue(change);
    //   console.log(dropvalue);
    // }, [change]);
  
    return (
      <>
        <div>
          <form>
            <div className="ib">
              <label>First Name</label>
              <input placeholder="Olaolu" />
            </div>
            <div className="ib">
              <label>Last Name</label>
              <input placeholder="Surname" />
            </div>
            <div className="ib">
              <label>Date of Birth</label>
              <input type="date" />
            </div>
            <div className="ib">
              <label>Gender</label>
              {moption && (
                <div className="drop">
                  <form>
                    {gender.map((mapi) => {
                      return (
                        <div className="ul">
                          <label htmlFor={mapi}>{mapi}</label>
                          <input
                            name="1"
                            type="radio"
                            value={mapi}
                            id={mapi}
                            onChange={dropchange}
                            placeholder="Select"
                          />
                        </div>
                      );
                    })}
                  </form>
                </div>
              )}
            </div>
            <div className="ib" onClick={() => setMoption((prev) => !prev)}>
              <label>Marital Status</label>
              <div>
                <span>{dropvalue}</span>
                <span></span>
              </div>
              {moption && (
                <div className="drop">
                  <form>
                    {drop.map((mapi) => {
                      return (
                        <div className="ul">
                          <label htmlFor={mapi}>{mapi}</label>
                          <input
                            ref={mlife}
                            name="1"
                            type="radio"
                            value={mapi}
                            id={mapi}
                            onChange={dropchange}
                            placeholder="Select"
                          />
                        </div>
                      );
                    })}
                  </form>
                </div>
              )}
            </div>
            <div className="ib">
              <label>first name</label>
              <input />
            </div>
          </form>
        </div>
      </>
    );
  }

  export default Form2