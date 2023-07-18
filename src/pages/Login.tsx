import React, {
    useState,
} from "react";
import burgerImg from "../assets/burgerImg.png";
import nameImg from "../assets/nameImg.png";
import Input from "../components/Input";
import KeyIcon from "../icons/KeyIcon";
import PerfilIcon from "../icons/ProfileIcon";
import { useNavigate } from "react-router-dom";

// Definición del componente Login
const Login =
    () => {
        const router =
            useNavigate();
        const [
            email,
            setEmail,
        ] =
            useState(
                ""
            );
        const [
            password,
            setPassword,
        ] =
            useState(
                ""
            );
        const handle =
            async () => {
                console.log(
                    email,
                    password
                );

                try {
                    const response =
                        await fetch(
                            "https://dev005-burger-queen-api-production.up.railway.app/login",
                            {
                                method: "POST",
                                headers:
                                    {
                                        "Content-Type":
                                            "application/json",
                                    },
                                body: JSON.stringify(
                                    {
                                        email,
                                        password,
                                    }
                                ),
                            }
                        );

                    if (
                        response.ok
                    ) {
                        const data =
                            await response.json();
                        localStorage.setItem(
                            "token",
                            data.accessToken
                        );
                        const userRes =
                            await fetch(
                                `https://dev005-burger-queen-api-production.up.railway.app/users/${email}`,
                                {
                                    headers:
                                        {
                                            Authorization: `Bearer ${data.accessToken}`,
                                            "Content-Type":
                                                "application/json",
                                        },
                                }
                            );
                        const user =
                            await userRes.json();
                        localStorage.setItem(
                            "user",
                            JSON.stringify(
                                user
                            )
                        );
                        if (
                            data.accessToken &&
                            user
                        ) {
                            if (
                                user?.role ===
                                "admin"
                            ) {
                                router(
                                    "/products"
                                );
                            }
                            if (
                                user?.role ===
                                "waiter"
                            ) {
                                router(
                                    "/orders"
                                );
                            }
                            if (
                                user?.role ===
                                "chef"
                            ) {
                                router(
                                    "/orders"
                                );
                            }
                        }
                    } else {
                        throw new Error(
                            "Error en la solicitud"
                        );
                    }
                } catch (error) {
                    console.error(
                        "Error:",
                        error
                    );
                }
            };

        // Renderizado del componente
        return (
            <main className="bg-yellow h-screen flex justify-center items-center flex-col gap-2.5">
                <figure>
                    <img
                        src={
                            nameImg
                        }
                        className="w-[342px] h-[75px]  "
                        alt="Nombre Logo"
                    />
                </figure>

                <div className="bg-white flex items-center flex-col w-[520px] h-[464px] border rounded-[10px] px-14 pt-6">
                    <figure>
                        <img
                            src={
                                burgerImg
                            }
                            className="w-[102px] h-[96px] mb-5"
                            alt="Burger Logo"
                        />
                    </figure>

                    <form
                        action=""
                        className="w-full"
                    >
                        <Input
                            label="Correo electrónico"
                            icon={
                                PerfilIcon
                            }
                            value={
                                email
                            }
                            onChange={(
                                e
                            ) =>
                                setEmail(
                                    e
                                        .target
                                        .value
                                )
                            }
                        />
                        <Input
                            label="Contraseña"
                            icon={
                                KeyIcon
                            }
                            type="password"
                            value={
                                password
                            }
                            onChange={(
                                e
                            ) =>
                                setPassword(
                                    e
                                        .target
                                        .value
                                )
                            }
                        />
                    </form>
                    <button
                        className="bg-brown w-[242px] h-[50px] text-2xl text-white rounded-[10px] mt-10 font-semibold"
                        type="button"
                        onClick={
                            handle
                        }
                    >
                        Iniciar
                        Sesión
                    </button>
                </div>
            </main>
        );
    };

export default Login;
