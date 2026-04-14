import { NavLink } from "react-router-dom";


export default function MainNavigation() {
    return (
        <header>
            <nav >
                <ul className="mx-auto flex max-w-sm gap-x-4 " >
                    <li>
                        <NavLink
                        to='/'
                        end
                        >
                            Página Principal
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to='/panel'
                        end
                        >
                            Panel de creacion de usuarios
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to='/inventario'
                        end
                        >
                            Inventario
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to='/login'
                        end
                        >
                            Iniciar Sesión
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
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