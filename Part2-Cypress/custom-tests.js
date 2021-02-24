describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () =>{
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(function($el){
    expect($el).to.have.value(75);
  });
  });

  it('Volume changes when slider does', () =>{
    cy.get('#volume-slider').invoke('val', '33').trigger('input');
    cy.get('#volume-number').then(function($el){
    expect($el).to.have.value(33);
  });
  });

  it('Audio volume property changes when slider does', () =>{
    cy.get('#volume-slider').invoke('val', '33').trigger('input');
    cy.get('#horn-sound').then(function($el){
    expect($el).to.have.prop('volume',.33);
  });
  });

  it('Check that the auido src changes', () =>{
    cy.get('#radio-party-horn').check();
    cy.get('#horn-sound').then(function($el){
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/party-horn.mp3');
    });
  });

  it('Check that the image src changes', () =>{
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then(function($el){
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/images/party-horn.svg');
    });
  });

  it('Volume Icon changes when set to 66-100', () =>{
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-image').then(function($el){
    expect($el).to.have.prop('src','http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg');
  });
  });

  it('Volume Icon changes when set to 34-65', () =>{
    cy.get('#volume-number').clear().type('50');
    cy.get('#volume-image').then(function($el){
    expect($el).to.have.prop('src','http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg');
  });
  });

  it('Volume Icon changes when set to 1-33', () =>{
    cy.get('#volume-number').clear().type('5');
    cy.get('#volume-image').then(function($el){
    expect($el).to.have.prop('src','http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg');
  });
  });

  it('Check honk btn disabled when box is clear', () =>{
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(function($el){
    expect($el).to.have.prop('disabled',true);
  });
  });

  it('Check honk btn disabled when not a number', () =>{
    cy.get('#volume-number').clear().type('a');
    cy.get('#honk-btn').then(function($el){
    expect($el).to.have.prop('disabled',true);
  });
  });

  it('Check if error is shown with number below 0', () =>{
    cy.get('#volume-number').clear().type('-100');
    cy.get('#volume-number:invalid').should('have.length', 1);
    cy.get('#volume-number').then(($el) => {
      expect($el[0].validationMessage).to.eq('Value must be greater than or equal to 0.')
    });
  });

  it('Check if error is shown with number above 100', () =>{
    cy.get('#volume-number').clear().type('1000');
    cy.get('#volume-number:invalid').should('have.length', 1);
    cy.get('#volume-number').then(($el) => {
      expect($el[0].validationMessage).to.eq('Value must be less than or equal to 100.')
    });
  });
});
