import { redirect } from "react-router";
import useAuthStore from "../store/useAuthStore";
import ShBoton from "../components/ShBoton";


export default function Logout() {
    const logout = useAuthStore( (state) => state.logout);

    function handleLogout() {
        logout;
        localStorage.removeItem('token');
        localStorage.removeItem('duration');
        console.log("Logged off");
        return redirect('/');
    }
    
    return (
        <div className=" rounded-xl p-10 bg-emerald-200 hover:shadow-xl/50 shadow-xl flex justify-center">
            <div>
                <h1>¿Seguro que quieres cerrar sesión?</h1>
                <ShBoton onClick={handleLogout}>Si</ShBoton>
                <ShBoton onClick={redirect("/")}>No</ShBoton>
            </div>
        </div>
    );
}