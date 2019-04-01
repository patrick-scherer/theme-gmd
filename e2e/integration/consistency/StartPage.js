import els from '../../elements/de';
import { openNavDrawer, closeNavDrawer } from '../../helper/navigation';

describe('AndroidGMDTest startPage', () => {
  afterEach(() => {
    cy.get(els.shopLogo).scrollIntoView();
  });

  it('should check Navigation Drawer', () => {
    // Open page
    cy.visit('');

    openNavDrawer();

    // Check for drawer entries
    cy.get(els.navigationDrawerLoginButton)
      .should('be.visible');
    cy.get(els.navDrawerStartPage)
      .should('be.visible');
    cy.get(els.navDrawerCategoriesButton)
      .should('be.visible');
    cy.get(els.navDrawerFavoritesButton)
      .should('be.visible');
    cy.get(els.navDrawerCartButton)
      .contains('Warenkorb')
      .should('be.visible');
    cy.get(els.navDrawerShippingButton)
      .should('be.visible');
    cy.get(els.navDrawerPaymentButton)
      .should('be.visible');
    cy.get(els.navDrawerTermsButton)
      .should('be.visible');
    cy.get(els.navDrawerPrivacyButton)
      .should('be.visible');
    cy.get(els.navDrawerReturnPolicy)
      .should('be.visible');
    cy.get(els.navDrawerImprintButton)
      .scrollIntoView()
      .should('be.visible');
    closeNavDrawer();
  });

  it('should check for shop logo', () => {
    // Check for logo
    cy.get(els.shopLogo)
      .should('be.visible');
  });

  it('should check for image slider widgets', () => {
    // Check for slider and image 1 & 2 exists
    cy.get(els.imageSliderImage1)
      .should('be.visible');
    cy.get(els.imageSliderImage2)
      .should('be.visible');
  });

  it('should check for image widget', () => {
    // Check for image widget and correct link
    cy.get(els.imageWidgetWithLink1)
      .scrollIntoView()
      .should('be.visible');
  });

  it('should check for product slider', () => {
    // Check for product sliders first item displayed
    cy.get(els.productSliderProduct1)
      .scrollIntoView()
      .should('be.visible');
  });

  it('should check for live shopping', () => {
    // Check for live shopping widget diaypled
    cy.get(els.liveShoppingWidgetWithExpectedProduct)
      .scrollIntoView()
      .should('be.visible');
  });

  it('should check for Product grid widget', () => {
    // Check for ProductgridWidget and first product
    cy.get(els.productGridWidgetSecondProduct)
      .scrollIntoView()
      .should('be.visible');
  });

  it('should check for product list widget', () => {
    // Check for product list widget
    cy.get(els.productListWidgetSecondProduct)
      .scrollIntoView()
      .should('be.visible');
  });

  it('should check for category list widget', () => {
    // Check for category list widget and first category
    cy.get(els.categoryListWidgetFirstProduct)
      .scrollIntoView()
      .should('be.visible');
  });
});
