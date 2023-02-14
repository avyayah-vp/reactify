import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    // console.log(filter);
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-4">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-4">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-4">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-4">
          <Skeleton height={350}/>
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category.name === cat);
    setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-around mt-5 py-2">
          <button className="btn btn-outline-dark" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark" onClick={() => filterProduct("Men Clothes")}>Men Clothes</button>
          <button className="btn btn-outline-dark" onClick={() => filterProduct("Women Clothes")}>Women Clothes</button>
          {/* <button className="btn btn-outline-dark" onClick={() => filterProduct("change title")}>Jewellery</button> */}
          <button className="btn btn-outline-dark" onClick={() => filterProduct("Jonathan")}>Shoes</button>
          <button className="btn btn-outline-dark" onClick={() => filterProduct("Others")}>Others</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-4 mb-4 mt-3">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    className="card-img-top"
                    src={product.category.image}
                    alt={product.title}
                    height="300px"
                    width="200px"
                  />
                  <div className="card-body">
                    <h3 className="card-title mb-0 mt-2">{product.title}</h3>
                    <p className="card-text mt-2 fw-bolder">₹ {product.price}</p>
                    <a href="#" className="btn btn-primary">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div>
        <div className="container my-5 pb-5">
          <div className="row">
            <div className="col-12">
              <h1 className="display-6 fw-bolder text-center">New Arrivals</h1>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
          {/* <div className="row justify-content-center">
            <ShowProducts />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Products;
