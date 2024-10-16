export const createCollum1Template = ({src, alt, type, title}) => {
    return `
        <div class="Footer_Footer_png">
            <img src="${src}" alt="${alt}" />
            <p class="${type}">${title}</p>
        </div>
    `;
};

export const createCollum2Template = ({title1, title2, title3, title4, title5}) => {
    return `
        <nav class="yadurak">
            <h11>${title1}</h11>
            <ul class="Footer_Footer_links">
                <li><a href="#!">${title2}</a></li>
                <li><a href="#!">${title3}</a></li>
                <li><a href="#!">${title4}</a></li>
                <li><a href="#!">${title5}</a></li>
            </ul>
        </nav>
    `;
};

export const createCollum3Template = ({title1, title2, title3, title4}) => {
    return `
        <nav class="nedurak">
            <h12>${title1}</h12>
            <ul class="Footer_Footer_company">
                <li><a href="#!">${title2}</a></li>
                <li><a href="#!">${title3}</a></li>
                <li><a href="#!">${title4}</a></li>
            </ul>
        </nav>
    `;
};

export const createCollum4Template = ({title, type1, title1, type2, title2, type3, title3}) => {
    return `
        <div class="Footer_Footer_contacts">
            <h13>${title}</h13>
            <p class="${type1}">${title1}</p>
            <p class="${type2}">${title2}</p>
            <p class="${type3}">${title3}</p>
        </div>
    `;
};

export const footer2Template = ({
    collum1,
    collum2,
    collum3,
    collum4,
}) => {
    const collum1Template = createCollum1Template(collum1);
    const collum2Template = createCollum2Template(collum2);
    const collum3Template = createCollum3Template(collum3);
    const collum4Template = createCollum4Template(collum4);

    const resultTemplate = `
        <div class="Footer_Footer">
            ${collum1Template}
            ${collum2Template}
            ${collum3Template}
            ${collum4Template}
        </div>
    `;

    return resultTemplate;
};