import "../style/status.scss"

function Status({ curpage, setCurpage }) {
  const dynamic = [
    {
      title: "Biodata",
      info: "personal information",
      page: 1,
    },
    {
      title: "Church",
      info: "Membership information",
      page: 2,
    },
    {
      title: "Security",
      info: "Account protection",
      page: 3,
    },
  ];
  return (
    <>
      <div className="back">
        <div className="tt">
          <h2>Create an account</h2>
          <p>
            Your account gives you access to all YDD programmes and services
            across WECA
          </p>
        </div>
        <div className="con1">
          {dynamic.map((statusbar, index) => {
            return (
              <div key={index} className="">
                <div className={`cc ${index > 0 && " god"}`}>
                  <div
                    className={` ${index > 0 && "last"} ${
                      curpage === 1 && index === 1 && "good"
                    } ${curpage === 2 && index > 0 && "good"}`}
                  ></div>
                  <div
                    className={`round ${index === 0 && curpage === 0 && "first"}
                          ${index === 1 && curpage === 1 && "first"}
                          ${index === 2 && curpage === 2 && "first"}
                          ${index === 0 && curpage === 1 && "fill"}
                          ${index < 2 && curpage === 2 && "fill"}`}
                  >
                    {statusbar.page}
                  </div>
                </div>
                <div
                  className={`ch1 ${index === 0 && curpage === 0 && "proginfo"}
                        ${index === 1 && curpage === 1 && "proginfo"}
                        ${index === 2 && curpage === 2 && "proginfo"}`}
                >
                  {statusbar.title}
                </div>
                <div
                  className={`ch ${index === 0 && curpage === 0 && "proginfo"}
                        ${index === 1 && curpage === 1 && "proginfo"}
                        ${index === 2 && curpage === 2 && "proginfo"}`}
                >
                  {statusbar.info}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Status;
