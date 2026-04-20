import { create } from 'zustand';
import { persist } from 'zustand/middleware';
const useAuthStore = create( 
  persist ((set) => ({
  user: null,
  password: null,
  token: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,


  login: async (email,password) => {
    set( {isLoading: true, error: null} );
    try{
      const response = await fetch( 'http:localhost:8080/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      } );
      if (!response.ok) throw new Error('Credenciales invalidas');

      const data = await response.json();

      set( {user: data.user, token: data.token, isAuthenticated: true, isLoading: false} );
    }catch(err) {
      set( {error:message, isLoading: false });
    }
  }, 
  logout: () => set({user:null, isAuthenticated: false}),

})
),{
  name: 'auth-storage'
}
);
  
export default useAuthStore;
