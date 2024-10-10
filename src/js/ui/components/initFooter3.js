import { footer3Data } from "../../mockData/footer3Data.js";
import { footer3Template } from "../templates/footer3Template.js";

const initFooter3 = (footer1Node) => {
  footer1Node.insertAdjacentHTML("beforeend", footer3Template(footer3Data));
};

export default initFooter3;