export const createBlog_card_1_Template = ({ src, data, title_1, button: {href, articles} }) => {
  return  `
    
    <div class="blog_articles_first">
      <img src="${src}" class="blog_articles_img_first">
      <div class="blog_text_1">
        <div class="blog_articles_data">${data}</div>
        <h4 class="blog_articles_title_1">${title_1}</h4>
        <nav class="blog_articles_nav_1">
          <ul class="blog_articles_link_1">
            <li><a href="${href}">${articles}</a></li>
          </ul>
        </nav>
      </div>
    </div>
    
  `;
};

export const createBlog_card_2_Template = ({ src, data, title_1, button: {href, articles} }) => {
  return  `
    
    <div class="blog_articles">
      <img src="${src}" class="blog_articles_img">
      <div class="blog_text">
        <div class="blog_articles_data">${data}</div>
        <h5 class="blog_articles_title">${title_1}</h5>
        <nav class="blog_articles_nav">
          <ul class="blog_articles_link">
            <li><a href="${href}">${articles}</a></li>
          </ul>
        </nav>
      </div>
    </div>
    
      
  `;
};

/* export const createBlog_card_3_Template = ({ src, data, title_1, button: {href, articles} }) => {
  return  `
    <section class="con_3">
      <div class="blog_articles">
        <img src="${src}" class="blog_articles_img">
        <div class="blog_text">
          <div class="blog_articles_data">${data}</div>
          <h5 class="blog_articles_title">${title_1}</h5>
          <nav class="blog_articles_nav">
            <ul class="blog_articles_link">
              <li><a href="${href}">${articles}</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="blog_articles">
        <img src="${src}" class="blog_articles_img">
        <div class="blog_text">
          <div class="blog_articles_data">${data}</div>
          <h5 class="blog_articles_title">${title_1}</h5>
          <nav class="blog_articles_nav">
            <ul class="blog_articles_link">
              <li><a href="${href}">${articles}</a></li>
            </ul>
          </nav>
        </div>
      </div>
      </section>
  `;
}; */



export const blogTemplate = ({
  blog_card_1_Data,
  blog_card_2_Data,
  blog_card_3_Data,
  blog_card_4_Data,
  blog_card_5_Data,
}) => {
  const blog_card_1_Template = createBlog_card_1_Template(blog_card_1_Data);

  const blog_card_2_Template = createBlog_card_2_Template(blog_card_2_Data);

  const blog_card_3_Template = createBlog_card_2_Template(blog_card_3_Data);

  const blog_card_4_Template = createBlog_card_2_Template(blog_card_4_Data);

  const blog_card_5_Template = createBlog_card_2_Template(blog_card_5_Data);

  const resultTemplate = `
        <div class="con_1">
           ${blog_card_1_Template}
        </div>
        <div class="con_2">
           ${blog_card_2_Template}
           ${blog_card_3_Template}
        </div>
        <div class="con_3">
           ${blog_card_4_Template}
           ${blog_card_5_Template}
        </div>
    `;

  return resultTemplate;

}