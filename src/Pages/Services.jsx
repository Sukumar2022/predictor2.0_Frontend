import React, { useState, useEffect } from "react";
import axios from "axios";
import SelectBox from "../Components/SelectBox";
import PriceSlider from "../Components/PriceSlider";
import DashboardCharts from "../Components/DashboardCharts";
import ReviewCard from "../Components/charts/ReviewCard";

const Services = () => {
  const [allProducts, setAllProducts] = useState([]);

  const [category, setCategory] = useState("");
  const [productType, setProductType] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(500);

  const [categories, setCategories] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [productNames, setProductNames] = useState([]);

  const API_URL = "http://127.0.0.1:8000/api/products/";

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        const rawData = response.data;
        setAllProducts(rawData);
        const uniqueCategories = [
          ...new Set(rawData.map((item) => item.category)),
        ];

        const categoryOptions = uniqueCategories.map((cat) => ({
          value: cat,
          label: cat.charAt(0).toUpperCase() + cat.slice(1),
        }));

        setCategories(categoryOptions);
      })
      .catch((err) => console.error("Error loading initial inventory:", err));
  }, []);

  useEffect(() => {
    if (!category) {
      setProductTypes([]);
      setProductType("");
      return;
    }

    const filteredItems = allProducts.filter(
      (item) => item.category === category,
    );
    const uniqueSubcats = [
      ...new Set(filteredItems.map((item) => item.subcategory)),
    ];

    const typeOptions = uniqueSubcats.map((sub) => ({
      value: sub,
      label: sub.charAt(0).toUpperCase() + sub.slice(1),
    }));

    setProductTypes(typeOptions);
    setProductType("");
    setProductNames([]);
    setProductName("");
  }, [category, allProducts]);

  useEffect(() => {
    if (!productType) {
      setProductNames([]);
      setProductName("");
      return;
    }

    const filteredItems = allProducts.filter(
      (item) => item.category === category && item.subcategory === productType,
    );

    const nameOptions = filteredItems.map((item) => ({
      value: item.name,
      label: item.name,
    }));

    setProductNames(nameOptions);
    setProductName("");
  }, [productType, category, allProducts]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      category: category,
      product_type: productType,
      product_name: productName,
      price: price,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/predict/",
        payload,
      );
      console.log("Prediction success:", response.data);
    } catch (error) {
      console.error("Prediction request failed:", error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0d0f12] text-gray-100 font-sans antialiased p-4 md:p-6 lg:p-8 selection:bg-blue-500/30 selection:text-blue-200">
      {/* Dynamic Workspace Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* ================= SIDEBAR CONFIGURATOR ================= */}
        <div className="lg:col-span-4 bg-[#14171c]/90 border border-gray-800/60 rounded-3xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden group">
          {/* Subtle Cybernetic Top Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-80" />

          <div className="w-full flex flex-col gap-6">
            <header className="flex items-center gap-3 border-b border-gray-800/60 pb-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-inner">
                <i className="ri-box-3-line text-xl"></i>
              </div>
              <div>
                <h3 className="fun-font text-lg font-bold text-white tracking-wide capitalize">
                  Configurator
                </h3>
                <p className="text-xs text-gray-400 font-medium tracking-tight">
                  Tune variables to run the engine
                </p>
              </div>
            </header>

            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-5"
            >
              <div className="w-[96%] grid grid-cols-1 gap-3.5 sm:gap-4 max-w-full overflow-hidden">
                <SelectBox

                  required
                  label="Category"
                  options={categories}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <SelectBox
                  label="Product Type"
                  options={productTypes}
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  disabled={!category}
                />
                <SelectBox
                  label="Product Name"
                  options={productNames}
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  disabled={!productType}
                />
              </div>

              <div className="mt-2 bg-[#1a1f26] border border-gray-800/40 p-4 rounded-2xl shadow-inner">
                <PriceSlider
                  min={500}
                  max={150000}
                  step={50}
                  value={price}
                  onChange={setPrice}
                />
              </div>

              <button
                type="submit"
                className="w-full pop-font font-semibold text-sm py-3.5 px-4 rounded-2xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_25px_rgba(37,99,235,0.4)] transition-all duration-300 active:scale-[0.97] cursor-pointer mt-4 flex items-center justify-center gap-2 tracking-wide"
              >
                <span>Predict Best E-Shop</span>
                <i className="ri-arrow-right-line text-base"></i>
              </button>
            </form>
          </div>
        </div>

        {/* ================= ANALYTICS MONITOR ================= */}
        <div className="lg:col-span-8 bg-[#14171c]/90 border border-gray-800/60 rounded-3xl shadow-2xl p-6 relative overflow-hidden backdrop-blur-md min-h-[500px] flex flex-col justify-between">
          {/* Geometric subtle decoration dot grids */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <header className="flex items-center justify-between border-b border-gray-800/60 pb-4 mb-6 w-full">
            <div className="flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h4 className="text-sm font-bold tracking-wider uppercase text-gray-400 block-font">
                Analytical Monitor
              </h4>
            </div>
            <span className="text-[10px] bg-gray-800 border border-gray-700/50 text-gray-300 font-mono px-2 py-0.5 rounded-md uppercase tracking-tight">
              Real-time Output
            </span>
          </header>

          {/* Dashboard Canvas rendering space */}
          <div className="w-full flex-grow flex items-center justify-center relative z-10 overflow-hidden rounded-xl bg-[#0d0f12]/40 border border-gray-900/50 p-2 md:p-4">
            <DashboardCharts />
          </div>
        </div>

        {/* ================= TESTIMONIAL / FOOTER TRACK ================= */}
        <div className="col-span-1 lg:col-span-12 mt-4">
          <ReviewCard />
        </div>
      </div>
    </div>
  );
};

export default Services;
