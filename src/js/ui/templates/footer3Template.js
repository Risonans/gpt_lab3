export const createCopyrightTemplate = (copyright) =>{
    return `
        <p class="footer_03">${copyright}</p>
    `;
}

export const footer3Template = ({
    copyright,
}) => {
    const copyrightTemplate = createCopyrightTemplate(copyright);

    const resultTemplate = `
        <div class="Footer_Footer_Footer">
            ${copyrightTemplate}
        </div>
    `;

    return resultTemplate;
};