import React, { useState, useEffect } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const CareerData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://recruiter.mightyrecruiter.com/widget/GetWidgetDetails/104775?compid=109096&pageno=1&pagesize=20"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.ResultList);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-white bg-main font-medium rounded-lg text-sm px-5 py-2.5 text-center flex w-2/12 mx-auto mt-4 mb-20">
        <svg
          aria-hidden="true"
          role="status"
          className="inline w-4 h-4 mr-3 text-white animate-spin"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
        Loading...
      </div>
    );
  }

  return (
    <div className="mb-20">
      {data.map((card) => (
        <div
          className="w-10/12 flex flex-col lg:w-8/12 lg:flex-row lg:items-center lg:py-5 lg:px-10 gap-5 pr-4 pb-4 bg-main rounded-xl mx-auto mt-4 mb-2"
          key={card.ID}
        >
          <h1 className="font-worksans font-normal lg:w-6/12 text-xl sm:text-3xl lg:text-xl lg:m-0 text-white mt-7 ml-7">
            {card.Title}
          </h1>

          <div className="flex flex-row ml-7 lg:w-4/12 lg:m-0">
            <IoLocationSharp color="white" size={22} />
            <span className="font-worksans font-normal text-lg sm:text-2xl lg:text-lg text-white -mt-px ml-1">
              {card.City}
            </span>
          </div>

          <Link
            to="basvur"
            className="py-3 self-end w-6/12 lg:w-2/12 lg:ml-auto bg-secondary rounded-xl font-worksans font-normal text-base sm:py-5 sm:text-2xl lg:py-3 lg:text-base text-center text-third"
          >
            Başvur
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CareerData;
