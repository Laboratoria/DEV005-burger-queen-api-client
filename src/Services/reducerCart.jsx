/*funcion reducer */

export const TYPES = {
    ADD_TO_CART: "ADD_TO_CART",
    DELETE_ALL_FROM_CART: "DELETE_ALL_FROM_CART",
    DELETE_PRODUCT_FROM_CART: "DELETE_PRODUCT_FROM_CART",
    CALCULATE_TOTAL_PRICE_OF_THE_CART: "CALCULATE_TOTAL_PRICE_OF_THE_CART"
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
    case TYPES.ADD_TO_CART: {
      /*let newProduct = state.products.find((product) => product.id === action.payload)
      return {
        ...state,
        cart: [...state.cart, newProduct]
      };
    }*/
    const existingProduct = state.cart.find(item => item.id === action.payload);

      if (existingProduct) {
        // Si el producto ya está en el carrito, incrementa su cantidad
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        // Si el producto no está en el carrito, agrégalo con cantidad 1
        const productToAdd = state.products.find(item => item.id === action.payload);
        return {
          ...state,
          cart: [...state.cart, { ...productToAdd, quantity: 1 }]
        };
      }
    }

    case TYPES.DELETE_PRODUCT_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((items) => items.id !== action.payload)
      };
    }

    case TYPES.DELETE_ALL_FROM_CART: {
      return productsInitialState;
    }

    case TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART: {
      return {
        ...state,
        totalPriceShoppingCart: state.cart.reduce((previousValue, product) => previousValue + product.price, 0)
      }
    }
    default:
      return state;
  }

 // throw Error("Unknown action: " + action.type);
}