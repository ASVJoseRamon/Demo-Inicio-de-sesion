import { Outlet, redirect, useActionData, useSubmit } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
import useAuthStore from "../store/useAuthStore";


export default function Root() {
    const token = useAuthStore((state) => state.token);
    const tokenDuration = useAuthStore((state) => state.tokenDuration);
    const logout = useAuthStore((state) => state.logout);
    const setTime = useAuthStore((state) => state.setTimeRemaining)

    const submit = useSubmit();

    useEffect( () => {
        if (!token || !tokenDuration) {
            return;
        }
        const timeRemaining = (Date.now()+tokenDuration) - Date.now();
        setTime(timeRemaining);
        console.log(timeRemaining);

        if(timeRemaining <= 0) {
            logout();
            return redirect("/")
        }
        
        const timer = setTimeout( () => {
            logout();
        }, timeRemaining);

        return () => clearTimeout(timer);
    } , [token, tokenDuration, logout]);


    return (
        <>
            <MainNavigation />
            <main className=" place-content-start  p-10 min-h-dvh bg-cyan-100">
                <Outlet />
            </main>
        </>
    );
}