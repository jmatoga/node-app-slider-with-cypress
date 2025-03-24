describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if user can slide gallery', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-prev').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
});

describe('Swiper Gallery Title And Description Test', function () {
  it('Checks if title and description is correct', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Rome').and('contain', 'Italy');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London').and('contain', 'United Kingdom');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris').and('contain', 'France');
  });
});

describe('Swiper Gallery Responsiveness Test', function () {
  const viewports = [
    { device: 'Desktop', width: 1280, height: 800 },
    { device: 'Tablet', width: 768, height: 1024 },
    { device: 'Mobile', width: 375, height: 667 }
  ];

  viewports.forEach(({ device, width, height }) => {
    it(`Checks if gallery adapts to ${device}`, function () {
      cy.viewport(width, height);
      cy.visit('http://localhost:3000');

      cy.get('.swiper-wrapper').should('be.visible')
          .invoke('outerWidth')
          .should('be.lte', width);
      cy.get('.swiper-slide').first()
          .invoke('outerWidth')
          .should('be.lte', width);
      cy.get('.swiper-button-next').should('be.visible').click();
      cy.wait(1000);
      cy.get('.swiper-button-prev').should('be.visible').click();
    });
  });
});

describe('Gallery Visibility Test', function () {
  it('Checks if gallery is visible correctly', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-wrapper').should('be.visible');
    cy.get('.swiper-slide').should('have.length', 3);
    cy.get('.swiper-slide-active').should('be.visible');
    cy.get('.swiper-button-prev').should('be.visible').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').should('be.visible').click();
  });
});
