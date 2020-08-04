it("Register new user", () => {
  cy.visit("/register");
  cy.get("[data-cy=inputFirstName]").type("Firstname");
  cy.get("[data-cy=inputLastName]").type("Lastname");
  cy.get("[data-cy=inputEmail]").type("firstnamelastname@gmail.com");
  cy.get("[data-cy=inputPassword]").type("Veilig1@");
  cy.get("[data-cy=inputPassword-confirm]").type("Veilig1@");
  cy.get("[data-cy=registerBtn").click();
  cy.wait(500);
  cy.get("[data-cy=homepage").should("be.visible");
});

it("Register new user starting on homepage", () => {
  cy.visit("/home");
  cy.get("[data-cy=loginPageBtn]").click();
  cy.get("[data-cy=registerBtn]").click();
  cy.get("[data-cy=inputFirstName]").type("Firstname");
  cy.get("[data-cy=inputLastName]").type("Lastname");
  cy.get("[data-cy=inputEmail]").type("firstnamelastname2@gmail.com");
  cy.get("[data-cy=inputPassword]").type("Veilig1@");
  cy.get("[data-cy=inputPassword-confirm]").type("Veilig1@");
  cy.get("[data-cy=registerBtn").click();
  cy.wait(500);
  cy.get("[data-cy=homepage").should("be.visible");
});

it("Try using existing username", () => {
  cy.visit("/register");
  cy.get("[data-cy=inputFirstName]").type("Firstname");
  cy.get("[data-cy=inputLastName]").type("Lastname");
  cy.get("[data-cy=inputEmail]").type("firstnamelastname@gmail.com");
  cy.get("[data-cy=inputPassword]").type("Veilig1@");
  cy.get("[data-cy=inputPassword-confirm]").type("Veilig1@");
  cy.get("[data-cy=registerBtn").click();

  cy.server();
  cy.route({
    method: "GET",
    url: "/account/register",
    status: 400,
    response: "ERROR"
  });
  cy.get("[data-cy=emailError").should("be.visible");
});