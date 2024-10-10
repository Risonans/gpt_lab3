import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initFooter1 from "../components/initFooter1.js";
import { footer1Data } from "../../mockData/footer1Data.js";
import initResearch from "../components/initResearch.js";
import initRequestEarlyAccess from "../components/initRequestEarlyAccess.js";
// import initBlog from "../components/initBlog.js"; // Если требуется, нужно добавить импорт функции initBlog

const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="request_early_access_section"></section>
    <section class="sign_up_and_research"></section>
    <section class="Footer"></section>
  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация hero раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация раздела брендов
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация раздела "Что такое GPT"
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  // инициализация раздела "Зарегистрируйтесь и начните исследовать"
  const researchNode = rootNode.querySelector(".sign_up_and_research"); // Исправлена опечатка "reseacrhNode"
  initResearch(researchNode);

  // инициализация раздела "Шагнуть в будущее"
  const footer1Node = rootNode.querySelector(".Footer");
  initFooter1(footer1Node);

  // инициализация бургера для адаптивного меню
  initBurger(headerNode);

  /* Nick  */
  // const blogNode = rootNode.querySelector(".blog"); // Если блок "blog" требуется, нужно раскомментировать
  // initBlog(blogNode); // инициализация блога, если необходимо
  /* Nick  */
  
  /* Fedor  */
  const requestEarlyAccessNode = rootNode.querySelector(".request_early_access_section");
  initRequestEarlyAccess(requestEarlyAccessNode);
  /* Fedor  */
};

export default homePage;
