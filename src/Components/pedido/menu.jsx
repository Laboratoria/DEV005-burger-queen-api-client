
function Menu({ menuItems, onAddToCart }) {
  
  return (
    <div className="menu-container">
      
      <div className="product-section">
        {menuItems.map((product) => (
          <div className="product-info" key={product.id}>
            <div className="product-item">
            <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                  />
              <h5>{product.name}</h5>
              <div className="precio-agregar"> 
              <p className="precio">${product.price}</p>
              <button onClick={() => onAddToCart(product)} className='btnProduct'>Agregar</button>
              </div>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;





// function Menu({ menuItems, onAddToCart }) {
  
//   return (
//     <div className="menu-container">
//       <h2>Menú</h2>
//       <ul className="menu-list">
//         {menuItems.map((product) => (
//           <div key={product.id}>
//             <div className="product-item">
//             <img
//                     className="product-img-admon-menu"
//                     src={product.image}
//                     alt={product.name}
//                   />
//               <h3>{product.name}</h3>
//               <p className="precio">${product.price}</p>
              
//             </div>
//             <button onClick={() => onAddToCart(product)} className='btnProduct'>Agregar</button>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Menu;


