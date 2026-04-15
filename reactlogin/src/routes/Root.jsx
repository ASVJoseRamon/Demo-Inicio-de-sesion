import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";



export default function Root() {
    return (
        <>
            <MainNavigation/>
            <main className=" place-content-start mb-100 p-10 bg-cyan-100">
                <Outlet />
            </main>
        </>
    );
}