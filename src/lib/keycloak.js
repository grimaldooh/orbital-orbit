import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/auth', // URL de tu servidor Keycloak
  realm: 'tu-realm',                 // Nombre de tu realm
  clientId: 'tu-client-id'           // ID de cliente configurado en Keycloak
});

export default keycloak;
