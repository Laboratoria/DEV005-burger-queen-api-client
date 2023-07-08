import ApiGetProducts from "./ApiGetProducts";



const renderTableBody = (products) => {
    return (
        <tbody>
            {products.map((product) => (
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                </tr>
            ))}
        </tbody>
    );
};

export default renderTableBody;