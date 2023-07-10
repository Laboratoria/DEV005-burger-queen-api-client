import AdminEmployees from "../Routes/Admin/AdminEmployees";
import RenderBreakfast from "./RenderBreakfastEdit";

const RenderTableBody = ({ products, type }) => {
    const breakfastProducts = products.filter((product) => product.type === 'Desayuno');
    const lunchProducts = products.filter((product) => product.type === 'Almuerzo');

    return (
        <>
            {type === 'desayuno' && (
                <tbody>
                    {breakfastProducts.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                        </tr>
                    ))}
                </tbody>
            )}
            {type === 'almuerzo' && (
                <tbody>
                    {lunchProducts.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                        </tr>
                    ))}
                </tbody>
            )}
        </>
    );
};

export default RenderTableBody;
