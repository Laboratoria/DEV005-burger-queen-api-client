import Header from "../../components/Header";
import Button from "../../components/Button";

function HeaderNewOrderTable({ order }) {
  return (
    <tr>
      <th>ID: {order.id} </th>
      <th>Cliente: {order.client} </th>
      <th>Fecha de entrada: {order.dataEntry} </th>
    </tr>
  );
}

function NewOrderItem({ product }) {
  return (
    <tr key={product.product.id}>
      <td>{product.product.name}</td>
      <td>x{product.qty}</td>
    </tr>
  );
}

function NewOrderTable({ orders }) {
  return (
    <div>
      {orders.map((order) => (
        <div key={order.id}>
          <table>
            <thead>
              <HeaderNewOrderTable order={order} />
            </thead>
            <tbody>
              {order.products.map((product) => (
                <NewOrderItem product={product} key={product.product.id} />
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

function BtnMenu() {
  return (
    <div className="topBar">
      <Button className="break" onClick={onclick} text='Desayuno'></Button>
      <Button className="break" onClick={onclick} text='Almuerzo'></Button>
      <Button className="break" onClick={onclick} text='Pedidos'></Button>
    </div>
  )
}


function MainContent({ orders }) {
  return (
    <div>
      <BtnMenu />
      <NewOrderTable orders={orders} />
    </div>
  )
}


function HeaderView() {
  return (
    <div>
      <Header prop="Marta" />
    </div>
  )
}

function AllWaiterOrderView({ orders }) {
  return (
    <div>
      <HeaderView />
      <MainContent orders={orders} />
    </div>
  );
}

const ORDERS = [
  {
    "id": 2324,
    "userId": 15254,
    "client": "Jude Milhon",
    "products": [
      {
        "qty": 1,
        "product": {
          "id": 1214,
          "name": "Sandwich de jamón y queso",
          "price": 1000,
          "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/sandwich.jpg",
          "type": "Desayuno",
          "dateEntry": "2022-03-05 15:14:10"
        }
      },
      {
        "qty": 1,
        "product": {
          "id": 7450,
          "name": "Café americano",
          "price": 500,
          "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/coffe.jpg",
          "type": "Desayuno",
          "dateEntry": "2022-03-05 15:14:10"
        }
      }
    ],
    "status": "pending",
    "dataEntry": "2022-03-05 15:00"
  },
  {
    "id": 8746,
    "userId": 15254,
    "client": "Katie Bouman",
    "products": [
      {
        "qty": 2,
        "product": {
          "id": 7450,
          "name": "Café americano",
          "price": 500,
          "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/coffe.jpg",
          "type": "Desayuno",
          "dateEntry": "2022-03-05 15:14:10"
        }
      },
      {
        "qty": 1,
        "product": {
          "id": 8452,
          "name": "Agua 500ml",
          "price": 500,
          "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/water.jpg",
          "type": "Almuerzo",
          "dateEntry": "2022-03-05 15:14:10"
        }
      }
    ],
    "status": "delivered",
    "dataEntry": "2022-03-05 15:00",
    "dateProcessed": "2022-03-05 16:00"
  }
];

export default function Order() {
  return <AllWaiterOrderView orders={ORDERS} />;
}
