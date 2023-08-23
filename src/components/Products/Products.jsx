import "./products.css";

function Products({ productType, products, handlerAddProduct, handleCountPlus, count }) {

  console.log(products,'ggg')

  const filteredProducts = products.filter(product => product.type === productType);


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
             
             
                <div className="title center" >
                  <p>{product.name}</p>
                </div>
                
                <div className="price center">
                  <p>${product.price}</p>
                </div>
            </div>
            <div className="div-button">
            <button className="button-count" onClick={() =>{
              handlerAddProduct(product) ;
              handleCountPlus(count);
            } }
            >Add</button>
            </div>
          </div>
        ))}
      </div>
  
  );
}

export default Products;
