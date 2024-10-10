export const createText1Template = ({type, title}) => {
    return `
        <p class="${type}">${title}</p>
    `;
};

export const createText2Template = ({type, title}) => {
    return `
        <h5 class="${type}">${title}</h5>
    `;
};

export const createButtonTemplate = ({type, title}) => {
    return `
        <button class="${type}">${title}</button>
    `;
};

export const researchTemplate = ({
    text1,
    text2,
    bttn,
}) => {
    const text1Template = createText1Template(text1);
    const text2Template = createText2Template(text2);
    const buttonTemplate = createButtonTemplate(bttn);

    const resultTemplate = `
        <div class="up_text">
            ${text1Template}
            ${text2Template}
        </div>
        ${buttonTemplate}
    `;
    
    return resultTemplate;
};