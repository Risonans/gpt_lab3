export const createQuestionTemplate = ({type, title})=>{
    return `
        <h1 class="${type}">${title}</h1>
    `;
};

export const createButtonTemplate = ({type, title}) =>{
    return `
        <div class="buttons_enticing">
            <a href>
                <buttom class="${type}">${title}</buttom>
            </a>
        </div>
    `;
};

export const footer1Template=({
    question,
    button,
}) => {
    const questionTemplate= createQuestionTemplate(question);
    const buttonTemplate = createButtonTemplate(button);

    const resultTemplate =`
        <div class="Footer_string">
            <div class="container">
                ${questionTemplate}
                ${buttonTemplate}
            </div>  
        </div>
        `;
    return resultTemplate;

}