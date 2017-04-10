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
	
	it('should logout', function(){
		browser.ignoreSynchronization = true;		
		element(by.css('button[ng-click="toggleMobileMenu()"]')).click();
		browser.sleep(1000);
		element(by.xpath('//p[contains(text(), "Log")]')).click();
		browser.sleep(3000);
		expect(element(by.css('.fill.md-button.md-ink-ripple.md-wooter-black-theme')).isPresent()).toBe(true);
	});
	
    it('should able to login', function(){
		browser.ignoreSynchronization = true;
		browser.sleep(1000);
        element(by.css('button[ng-click="toggleMobileMenu()"]')).click();
		browser.sleep(1000)
		element(by.xpath('//p[contains(text(), "Login")]')).click();
		element(by.css('#in_identifier')).sendKeys(signupEmail);
		element(by.css('#in_pass')).sendKeys("testing123");
		element(by.css('#login-button')).click();
		browser.sleep(4000);
		expect(element(by.css('p.md-body-2')).getText()).toBe('Create a league');
    });
	
    it('should able to change all setting values', function(){
		browser.ignoreSynchronization = true;			 
        element(by.css('button[ng-click="toggleMobileMenu()"]')).click();
		browser.sleep(1000);
		element(by.xpath('//p[contains(text(), "Settings")]')).click();
		browser.sleep(1000);
		element(by.model('organization.first_name')).clear().sendKeys("QA Team");
		element(by.model('organization.last_name')).clear().sendKeys("User 2");
		element(by.model('organization.email')).clear().sendKeys(editEmail);
		element(by.model('organization.phone')).clear().sendKeys(phoneNumber);
		browser.sleep(2000);
		element(by.xpath('//span[contains(text(), "Edit")]')).click();
		browser.sleep(4000);
		expect(element(by.css('.inner.layout-align-start-center.flex-100>p')).isPresent()).toBe(true);
		
    });
	
	it('should logout', function(){
		browser.ignoreSynchronization = true;	
        browser.sleep(4000);		
		element(by.css('button[ng-click="toggleMobileMenu()"]')).click();
		browser.sleep(1000);
		element(by.xpath('//p[contains(text(), "Log")]')).click();
		browser.sleep(3000);
		expect(element(by.css('.fill.md-button.md-ink-ripple.md-wooter-black-theme')).isPresent()).toBe(true);
	});
	
	it('should send recover password link', function(){
		browser.ignoreSynchronization = true;
		browser.sleep(1000)
        element(by.css('button[ng-click="toggleMobileMenu()"]')).click();
		browser.sleep(1000)
		element(by.xpath('//p[contains(text(), "Login")]')).click();
		element(by.css('a[aria-label="Forgot Password?"]')).click();
		element(by.css('#in_identifier')).sendKeys(editEmail);
		element(by.css('#login-button')).click();
		browser.sleep(3000);
		expect(element(by.css('.inner.layout-align-start-center.flex-80>p')).isPresent()).toBe(true);
    });
	
});