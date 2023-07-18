import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Users from "../pages/Users";
import Orders from "../pages/Orders";
import CreateOrder from "../pages/CreateOrder";

// Función para verificar si el usuario está autenticado y obtener su información de rol
const isAuthenticated = () => {
    const user = localStorage.getItem("user");
    console.log(user);
    if (user) {
        const userParse = JSON.parse(user);
        return { role: userParse.role, auth: true };
    }
    return { role: "", auth: false };
};

// Rutas protegidas que requieren autenticación y roles específicos
const protectedRoutes = [
    {
        path: "/orders",
        component: Orders,
        allowedRoles: ["waiter", "chef"],
    },
    {
        path: "/create-order",
        component: CreateOrder,
        allowedRoles: ["waiter"],
    },
    {
        path: "/users",
        component: Users,
        allowedRoles: ["admin"],
    },
    {
        path: "/products",
        component: Products,
        allowedRoles: ["admin"],
    },
];

// Componente para las rutas protegidas
const ProtectedRoute = ({ path, component }: { path: string; component: React.ComponentType }) => {
    const { role, auth } = isAuthenticated();
    const Component = component;

    if (!auth) return <Navigate to="/login" />;

    const isRoleAllowed = protectedRoutes.find((route) => route.path === path)?.allowedRoles.includes(role);

    if (isRoleAllowed) {
        return <Component />;
    }

    return <Navigate to="/" />;
};

// Componente principal del enrutador de la aplicación
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {protectedRoutes.map((route) => (
                    <Route key={route.path} path={route.path} element={<ProtectedRoute path={route.path} component={route.component} />} />
                ))}
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
