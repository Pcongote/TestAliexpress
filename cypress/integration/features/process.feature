Feature: Search in Aliexpress

     As a Customer we want to see if the second ad from the second results page 
     when searching for "Iphone" on www.aliexpress.com that has at least 1 item to be bought.

     Scenario: Navigation into Aliexprexx.com
          Given I open "aliexpress.com" page
          When I Click "Close ads" Button
          And I type "iphone" in the "search box"
          And I Click "lens" Button
          And I Click "option ad" "1"
          Then I expect have minimun one product in "stock"