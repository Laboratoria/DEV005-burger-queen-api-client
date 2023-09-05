import "./products.css";

function Products({ productType, products, handlerAddProduct, handleEditProduct, handleDeleteProduct, showButtons }) {
  //console.log(products, "ggg");
  
  let filteredProducts = products;

  if (productType !== "") {
    filteredProducts = products.filter((product) => product.type === productType);
  }


  return (
    <div className="div-products">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product">
          <div className="product-description">
            <div className="center">
              <img
                src={product.image}
                width="100px"
                height="100px"
                alt={product.name}
              />
            </div>

            <div className="title center">
              <p>{product.name}</p>
            </div>

            <div className="price center">
              <p>${product.price}</p>
            </div>
          </div>
          <div className="div-button">
          {showButtons.add && ( // Muestra el botón "Add" si showButtons.add es true
              <button
                className="button-count"
                onClick={() => {
                  handlerAddProduct(product);
                }}
              >
                Add
              </button>
            )}
             {showButtons.edit && 
              <button
                className="button-admin"
                onClick={() => {
                  handleEditProduct(product.id);
                }}
                
              >
                 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#FB6D3B"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                  <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                  <path d="M16 5l3 3" />
                </svg>
              </button>
            }
            {showButtons.delete && ( // Muestra el botón "Eliminar" si showButtons.delete es true
              <button
                className="button-admin"
                onClick={() => {
                  handleDeleteProduct(product.id);
                }}
              >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  strokeWidth="1"
                  stroke="#FB6D3B"
                  fill="none"
                >
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;