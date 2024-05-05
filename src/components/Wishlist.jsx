import React, { useEffect, useState } from "react";
import heart from "./assets/heart.svg";
import redHeart from "./assets/red-heart.svg";
import { FaBatteryFull } from "react-icons/fa";
import { MdCamera } from "react-icons/md";

const getData = () => {
  let data = localStorage.getItem("state");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Wishlist = () => {
  const [data, setData] = useState(getData);

  const deleteData = (idx) => {
    data.splice(data.indexOf(data[idx]), 1);
    setData([...data]);
  };

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <div className="sectionHeader flex items-center justify-between mt-8 font-bold">
        <p className="text-xl text-[#55868C]">Your Collection</p>
      </div>
      <div className="card mt-8 flex flex-wrap gap-8">
        {data.length > 0 ? (
          data.map((phone, idx) => {
            return (
              <div
                key={idx}
                className="cardItems w-[325px] h-fit bg-white rounded-lg shadow-md"
              >
                <div className="cardImage w-full h-[200px] rounded-t-lg">
                  <img
                    className="h-full mx-auto"
                    src={phone.Thumbnail}
                    alt="phone_picture"
                  />
                </div>
                <div className="cardDetails py-4 px-3">
                  <div>
                    <span className="locationAndPrice w-4/5">
                      <span className="text-[#7065F0] text-2xl font-bold">
                        $ {phone.Price}
                      </span>
                      <p className="pt-2 text-lg font-bold">{phone.Brand}</p>
                    </span>
                    <img
                      className="border-2 border-[#b9b9b9] p-2 rounded-[50%] cursor-pointer active:bg-[#ff6b6b60] active:border-2 active:border-red-600"
                      width={"40px"}
                      src={!phone.isclick ? heart : redHeart}
                      alt="heart"
                      onClick={() => deleteData(idx)}
                    />
                  </div>
                  <div className="bedBath flex items-center border-t-2 border-t-[#b9b9b9] justify-between mt-8 p-2">
                    <span className="w-[120px] gap-2 flex items-center justify-evenly p-2 text-[#858585] hover:bg-[#E9E7F9] rounded-lg cursor-pointer">
                      <MdCamera className="h-6 w-6 text-[#7F636E]" />
                      <p>{phone.Camera}&nbsp;MP</p>
                    </span>
                    <span className="w-[120px] gap-2 flex items-center justify-evenly p-2 text-[#858585] hover:bg-[#E9E7F9] rounded-lg cursor-pointer">
                      <FaBatteryFull className="h-6 w-6 text-[#7F636E]" />
                      <p>{phone.Battery}&nbsp;mAh</p>
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col justify-center items-center space-y-8">
            <img
              className="h-1/2 w-1/2"
              src="./images/emtpy_cart.svg"
              alt="empty_cart"
            />
            <p className="font-semibold text-xl text-[#55868C]">
              Add some items
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
