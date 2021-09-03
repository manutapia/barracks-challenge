const PROXY_CONFIG = {
    "/v2": {
        "target": "https://beta-api.barracks.gg",
        "changeOrigin": true,
        "secure": true,
        "logLevel": "debug"
    }
};
module.exports = PROXY_CONFIG;