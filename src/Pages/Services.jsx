// import React, { useState } from "react";
// import SelectBox from "../Components/SelectBox";
// import PriceSlider from "../Components/PriceSlider";
// import DashboardCharts from "../Components/DashboardCharts";

// const Services = () => {
//   const [category, setCategory] = useState("");
//   const [productType, setproductType] = useState("");
//   const categories = [
//     { value: "electronics", label: "Electronics" },
//     { value: "Home Appliance", label: "Home Appliance" },
//     { value: "Electrical & Accessories", label: "Electrical & Accessories" },
//     { value: "Kitchen Appliances", label: "Kitchen Appliances" },
//   ];
//   const product_type = [
//     { value: "mobile", label: "Mobile" },
//     { value: "laptop", label: "Laptop" },
//     { value: "tablet", label: "Tablet" },
//   ];
//   const [price, setPrice] = useState(500);
//   const [open, setOpen] = useState(true);

//   return (
//     <>
//       <div className="min-h-160vh h-auto w-full bg-red-200 relative flex justify-center items-center">
//         <div className="pop-font h-auto w-full relative p-3 bg-[#2a262b]">
//           {/* sidebar icon  */}
//           {!open && (
//             <div
//               onClick={() => setOpen(true)}
//               className="absolute top-5 left-5 text-3xl text-white cursor-pointer z-50"
//             >
//               <i className="ri-arrow-right-double-line"></i>
//             </div>
//           )}

//           {/* ----side bar---- */}
//           <div
//             className={`side-bar relative duration-500
//               h-200 w-90 bg-[#1f1f1f] text-white
//               left-0 bottom-0 rounded-xl flex flex-col
//               justify-center items-center gap-3 shadow-2xl
//               ${open ? "translate-x-0" : "-translate-x-110"}
//             `}
//           >
//             <p
//               className="absolute top-2 right-5 text-3xl hover: cursor-pointer"
//               onClick={() => setOpen(!open)}
//             >
//               <i class="ri-arrow-left-double-fill"></i>
//             </p>
//             <h3 className="fun-font text-white text-2xl capitalize">
//               <i className="ri-box-3-line"></i> your selection
//             </h3>
//             <form>
//               <SelectBox
//                 label="Category"
//                 options={categories}
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               />
//               <SelectBox
//                 label="Product Type"
//                 options={product_type}
//                 value={productType}
//                 onChange={(e) => setproductType(e.target.value)}
//               />
//               <PriceSlider
//                 min={500}
//                 max={150000}
//                 step={50}
//                 value={price}
//                 onChange={setPrice}
//               />

//               <button className="pop-font bg-blue-500 text-white text-sm p-3 capitalize rounded mt-12 hover: cursor-pointer">
//                 Predict Best E-Shop
//               </button>
//             </form>
//           </div>

//           {/* right-section */}
//           {/* results will be shown here */}

//           <div
//             className={`min-h-162 p-10 rounded-xl max-w-full bg-[#1f1f1f]
//                 absolute m-2 right-0 top-1 transition-all duration-500
//                 ${open ? "w-[70%]" : "w-[95%]"}
//               `}
//           >
//             <DashboardCharts />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;

import React from "react";
import { useState } from "react";
import SelectBox from "../Components/SelectBox";
import PriceSlider from "../Components/PriceSlider";
import DashboardCharts from "../Components/DashboardCharts";

const Services = () => {
  const [category, setCategory] = useState("");
  const [productType, setproductType] = useState("");
  const [productName, setproductName] = useState("");

  const categories = [
    { value: "electronics", label: "Electronics" },
    { value: "Home Appliance", label: "Home Appliance" },
    { value: "Electrical & Accessories", label: "Electrical & Accessories" },
    { value: "Kitchen Appliances", label: "Kitchen Appliances" },
  ];
  const product_type = [
    { value: "mobile", label: "Mobile" },
    { value: "laptop", label: "Laptop" },
    { value: "tablet", label: "Tablet" },
  ];
  const product_name = [
    { value: "iphone_15", label: "iPhone 15" },
    { value: "samsung_s24", label: "Samsung Galaxy S24" },
    { value: "pixel_8", label: "Google Pixel 8" },
    { value: "oneplus_12", label: "OnePlus 12" },
    { value: "xiaomi_14", label: "Xiaomi 14" },
    { value: "realme_gt5", label: "Realme GT 5" },
  ];
  
  const [price, setPrice] = useState(500);
  // const [open, setOpen] = useState(true);
  return (
    <div className="min-h-[110vh] h-auto w-full justify-between items-center flex flex-wrap p-4 gap-4 ">
      {/* left sidebar  */}

      <div className="l_sideNav min-h-40 h-auto w-full relative duration-500 bg-[#1f1f1f] text-white left-0 bottom-0 rounded-xl flex flex-col justify-baseline items-center gap-3 shadow-2xl p-4 lg:w-110 lg:h-188">
        {/* <p className="absolute top-2 right-5 text-3xl hover: cursor-pointer">
          <i class="ri-arrow-left-double-fill"></i>
        </p> */}
        <h3 className="fun-font text-white text-2xl capitalize">
          <i className="ri-box-3-line"></i> your selection
        </h3>
        <form>
          <SelectBox
            label="Category"
            options={categories}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <SelectBox
            label="Product Type"
            options={product_type}
            value={productType}
            onChange={(e) => setproductType(e.target.value)}
          />
          <SelectBox
            label="Product Name"
            options={product_name}
            value={productName}
            onChange={(e) => setproductName(e.target.value)}
          />
          <PriceSlider
            min={500}
            max={150000}
            step={50}
            value={price}
            onChange={setPrice}
          />
          <button className="pop-font bg-blue-500 text-white text-sm p-3 capitalize rounded mt-12 hover: cursor-pointer">
            Predict Best E-Shop
          </button>
        </form>
      </div>

      {/* right section  */}

      <div className="r_sideContent h-auto w-full bg-[#1f1f1f] flex justify-around items-center flex-wrap p-4 rounded-2xl lg:w-210">
        <DashboardCharts />
      </div>
    </div>
  );
};

export default Services;
