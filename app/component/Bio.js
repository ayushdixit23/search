import React from "react";
import { BsWhatsapp, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaSnapchatSquare } from "react-icons/fa";

const Bio = ({ bio }) => {
  const isLoading = !bio;
  console.log(bio);
  return (
    <>
      {bio?.isAbout && (
        <div>
          <div className="text-xl font-semibold">Bio</div>

          <>
            <div
            
            >
              {bio?.bio}
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <div>Contact Information:</div>
              <div>Email : {bio?.email}</div>
              <div>Phone : +{bio?.phone}</div>
              <div>Links:</div>
              <div className="flex w-full text-black items-center flex-wrap">
                <div className="flex w-full text-black items-center flex-wrap">
                  {bio?.links.yt != "undefined" && (
                    <a
                      target="_blank"
                      href={bio?.links.yt}
                      className="flex justify-between py-2 px-5 m-2 items-center space-x-2 bg-white rounded-lg"
                    >
                      <BsYoutube className="text-red-600" />

                      <div className="text-sm font-medium">Youtube</div>
                    </a>
                  )}
                  {bio?.links?.insta != "undefined" && (
                    <a
                      target="_blank"
                      href={bio?.links?.insta}
                      className="flex justify-between py-2 px-5 m-2 items-center space-x-2 bg-white rounded-lg"
                    >
                      <BsInstagram className="text-red-600" />

                      <div className="text-sm font-medium">Instagram</div>
                    </a>
                  )}

                  {bio?.links?.x != "undefined" && (
                    <a
                      target="_blank"
                      href={bio?.links?.x}
                      className="flex justify-between py-2 px-5 m-2 items-center space-x-2 bg-white rounded-lg"
                    >
                      <BsWhatsapp className="text-green-600" />

                      <div className="text-sm font-medium">X</div>
                    </a>
                  )}
                  {bio?.links?.linkdin != "undefined" && (
                    <a
                      target="_blank"
                      href={bio?.links?.linkdin}
                      className="flex justify-between py-2 px-5 m-2 items-center space-x-2 bg-white rounded-lg"
                    >
                      <BsLinkedin className="text-blue-600 text-sm font-medium" />

                      <div className="text-sm font-medium">Linkedin</div>
                    </a>
                  )}
                  {bio?.links?.snap != "undefined" && (
                    <a
                      target="_blank"
                      href={bio?.links?.snap}
                      className="flex justify-between py-2 px-5 m-2 items-center space-x-2 bg-white rounded-lg"
                    >
                      <FaSnapchatSquare className=" text-[#FFFF00]" />

                      <div className="text-sm font-medium">Snapchat</div>
                    </a>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:hidden space-y-2">
                {/* <div className="vs:text-xl font-bold">
                    Achievements/Awards:
                  </div>
                  <div>Best Travel Blog Award (2021)</div>
                  <div>Published articles in National Geographic Traveler</div> */}
                <div>
                  <span className="font-semibold">Joined On</span> : March 2023
                </div>
              </div>
            </div>
          </>
        </div>
      )}
    </>
  );
};

export default Bio;
