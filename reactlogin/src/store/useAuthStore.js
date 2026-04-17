import { create } from 'zustand';

const useAuthStore = create( (set) => ({
  user: null,
  password: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,

  login: (user,password) => {
    set( {isLoading: true, error: null} );
    try{

    }catch(err) {
      
    }
  }, 

}));
  

