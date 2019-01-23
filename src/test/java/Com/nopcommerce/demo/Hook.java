package Com.nopcommerce.demo;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.chrome.ChromeDriver;

public class Hook extends BasePage{
@Before
    public void openBrowser(){
        System.setProperty("webdriver.chrome.driver","src\\test\\Resources\\BrowserDriver\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://demo.nopcommerce.com/");




    }
    @After
    public void closeBrowser(){
driver.quit();    }
}
