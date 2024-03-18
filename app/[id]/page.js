"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Logo from "../assets/Logo.png";
import comm from "../assets/comm.jpg";
import sto from "../assets/sto.png";
import axios from "axios";
import Bio from "../component/Bio";
import Community from "../component/Community";
import Store from "../component/Store";
function page({ params }) {
  const [coms, setComs] = useState([]);
  const [bio, setBio] = useState();
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `    https://back.grovyo.xyz/api/getprositedetails/${params.id}`
      );
      console.log(res.data);
      setBio(res.data.data.userDetails);
      setComs(res.data.data.communitywithDps);
      setProduct(res.data.data.productsWithDps);
      setIsLoading(false);
      console.log(bio);
      if (!res.data.success) {
        setUser(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [params.id]);

  if (!user) {
    return (
      <>
        <section className="relative z-10 flex select-none flex-col justify-center w-full  items-center bg-black h-screen py-[120px]">
          <div className="container w-full">
            <div className="w-full flex">
              <div className="w-full px-4">
                <div className="w-full text-center">
                  <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                    404
                  </h2>
                  <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                    Oops! That page can't be found
                  </h4>
                  <p className="mb-8 text-lg text-white">
                    The page you are looking for it maybe deleted
                  </p>
                  <a
                    href="/"
                    className="inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-blue-400 hover:text-primary"
                  >
                    Go To Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center no-scrollbar overflow-auto">
      <div className=" text-black overflow-auto no-scrollbar relative w-full h-full">
        {/* Header */}
        <div className=" justify-center items-center w-[100%] absolute flex h-[100px]">
          <div className="  w-full flex justify-between  items-center px-2 ">
            <div className={` flex text-[#fff]  items-center justify-center`}>
              <div className="h-[45px] w-[45px] ring-2 ring-[#fff] rounded-2xl">
                <img
                  src={`${bio?.dp}`}
                  alt="dp"
                  className="rounded-2xl h-[45px] w-[45px] "
                />
              </div>
              <div className="px-2 pr-4 ">
                <div className="text-[18px] text-[#424242] font-bold">
                  {bio?.fullname}
                </div>
                {/* <div className=" text-[12px] text-[#424242]">
                  @{bio?.username}
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          {bio?.temp?.length > 0 ? (
            <>
              <div
                className="w-full h-[80vh] pn:max-sm:hidden"
                dangerouslySetInnerHTML={{ __html: bio?.temp }}
              ></div>
              <div
                className="w-full h-[80vh] sm:hidden"
                dangerouslySetInnerHTML={{ __html: bio?.temp1 }}
              ></div>
            </>
          ) : (
            <div className="flex pn:max-md:flex-col-reverse items-center py-4 w-[100%] h-[60%]">
              <div className="flex bg-white flex-col items-center w-[100%] h-[80vh]">
                <div className="flex flex-col md:w-[100%] h-[100%] justify-center items-center">
                  <div className="flex flex-col w-[50%] h-[60%] justify-center items-center">
                    <div className="md:text-[34px] text-center text-black font-bold my-2">
                      "Unleash your passion to
                      <a className="bg-gradient-to-r px-[10px] from-[#FF8660] via-[#FF8660] to-[#9A33FF] inline-block text-transparent bg-clip-text">
                        personalize
                      </a>
                      your space and show the world the extraordinary things
                      you're capable of "
                    </div>
                    <div className="bg-[#0075FF] text-white font-sans mt-6 font-medium text-[16px] w-[160px] flex justify-center items-center  py-2 rounded-lg">
                      Edit now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* About section */}
          <div className="flex flex-col justify-center items-center my-4 sm:mt-10 select-none">
            <div className="text-2xl font-semibold mb-4">About</div>
            <div
              className={`bg-[#f9f9f9] flex flex-col  space-y-3   sm:w-[80%] w-[97%] rounded-2xl md:rounded-[35px] pn:max-sm:p-5 sm:p-10 ${
                isLoading ? "animate-pulse" : ""
              }`}
            >
              {isLoading ? (
                <div
                  className={`bg-[#f9f9f9] flex flex-col  space-y-3   sm:w-[80%] w-[97%] rounded-2xl md:rounded-[35px] pn:max-sm:p-5 sm:p-10 ${
                    isLoading ? "animate-pulse" : ""
                  }`}
                >
                  <div className="h-5 bg-slate-200 w-28 rounded-lg animate-pulse"></div>
                  <div className="h-5 bg-slate-200 w-32 rounded-lg animate-pulse"></div>
                  <div className="h-5 bg-slate-200 w-60 rounded-lg animate-pulse"></div>
                  <div className="h-5 bg-slate-200 w-48 rounded-lg animate-pulse"></div>
                  <div className="h-5 bg-slate-200 w-20 rounded-lg animate-pulse"></div>
                  <div className="flex w-full text-black items-center flex-wrap">
                    <div className="flex justify-between h-8 w-32 m-2 items-center space-x-2 bg-slate-200 animate-pulse rounded-lg">
                      {" "}
                    </div>
                    <div className="flex justify-between h-8 w-32 m-2 items-center space-x-2 bg-slate-200 animate-pulse rounded-lg">
                      {" "}
                    </div>
                    <div className="flex justify-between h-8 w-32 m-2 items-center space-x-2 bg-slate-200 animate-pulse rounded-lg">
                      {" "}
                    </div>
                    <div className="flex justify-between h-8 w-32 m-2 items-center space-x-2 bg-slate-200 animate-pulse rounded-lg">
                      {" "}
                    </div>
                    <div className="flex justify-between h-8 w-32 m-2 items-center space-x-2 bg-slate-200 animate-pulse rounded-lg">
                      {" "}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <Bio bio={bio} />
                </div>
              )}
            </div>
          </div>

          {/* community section*/}
          <div className="flex flex-col w-[100%] py-4 bg-white h-[80vh] justify-evenly items-center">
            <div className=" text-black text-[21px] font-bold">Community</div>
            {isLoading ? (
              <div className="flex flex-col h-[70%] bg-white justify-center md:space-x-7 pn:max-md:space-y-5 pn:max-md:px-[7%] px-6 items-center">
                <div className="flex pn:max-md:flex-col bg-white justify-center md:space-x-7 pn:max-md:space-y-5 pn:max-md:px-[7%] px-6 items-center gap-2 mt-8">
                  <div className="flex flex-col items-center max-w-[470px] h-[400px] min-w-[340px] border-[1px] md:max-lg:w-[400px] space-y-3 border-[#D4D2E3] rounded-3xl py-3">
                    <div className="w-[90px] h-[90px] bg-slate-200 animate-pulse rounded-[40px] shadow-md ring-1 ring-white"></div>
                    <div className="text-2xl text-center  bg-slate-200 animate-pulse w-28 rounded-xl h-10 font-semibold my-2"></div>

                    <div className="flex items-center">
                      <div className="flex flex-row justify-start z-0 w-[100%] items-center">
                        <>
                          <div className="h-[35px] w-[35px] rounded-2xl z-30 bg-slate-200 animate-pulse " />
                          <div className="h-[35px] w-[35px] rounded-2xl z-20 -ml-[10px] bg-slate-200 animate-pulse " />
                          <div className="h-[35px] w-[35px] rounded-2xl z-10 -ml-[10px] bg-slate-200 animate-pulse " />
                          <div className="h-[35px] w-[35px] rounded-2xl z-0 -ml-[10px] bg-slate-200 animate-pulse " />
                        </>
                      </div>
                      <div className=" bg-slate-200 animate-pulse w-16 h-4 rounded-md"></div>
                    </div>
                    <div className="w-[85%] -space-y-[0.1px]">
                      <div className="font-medium w-28 bg-slate-200 rounded-lg text-[#3e3e3e]"></div>
                      <div className="text-[16px] text-center pt-2 h-28 bg-slate-200 text-ellipsis overflow-hidden  rounded-2xl  my-[14px]"></div>
                    </div>
                    <button className="text-white rounded-full bg-slate-200 animate-pulse w-[85%] h-[50px]"></button>
                  </div>
                  <div className="flex flex-col items-center max-w-[470px] h-[400px] min-w-[340px] border-[1px] md:max-lg:w-[400px] space-y-3 border-[#D4D2E3] rounded-3xl py-3">
                    <div className="w-[90px] h-[90px] bg-slate-200 animate-pulse rounded-[40px] shadow-md ring-1 ring-white"></div>
                    <div className="text-2xl text-center  bg-slate-200 animate-pulse w-28 rounded-xl h-10 font-semibold my-2"></div>

                    <div className="flex items-center">
                      <div className="flex flex-row justify-start z-0 w-[100%] items-center">
                        <>
                          <div className="h-[35px] w-[35px] rounded-2xl z-30 bg-slate-200 animate-pulse " />
                          <div className="h-[35px] w-[35px] rounded-2xl z-20 -ml-[10px] bg-slate-200 animate-pulse " />
                          <div className="h-[35px] w-[35px] rounded-2xl z-10 -ml-[10px] bg-slate-200 animate-pulse " />
                          <div className="h-[35px] w-[35px] rounded-2xl z-0 -ml-[10px] bg-slate-200 animate-pulse " />
                        </>
                      </div>
                      <div className=" bg-slate-200 animate-pulse w-16 h-4 rounded-md"></div>
                    </div>
                    <div className="w-[85%] -space-y-[0.1px]">
                      <div className="font-medium w-28 bg-slate-200 rounded-lg text-[#3e3e3e]"></div>
                      <div className="text-[16px] text-center pt-2 h-28 bg-slate-200 text-ellipsis overflow-hidden  rounded-2xl  my-[14px]"></div>
                    </div>
                    <button className="text-white rounded-full bg-slate-200 animate-pulse w-[85%] h-[50px]"></button>
                  </div>
                  <div className="flex flex-col items-center max-w-[470px] h-[400px] min-w-[340px] border-[1px] md:max-lg:w-[400px] space-y-3 border-[#D4D2E3] rounded-3xl py-3">
                    <div className="w-[90px] h-[90px] bg-slate-200 animate-pulse rounded-[40px] shadow-md ring-1 ring-white"></div>
                    <div className="text-2xl text-center  bg-slate-200 animate-pulse w-28 rounded-xl h-10 font-semibold my-2"></div>

                    <div className="flex items-center">
                      <div className="flex flex-row justify-start z-0 w-[100%] items-center">
                        <>
                          <div className="h-[35px] w-[35px] rounded-2xl z-30 bg-slate-200 animate-pulse " />
                          <div className="h-[35px] w-[35px] rounded-2xl z-20 -ml-[10px] bg-slate-200 animate-pulse " />
                          <div className="h-[35px] w-[35px] rounded-2xl z-10 -ml-[10px] bg-slate-200 animate-pulse " />
                          <div className="h-[35px] w-[35px] rounded-2xl z-0 -ml-[10px] bg-slate-200 animate-pulse " />
                        </>
                      </div>
                      <div className=" bg-slate-200 animate-pulse w-16 h-4 rounded-md"></div>
                    </div>
                    <div className="w-[85%] -space-y-[0.1px]">
                      <div className="font-medium w-28 bg-slate-200 rounded-lg text-[#3e3e3e]"></div>
                      <div className="text-[16px] text-center pt-2 h-28 bg-slate-200 text-ellipsis overflow-hidden  rounded-2xl  my-[14px]"></div>
                    </div>
                    <button className="text-white rounded-full bg-slate-200 animate-pulse w-[85%] h-[50px]"></button>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {coms.length > 0 ? (
                  <Community coms={coms} />
                ) : (
                  <div className="flex flex-col bg-bgg bg-cover mx-8 rounded-2xl justify-center items-center">
                    <div className="flex justify-center items-center h-[60%] w-[60%] py-10">
                      <Image
                        src={comm}
                        className="md:h-[60%] md:w-[60%] h-[90%] w-[90%] object-contain"
                      />
                    </div>
                    <div className=" text-black text-center md:text-[24px] text-[18px] font-semibold">
                      Create Your Own Community Now
                    </div>

                    <div className=" text-black text-center text-[14px] font-medium ">
                      Once you add Products, they will appear here!
                    </div>
                    <div className=" w-[240px] my-2 h-[40px] flex justify-center items-center bg-black text-white rounded-2xl hover:scale-105 hover:bg-[#3e3e3e] duration-100 text-[14px] ">
                      Create Community
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Store section */}
          <div className="flex flex-col py-2 w-[100%] h-[80vh] justify-evenly items-center space-y-2">
            <div className="text-[21px] font-semibold text-center my-2 py-2">
              Store
            </div>
            {isLoading ? (
              <div className="flex pn:max-sm:flex-col gap-2">
                <div className="flex flex-col items-center max-w-[470px] h-[400px] min-w-[340px] border-[1px] md:max-lg:w-[400px] space-y-3 border-[#D4D2E3] rounded-3xl py-3">
                  <div className="w-[90px] h-[90px] bg-slate-200 animate-pulse rounded-[40px] shadow-md ring-1 ring-white"></div>
                  <div className="text-2xl text-center  bg-slate-200 animate-pulse w-28 rounded-xl h-10 font-semibold my-2"></div>

                  <div className="flex items-center">
                    <div className="flex flex-row justify-start z-0 w-[100%] items-center">
                      <>
                        <div className="h-[35px] w-[35px] rounded-2xl z-30 bg-slate-200 animate-pulse " />
                        <div className="h-[35px] w-[35px] rounded-2xl z-20 -ml-[10px] bg-slate-200 animate-pulse " />
                        <div className="h-[35px] w-[35px] rounded-2xl z-10 -ml-[10px] bg-slate-200 animate-pulse " />
                        <div className="h-[35px] w-[35px] rounded-2xl z-0 -ml-[10px] bg-slate-200 animate-pulse " />
                      </>
                    </div>
                    <div className=" bg-slate-200 animate-pulse w-16 h-4 rounded-md"></div>
                  </div>
                  <div className="w-[85%] -space-y-[0.1px]">
                    <div className="font-medium w-28 bg-slate-200 rounded-lg text-[#3e3e3e]"></div>
                    <div className="text-[16px] text-center pt-2 h-28 bg-slate-200 text-ellipsis overflow-hidden  rounded-2xl  my-[14px]"></div>
                  </div>
                  <button className="text-white rounded-full bg-slate-200 animate-pulse w-[85%] h-[50px]"></button>
                </div>
                <div className="flex flex-col items-center max-w-[470px] h-[400px] min-w-[340px] border-[1px] md:max-lg:w-[400px] space-y-3 border-[#D4D2E3] rounded-3xl py-3">
                  <div className="w-[90px] h-[90px] bg-slate-200 animate-pulse rounded-[40px] shadow-md ring-1 ring-white"></div>
                  <div className="text-2xl text-center  bg-slate-200 animate-pulse w-28 rounded-xl h-10 font-semibold my-2"></div>

                  <div className="flex items-center">
                    <div className="flex flex-row justify-start z-0 w-[100%] items-center">
                      <>
                        <div className="h-[35px] w-[35px] rounded-2xl z-30 bg-slate-200 animate-pulse " />
                        <div className="h-[35px] w-[35px] rounded-2xl z-20 -ml-[10px] bg-slate-200 animate-pulse " />
                        <div className="h-[35px] w-[35px] rounded-2xl z-10 -ml-[10px] bg-slate-200 animate-pulse " />
                        <div className="h-[35px] w-[35px] rounded-2xl z-0 -ml-[10px] bg-slate-200 animate-pulse " />
                      </>
                    </div>
                    <div className=" bg-slate-200 animate-pulse w-16 h-4 rounded-md"></div>
                  </div>
                  <div className="w-[85%] -space-y-[0.1px]">
                    <div className="font-medium w-28 bg-slate-200 rounded-lg text-[#3e3e3e]"></div>
                    <div className="text-[16px] text-center pt-2 h-28 bg-slate-200 text-ellipsis overflow-hidden  rounded-2xl  my-[14px]"></div>
                  </div>
                  <button className="text-white rounded-full bg-slate-200 animate-pulse w-[85%] h-[50px]"></button>
                </div>
                <div className="flex flex-col items-center max-w-[470px] h-[400px] min-w-[340px] border-[1px] md:max-lg:w-[400px] space-y-3 border-[#D4D2E3] rounded-3xl py-3">
                  <div className="w-[90px] h-[90px] bg-slate-200 animate-pulse rounded-[40px] shadow-md ring-1 ring-white"></div>
                  <div className="text-2xl text-center  bg-slate-200 animate-pulse w-28 rounded-xl h-10 font-semibold my-2"></div>

                  <div className="flex items-center">
                    <div className="flex flex-row justify-start z-0 w-[100%] items-center">
                      <>
                        <div className="h-[35px] w-[35px] rounded-2xl z-30 bg-slate-200 animate-pulse " />
                        <div className="h-[35px] w-[35px] rounded-2xl z-20 -ml-[10px] bg-slate-200 animate-pulse " />
                        <div className="h-[35px] w-[35px] rounded-2xl z-10 -ml-[10px] bg-slate-200 animate-pulse " />
                        <div className="h-[35px] w-[35px] rounded-2xl z-0 -ml-[10px] bg-slate-200 animate-pulse " />
                      </>
                    </div>
                    <div className=" bg-slate-200 animate-pulse w-16 h-4 rounded-md"></div>
                  </div>
                  <div className="w-[85%] -space-y-[0.1px]">
                    <div className="font-medium w-28 bg-slate-200 rounded-lg text-[#3e3e3e]"></div>
                    <div className="text-[16px] text-center pt-2 h-28 bg-slate-200 text-ellipsis overflow-hidden  rounded-2xl  my-[14px]"></div>
                  </div>
                  <button className="text-white rounded-full bg-slate-200 animate-pulse w-[85%] h-[50px]"></button>
                </div>
              </div>
            ) : (
              <>
                {" "}
                {product.length > 0 ? (
                  <div>
                    <Store product={product} isStore={bio.isStore} />
                  </div>
                ) : (
                  <div className="flex flex-col pn:max-md:bg-slate-100 mx-8 rounded-2xl justify-center items-center">
                    <div className="flex justify-center items-center h-[60%] w-[60%] py-10">
                      <Image
                        src={sto}
                        className="md:h-[60%] h-90%] w-90%] md:w-[60%] object-contain"
                      />
                    </div>
                    <div className=" text-black md:text-[24px] text-[18px] font-semibold">
                      No Products Yet
                    </div>
                    <div className=" text-black text-[14px] font-medium ">
                      Once you add Products, they will appear here!
                    </div>
                    <div className=" w-[240px] my-2 h-[40px] flex justify-center items-center bg-black text-white rounded-2xl hover:scale-105 hover:bg-[#3e3e3e] duration-100 text-[14px] ">
                      Add Product
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          <div className=" flex justify-center pt-2 items-center px-4">
            <div className=" w-[100%] h-[1px] rounded-full bg-slate-200"></div>
          </div>

          <div className="py-2 items-center justify-between px-2 w-[100%] mt-4 flex flex-row">
            <div className="flex flex-row items-center gap-2">
              <Image src={Logo} className="h-[35px] w-[35px] rounded-2xl" />
              <div className="text-black text-[18px] font-bold font-sans">
                Grovyo
              </div>
            </div>
            <div className="text-black text-[12px] font-sans">
              Copyright © 2023 Grovyo Templates | All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
