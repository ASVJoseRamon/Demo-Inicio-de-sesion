import { Outlet, useActionData, useSubmit } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
import { getTokenDuration } from "../utils/authUtils";

export default function Root() {
    const token = useActionData();
    const submit = useSubmit();



    return (
        <>
            <MainNavigation />
            <main className=" place-content-start  p-10 min-h-dvh bg-cyan-100">
                <Outlet />
            </main>
        </>
    );
}