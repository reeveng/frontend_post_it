describe("Login Page", () => {
  it("login on server", () => {
    cy.login();
  });

  afterEach(() => {
    cy.logout();
  });

  it("login on page", () => {
    cy.visit("/login");
    cy.get("[data-cy=inputEmail]").type("govaertr@gmail.com");
    cy.get("[data-cy=inputPassword]").type("Veilig1@");
    cy.get("[data-cy=loginBtn]").click();
    cy.contains("govaertr@gmail.com");
    cy.get("[data-cy=homepage").should("be.visible");
  });

  it("login starting on homepage", () => {
    cy.visit("/home");
    cy.get("[data-cy=homepage").should("be.visible");
    cy.get("[data-cy=loginPageBtn]").click();
    cy.get("[data-cy=inputEmail]").type("govaertr@gmail.com");
    cy.get("[data-cy=inputPassword]").type("Veilig1@");
    cy.get("[data-cy=loginBtn]").click();
    cy.contains("govaertr@gmail.com");
    cy.get("[data-cy=homepage").should("be.visible");
  });

  it("login starting on 404 page", () => {
    cy.visit("/somethingRandom");
    cy.get("[data-cy=loginPageBtn]").click();
    cy.get("[data-cy=inputEmail]").type("govaertr@gmail.com");
    cy.get("[data-cy=inputPassword]").type("Veilig1@");
    cy.get("[data-cy=loginBtn]").click();
    cy.contains("govaertr@gmail.com");
    cy.get("[data-cy=homepage").should("be.visible");
  });
});