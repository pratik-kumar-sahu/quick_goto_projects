import "./App.scss";
import data from "./product.json";
import ProductCard from "./components/ProductCard";
import { useState } from "react";

export default function App() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [productData, setProductData] = useState(data);

  const handleFilters = (e) => {
    e.preventDefault();
    if (selectedFilter === "Adidas") {
      setProductData(data.filter((e) => e.brand === "Adidas"));
    } else if (selectedFilter === "Sparx") {
      setProductData(data.filter((e) => e.brand === "Sparx"));
    } else if (selectedFilter === "Men") {
      setProductData(data.filter((e) => e.ideal.includes("Men")));
    } else if (selectedFilter === "Women") {
      setProductData(data.filter((e) => e.ideal.includes("Women")));
    } else if (selectedFilter === "Kids") {
      setProductData(data.filter((e) => e.ideal.includes("Kids")));
    } else {
      setProductData(data);
    }
  };

  return (
    <div className="app">
      <div className="app__left">
        <form onSubmit={handleFilters}>
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value="" disabled>
              Not selected
            </option>
            <option value="Adidas">Adidas</option>
            <option value="Sparx">Sparx</option>
            <option value="Men">ideal for men</option>
            <option value="Women">ideal for women</option>
            <option value="Kids">ideal for kids</option>
          </select>
          <button type="submit">Apply</button>
        </form>
        <button
          style={{ marginTop: "1rem" }}
          onClick={() => setProductData(data)}
        >
          Clear filters
        </button>
      </div>
      <div className="app__right">
        {productData.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
