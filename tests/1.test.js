module.exports = {
    'Demo test': function (browser) {
        console.log(1111);
        browser
            .url('https://www.google.com/')
            .waitForElementVisible('body')
            .setValue('input[type=text]', 'nightwatch')
            .waitForElementVisible('input[name=btnK]');


        browser
            .perform(() => {
                console.log(2222);
            });

        browser
            .click('input[name=btnK]')
            .pause(1000)
            .assert.containsText('#main', 'Night Watch')
            .end();

        console.log(3333)
    }
};