const chromedriver = require("chromedriver");
const config = require("./nightwatch.json");

function run(settings) {
    settings.test_workers = false;
    settings.webdriver.server_path = chromedriver.path;
    return settings;
}

module.exports = run(config);