import { assert } from "chai";

class product

{
    locators = {
        brandExpandOption: () => cy.xpath("//div[@id='open-filter-panel']/div/label[1]"),
        brandSelectionOption: (brandName) => cy.xpath(`//span[@data-vars-cgt='click_brand_filter_label']/span[(contains(text(), '${brandName}'))]`),
        brandNameValidation : () => cy.xpath(`//div[@id="product-list"]/div/following::h3`),
        searchField: () => cy.xpath(`//form[@id="form-desktop"]/div/input`),
        searchIcon: () => cy.get('#search-btn'),
        priceCarrortIcon: () => cy.xpath("//div[@id='sort-option']/div/a/i"),
        firtItemprice: () => cy.xpath('//*[@id="pc0"]/a/div/div[1]/div/div[3]/div'),
        sortedPriceItemList: () => cy.xpath('//*[@id="product-list"]/div/a/div/div/div/div[3]/div')
    };

    selectBrand(brandName)
    {
        this.locators.brandExpandOption().click()
        this.locators.brandSelectionOption(brandName).click()
    }   

    validateBrandNameIspresent(brandName)
    {
        this.locators.brandNameValidation().each(item =>{
            expect(item).to.contain(brandName)
         })  //traverse through each item value to check search brand name is present 
    }

    enterTextToSearch(SearchedText)
    {
        this.locators.searchField().type(SearchedText)
        this.locators.searchIcon().click()
    }

    validateTheSearchResults(SearchedText)
    {
        this.locators.brandNameValidation().each(item =>{
            expect(item).to.contain(SearchedText)
          })   //traverse through each item value to check search text is present
    }

    sortPriceInDecendingOrder()
    {
        this.locators.priceCarrortIcon().click()
       var value =  Cypress.$(this.locators.firtItemprice()).text()
        if(+value <= 999999999)  // check if the item price is less than 999999999 , if yes then again click om carrot item to get the highest value at top
        {
            this.locators.priceCarrortIcon().click()
        }
    }

    validateItemsAreSortedBasedOnPrice()
    {
        var value =  Cypress.$(this.locators.firtItemprice()).text().substring(3)  // getting price of first item and comparing it will all the items
        this.locators.sortedPriceItemList().each(item =>{
            var eachValueText =Cypress.$(item).text().substring(3)
            assert.isAtLeast(+value, +eachValueText, 'Value must be greater')  // first item price should be greater than every next time
          }) 
    }
}

export default product