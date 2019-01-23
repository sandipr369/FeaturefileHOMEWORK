@Categorypage


Feature: Category list menu

  Background: As a demo.nopcommerce.com user
  I want to  view all category
  So that  i can view category products
  url extension

  Scenario Outline: Verify  category page with product
    Given as a user i am on the  home page
    When I click on "<Categories>"
    Then user should be able see "<respective>" sub-category
    And user should see url with "<urlextension>"
    Examples:
      | Categories        | respective        | urlextension      |
      | Computers         | Computers         | computers         |
      | Electronics       | Electronics       | electronics       |
      | Apparel           | Apparel           | apparel           |
      | Digital downloads | Digital downloads | digital-downloads |
      | Books             | Books             | books             |
      | Jewelry           | Jewelry           | jewelry           |
      | Gift Cards        | Gift Cards        | gift-cards        |
