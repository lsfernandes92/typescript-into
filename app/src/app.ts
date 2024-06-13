import { NegociationController } from "./controllers/negociation-controller.js";

const form = document.querySelector(".form");

const controller = new NegociationController();

form.addEventListener("submit", event => {
  event.preventDefault();
  controller.add();
});
