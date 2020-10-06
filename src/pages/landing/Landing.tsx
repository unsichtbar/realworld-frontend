import * as React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Box } from "../../core/components/box/box";
import { Container } from "../../core/components/container/Container";
import { ArticleModel } from "../../models/ArticleModel";
import { Avatar } from "../article/view/Article";
import { useFeed } from "./landing-api";

export const Landing: React.FC<{}> = (props) => {
  const articles = useFeed();
  return (
    <Box>
      <section>App Name</section>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        <section style={{ flex: "0 0 75%" }}>
          <div>Global Feed</div>
          <Container>
            {articles.data?.map((article) => (
              <ArticleSnippet key={article.slug} article={article} />
            ))}
          </Container>
        </section>
        <section style={{ flex: " 0 0 25%" }}>Popular Tags:</section>
      </section>
    </Box>
  );
};

const ArticleSnippet: React.FC<{ article: ArticleModel }> = (props) => {
  return (
    <div style={{ marginBottom: "2em" }}>
      <div style={{ display: "flex" }}>
        <span>
          <Avatar src={props.article.author.image} />
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: ".4em",
          }}
        >
          <span>{props.article.author.username}</span>
          <span style={{ fontSize: "smaller" }}>
            {props.article.createdAt.toUTCString()}
          </span>
        </span>
      </div>
      <div>
        <Link to={`/article/${props.article.slug}`}>
          <div>
            <h2>{props.article.title}</h2>
          </div>
          <div>{props.article.body}</div>
        </Link>
      </div>
      <hr />
    </div>
  );
};
