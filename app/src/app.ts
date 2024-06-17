import { NegociationController } from "./controllers/negociation-controller.js";

const form = document.querySelector(".form");
const btImport = document.querySelector("#btn-import");

const controller = new NegociationController();

form.addEventListener("submit", event => {
  event.preventDefault();
  controller.add();
});

btImport.addEventListener("click", event => {
  event.preventDefault();
  controller.import();
})
