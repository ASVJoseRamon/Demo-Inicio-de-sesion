import { useMutation } from '@tanstack/react-query';
import useAuthStore from './authStore'; // Tu store de Zustand

// Función que hace la llamada a la API
const loginUser = async (credentials) => {
  const response = await fetch('https://tu-api.com/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) throw new Error('Error en las credenciales');
  return response.json();
};

export function useLogin() {
  const setUser = useAuthStore((state) => state.setUser); // Acción de Zustand

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // Guardamos en Zustand cuando la API responde con éxito
      setUser(data.user);
      console.log("Login exitoso");
    },
  });
}