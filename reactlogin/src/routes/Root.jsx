import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import ShBoton from "../components/ShBoton"

export default function Root() {
    return (
        <>
            <MainNavigation/>
            <main className=" place-content-start  p-10 h-150 bg-cyan-100">
                <Outlet />
            </main>
        </>
    );
}