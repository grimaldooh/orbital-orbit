import React, { useState, useEffect, createContext } from 'react';
import keycloak from '../lib/keycloak';

// Creamos un contexto para compartir la instancia y datos de Keycloak
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    keycloak
      .init({ onLoad: 'login-required', checkLoginIframe: false })
      .then((auth) => {
        setAuthenticated(auth);
        setInitialized(true);
      })
      .catch((err) => {
        console.error('Error al inicializar Keycloak:', err);
      });
  }, []);

  if (!initialized) return <div>Cargando autenticación...</div>;

  return (
    <AuthContext.Provider value={{ keycloak, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
