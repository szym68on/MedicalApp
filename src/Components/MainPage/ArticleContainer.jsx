const articles = [
  {
    title: "Disease detection, check up in the laboratory",
    text: "In this case, the role of the health laboratory is very important to do a disease detection...",
    imgPath: "/images/Article(1).png",
  },
  {
    title: "Herbal medicines that are safe for consumption",
    text: "Herbal medicine is very widely used at this time because of its very good for your health...",
    imgPath: "/images/Article(2).png",
  },
  {
    title: "Natural care for healthy facial skin",
    text: "A healthy lifestyle should start from now and also for your skin health.There are some...",
    imgPath: "/images/Article(3).png",
  },
];

function Article({ title, path, text }) {
  return (
    <article className="w-2/3 md:w-1/4 flex-col justify-center shadow-lg rounded-lg md:h-[500px] cursor-pointer">
      <div className="flex items-center justify-center w-[100%]">
        <img src={`${path}`} alt="Article" className="w-[100%] md:w-[100%]" />
      </div>
      <div className="px-4 pt-3">
        <h6 className="text-[1rem] md:text-paragraphBig md:mt-3 mt-2 md:h-16">
          {title}
        </h6>
        <p className="text-gray font-thin text-[0.8rem] mt-2 md:text-smallFont">
          {text}
        </p>
        <a
          href="#"
          className="flex gap-x-2 mt-3 pb-5 text-blue text-[0.9rem] md:text-[17px]"
        >
          <span>Read more</span>
          <span>&#8594;</span>
        </a>
      </div>
    </article>
  );
}

function ArticleContainer() {
  return (
    <div className="w-[100%] flex flex-col items-center md:flex-row md:justify-around gap-y-10 md:gap-y-0 md:gap-x-3 mt-20">
      {articles.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          path={article.imgPath}
          text={article.text}
        />
      ))}
    </div>
  );
}

export default ArticleContainer;
