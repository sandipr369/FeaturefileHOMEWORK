package Com.nopcommerce.demo;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.testng.asserts.SoftAssert;

public class MyStepdefs extends Utils {


    SoftAssert softAssert = new SoftAssert();


    @Given("^as a user i am on the  home page$")
    public void asAUserIAmOnTheHomePage() {
    }

    @When("^I click on \"([^\"]*)\"$")
    public void iClickOn(String Categories) {
        // Write code here that turns the phrase above into concrete actions
        click_element(By.linkText(Categories));

    }

    @Then("^user should be able see \"([^\"]*)\" sub-category$")
    public void userShouldBeAbleSeeSubCategory(String respective) {
        // Write code here that turns the phrase above into concrete actions
        softAssert.assertEquals(respective, getTextFromElement(By.xpath("//strong[contains(text(),'" + respective + "')]")));
        softAssert.assertAll();
    }

    @And("^user should see url with \"([^\"]*)\"$")
    public void userShouldSeeUrlWith(String urlextension) {
        // Write code here that turns the phrase above into concrete actions
        softAssert.assertEquals("https://demo.nopcommerce.com/" + urlextension, driver.getCurrentUrl());
        System.out.println(driver.getCurrentUrl());
        softAssert.assertAll();
    }
}

