import requestEarlyAccessData from "../../mockData/requestEarlyAccessData.js";
import { requestEarlyAccessTemplate } from "../templates/requestEarlyAccessTemplate.js";

const initRequestEarlyAccess = (requestEarlyAccessNode) => {
    requestEarlyAccessNode.insertAdjacentHTML(
        "beforeend", requestEarlyAccessTemplate({
            requestEarlyAccessLeft: requestEarlyAccessData.requestEarlyAccessLeftData,
            requestEarlyAccessRight: requestEarlyAccessData.requestEarlyAccessRightData
        })
    );
};

export default initRequestEarlyAccess;
