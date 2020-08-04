describe("Test new post page", () => {
  beforeEach(() => {
    cy.login();
  });

  afterEach(() => {
    cy.logout();
  });

  it("add new post", () => {
    cy.visit("/home");
    cy.get("[data-cy=navMenuBtn]").click();
    cy.get("[data-cy=newPostPageBtn]").click();
    cy.get("[data-cy=inputTitle]").clear().type("Test Post Title");
    cy.get("[data-cy=inputText]").clear().type("Test post Text.");
    cy.get("[data-cy=newPostBtn]").click();
  });

  it("add new post", () => {
    cy.visit("/newPost");
    cy.get("[data-cy=inputTitle]").clear().type("Test Post Title");
    cy.get("[data-cy=inputText]").clear().type("Test post Text.");
    cy.get("[data-cy=newPostBtn]").click();
  });

  it("Check new post", () => {
    cy.visit("/home");
    cy.contains("Ree").click();
    cy.contains("Test Post Title");
    cy.contains("Test post Text.");
  });

  it("can't add an empty post", () => {
    cy.visit("/newPost");
    cy.get("[data-cy=inputTitle]").clear();
    cy.get("[data-cy=inputText]").clear();
    cy.get("[data-cy=newPostBtn]").should("be.disabled");
  });

  it("can't add too short title or text post", () => {
    cy.visit("/newPost");
    cy.get("[data-cy=inputTitle]").clear().type("t");
    cy.get("[data-cy=inputText]").clear().type("r");
    cy.get("[data-cy=newPostBtn]").should("be.disabled");
  });

  it("can't create new post with 1 empty field", () => {
    cy.visit("/newPost");
    cy.get("[data-cy=inputTitle]").clear().type("title");
    cy.get("[data-cy=inputText]").clear();
    cy.get("[data-cy=newPostBtn]").should("be.disabled");
    cy.get("[data-cy=inputTitle]").clear();
    cy.get("[data-cy=inputText]").clear().type("text");
    cy.get("[data-cy=newPostBtn]").should("be.disabled");
    cy.get("[data-cy=inputTitle]").clear().type("title");
    cy.get("[data-cy=inputText]").clear().type("text");
    cy.get("[data-cy=newPostBtn]").should("be.enabled");
  });
});