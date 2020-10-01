import * as React from "react";
import { useQuery } from "react-query";
import { Box } from "../../core/components/box/box";
import { Container } from "../../core/components/container/Container";
import { ArticleDisplay } from "../article/view/Article";
import { getGlobalFeed } from "./landing-api";

export const Landing: React.FC<{}> = (props) => {
  const articles = useQuery("globalFeed", getGlobalFeed);
  return (
    <Box>
      <section>App Name</section>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        <section style={{ flex: "0 0 75%" }}>
          <div>Global Feed</div>
          <Container>
            {articles.data?.map((article) => (
              <ArticleDisplay key={article.slug} article={article} />
            ))}
          </Container>
        </section>
        <section style={{ flex: " 0 0 25%" }}>Popular Tags:</section>
      </section>
    </Box>
  );
};
