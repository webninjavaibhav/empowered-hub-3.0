const BASENAME = import.meta.env.BASE_URL || "";
// const REDIRECT_URI = `http://localhost:8080/login/callback`;
const REDIRECT_URI = `https://empowered-hub-3-0.vercel.app`;

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
