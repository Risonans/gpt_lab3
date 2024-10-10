import { footer3Data } from "../../mockData/footer3Data.js";
import { footer3Template } from "../templates/footer3Template.js";

const initFooter3 = (footer3Node) => {
  footer3Node.insertAdjacentHTML("beforeend", footer3Template(footer3Data));
};

export default initFooter3;