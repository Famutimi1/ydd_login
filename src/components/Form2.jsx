import { useState, useRef } from "react";
import "../style/form1.scss";

function Form2({ curpage, setCurpage }) {
  const [moption, setMoption] = useState(false);
  const [form2, setForm2] = useState({});
  const [form2change, setForm2change] = useState({});
  const [region, setRegion] = useState("Select");
  const [distric, setDistric] = useState("Select");
  const [zone, setZones] = useState("Select");
  const [branch, setBranch] = useState("Select");
  const genderr = useRef();

  const [drop, setDrop] = useState({
    region: false,
    district: false,
    zone: false,
    branch: false,
  });

  const [validation2, setValidation2] = useState({
    rgv: true,
    dtv: true,
    znv: true,
    brv: true,
  });

  console.log(validation2.fv);
  // const [distric, setDistric] = useState("Select");
  // const [zone, setZones] = useState("Select");
  // const [branch, setBranch] = useState("Select");

  const regions = ["anthony", "Abuja", "Ado"];
  const districts = ["Anthony", "Ado", "Abuja"];
  const zones = ["Ido", "ADO", "Abuja"];
  const branches = ["Anthony", "Abesan", "Ajilosun"];
  const mlife = useRef();
  var change;

  const changes = (e) => {
    // console.log(genderr?.current?.value);
    const { name, value } = e.target;
    setForm2change({ ...form2change, [name]: value });
    setDrop({
      region: false,
      district: false,
      zone: false,
      branch: false,
    });
    // console.log(form2change);
  };

  const isempty = (value) => {
    return value !== undefined;
  };

  const handlesubmit = () => {
    const rg = isempty(form2change.Region);
    const dt = isempty(form2change.District);
    const zn = isempty(form2change.Zone);
    const br = isempty(form2change.Branch);

    setValidation2({
      rgv:rg,
      dtv:dt,
      znv:zn,
      brv:br,
    })

    console.log(validation2.fv)
    const validate = rg && dt && zn && br;

    console.log(validate);
    if(!validate){
      return""
    }
    setForm2(form2change);
    console.log(form2);
    setCurpage((prev) => prev + 1);
  };

  // useEffect(() => {
  //   setDropvalue(change);
  //   console.log(dropvalue);
  // }, [change]);

  return (
    <>
      <div>
        <form onSubmit={handlesubmit}>
          <div
            className={`ib ${!validation2.rgv && "err"}`}
            onClick={() => setDrop({ ...drop, region: true })}>
            <label className={`${!validation2.rgv && "errmsg"}`}>Region</label>
            <div className={ form2change.Region ? "" : "select"}>{form2change.Region ? form2change.Region : "select"}</div>
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
            {drop.region && (
              <div className="drop b2">
                <div className="forms">
                  {regions.map((mapi) => {
                    return (
                      <>
                        <label htmlFor={mapi} className="ul">
                          {mapi}
                        </label>
                        <input
                          ref={genderr}
                          name="Region"
                          type="radio"
                          value={mapi}
                          id={mapi}
                          onChange={changes}
                          // onClick={clik}
                          placeholder="Select"
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            )}
            {!validation2.rgv && <div className="sam">This field can not be empty</div>}
          </div>
          <div
            className={`ib ${!validation2.dtv && "err"}`}
            onClick={() => setDrop({ ...drop, district: true })}

          >
            <label className={`${!validation2.dtv && "errmsg"}`}>District</label>
            <div className={ form2change.District ? "" : "select"}>{form2change.District ? form2change.District : "select"}</div>
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
              {/* <span>{dropvalue}</span> */}
              <span></span>
            </div>
            {/* moption &&  */}
            {drop.district && (
              <div className="drop b2">
                <form>
                  {districts.map((mapi, index) => {
                    return (
                      <>
                        <label htmlFor={mapi} className="ul">
                          {mapi}
                        </label>
                        <input
                          // ref={marital}
                          name="District"
                          type="radio"
                          value={mapi}
                          id={mapi}
                          onChange={changes}
                          placeholder="Select"
                        />
                      </>
                    );
                  })}
                </form>
              </div>
            )}
            {!validation2.dtv && <div className="sam">This field can not be empty</div>}
          </div>
          <div className={`ib ${!validation2.znv && "err"}`} onClick={() => setDrop({ ...drop, zone: true })}>
            <label className={`${!validation2.znv && "errmsg"}`}>Zone</label>
            <div className={ form2change.Zone ? "" : "select"}>{form2change.Zone ? form2change.Zone : "select"}</div>
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
            {drop.zone && (
              <div className="drop b2">
                <div className="forms">
                  {zones.map((mapi) => {
                    return (
                      <>
                        <label htmlFor={mapi} className="ul">
                          {mapi}
                        </label>
                        <input
                          // ref={genderr}
                          name="Zone"
                          type="radio"
                          value={mapi}
                          id={mapi}
                          onChange={changes}
                          // onClick={clik}
                          placeholder="Select"
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            )}
            {!validation2.znv && <div className="sam">This field can not be empty</div>}
          </div>
          <div
            className={`ib ${!validation2.brv && "err"}`}
            onClick={() => setDrop({ ...drop, branch: true })}
          >
            <label className={`${!validation2.brv && "errmsg"}`}>Branch</label>
            <div className={ form2change.Branch ? "" : "select"}>{form2change.Branch ? form2change.Branch : "select"}</div>
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
              {/* <span>{dropvalue}</span> */}
              <span></span>
            </div>
            {/* moption &&  */}
            {drop.branch && (
              <div className="drop b2">
                <form>
                  {branches.map((mapi, index) => {
                    return (
                      <>
                        <label htmlFor={mapi} className="ul">
                          {mapi}
                        </label>
                        <input
                          // ref={marital}
                          name="Branch"
                          type="radio"
                          value={mapi}
                          id={mapi}
                          onChange={changes}
                          placeholder="Select"
                        />
                      </>
                    );
                  })}
                </form>
              </div>
            )}
            {!validation2.brv && <div className="sam">This field can not be empty</div>}
          </div>
        </form>
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
          {curpage <= 1 && (
            <button
              type="submit"
              className={`next ${curpage === 1 && "nextb"}`}
              onClick={handlesubmit}
            >
              Next
              <span className="svgn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                >
                  <path
                    d="M7.70005 6.5L1.70005 12.5L0.300049 11.1L4.90005 6.5L0.300048 1.9L1.70005 0.5L7.70005 6.5Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default Form2;
