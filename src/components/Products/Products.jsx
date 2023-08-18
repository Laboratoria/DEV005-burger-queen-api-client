import Buttons from "../Buttons/Buttons";

import "./products.css";

function Products({ productType, products, handlerAddProduct }) {
  const filteredProducts = products.filter(
    (product) => product.type === productType
  );

  return (
    <div className="seccion-products">
      <div className="div-products">
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <div>
              <img src={product.image} alt={product.name} />
            </div>
            <div>
              <p>{product.name}</p>
            </div>
            <div>
              <p>{product.price}</p>
            </div>
            <button onClick={() => handlerAddProduct(product)}>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
