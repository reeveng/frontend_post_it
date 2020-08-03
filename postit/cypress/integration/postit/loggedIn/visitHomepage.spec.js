describe("My First Test", function () {
  beforeEach(function () {
    cy.login();
  });

  afterEach(() => {
    cy.logout();
  });

  it("homepage /", function () {
    cy.visit("/");
    cy.wait(3 * 1000);
    cy.contains("Welcome");
    cy.contains("govaertr@gmail.com");
  });

  it("homepage /home", function () {
    cy.visit("/home");
    cy.wait(3 * 1000);
    cy.contains("Welcome");
    cy.contains("govaertr@gmail.com");
  });

  it("check number of users", function () {
    cy.visit("/home");
    cy.get("[data-cy=userItem]").should("have.length.gte", 3);
  });
});