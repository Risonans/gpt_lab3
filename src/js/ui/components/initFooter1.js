import { footer1Data } from "../../mockData/footer1Data.js";
import { footer1Template } from "../templates/footer1Template.js";

const initFooter1 = (footer1Node) => {
  footer1Node.insertAdjacentHTML("beforeend", footer1Template(footer1Data));
};

export default initFooter1;