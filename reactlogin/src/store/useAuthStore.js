import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create( 
  persist ((set) => ({
  email: null,
  password: null,
  token: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,


  login: async ( email, password ) => {
    set( {isLoading: true, error: null} );
    try{
      const response = await fetch( 'http://localhost:8081/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      } );
      if (!response.ok) throw new Error('Credenciales invalidas');

      const data = await response.json();
      console.log(data);
      set( {token: data.token, isAuthenticated: true, isLoading: false} );
    }catch(err) {
      set( {error: err.message, isLoading: false });
      console.log(err.message);
    }
   
  }, 
  logout: () => set({email: null, isAuthenticated: false}),

}),{
  name: 'token',
  partialize: (state) => ({token: state.token})
}
)
);
  
export default useAuthStore;