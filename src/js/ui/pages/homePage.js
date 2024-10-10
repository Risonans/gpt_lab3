import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initBlog from "./../components/initBlog.js";
import initFooter1 from "../components/initFooter1.js";
import initFooter2 from "../components/initFooter2.js";
import initFooter3 from "../components/initFooter3.js";



const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="sign_up_and_research"></section>
    <section class="blog"></section>
    <section class="Footer"></section>
    <section class="footer1"></section>
    <section class="footer2"></section>
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

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация хиро раздела
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация хиро раздела
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  // инициализация формы "регистрации и исследования"
  const researchNode = rootNode.querySelector(".sign_up_and_research");
  initResearch(researchNode);

  /* Nick  */
  const blogNode = rootNode.querySelector(".blog");
  initBlog(blogNode);
  /* Nick  */

  // инициализация раздела "Шагнуть в будущее"
  const footer1Node = rootNode.querySelector(".Footer");
  initFooter1(footer1Node);

  //K
  const footer2Node = rootNode.querySelector(".footer1");
  initFooter2(footer2Node);

  const footer3Node = rootNode.querySelector(".footer2");
  initFooter3(footer3Node);


  // инициализация бургера для адаптивного меню
  initBurger(headerNode);


};

export default homePage;
