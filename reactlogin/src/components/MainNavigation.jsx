import { NavLink, Link } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

export default function MainNavigation() {
    
    const isAuthenticated = useAuthStore( (state) => state.isAuthenticated);
    const token = useAuthStore( (state) => state.token);
    const tokenDuration = useAuthStore( (state) => state.tokenDuration);
    const isLoading = useAuthStore( (state) => state.isLoading);
    const email = useAuthStore( (state) => state.email);

    return (
        <header className="bg-cyan-100 ">
            <div className="flex justify-center pt-5 h-25 hover:text-lg ">
                <Link to="/"><img src="/Facturas.png" alt="Logo aplicacion" 
                className=" row-auto h-15 hover:shadow-xl/30"/></Link>
                <h1 className="text-amber-300 font-bold font-mono p-5 text-2xl">
                    Aplicacion de Facturas
                </h1>
            </div>

            <div className="flex justify-center px-10">
            <nav className="flex justify-center bg-cyan-950 border-cyan-950 h-14 rounded-t-lg w-full border-4 hover:border-b-amber-300">
                <ul className=" flex content-center-safe  gap-x-5 p-4 text-amber-300 " >
                    <li className="basis-35 justify-center">
                        <NavLink
                        className=" text-gray-50 whitespace-nowrap
                        hover:underline hover:text-lg hover:shadow-xl/30 "
                        to='/'
                        end
                        >
                            Página Principal
                        </NavLink>
                    </li>
                    |<li className="basis-30 text-center">
                        <NavLink
                        className="text-gray-50
                        hover:underline hover:text-lg hover:shadow-xl/30"
                        to='/panel'
                        end
                        >
                            Panel
                        </NavLink>
                    </li> 
                    |<li className="basis-30 text-center">
                        <NavLink
                        className="text-gray-50
                        hover:underline hover:text-lg hover:shadow-xl/30"
                        to='/inventario'
                        end
                        >
                            Inventario
                        </NavLink>
                    </li>
                    {!isAuthenticated && ( <><p>|</p> <li className="basis-30 text-center">
                        <NavLink
                        className="text-gray-50 whitespace-nowrap
                        hover:underline hover:text-lg hover:shadow-xl/30"
                        to='/login'
                        end
                        >
                            Iniciar Sesión
                        </NavLink>
                    </li></>
                    )}
                    {isAuthenticated && ( <><p>|</p> <li className="basis-30 text-center">
                        <NavLink
                        className="text-gray-50 whitespace-nowrap
                        hover:underline hover:text-lg hover:shadow-xl/30"
                        to='/logout'
                        end
                        >
                            Cerrar Sesión
                        </NavLink>
                    </li> </>)}
                </ul>
            </nav>
            
            </div>
            <p>isAuthenticated: {isAuthenticated}</p>
            {isAuthenticated && (
                <>
                    <p>Email: {email}</p>
                    <p>Token: {token}</p>
                    <p>TokenDuration: {tokenDuration}</p>
                    <p>Loading: {isLoading}</p>
                </>
            )}
        </header>
    );
}