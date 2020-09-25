import * as React from "react";
import { useQuery } from "react-query";
import { ArticleDisplay } from "../article/view/Article";
import { getGlobalFeed } from "./landing-api";

export const Landing: React.FC<{}> = (props) => {
  const articles = useQuery("globalFeed", getGlobalFeed);
  return (
    <>
      <section>App Name</section>
      <section>
        <section>
          <div>Global Feed</div>
          <div>
            {articles.data?.map((article) => (
              <ArticleDisplay key={article.slug} article={article} />
            ))}
          </div>
        </section>
        <section>Popular Tags:</section>
      </section>
    </>
  );
};
