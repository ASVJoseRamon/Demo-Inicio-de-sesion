import { redirect } from "react-router";
import useAuthStore from "../store/useAuthStore"



export function getTokenDuration() {
    const tokenDuration = useAuthStore( (state) => state.tokenDuration);
    const expiration = new Date(tokenDuration);
    const now = new Date()
    const duration = expiration.getTime()-now.getTime();
    return duration
}

export function getAuthToken() {
    const token= useAuthStore( (state) => state.token);

    if (!token) {
        return null
    }

    const tokenDuration = getTokenDuration();

    if(tokenDuration < 0) {
        return 'EXPIRED'
    }

    return token;
}

export function loader() {
    return getAuthToken();
}

export function checkAuthLoader() {
    const token = getAuthToken();
    if (!token) {
        return redirect('/login')
    }
}