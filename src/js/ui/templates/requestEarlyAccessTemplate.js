export const createRequestEarlyAccessLeftTemplate = (requestEarlyAccessData) => {
    const { src } = requestEarlyAccessData;
    const template = `
         <div class="request_early_access__left">
          <img class="VRwoman__img" src="${src}"/>
        </div>
    `;
    return template;
};

export const createRequestEarlyAccessRightTemplate = (requestEarlyAccessRightData) => {
    const template = requestEarlyAccessRightData.map(item => {
        let result = '';
        if (item.requestIt) {
            result += `<p class="request_it">${item.requestIt}</p>`; 
        }
        if (item.header) {
            result += `<h2 class="right__header">${item.header}</h2>`;
        }
        if (item.content) {
            result += `<p class="container__content">${item.content}</p>`;
        }
        if (item.type === "right__cta") {
            result += `<a href="#" class="right__cta">${item.title}</a>`;
        }
        return result;
    });

    return `<div class="request_early_access__right">${template}</div>`.replace(",","");
};



export const requestEarlyAccessTemplate = ({
    requestEarlyAccessLeft,
    requestEarlyAccessRight
}) => {
    const requestEarlyAccessLeftTemplate = createRequestEarlyAccessLeftTemplate(requestEarlyAccessLeft);
    const requestEarlyAccessRightTemplate = createRequestEarlyAccessRightTemplate(requestEarlyAccessRight);

    const resultTemplate = `
        <section class="request_early_access">
          ${requestEarlyAccessLeftTemplate}
          ${requestEarlyAccessRightTemplate}
        </section>
    `;
  
    return resultTemplate;
};
