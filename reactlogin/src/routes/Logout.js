import { redirect } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

export function action() {
    const logout = useAuthStore( (state) => state.logout);
    logout();
    console.log('Logged off')
    localStorage.removeItem('token');
    return redirect('/');
}

export default action;