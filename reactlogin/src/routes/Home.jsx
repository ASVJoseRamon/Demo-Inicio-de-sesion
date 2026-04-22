import { useState } from "react";
import useAuthStore from "../store/useAuthStore";

export default function Home() {

    const tokenDuration = useAuthStore( (state) => state.tokenDuration);
    
  const isAuthenticated = useAuthStore( (state) => state.isAuthenticated);
    return (
    <>
        <div className=" rounded-xl p-10 bg-emerald-200 hover:shadow-xl/50 shadow-xl">
            <h1 className="text-xl font-medium text-black dark:text-white "
            >Bienvenido a la página de prueba</h1>
            <p className="text-gray-700 dark:text-gray-100"
            >Esta es la página principal<br/>Prueba iniciar sesión y la barra de navegacion</p>
            
            {isAuthenticated && <p>Solo puedes ver esto si estas autenticado <br/>
            tu tiempo de sesion es de: {tokenDuration}</p>}
        </div>
    </>
    );
}