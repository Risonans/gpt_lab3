export const createTextTemplate = ({type, title})=>{
    return `
        <p class="${type}">${title}</p>
    `;
};
export const footer3Template=({
    text,
}) => {
    const textTemplate= createTextTemplate(text);

    const resultTemplate = `
        <div class="Footer_Footer_Footer">
            ${textTemplate}
        </div>  
        `;
    return resultTemplate;
};