import {ComboboxComponent} from '../../src/app/combobox/combobox.component';

describe('Dropdown Component Test', () => {
  it('validates its role', () => {
    cy.injectAxe();
    cy.mount(ComboboxComponent);
    cy.get('app-combobox').its('aria-role').should("contain", "combobox");

    cy.checkA11y();
  });
});
