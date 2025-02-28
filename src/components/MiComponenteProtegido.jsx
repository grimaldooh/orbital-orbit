import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider.jsx';

const MiComponenteProtegido = () => {
  const { keycloak, authenticated } = useContext(AuthContext);

  const handleLogout = () => {
    keycloak.logout();
  };

  return (
    <div>
      {authenticated ? (
        <>
          <h1>Bienvenido, usuario autenticado</h1>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </>
      ) : (
        <p>No autenticado</p>
      )}
    </div>
  );
};

export default MiComponenteProtegido;
