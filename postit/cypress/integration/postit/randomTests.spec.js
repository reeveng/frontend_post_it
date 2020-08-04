describe("Random tests", function () {
  it("App is live", function () {
    cy.visit("/home");
  });

  it("/random redirects to 404 page", function () {
    cy.visit("/random")
    cy.contains("404")
  });

  it("Get first users from db", function () {
    cy.visit("/home");
    cy.get("[data-cy=homepage]").should("be.visible");
    cy.get("[data-cy=userItem]").should("have.length.gte", 3);
  });

  it("/newPost redirects to login", function () {
    cy.visit("/newPost")
    cy.get("[data-cy=loginBtn]").should("be.visible");
  });

  it("add comment and check if comment added", function () {
    cy.login()
    cy.visit("/");
    cy.contains("Ree").click();
    cy.wait(1 * 1000);
    cy.get("[data-cy=inputComment]").first().clear().type("test comment");
    cy.get("[data-cy=addCommentBtn]").first().click();
    cy.wait(1 * 1000);
    cy.contains("Ree").click();
    cy.contains("test comment").should("be.visible");
    cy.wait(1 * 1000);
    cy.logout();
  });
});