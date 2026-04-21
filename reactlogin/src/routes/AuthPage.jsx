
import FormAuth from "../components/FormAuth";

export default function AuthPage() {
    return (
        <div className=" rounded-xl p-10 bg-emerald-200 hover:shadow-xl/50 shadow-xl">
            <FormAuth />
        </div >
    );  
}

export async function action({request}) {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'iniciarSeccion'

    if ( mode !== 'login' && mode !== 'signup') {
        new Response (JSON.stringify({ message: 'Modo no soportado' }), {
            status: 442
        });
    };

    const email = useAuthStore((state) => state.email);
    const password = useAuthStore((state) => state.password);

    const response = await fetch('http://localhost:8081/usuario' + mode, {
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
    console.log(response);

    //MANEJO DEL TOKEN
    
}