const KEYCLOAK_HOST = 'https://muhsic.acad.ucsc.edu/auth'

export readAttributes = async (username) => {
  await fetch(`https://${KEYCLOAK_HOST}/auth/realms/master/protocol/openid-connect/token`);

}
