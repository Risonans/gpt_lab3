export const createCollum1Template = ({ items }) => {
    return `
        <div class="Footer_Footer_png">
            ${items
                .map(
                    ({ src, alt, type, title }) => `
                    <img src="${src}" alt="${alt}" />
                    <p class="${type}">${title}</p>
                `
                )
                .join('')}
        </div>
    `;
};

export const createCollum2Template = ({ items }) => {
    return `
        <nav class="yadurak">
            <h11>${items[0]?.title || ''}</h11>
            <ul class="Footer_Footer_links">
                ${items
                    .slice(1)
                    .map(({ title }) => `<li><a href="#!">${title}</a></li>`)
                    .join('')}
            </ul>
        </nav>
    `;
};

export const createCollum3Template = ({ items }) => {
    return `
        <nav class="nedurak">
            <h12>${items[0]?.title || ''}</h12>
            <ul class="Footer_Footer_company">
                ${items
                    .slice(1)
                    .map(({ title }) => `<li><a href="#!">${title}</a></li>`)
                    .join('')}
            </ul>
        </nav>
    `;
};

export const createCollum4Template = ({ items }) => {
    return `
        <div class="Footer_Footer_contacts">
            <h13>${items[0]?.title || ''}</h13>
            ${items
                .slice(1)
                .map(
                    ({ type, title }) => `
                    <p class="${type}">${title}</p>
                `
                )
                .join('')}
        </div>
    `;
};

export const footer2Template = ({ collum1, collum2, collum3, collum4 }) => {
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
