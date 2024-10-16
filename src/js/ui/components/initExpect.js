import { expectData } from "../../mockData/expectData.js";
import { expectTemplate } from "../templates/expectTemplate.js";

const initExpect = (expectNode) => {
  expectNode.insertAdjacentHTML("beforeend", expectTemplate(expectData));
};

export default initExpect;