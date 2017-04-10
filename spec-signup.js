var util = require ('util')

describe ("Protractor Setting test", function(){
				
	var signupEmail = "wooter-"+Math.floor(Date.now() / 1000)+"-test@jaidutt.jaidutt";
	var phoneNumber = Math.floor(Date.now() / 1000);
	var editEmail = "wooter-"+Math.floor(Date.now() / 1000)+"-test1@jaidutt.jaidutt";
	
    it('should able to signup', function(){
		browser.ignoreSynchronization = true;			 
        browser.get('https://wooter.co');
		browser.sleep(1000);
        element(by.css('a[aria-label="Sign Up for Free"]')).click();
		element(by.css('#in_identifier')).sendKeys(signupEmail);
		element(by.css('#in_pass')).sendKeys("testing123");
		element(by.css('#in_first_name')).sendKeys("QA");
		element(by.css('#in_last_name')).sendKeys("User");
		element(by.css('#in_phone')).sendKeys(phoneNumber);
		element(by.css('button[type="submit"]')).click();
		browser.sleep(6000);
		expect(element(by.css('p.md-body-2')).getText()).toBe('Create a league');
    });