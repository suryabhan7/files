///<reference types ="cypress"/>



//Css Selectors
export const CLEARTRIP_LOGO = "[data-test-attrib='cleartrip-logo']"
export const SEARCH_FLIGHT_TEXT = ".fs-9"
export const RADIOBUTTONS = '.radio__circle'
export const ROUNDTRIP = '.radio__circle'
export const CLEARTRIP_FROM_TO ='[placeholder="Any worldwide city or airport"]'
export const DEPART_ON = '[class="t-all ml-2"]'
export const MOREOPTIONS = '[href="javascript:void(0);"]'
export const CLASS_OF_TRAVEL = '.row.mb-4 [class="bc-neutral-100 bg-transparent"]'
export const CLASS_LIST = '.row.mb-4 [class="bc-neutral-100 bg-transparent"] >option'
export const ADULTS = '.mb-4 > select'
export const ADULTSLIST = '.mb-4 > select >option'
export const SEARCH_FLIGHTS_BUTTON = 'button.button'

class homepage{
    //Getter methods
    getClearTripLogo(){
        return cy.get(CLEARTRIP_LOGO)
    }

     getSearchFlightText(){
        return cy.get(SEARCH_FLIGHT_TEXT)
    }

    getRadioButtons(){
        return cy.get(RADIOBUTTONS)
    }

    getRoundTrip(){
        return cy.get(ROUNDTRIP).eq(1)
    }

    getClearTripFrom(){
        return cy.get(CLEARTRIP_FROM_TO).eq(0)
    }

    getClearTripTo(){
        return cy.get(CLEARTRIP_FROM_TO).eq(1)
    }

    getDepartOn(){
        return cy.get(DEPART_ON).eq(0);
    }

    getMoreOptions(){
        return cy.get(MOREOPTIONS)
    }

    getClassOfTravel(){
        return cy.get(CLASS_OF_TRAVEL)
    }

    getClassList(){
        return cy.get(CLASS_LIST)
    }

    getAdults(){
        return cy.get(ADULTS);
    }
    
    getAdultsList(){
        return cy.get(ADULTSLIST);
    }

    getSearchFlightsButton(){
        return cy.get(SEARCH_FLIGHTS_BUTTON);
    }

    // Action Methods
    clickRoundTrip(){
        this.getRoundTrip().click();
    }

    typeFrom(city){
        this.getClearTripFrom().type(city,{ delay: 500 })
         cy.contains('Suggestions').parent().find("li").eq(0).click()
            
    }
 
    typeTo(city){
        this.getClearTripTo().type(city,{ delay: 500 })
        cy.contains('Suggestions').parent().find("li").eq(0).click()
    }

    clickDepartOn(){
        this.getDepartOn().click()
        cy.contains('30').dblclick()
    }

    clickMoreOptions(){
        this.getMoreOptions().click()
    }

    clickClassOfTravel(){
        this.getClassOfTravel().click()
        cy.contains('First').click()
    }

    clickAdults(){
        this.getAdults().click()
        cy.contains('1').click()
    }

    clickSearchFlightsButton(){
        this.getSearchFlightsButton().click();
    }

    //Verification Methods

    verifyClearTripLogo(){
       this.getClearTripLogo().should('be.visible');
    }
    
    verifySearchFlightText(){
        this.getSearchFlightText().should("include.text","Search flights")
    }

    verifyRadioButtons(){
        this.getRadioButtons().should("have.length",3);
    }
    
    verifyClassList(){
        this.getClassList().should("have.length",4)
    }

    verifyAdultsList(){
       this.getAdultsList()
        .should("have.length",9)
        .and("have.css","color","rgb(247, 119, 40)");
    }
    verifySearchFlightButton(){
        this.getSearchFlightsButton()
        .should("have.css","color","rgb(247, 119, 40)");
    }
   
}

export default homepage