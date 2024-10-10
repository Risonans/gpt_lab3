import { footer2Data } from "../../mockData/footer2Data.js";
import { footer2Template } from "../templates/footer2Template.js";

const initFooter2 = (footer2Node) => {
  footer2Node.insertAdjacentHTML("beforeend", footer2Template(footer2Data));
};

export default initFooter2;