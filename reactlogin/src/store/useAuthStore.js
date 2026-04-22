import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create( 
  persist ((set) => ({
  email: null,
  password: null,
  token: null,
  tokenDuration: null,
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

      const expiration = new Date();
      expiration.setMinutes(expiration.getMinutes()+1)

      const now = new Date()
      const duration = expiration.getTime()-now.getTime();

      set( {token: data.token, isAuthenticated: true, isLoading: false, tokenDuration: duration} );
  
    }catch(err) {
      set( {error: err.message, isLoading: false });
      console.log(err.message);
    }
    }, 
  logout: () => set({token: null, isAuthenticated: false, tokenDuration: null}),

}),{
  name: 'token',
  partialize: (state) => ({token: state.token, tokenDuration: state.tokenDuration})
}
)
);
  
export default useAuthStore;