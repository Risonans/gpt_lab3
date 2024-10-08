export const createHeaderTemplate = (header) => {
  return `
    <h1 class="left__header">
      ${header}
    </h1>
  `;
};

export const createDescriptionTemplate = (description) => {
  return `
    <p class="left__description">
      ${description}
    </p>
  `;
};

/* Слава */
export const createSignUpTemplate = ({src, alt, type, title}) => {
  return `
    <div class="left__social_approve">
      <img src="${src}" alt="${alt}"/ >
      <p class="${type}">${title}</p>
    </div>
  `;
}
/* Слава */

export const createInputTemplate = ({ type, title }) => {
  switch (type) {
    case "input":
      return `
        <input type="text" value="" placeholder="${title}" />
      `;

    case "button":
      return `
          <button class="cta_buttons__signin btn primary-btn">
            ${title}
          </button>
      `;

    default:
      return ``;
  }
};

export const createInputsTemplate = (ctaButtons) => {
  const ctaButtonsTemplate = ctaButtons
    .map((ctaButton) => createInputTemplate(ctaButton))
    .join("");

  const template = `
    <div class="left__cta_buttons">
        ${ctaButtonsTemplate}
    </div>
  `;

  return template;
};

export const createIllustrationTemplate = ({ src, alt }) => {
  return `
    <img src="${src}" alt="${alt}" />
  `;
};

export const heroTemplate = ({
  signUp,
  heroCtaButtons,
  illustration,
  header,
  description,
}) => {
  const signUpTemplate = createSignUpTemplate(signUp);
  const headerTemplate = createHeaderTemplate(header);
  const descriptionTemplate = createDescriptionTemplate(description);
  const buttonsTemplate = createInputsTemplate(heroCtaButtons);
  const illustrationTemplate = createIllustrationTemplate(illustration);

  const resultTemplate = `
    <div class="hero_section__left">
        ${headerTemplate}
        ${descriptionTemplate}
        ${buttonsTemplate}
        ${signUpTemplate}       
    </div>
    <div class="hero_section__right">
        ${illustrationTemplate}
    </div>
    `;

  return resultTemplate;
};
