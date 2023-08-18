
export default function Pedido () {
    return <h1>Hello Pedidos</h1>;
  }


  

// const waiter = () => {
//   const [productsSelected, setProductsSelected] = useState([]);
//   const addProduct = () => {};

//   return (
//     <>
//     <productList onAdd={addProduct}></productList>
//     <createOrder products={productsSelected}></createOrder>
//     </>
//   );
// }

// const productList = ({onAdd}) => {

//   return (
//     <>
//     Productos para elegir:
//     <ul>
//       <li onClick={onAdd}>Producto 1</li>
//       <li onClick={onAdd}>Producto 2</li>
//       <li onClick={onAdd}>Producto 3</li>
//       <li onClick={onAdd}>Producto 4</li>
//       <li onClick={onAdd}>Producto 5</li>
//       <li onClick={onAdd}>Producto 6</li>
//       <li onClick={onAdd}>Producto 7</li>
//     </ul>
//     </>
//   );
// }

// const createOrder = ({products}) => {

//   return (
//     <>
//     Tu orden tiene los siguiente productos agregados:
//     <ul>
//       {products.map((p) => <li>{p.name}</li>)}
//     </ul>
//     total: $90000
//     </>
//   );
// }

