/// <reference types="cypress" />

describe("api testing with cypress", () => {
  it("GET api", () => {
    // cy.request("https://gorest.co.in/public/v2/users");
    cy.api({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users",
    }).then(({ status }) => {
      expect(status).to.eq(200);
    });
  });

  it("POST API", () => {
    cy.api({
      method: "POST",
      body: {
        name: "harry potter",
        gender: "male",
        email: "harrypotter1@gmail.com",
        status: "active",
      },
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        Authorization: `Bearer e1ddbafab943f3ab18158c2c3d23426b2fc67abcd55228975107787f201de3c7`,
        "Content-Type": "application/json",
      },
    }).then((data) => {
      expect(data.status).to.eq(201);
      expect(data.body.name).to.eq("harry potter");
    });
  });

  it.skip("DELETE API", () => {
    cy.request({
      method: "DELETE",
      url: "https://gorest.co.in/public/v2/users/837162",
      headers: {
        Authorization: `Bearer e1ddbafab943f3ab18158c2c3d23426b2fc67abcd55228975107787f201de3c7`,
        "Content-Type": "application/json",
      },
    });
  });
});
