export const createBlogImageTemplate = ({ src, alt }) => `
    <img class="blog_articles_img_first" src="${src}" alt="${alt}" />      
`;

export const blogTemplate = (blogData) => {
    const blogImagesTemplate = blogData
      .map((blogData) => createBlogImageTemplate(blogData))
      .join("");
  
    return blogImagesTemplate;
  };