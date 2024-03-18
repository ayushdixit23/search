import React, { useEffect, useState } from "react";
import Image from "next/image";
// import wait from "../../assets/Images/wait.png";

function Community(props) {
  const [community, setCommunity] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (props.coms) {
      setCommunity(props.coms);
      setIsLoading(false); // Set loading to false once data is loaded
    }
  }, [props.coms]);
  return (
    <>
      {props?.isCommunity && (
        <div className="select-none">
          <div className="my-[2%]">
            <div className="flex pn:max-md:flex-col justify-center md:space-x-7 pn:max-md:space-y-5 pn:max-md:px-[7%] px-6 items-center">
              // Render community data when it's available // data
              <div
                className="flex flex-col items-center max-w-[470px] h-[400px] min-w-[340px] border-[1px] md:max-lg:w-[400px] space-y-3 hover:shadow-md hover:border-0 duration-75 border-[#f5f5f5] rounded-3xl py-3"
                key={i}
              >
                <div className="w-[90px] h-[90px] bg-[#f9f9f9] rounded-[40px] shadow-md ring-1 ring-white">
                  <img
                    src={d?.dps}
                    alt="img"
                    className="h-[90px] w-[90px] rounded-[40px] ring-1 ring-white shadow-md"
                    width={100}
                  />
                </div>
                <div className="text-xl text-center font-semibold">
                  {d?.title}
                </div>
                <div className="flex items-center">
                  <div className="flex flex-row justify-start z-0 w-[100%] items-center">
                    {/* {d?.membersdp.map((f, i) => (
                          <img
                            src={f}
                            className={`h-[30px] ${
                              i != 0 ? "-ml-[10px]" : null
                            } w-[30px] rounded-xl z-30 bg-[#f1f1f1] shadow-md`}
                            alt="member"
                          />
                        ))} */}
                    {d?.membersdp?.length >= 4 ? (
                      <>
                        <img
                          src={d?.membersdp[0]}
                          className="h-[30px] w-[30px] rounded-xl z-30 bg-[#f1f1f1] shadow-md"
                          alt="member"
                        />
                        <img
                          src={d?.membersdp[1]}
                          alt="member"
                          className="h-[30px] w-[30px] rounded-xl z-20 -ml-[10px] bg-[#f1f1f1] shadow-md"
                        />
                        <img
                          src={d?.membersdp[2]}
                          alt="member"
                          className="h-[30px] w-[30px] rounded-xl z-10 -ml-[10px] bg-[#f1f1f1] shadow-md"
                        />
                        <img
                          src={d?.membersdp[3]}
                          alt="member"
                          className="h-[30px] w-[30px] rounded-xl z-0 -ml-[10px] bg-[#f1f1f1] shadow-md"
                        />
                      </>
                    ) : (
                      <img
                        src={d?.membersdp[0]}
                        className="h-[30px] w-[30px] rounded-xl z-30 bg-[#f1f1f1] shadow-md"
                        alt="member"
                      />
                    )}
                  </div>
                  <div className="text-[14px] font-medium text-[#3e3e3e]">
                    <span className="px-1">{d?.memberscount}</span>
                    <span>members</span>
                  </div>
                </div>
                <div className="w-[85%] -space-y-[0.1px]">
                  <div className="font-medium text-[#3e3e3e]">Description:</div>
                  <div className="text-[16px] text-center pt-2 h-28 bg-[#fafafa] text-ellipsis overflow-hidden  rounded-2xl  my-[14px]">
                    {d?.desc}
                  </div>
                </div>
                {/* <button className="text-white rounded-2xl bg-[#1a1a1a] w-[85%] p-[10px]">
                      Visit
                    </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Community;
