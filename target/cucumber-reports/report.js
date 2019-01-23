$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/Feature/Categorypage.feature");
formatter.feature({
  "line": 4,
  "name": "Category list menu",
  "description": "",
  "id": "category-list-menu",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Categorypage"
    }
  ]
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify  category page with product",
  "description": "",
  "id": "category-list-menu;verify--category-page-with-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "as a user i am on the  home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on \"\u003cCategories\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user should be able see \"\u003crespective\u003e\" sub-category",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user should see url with \"\u003curlextension\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "category-list-menu;verify--category-page-with-product;",
  "rows": [
    {
      "cells": [
        "Categories",
        "respective",
        "urlextension"
      ],
      "line": 17,
      "id": "category-list-menu;verify--category-page-with-product;;1"
    },
    {
      "cells": [
        "Computers",
        "Computers",
        "computers"
      ],
      "line": 18,
      "id": "category-list-menu;verify--category-page-with-product;;2"
    },
    {
      "cells": [
        "Electronics",
        "Electronics",
        "electronics"
      ],
      "line": 19,
      "id": "category-list-menu;verify--category-page-with-product;;3"
    },
    {
      "cells": [
        "Apparel",
        "Apparel",
        "apparel"
      ],
      "line": 20,
      "id": "category-list-menu;verify--category-page-with-product;;4"
    },
    {
      "cells": [
        "Digital downloads",
        "Digital downloads",
        "digital-downloads"
      ],
      "line": 21,
      "id": "category-list-menu;verify--category-page-with-product;;5"
    },
    {
      "cells": [
        "Books",
        "Books",
        "books"
      ],
      "line": 22,
      "id": "category-list-menu;verify--category-page-with-product;;6"
    },
    {
      "cells": [
        "Jewelry",
        "Jewelry",
        "jewelry"
      ],
      "line": 23,
      "id": "category-list-menu;verify--category-page-with-product;;7"
    },
    {
      "cells": [
        "Gift Cards",
        "Gift Cards",
        "gift-cards"
      ],
      "line": 24,
      "id": "category-list-menu;verify--category-page-with-product;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6837718609,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "As a demo.nopcommerce.com user",
  "description": "I want to  view all category\r\nSo that  i can view category products\r\nurl extension",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 18,
  "name": "Verify  category page with product",
  "description": "",
  "id": "category-list-menu;verify--category-page-with-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Categorypage"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "as a user i am on the  home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on \"Computers\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user should be able see \"Computers\" sub-category",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user should see url with \"computers\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.asAUserIAmOnTheHomePage()"
});
formatter.result({
  "duration": 109028176,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 1435346554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleSeeSubCategory(String)"
});
formatter.result({
  "duration": 37304924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "computers",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.userShouldSeeUrlWith(String)"
});
formatter.result({
  "duration": 8822926,
  "status": "passed"
});
formatter.after({
  "duration": 669585820,
  "status": "passed"
});
formatter.before({
  "duration": 5149925331,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "As a demo.nopcommerce.com user",
  "description": "I want to  view all category\r\nSo that  i can view category products\r\nurl extension",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 19,
  "name": "Verify  category page with product",
  "description": "",
  "id": "category-list-menu;verify--category-page-with-product;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Categorypage"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "as a user i am on the  home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on \"Electronics\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user should be able see \"Electronics\" sub-category",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user should see url with \"electronics\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.asAUserIAmOnTheHomePage()"
});
formatter.result({
  "duration": 57328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 1253571707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleSeeSubCategory(String)"
});
formatter.result({
  "duration": 65753304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "electronics",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.userShouldSeeUrlWith(String)"
});
formatter.result({
  "duration": 9770261,
  "status": "passed"
});
formatter.after({
  "duration": 681823683,
  "status": "passed"
});
formatter.before({
  "duration": 4912566264,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "As a demo.nopcommerce.com user",
  "description": "I want to  view all category\r\nSo that  i can view category products\r\nurl extension",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 20,
  "name": "Verify  category page with product",
  "description": "",
  "id": "category-list-menu;verify--category-page-with-product;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Categorypage"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "as a user i am on the  home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on \"Apparel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user should be able see \"Apparel\" sub-category",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user should see url with \"apparel\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.asAUserIAmOnTheHomePage()"
});
formatter.result({
  "duration": 67944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 1438832268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apparel",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleSeeSubCategory(String)"
});
formatter.result({
  "duration": 46144482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apparel",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.userShouldSeeUrlWith(String)"
});
formatter.result({
  "duration": 8218500,
  "status": "passed"
});
formatter.after({
  "duration": 662063401,
  "status": "passed"
});
formatter.before({
  "duration": 5144306078,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "As a demo.nopcommerce.com user",
  "description": "I want to  view all category\r\nSo that  i can view category products\r\nurl extension",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 21,
  "name": "Verify  category page with product",
  "description": "",
  "id": "category-list-menu;verify--category-page-with-product;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Categorypage"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "as a user i am on the  home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on \"Digital downloads\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user should be able see \"Digital downloads\" sub-category",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user should see url with \"digital-downloads\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.asAUserIAmOnTheHomePage()"
});
formatter.result({
  "duration": 41404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 1581718227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital downloads",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleSeeSubCategory(String)"
});
formatter.result({
  "duration": 35864988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "digital-downloads",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.userShouldSeeUrlWith(String)"
});
formatter.result({
  "duration": 8132153,
  "status": "passed"
});
formatter.after({
  "duration": 649294364,
  "status": "passed"
});
formatter.before({
  "duration": 5024129987,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "As a demo.nopcommerce.com user",
  "description": "I want to  view all category\r\nSo that  i can view category products\r\nurl extension",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 22,
  "name": "Verify  category page with product",
  "description": "",
  "id": "category-list-menu;verify--category-page-with-product;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Categorypage"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "as a user i am on the  home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on \"Books\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user should be able see \"Books\" sub-category",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user should see url with \"books\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.asAUserIAmOnTheHomePage()"
});
formatter.result({
  "duration": 37512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 921693880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleSeeSubCategory(String)"
});
formatter.result({
  "duration": 33726140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "books",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.userShouldSeeUrlWith(String)"
});
formatter.result({
  "duration": 8347311,
  "status": "passed"
});
formatter.after({
  "duration": 672630599,
  "status": "passed"
});
formatter.before({
  "duration": 4698784424,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "As a demo.nopcommerce.com user",
  "description": "I want to  view all category\r\nSo that  i can view category products\r\nurl extension",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 23,
  "name": "Verify  category page with product",
  "description": "",
  "id": "category-list-menu;verify--category-page-with-product;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Categorypage"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "as a user i am on the  home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on \"Jewelry\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user should be able see \"Jewelry\" sub-category",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user should see url with \"jewelry\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.asAUserIAmOnTheHomePage()"
});
formatter.result({
  "duration": 275319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 1793664140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jewelry",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleSeeSubCategory(String)"
});
formatter.result({
  "duration": 50999002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jewelry",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.userShouldSeeUrlWith(String)"
});
formatter.result({
  "duration": 11793037,
  "status": "passed"
});
formatter.after({
  "duration": 799295072,
  "status": "passed"
});
formatter.before({
  "duration": 5146757047,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "As a demo.nopcommerce.com user",
  "description": "I want to  view all category\r\nSo that  i can view category products\r\nurl extension",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 24,
  "name": "Verify  category page with product",
  "description": "",
  "id": "category-list-menu;verify--category-page-with-product;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Categorypage"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "as a user i am on the  home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on \"Gift Cards\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user should be able see \"Gift Cards\" sub-category",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user should see url with \"gift-cards\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.asAUserIAmOnTheHomePage()"
});
formatter.result({
  "duration": 38219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 12
    }
  ],
  "location": "MyStepdefs.iClickOn(String)"
});
formatter.result({
  "duration": 1376238048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gift Cards",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.userShouldBeAbleSeeSubCategory(String)"
});
formatter.result({
  "duration": 33772852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gift-cards",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.userShouldSeeUrlWith(String)"
});
formatter.result({
  "duration": 8291399,
  "status": "passed"
});
formatter.after({
  "duration": 640514612,
  "status": "passed"
});
});