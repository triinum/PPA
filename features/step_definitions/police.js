const {Given, When, Then} = require('cucumber');
const Role = require('testcafe').Role;
const PolicePage = require('../support/pages/police-page');
const {RequestLogger} = require('testcafe');
const { ClientFunction } = require('testcafe');



Given(/^I open the police page$/, async function() {
    await testController.navigateTo(PolicePage.Police.url());
});

When(/^I click on services icon$/, async function() {
    await testController.click(PolicePage.Police.servicesIcon());
});

Then('I am redirected to a subpage', async function () {
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains('teenindused'); //Checks if the current page URL contains the 'thank-you' string
});

When('I click on Tartu service', async function () {
    await testController.click(PolicePage.Police.tartuService());
    await this.addScreenshotToReport();
});

Then('I see the Tartu service title', async function () {
    await testController.expect(PolicePage.Police.tartuServiceTitle().innerText).contains('2019');
    await this.addScreenshotToReport();
});

 When('I click on footericon {string}', async function (String) {   
    await testController.expect(PolicePage.Police.footerIcon().innerText).contains(String);
    await this.addScreenshotToReport();
 });

Then('I am redirected to a booking subpage', async function () {
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains('teenindused'); //Checks if the current page URL contains the 'thank-you' string
    await testController.expect(PolicePage.Police.ServiceTitleHeading().innerText).contains('Politsei iseteenindus');
});


 When('I click on policework subpage {string}', async function (name) {   
    await testController.click(PolicePage.Police.menuItemPoliceWork());
    await testController.click(PolicePage.Police.subMenuItemLostItems(), name);
 });

 Then('I can click on lost persons menu item', async function () {  
    await testController.click(PolicePage.Police.menuItemLostPersons());
});          