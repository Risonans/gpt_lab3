export const createCollumTemplate = (column) => {
    const { items } = column;
    switch (column.column) {
        case 1:
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
        case 2:
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
        case 3:
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
        case 4:
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
        default:
            return '';
    }
};

export const footer2Template = (footer2Data) => {
    const collum1Template = createCollumTemplate(footer2Data[0]);
    const collum2Template = createCollumTemplate(footer2Data[1]);
    const collum3Template = createCollumTemplate(footer2Data[2]);
    const collum4Template = createCollumTemplate(footer2Data[3]);

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