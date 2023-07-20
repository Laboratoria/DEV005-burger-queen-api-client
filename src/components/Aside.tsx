import { useEffect, useState } from "react";
import { SVGProps, ComponentType } from "react";
import bqImg from "../assets/bqImg.png";
import burgerImg from "../assets/burgerImg.png";
import EquipIcon from "../icons/EquipIcon";
import ProductIcon from "../icons/ProductIcon";
import { useNavigate } from "react-router-dom";
import { User } from "../services/interfaces";

const Aside = () => {
  const router = useNavigate();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userJson = localStorage.getItem("user");

    if (userJson) {
      const userData = JSON.parse(userJson);
      setUser(userData);
    }
  }, []);

  return (
    <>
      <aside className="bg-yellow w-40 h-full flex items-center flex-col col-span-1">
        <figure className="flex items-center flex-col mt-[54px]">
          <img src={bqImg} className="w-16 h-14 " alt="Nombre Logo" />
          <img
            src={burgerImg}
            className="w-16 h-16  mb-[84px]"
            alt="Nombre Logo"
          />
        </figure>

        {user?.role === "admin" && (
          <>
            <button
              className="flex flex-col items-center gap-3"
              onClick={() => router("/users")}
            >
              <EquipIcon />
              <h3 className="mb-[102px] font-roboto font-bold text-sm">
                EQUIPO
              </h3>
            </button>
            <button
              className="flex flex-col items-center gap-3"
              onClick={() => router("/products")}
            >
              <ProductIcon />
              <h3 className="mb-[102px] font-roboto font-bold text-sm">
                PRODUCTOS
              </h3>
            </button>
          </>
        )}

        {user?.role === "waiter" && (
          <>
            <button
              className="flex flex-col items-center gap-3"
              onClick={() => router("/orders")}
            >
              <EquipIcon />
              <h3 className="mb-[102px] font-roboto font-bold text-sm">
                ORDERS
              </h3>
            </button>
            <button
              className="flex flex-col items-center gap-3"
              onClick={() => router("/create-order")}
            >
              <ProductIcon />
              <h3 className="mb-[102px] font-roboto font-bold text-sm">
                TOMAR ORDEN
              </h3>
            </button>
          </>
        )}

        {user?.role === "chef" && (
          <>
            <button
              className="flex flex-col items-center gap-3"
              onClick={() => router("/orders")}
            >
              <EquipIcon />
              <h3 className="mb-[102px] font-roboto font-bold text-sm">
                ORDERS
              </h3>
            </button>
          </>
        )}
      </aside>
    </>
  );
};

export default Aside;
