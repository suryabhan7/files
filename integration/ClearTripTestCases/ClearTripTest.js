///<reference types ="cypress"/>
 import HomePage from '../../pages/HomePage' 
 import Cleartripdata from '../../fixtures/ClearTripTestData.json'
 //const homepage = new HomePage();
 //const homepage = require("../../pages/HomePage")
describe('Testing ClearTrip Website',()=>{
    it('Testcase1 - validating tittle',()=>{
        cy.visit("https://www.cleartrip.com/")
        
       cy.title().should("eq","#1 Site for Booking Flights, Hotels, Packages, Trains & Local activities.")

         homepage.verifyClearTripLogo();
         homepage.verifyRadioButtons();
         homepage.clickRoundTrip();
         homepage.typeFrom(Cleartripdata.From);
         homepage.typeTo(Cleartripdata.To);
         homepage.clickDepartOn();
         homepage.clickSearchFlightsButton();    
    });

    it('Testcase2 - validating url',()=>{
        cy.visit("https://cleartrip.com/")
        
      // cy.url().should("eq","https://www.cleartrip.com/")
       cy.url().should("include","cleartrip")

         //homepage.verifyClearTripLogo();
        //  homepage.verifyRadioButtons();
        //  homepage.clickRoundTrip();
        //  homepage.typeFrom(Cleartripdata.From);
        //  homepage.typeTo(Cleartripdata.To);
        //  homepage.clickDepartOn();
        //  homepage.clickSearchFlightsButton();    
    });
});

