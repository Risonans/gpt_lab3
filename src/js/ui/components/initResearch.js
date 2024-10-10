import { researchData } from "../../mockData/researchData.js";
import { researchTemplate } from "../templates/researchTemplate.js";

const initResearch = (researchNode) => {
  researchNode.insertAdjacentHTML("beforeend", researchTemplate(researchData));
};

export default initResearch;
