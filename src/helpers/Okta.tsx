const BASENAME = import.meta.env.VITE_OKTA_BASE_URL || "";
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URL;

export default {
  oidc: {
    clientId: "0oagndjzpyqkw8ixt697",
    issuer: "https://teachempowered.okta.com",
    redirectUri: REDIRECT_URI,
    scopes: ["openid", "profile", "email"],
    pkce: true,
  },
  resourceServer: {
    messagesUrl: "http://localhost:8080/api/messages",
  },
  app: {
    basename: BASENAME,
  },
};
