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

    if ( mode !== 'iniciarSeccion' && mode !== 'registrarse') {
        new Response (JSON.stringify({ message: 'Modo no soportado' }), {
            status: 442
        });
    };

    const data = await request.formData();
    const authData = {
        email: data.get('email'),
        password: data.get('password'),
    };

    const response = await fetch('http://localhost:8081/usuario' + mode, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(authData)
    });

    if (response.status === 442 || response.status === 401) {
        return response;
    }

    if (!response.ok) {
        new Response(JSON.stringify({ message: 'No se pudo autenticar el usuario'}), {
            status: 500,
        })
    }

    //MANEJO DEL TOKEN

}