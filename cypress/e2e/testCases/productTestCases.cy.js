
import product from "../pageObjects/productPageObjects.js"
const productObject = new product();

describe('Searching and Filtering Test Cases', ()=> {

  it('Task # 01 : Validate User able to select the items based on brand', function() {
    
    cy.pageNavigation(this.productdata.searchBrandUrl) // naviagte to brand URL
    productObject.selectBrand(this.productdata.brandName) // Select brand value
    productObject.validateBrandNameIspresent(this.productdata.brandName) // Get list of element and get the text from it and valide text hould contain brand value

  })

  it('Task # 02 : Validate User able to Sort the items based on price', function()
  {
    cy.pageNavigation(this.productdata.clothingPageUrl) // Naviagte to cloth section URL
    productObject.sortPriceInDecendingOrder()  // sort the items based on decending order price
    productObject.validateItemsAreSortedBasedOnPrice()  // validate items are sorted based on price

  })

  it('Task # 03 : Validate User able to Search the item based on search Text' , function()
  {
    cy.pageNavigation('')
    productObject.enterTextToSearch(this.productdata.searchDeviceName) // Enter the search text in a search field
    productObject.validateTheSearchResults(this.productdata.searchDeviceName) // Validate the search results by comparing provided value with returned search value

  })
  
})