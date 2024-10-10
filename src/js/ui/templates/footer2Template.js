
export const createPngTemplate = ({src, alt, type, title}) => {
    return `
        <div class="Footer_Footer_png">
            <img src="${src}" alt="${alt}"/ >
            <p class ="${type}">${title}</p>
        </div>
    `;
};
export const createSecondFooter2Template = ({header, content1, content2, content3, content4}) => {
    return `
        <nav class="nedurak">
            <h12>${header} </h12>
            <ul class="Footer_Footer_company">
                <li><a href="#!">${content1}</a></li>
                <li><a href="#!">${content2}</a></li>
                <li><a href="#!">${content3}</a></li>
            </ul>
        </nav> 
   
    `; 
};
export  const createSecondFooter1Template = ({header, content1, content2, content3})=>{
    return `
        <nav class = "yadurak">
            <h11>"${header}"</h11>
            <ul class="Footer_Footer_links">
                <li><a href="#!">${content1}</a></li>
                <li><a href="#!">${content2}</a></li>
                <li><a href="#!">${content3}</a></li>
                <li><a href="#!">${content4}</a></li>
            </ul>
        </nav>
    `;

};
export const createSecondFooter3Template = ({header, content1, content2, content3}) => {
    return `
        <div class="Footer_Footer_contacts">
                <h13>${header}</h13>
                <p class ="street_contacts">${content1}</p>
                <p class ="number">${content2}</p>
                <p class = "pstu_ru">${content3}</p>
        </div>
    `;
};
export const footer2Template=({
    png,
    secondFooter1,
    secondFooter2,
    secondFooter3,
}) => {
    const pngTemplate = createPngTemplate(png);
    const secondFooter1Template = createSecondFooter1Template(secondFooter1);
    const secondFooter2Template = createSecondFooter2Template(secondFooter2);
    const secondFooter3Template = createSecondFooter3Template(secondFooter3);

    const resultTemplate=`
        <div class="Footer_Footer">
            ${pngTemplate}
            ${secondFooter1Template}
            ${secondFooter2Template}
            ${secondFooter3Template}
        </div>
        `;
    return resultTemplate;

};