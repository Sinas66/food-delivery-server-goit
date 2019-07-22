const config = {
    port: 8081,
    domain: function () {
        return "localhost:" + this.port;
    }
}

module.exports = config;
