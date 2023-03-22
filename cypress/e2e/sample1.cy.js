/// <reference types="cypress" />

import "cypress-v10-preserve-cookie";

describe("demo QA website test", function () {
  before("opening website", () => {
    cy.session("login", () => {
      cy.visit("https://automationintesting.online");
    });
  });

  it("test 1", () => {
    cy.visit("https://automationintesting.online");
    cy.get('button[type="button"]')
      .contains("Let me hack!")
      .click({ force: true });
  });
  it("test 2", () => {
    cy.visit("https://automationintesting.online");

    cy.get('input[id="name"]').click({ force: true }).type("Osama Azhar");
    cy.get('input[id="email"]')
      .click({ force: true })
      .type("osama.azhar@gmail.com");
    cy.get('input[id="phone"]').click({ force: true }).type("03369216711");
    cy.get('input[id="subject"]').click({ force: true }).type("Testing");
    cy.get('textarea[id="description"]')
      .click({ force: true })
      .type("using this website for testing purpose");

    cy.get('button[id="submitContact"]').click({ force: true });
  });
});
