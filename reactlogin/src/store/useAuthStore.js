import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      // Acción para iniciar sesión
      login: (userData, token) => 
        set({ 
          user: userData, 
          token: token, 
          isAuthenticated: true 
        }),

      // Acción para cerrar sesión
      logout: () => 
        set({ 
          user: null, 
          token: null, 
          isAuthenticated: false 
        }),
    }),
    {
      name: 'auth-storage', // Nombre de la llave en localStorage
    }
  )
);

export default useAuthStore;