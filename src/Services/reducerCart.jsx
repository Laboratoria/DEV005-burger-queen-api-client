/*funcion reducer */

export const TYPES = {
    ADD_TO_CART: "ADD_TO_CART",
    DELETE_ALL_FROM_CART: "DELETE_ALL_FROM_CART",
    DELETE_PRODUCT_FROM_CART: "DELETE_PRODUCT_FROM_CART",
    CALCULATE_TOTAL_PRICE_OF_THE_CART: "CALCULATE_TOTAL_PRICE_OF_THE_CART",
    DECREASE_QUANTITY_FROM_CART: "DECREASE_QUANTITY_FROM_CART",
    DELETE_ONE_PRODUCT_FROM_CART: "DELETE_ONE_PRODUCT_FROM_CART",
  }

 
export const productsInitialState = {
  products: [
    {
        id: 1,
        image: "https://raw.githubusercontent.com/ssinuco/burger-queen-api-mock/main/resources/images/sandwich.png",
        name : "Sandwich de jamón y queso",
        price
        : 
        1000,
        type
        : 
        "Desayuno"  
    },
    {
        id: 2,
        image: "https://raw.githubusercontent.com/ssinuco/burger-queen-api-mock/main/resources/images/coffee.png",
        name: "Café americano",
        price: 500,
        type: "Desayuno"
    },
    {
        id: 3,
        image: "https://raw.githubusercontent.com/ssinuco/burger-queen-api-mock/main/resources/images/water.png",
        name: "Agua 500ml",
        price: 500,
        type: "Almuerzo"
    }
  ],
  cart: [],
  totalPriceShoppingCart: 0
}

export const reducerCart = (state, action) => {
 
  switch (action.type) {

    //agrega productos al carrito
    case TYPES.ADD_TO_CART: {
     
    const existingProduct = state.cart.find(item => item.product.id === action.payload);

      if (existingProduct) {
        // Si el producto ya está en el carrito, incrementa su cantidad
        return {
          ...state,
          cart: state.cart.map(item =>
            item.product.id === action.payload
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        };
      } else {
        // Si el producto no está en el carrito, agrégalo con cantidad 1
        const productToAdd = state.products.find(item => item.id === action.payload);
        return {
          ...state,
          cart: [...state.cart, { product: productToAdd, qty: 1 }]
        };
      }
    }


    
   // elimina de a 1 la cantidad de productos del pedido
    case TYPES.DELETE_PRODUCT_FROM_CART: {
      const existingProduct = state.cart.find(item => item.product.id === action.payload);
      if (existingProduct && existingProduct.qty > 1) {
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.payload
            ? { ...item, qty: item.qty - 1 }
            : item
        )
      };
    } else { 
      // Elimina el producto del carrito si la cantidad es 1 o menos
      return {
        ...state,
        cart: state.cart.filter(item => item.product.id !== action.payload)
      }  
    };
    }  
 // elimina un items (productos) completo sin importar la cantidad
    case TYPES.DELETE_ONE_PRODUCT_FROM_CART: {
        return {
          ...state,
          cart: state.cart.filter(item => item.product.id !== action.payload)
        }  
    } 

   // Borra toda la orden
    case TYPES.DELETE_ALL_FROM_CART: {
      return productsInitialState;
    }

    case TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART: {
      const totalCuenta = state.cart.reduce(
        (suma, existingProduct) => suma + existingProduct.qty * existingProduct.product.price,
        0
      );
      return {
        ...state,
        totalCuenta, 
      };
    }
    default:
      return state;
  }
}