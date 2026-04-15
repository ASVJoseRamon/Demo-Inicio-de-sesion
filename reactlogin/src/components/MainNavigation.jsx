import { NavLink } from "react-router-dom";


export default function MainNavigation() {
    return (
        <header className="bg-cyan-950 ">
            <div className="flex justify-center p-5 ">
                <img src="/Facturas.png" alt="Logo aplicacion" 
                className=" row-auto h-17"/>
                <h1 className="text-amber-300 font-bold font-sans p-5">
                    Aplicacion de Facturas
                </h1>
            </div>
            
            
            <nav >
                <ul className="mx-auto flex justify-center  gap-x-4 p-2  text-gray-50" >
                    <li>
                        <NavLink
                        className=" text-center p-2 rounded-xl
                    hover:bg-emerald-600 hover:underline hover:text-emerald-900"
                        to='/'
                        end
                        >
                            Página Principal
                        </NavLink>
                    </li>
                    <li 
                    >
                        <NavLink
                        className=" text-center p-2 rounded-xl
                        hover:bg-emerald-600 hover:underline hover:text-emerald-900"
                        to='/panel'
                        end
                        >
                            Panel
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        className="  text-center p-2 rounded-xl
                    hover:bg-emerald-600 hover:underline hover:text-emerald-900"
                        to='/inventario'
                        end
                        >
                            Inventario
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        className=" text-center p-2 rounded-xl
                    hover:bg-emerald-600 hover:underline hover:text-emerald-900"
                        to='/login'
                        end
                        >
                            Iniciar Sesión
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        className=" text-center p-2 rounded-xl
                    hover:bg-emerald-600 hover:underline hover:text-emerald-900"
                        to='/logout'
                        end
                        >
                            Cerrar Sesión
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}