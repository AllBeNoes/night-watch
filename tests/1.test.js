var email = 'xxx',
    password = 'yyy';


module.exports = {
    'Test 1': function (browser) {

        function login(url, email, password) {

            browser
                .url(url)
                .waitForElementVisible('body')
                .setValue('input[id="index_email"]', email)
                .setValue('input[id="index_pass"]', password)
                .click('[id="index_login_button"]')
        }

        login('https://vk.com', email, password)
        browser
            .perform(() => {
                console.log(2222);
            })
            .waitForElementVisible('#l_fr')

            .perform(() => {
                console.log(2212);
            })
            // .pause(10000)
            .click('[id="l_fr"]')
            .waitForElementVisible('[id="ui_rmenu_find"]')
            .click('[id="ui_rmenu_find"]')
            .waitForElementVisible('[id="search_filters_minimized"]')
            .click('[id="search_filters_minimized"]')
            .waitForElementVisible('[id="sort_filter"]')
            .click('[id="cCountry"]')
            .waitForElementVisible('[title="Украина"]')
            .click('[title="Украина"]')
            .waitForElementVisible('[id="cCity"]')
            .click('[id="cCity"]')
            .waitForElementVisible('[title="Другой город"]')
            .click('[title="Другой город"]')
            .setValue('#cCity .selector_input', 'Каролино-бугаз')
            .pause(2000)
            .keys(browser.Keys.ENTER)
            .pause(500)
            .click('#container9 .selector')
            .pause(500)
            .click('#option_list_options_container_9_2')
            .pause(500)
            .click('#cSchYear')
            .pause(2000)
            .click('#option_list_options_container_7_24')
            .pause(1000)
            .click('[class="range_to"]')
            .pause(1000)
            .click('[id="option_list_options_container_16_13"]')
            .pause(1000)
            .click('[id="container17"]')
            .pause(1000)
            .click('[id="option_list_options_container_17_12"]')
            .pause(1000)
            .click('[onclick="radiobtn(this, 2, \'sex\'); cur.onSexChanged(2);"]')
            .pause(1000)
            .click('[onmouseover="uiPhotoZoom.over(this, 28717079)"]')
            .waitForElementVisible('body')
            .pause(3000)
            .perform(() => {
                console.log('>>>Выигрыш есть, можно поесть');
            })
            .end()
    }
};