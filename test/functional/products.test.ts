import supertest from "supertest";

describe("Products functional tests", () => {
  it("should return a products list", async () => {
    const { body, status } = await global.testRequest.get("/product");
    expect(status).toBe(200);
    expect(body).toEqual([
      {
        id: 1,
        nome: "product_name_1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere pellentesque leo ac sagittis. Aliquam a facilisis risus, non porta risus.",
        price: 1.99,
      },
      {
        id: 2,
        nome: "product_name_2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere pellentesque leo ac sagittis. Aliquam a facilisis risus, non porta risus.",
        price: 4.99,
      },
    ]);
  });
});
