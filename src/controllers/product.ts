import { Controller, Get } from "@overnightjs/core";
import { get } from "http";
import { Request, Response } from "express";

@Controller("product")
export class ProductController {
  @Get("")
  public getProducts(_: Request, res: Response): void {
    res.send([
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
  }
}
