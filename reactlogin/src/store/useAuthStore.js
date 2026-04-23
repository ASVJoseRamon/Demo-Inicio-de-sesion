import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create( 
  persist ((set, get) => ({
  email: null,
  password: null,
  token: null,
  tokenDuration: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,


  login: async ( email, password ) => {
    set( { email: email, password: password, isLoading: true, error: null} );
    try{
      const response = await fetch( 'http://localhost:8081/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      } );
      if (!response.ok) throw new Error('Credenciales invalidas');

      const data = await response.json();
      console.log(data);

      const duration = 10000;

      set( {token: data.token, isAuthenticated: true, isLoading: false, tokenDuration: duration} );
  
    }catch(err) {
      set( {error: err.message, isLoading: false });
      console.log(err.message);
    }
    },
  setTimeRemaining: (remaining) => set({tokenDuration: remaining}) ,
  logout: () => set({token: null, isAuthenticated: false, tokenDuration: null, email: null, password: null}),

}),{
  name: 'token',
  partialize: (state) => ({token: state.token, tokenDuration: state.tokenDuration})
}
)
);
  
export default useAuthStore;

export function getAuthToken() {
    const token= useAuthStore( (state) => state.token);

    if (!token) {
        return null
    }

    const tokenDuration = getTokenDuration();

    if(tokenDuration < 0) {
        return 'EXPIRED'
    }

    return token;
}