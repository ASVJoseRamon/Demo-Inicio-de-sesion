import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  // Acción para hacer login
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      // Simulación de API (sustituye con tu fetch o axios)
      const response = await fetch('https://tu-api.com/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) throw new Error('Credenciales incorrectas');

      const data = await response.json();
      
      // Guardamos los datos en el store
      set({ user: data.user, isAuthenticated: true, isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },

  logout: () => set({ user: null, isAuthenticated: false }),
}));

export default useAuthStore;