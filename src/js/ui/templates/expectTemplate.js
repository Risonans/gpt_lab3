export const createImageTemplate = ({alt, src, type}) => {
    return `
        <img src="${src}" alt="${alt}" class="${type}" />
    `;
};

export const createTextTemplate = ({type1 ,title1, type2, title2, type3, title3, type4, title4}) => {
    return `
        <p class="${type1}">${title1}</p>
        <h2 class="${type2}">${title2}</h2>
        <p class="${type3}">${title3}</p>
        <a href="$!" class="${type4}">${title4}</a>
    `;
};

export const expectTemplate = ({
    image,
    text,
}) => {
    const imageTemplate = createImageTemplate(image);
    const textTemplate = createTextTemplate(text);

    const resultTemplate = `
        <div class="request_early_access__left">
            ${imageTemplate}
        </div>
        <div class="request_early_access__right">
            ${textTemplate}
        </div>
    `;

    return resultTemplate;
};