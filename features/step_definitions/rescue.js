const {Given, When, Then} = require('cucumber');
const Role = require('testcafe').Role;
const rescuePage = require('../support/pages/rescue-page');
const {RequestLogger} = require('testcafe');
const { ClientFunction } = require('testcafe');



Given(/^I open the rescue page$/, async function() {
    await testController.navigateTo(rescuePage.rescue.url());
});

When(/^I am typing my search request "([^"]*)" on Rescue$/, async function(text) {
    await testController.typeText(rescuePage.rescue.searchBox(), text);
});

Then(/^I am pressing (.*) key on Rescue$/, async function(text) {
    await testController.pressKey(text);
});

When(/^I should see that the first Rescue\'s result includes (.*)$/, async function(text) {
    await testController.expect(rescuePage.rescue.firstSearchResult().innerText).contains(text);
});


Then('I click on the news title', async function () {
    await testController.click(rescuePage.rescue.firstSearchResult());
    await this.addScreenshotToReport();
});

When('I see {string} in the title', async function (name) {
    await testController.expect(rescuePage.rescue.firstSearchResult2().innerText).contains(name).wait(5000);

});

Then('I click the submit button', async function () {
    await testController.click(rescuePage.rescue.menuItemContacts()).wait(5000);
    await this.addScreenshotToReport();
});

When('I verify menus exist and content appears on subpages', async function (name) {
    
    //navigatsioon
    await testcontroller.expect(rescuePage.rescue.navBar().visible).ok();
    
    //alammenüüde element
    await testcontroller.expect(rescuePage.rescue.subMenuElement().visible).ok();
    
    //alamlehed ja sisu
    await testcontroller.expect(rescuePage.rescue.menuItemDepartment().visible).ok();
    await testController.expect(rescuePage.rescue.subMenuItem().innerText).contains(name)
    await testController.click(rescuePage.rescue.subMenuItem()).wait(5000);
    
    await testcontroller.expect(rescuePage.rescue.menuItemSafety().visible).ok();
    await testController.expect(rescuePage.rescue.SafetysubMenuItem().innerText).contains(name)
    await testController.click(rescuePage.rescue.SafetysubMenuItem()).wait(5000);
    
    await testcontroller.expect(rescuePage.rescue.menuItemApprove().visible).ok(); 
    await testController.expect(rescuePage.rescue.ApprovesubMenuItem().innerText).contains(name)
    await testController.click(rescuePage.rescue.ApprovesubMenuItem()).wait(5000);
    
    await testcontroller.expect(rescuePage.rescue.menuItemAbout().visible).ok();
    await testController.expect(rescuePage.rescue.AboutsubMenuItem().innerText).contains(name)
    await testController.click(rescuePage.rescue.AboutsubMenuItem()).wait(5000);

    await testcontroller.expect(rescuePage.rescue.menuItemCareers().visible).ok();
    await testController.expect(rescuePage.rescue.CareerssubMenuItem().innerText).contains(name)
    await testController.click(rescuePage.rescue.CareersubMenuItem()).wait(5000);
});

When('I see {string} in the name field', async function (name) {

    await testController.expect(rescuePage.rescue.subMenuItem().innerText).contains(name)
    await testController.click(rescuePage.rescue.subMenuItem()).wait(5000);
});

Then('I am redirected to a new URL', async function () {
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains('kontaktid'); 
});

When('I click on some contacts', async function () {
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.click(rescuePage.rescue.loginButton());
    await this.addScreenshotToReport();
    await testController.expect(getLocation()).contains('otsi');
});

Then('I search from the first list {string}', async function (name) {
    await testController.click(rescuePage.rescue.contactsDepartments().withText(name)).wait(5000);
});

When('I am redirected to Northern rescue department and search the name {string}', async function (name) {
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains('laane_paastekeskus');
    await testController.expect(rescuePage.rescue.chiefName().innerText).contains(name);
}); 
  
 Then('I want to change the language to {string}', async function (name) {
    await testController.click(rescuePage.rescue.menuItemEnlighLanguage().withText(name));
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    //await testController.expect(getLocation()).contains('en'); 
    await testController.click(rescuePage.rescue.bookAppointment());
}); 

When('I move on to icon menu {string}', async function (name) {
    await testController.click(rescuePage.rescue.rescueServicesIcon());
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains('e-services');
    await this.addScreenshotToReport();
    await testController.click(rescuePage.rescue.menuItemEnlighLanguage().withText(name)).wait(5000);
    
}); 

Then('I click to view statistics in russian', async function () {
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.click(rescuePage.rescue.footerIconBooking()).wait(5000);
    await testController.expect(getLocation()).contains('statistika');
    await this.addScreenshotToReport();
}); 

When('I book an appointment', async function () {

    await testController.click(rescuePage.rescue.bookAppointment2());
    const getLocation = ClientFunction(() => document.location.href).with({ boundTestRun: testController });
    await testController.expect(getLocation()).contains('broneering');  
    await testController.click('select').click(Selector('option', { text: 'Idaregioon' }));
    await testController.click(rescuePage.rescue.registerCheckbox1());
    await this.addScreenshotToReport();
}); 

When('I select {string} from the expereince dropdown', async function (experience) {
    const experienceSelect = Selector('#g2599-experienceinyears').with({ boundTestRun: testController });
    const experienceOption = experienceSelect.find('option').with({ boundTestRun: testController });
});


