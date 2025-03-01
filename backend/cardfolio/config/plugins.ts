module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-ftp",
      providerOptions: {
        host: env("FTP_HOST"),
        port: env.int("FTP_PORT", 21),
        user: env("FTP_USER"),
        password: env("FTP_PASSWORD"),
        secure: env.bool("FTP_SECURE", false),
        path: env("FTP_BASE_PATH", "/public_html/uploads"),
        baseUrl: env("FTP_BASE_URL", "https://andremicael.com/uploads/"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
