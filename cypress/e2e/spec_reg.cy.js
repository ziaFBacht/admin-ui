describe("User login", () => {
  it("akses register", () => {
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");

    cy.get("div").contains("Create an account").click();

    cy.get("input#name")
      .should("be.visible")
      .should("have.attr", "placeholder", "John Doe")
      .type("John Doe")
      .should("have.value", "John Doe");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "●●●●●●●●●●●●●●")
      .type("123456")
      .should("have.value", "123456");

    cy.get('[type="checkbox"]').check()

    cy.get("button").contains("Register").click();

    cy.get("button").contains("Login")  
    
    cy.wait(5000);
  });
});