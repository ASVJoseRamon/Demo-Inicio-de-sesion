
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error); // Útil para debugging

  return (
    <div className="text-center p-40">
      <h1>¡Ups! Algo salió mal</h1>
      <p>Lo sentimos, ha ocurrido un error inesperado.</p>
      <br/>
      <div className="bg-emerald-200 p-10 rounded-lg inline-block hover:shadow-xl/50">
        {/* Mostramos información específica según el tipo de error */}
        {isRouteErrorResponse(error) ? (
          <p>
            <strong>Status:</strong> {error.status} <br />
            <strong>Mensaje:</strong> {error.statusText || error.data?.message}
          </p>
        ) : (
          <p>
            <strong>Error:</strong> {error.message || "Error desconocido"}
          </p>
        )}
      </div>

      <div className="pt-10">
        <Link to="/" className="hover:bg-emerald-900 hover:text-gray-50 p-2 rounded-lg"> 
            Volver al Inicio
        </Link>
            
         
        
      </div>
    </div>
  );
};

export default ErrorPage;