import { useEffect, useState } from "react";
import { getCategories, getCategory, getProducts, searchProducts } from "./api";
import Card from "./components/Card";
import Limit from "./components/Limit";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [limit, setLimit] = useState(50);
  const [searchQuery, setSeachQuery] = useState("");

  useEffect(() => {
    getProducts(limit).then(({ products }) => {
      setProducts(products);
    });
  }, [limit]);

  useEffect(() => {
    searchProducts(searchQuery).then(({ products }) => {
      setProducts(products);
    });
  }, [searchQuery]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      getCategory(selectedCategory).then((data) => {
        console.log("data =>", data);
        setProducts(data.products);
      });
    }
  }, [selectedCategory]);

  return (
    <div className="App">
      <Limit limitHandler={setLimit} />
      <div className="container mt-3">
        <div className="row">
          <div className="col-3">
            <ul className="list-group">
              <li
                style={{ cursor: "pointer" }}
                className="list-group-item"
                onClick={() => setLimit(100)}
              >
                ALL
              </li>
              {categories.map((cateogry) => (
                <li
                  style={{ cursor: "pointer" }}
                  className="list-group-item"
                  key={cateogry}
                  onClick={() => setSelectedCategory(cateogry)}
                >
                  {cateogry}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-9">
            <div className="row">
              {products.map((product) => (
                <div className="col-3" key={product.id}>
                  <Card product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
