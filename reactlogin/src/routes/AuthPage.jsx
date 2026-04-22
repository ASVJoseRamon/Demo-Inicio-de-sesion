import useAuthStore from "../store/useAuthStore";
import FormAuth from "../components/FormAuth";

export default function AuthPage() {
    return (
        <div className=" rounded-xl p-10 bg-emerald-200 hover:shadow-xl/50 shadow-xl">
            <FormAuth />
        </div >
    );  
}

export async function action() {

    const email = useAuthStore((state) => state.email);
    const password = useAuthStore((state) => state.password);

    const response = await fetch('http://localhost:8081/user/login', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(email, password)
    });

    if (response.status === 442 || response.status === 401) {
        return response;
    }

    if (!response.ok) {
        new Response(JSON.stringify({ message: 'No se pudo autenticar el usuario'}), {
            status: 500,
        })
    }
    console.log("Token recibido: "+response.token);

    //MANEJO DEL TOKEN
    const resData = await response.json()
    const token = resData.token()

    const expiration = new Date();
    expiration.setMinutes(expiration.getMinutes()+1)




}