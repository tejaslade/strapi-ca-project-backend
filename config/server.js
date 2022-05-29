module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: "https://86d3-203-192-225-250.in.ngrok.io",
  app: {
    keys: env.array("APP_KEYS"),
  },
});
