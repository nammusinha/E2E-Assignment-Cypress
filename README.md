# Cypress-E2E-Assignment
E2E Assignment
Test Automation Framework used: Cypress
Github location: https://github.com/nammusinha/E2E-Assignment-Cypress.git

Automation Overview 
Website used for sample test automation: https://www.amazon.com.au/
This automation consists of 3 test cases:

1.	TestMethod: productSearchWithText
•	Launch website (@beforeEach)
•	Look for a toaster and dismiss it only if available (Reusable Method)
•	Enter relevant term in the search text field.
•	Click on Search button.
•	Validate if search result page has returned any results.

2.	TestMethod: productSearchWithTextAndCategory
•	Launch website (@beforeEach)
•	Look for a toaster and dismiss it only if available (Reusable Method)
•	Select an item from the category dropdown.
•	Click on Search button.
•	Validate if search result page has returned any results.

3.	TestMethod: addProductToShoppingCart
•	Launch website (@beforeEach)
•	Look for a toaster and dismiss it only if available (Reusable Method)
•	Enter relevant term in the search text field.
•	Click on Search button.
•	Add a product to the shopping cart.
•	Validate that product gets added to the cart successfully. 

Framework
E2E/Tests: 
•	The test file is located here. 
•	There can be multiple test files for different modules.
•	Test cases have been written in spec file.

Fixtures/ data-amazon: 
•	Test data is located here. (for example: text to perform search, validation message)

Pages: 
•	Page object model design pattern has been used. 
•	Three different classes have been created for different webpages.
•	Methods created here are specific to the web page. 
•	These methods are called by Tests (E2E/Tests) using the class object.

          Reusable component: 
•	Global level commands  for example  Login or launch of url will be placed in Support/Command.js. This is called before each test method using (beforeEach annotation). I have used launch URL here.

•	Page Object methods reusability : Below Image will give you clarity on reusable functions.
           Functions  “amazonHomePage.editSearchText()” ,“amazonHomePage clickOnSearch()” is called in different test methods(used in Tests “productSearchWithText” & productSearchWithTextAndCategory”)

Reports: 
•	Test reports are getting generated here in HTML format.
	
Screenshots: 
•	In case of failure, screenshots will be generated. 
	
Support/Command.js: Global commands are added here (for example: To launch URL)
Support/e2e.js: Global configurations are placed here (for example: Report)
Cypress.Config.Js: It stores settings and options specific to testing environment 

How to run these tests?
 Required:
•	Node.js
•	Visual Studio Code
•	Cypress: Install it with below command
npm install cypress --save -dev

Steps:
•	Navigate to GitHub URL  : https://github.com/nammusinha/E2E-Assignment-Cypress.git
•	Click on the code and copy the URL
•	 
•	Create a new folder in your system.
•	Open VSCode and open this newly created folder.
•	Click on Terminal from top menu and select new Terminal.
•	Type below command to clone: 
git clone https://github.com/nammusinha/E2E-Assignment-Cypress.git
Code should now be available in VS Code with folder structure. 

Execution
•	To open Cypress Launchpad 
Note: Make sure that terminal is pointing to correct folder path 
 
Command : npx cypress open  
o	This will open E2E Testing page
o	Select a browser then click ”Start E2E Testing in Chrome”
o	select the spec
OR
Run below command in terminal:
npx cypress run --browser chrome –headed  

•	Cypress tests in headless mode: run below command 
npx cypress run          (By default this will run on Electron)
npx cypress run --browser chrome   (to run chrome)
npx cypress run –browser firefox    (to run on firefox)
npx cypress run -browser edge      (to run on edge)

  


