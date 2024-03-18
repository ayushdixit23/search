"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

function page({ params }) {
  const [data, setData] = useState(null);
  function decodeUsernameAndNumber(encodedString) {
    const decodedString = decodeURIComponent(encodedString);
    return decodedString;
  }
  const fetchData = async () => {
    try {
      const res = await axios.post(
        "https://work.grovyo.xyz/api/v1/getprosite",
        // "http://localhost:7190/api/v1/getprosite",
        {
          username: decodeUsernameAndNumber(params.id),
        }
      );
      console.log(res.data);
      setData(res.data?.prosite);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (params.id) {
      fetchData();
    }
  }, [params.id]);

  return (
    <div>
      <div className="h-[80vh] w-[80vw] bg-slate-400 flex justify-center items-center">
        {data ? (
          <div dangerouslySetInnerHTML={{ __html: data }} />
        ) : (
          <>
            <div className="flex flex-col w-full justify-center items-center">
              <div>Get Ready to form your own personalise space.</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default page;