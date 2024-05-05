import React, { useEffect, useState } from "react";
import heart from "./assets/heart.svg";
import DataE from "../data/Data";
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

const Main = () => {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("Under ₹ 100000");
  const [camera, setCamera] = useState("Under 30 MP");
  const [battery, setBattery] = useState("Under 6000 mAh");
  const [newData, setNewData] = useState([DataE]);
  const [saveData, setSaveData] = useState(getData);
  const cost = parseInt(price.split(" ")[2]);
  const cameras = parseInt(camera.split(" ")[1]);
  const batteries = parseInt(battery.split(" ")[1]);

  useEffect(() => {
    const FilterData = DataE.filter((Data) => {
      if (
        Data.Brand.startsWith(brand) &&
        Data.Price <= cost &&
        Data.Camera <= cameras &&
        Data.Battery <= batteries
      ) {
        return true;
      }
      return false;
    });
    setNewData(FilterData);
  }, [brand, cost, cameras, batteries]);

  const SavedDataOnClick = (idx) => {
    if (saveData.indexOf(DataE[idx]) === -1) {
      setSaveData([...saveData, DataE[idx]]);
      newData[idx].isclick = true;
    } else {
      saveData.splice(saveData.indexOf(DataE[idx]), 1);
      setSaveData([...saveData]);
      newData[idx].isclick = !true;
    }
  };

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(saveData));
  }, [saveData]);

  return (
    <div>
      <div className="sectionHeader flex items-center justify-between mt-8 font-bold">
        <p className="text-4xl">
          Your Portal to <span className="text-[#55868C]">Prestige</span>
        </p>
      </div>
      <div className="filterResult flex items-center justify-between mt-8 bg-[#FFFEFE] p-4 text-base rounded-lg">
        <div className="flex flex-col w-[250px] px-4">
          <span>Brand</span>
          <select
            className="outline-0 text-lg font-bold h-fit w-full border-0 rounded-sm mr-8 py-2 hover:cursor-pointer"
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value={""}>All Brands</option>
            <option>Google</option>
            <option>Apple</option>
            <option>Asus</option>
            <option>Samsung</option>
            <option>Xiaomi</option>
            <option>Nothing</option>
            <option>OnePlus</option>
            <option>Motorola</option>
          </select>
        </div>
        <div className="flex flex-col w-[200px] px-4 border-l-2 border-[#d8d8d8]">
          <span>Price</span>
          <select
            className="outline-0 text-lg font-bold h-fit w-full border-0 rounded-sm mr-8 py-2 hover:cursor-pointer"
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value={"Under ₹ 100000"}>All Prices</option>
            <option>Under ₹ 25000</option>
            <option>Under ₹ 35000</option>
            <option>Under ₹ 50000</option>
            <option>Under ₹ 65000</option>
            <option>Under ₹ 100000</option>
          </select>
        </div>
        <div className="flex flex-col w-[200px] px-4 border-l-2 border-[#d8d8d8]">
          <span>Rear Camera</span>
          <select
            className="outline-0 text-lg font-bold h-fit w-full border-0 rounded-sm mr-8 py-2 hover:cursor-pointer"
            onChange={(e) => setCamera(e.target.value)}
          >
            <option value={"Under 35 MP"}>Under Max</option>
            <option>Under 8 MP</option>
            <option>Under 10 MP</option>
            <option>Under 15 MP</option>
            <option>Under 25 MP</option>
            <option>Under 30 MP</option>
          </select>
        </div>
        <div className="flex flex-col w-[200px] px-4 border-l-2 border-[#d8d8d8]">
          <span>Battery</span>
          <select
            className="outline-0 text-lg font-bold h-fit w-full border-0 rounded-sm mr-8 py-2 hover:cursor-pointer"
            onChange={(e) => setBattery(e.target.value)}
          >
            <option value={"Under 6500 mAh"}>Under Max</option>
            <option>Under 4000 mAh</option>
            <option>Under 4500 mAh</option>
            <option>Under 5000 mAh</option>
            <option>Under 5500 mAh</option>
            <option>Under 6000 mAh</option>
          </select>
        </div>
      </div>
      {newData.length > 0 ? (
        <div className="card mt-8 flex flex-wrap gap-8">
          {newData.map((phone, idx) => {
            console.log(!!newData + "boolean----------------------");
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
                  <div className="flex justify-between items-center">
                    <span className="locationAndPrice w-4/5">
                      <span className="text-[#7F636E] text-2xl font-bold">
                        ₹ {phone.Price}
                      </span>
                      <p className="pt-2 text-lg font-bold">{phone.Brand}</p>
                    </span>
                    <img
                      className="border-2 border-[#b9b9b9] p-2 rounded-[50%] cursor-pointer active:bg-[#ff6b6b60] active:border-2 active:border-red-600"
                      width={"40px"}
                      src={newData[idx]?.isclick ? redHeart : heart}
                      alt="heart"
                      onClick={() => SavedDataOnClick(idx)}
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
          })}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center space-y-8 mt-20">
          <img
            className="h-1/4 w-1/4"
            src="./images/no_data.svg"
            alt="empty_cart"
          />
          <p className="font-semibold text-xl text-[#55868C]">No items found</p>
        </div>
      )}
    </div>
  );
};

export default Main;
