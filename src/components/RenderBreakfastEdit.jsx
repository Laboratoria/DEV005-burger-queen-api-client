import { useState } from 'react';
import ApiGetProducts from './ApiGetProducts';


function RenderBreakfastTableEdit ({ products, type }) {
    const breakfastProducts = products.filter((product) => product.type === 'Desayuno');
    return (
        <>
        {type === 'desayunoEdit' && (
            <tbody>
                {breakfastProducts.map((product) => (
                    <tr key={product.id}>
                        <td>
                          <input
                            type='text'
                            required='required'
                            value={product.name}
                            name='productName'
                          ></input>
                        </td>
                        <td>
                          <input
                            type='text'
                            required='required'
                            value={product.price}
                            name='productPrice'
                          ></input>
                        </td>
                    </tr>
                ))}
            </tbody>
        )}
        </>
/*         <ApiGetProducts
            renderTableBody={(products) => (
              <RenderTableBody products={products} type={"desayunoEdit"} />
            )}
          /> */
    )
    
}

const RenderBreakfast = () => {
    return (
        <ApiGetProducts
            renderTableBody={(products) => (
              <RenderBreakfastTableEdit products={products} type={"desayunoEdit"} />
            )}
          /> 
    )
}

export default RenderBreakfast;

/* 
const RenderBreakfast = ({ products }) => {
  const [editableProducts, setEditableProducts] = useState(products);

  const handleEdit = (productId, fieldName, newValue) => {
    const updatedProducts = editableProducts.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          [fieldName]: newValue,
        };
      }
      return product;
    });
    setEditableProducts(updatedProducts);
  };

  const handleUpdate = () => {
    // Perform the update logic here using the updated products
    // For example, you can make an API call to update the table data
    console.log('Updated products:', editableProducts);
  };

  const renderTableRows = (data) => {
    return data.map((product) => (
      <tr key={product.id}>
        <td>
          <input
            type="text"
            value={product.name}
            onChange={(e) => handleEdit(product.id, 'name', e.target.value)}
          />
        </td>
        <td>
          <input
            type="text"
            value={product.price}
            onChange={(e) => handleEdit(product.id, 'price', e.target.value)}
          />
        </td>
      </tr>
    ));
  };

  return (
    <>
      {type === 'desayunoEdit' && (
        <tbody>
          {renderTableRows(editableProducts)}
        </tbody>
      )}
      {type === 'desayunoEdit' && (
        <tfoot>
          <tr>
            <td colSpan="2">
              <button onClick={handleUpdate}>Update</button>
            </td>
          </tr>
        </tfoot>
      )}
    </>
  );
}; */



