import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Box } from "../../core/components/box/box";
import { Container } from "../../core/components/container/Container";
import { ArticleModel } from "../../models/ArticleModel";
import { Avatar } from "../article/view/Article";
import { useFeed, useTags } from "./landing-api";
import { Tab, Tabs } from "../../core/components/tabs/tabs";
import { useArticle, useArticles } from "../article/view/article-api";

export const Landing: React.FC<{}> = (props) => {
  const articles = useFeed();
  const popularTags = useTags();
  const [selectedTag, setSelectedTag] = React.useState<string | null>(null);
  const tagArticles = useArticles({ tag: selectedTag || undefined });
  return (
    <Box>
      <section>App Name</section>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        <section style={{ flex: "0 0 75%" }}>
          <Tabs initialTab="Global Feed">
            <Tab title="Global Feed">
              <Container>
                {articles.data?.map((article) => (
                  <ArticleSnippet key={article.slug} article={article} />
                ))}
              </Container>
            </Tab>
            {selectedTag && (
              <Tab title={selectedTag}>
                <Container>
                  {tagArticles.data?.map((article) => (
                    <ArticleSnippet key={article.slug} article={article} />
                  ))}
                </Container>
              </Tab>
            )}
          </Tabs>
        </section>
        <section
          style={{
            borderRadius: ".2em",
            padding: "0.5em 1em 1em 0.5em",
            flex: " 0 0 15%",
            backgroundColor: "#f3f3f3",
            width: "10em",
          }}
        >
          <div>Popular Tags</div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {popularTags.isFetched &&
              popularTags.data?.tags.map((tag) => (
                <Tag tag={tag} key={tag} onClick={() => setSelectedTag(tag)} />
              ))}
          </div>
        </section>
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

const Tag: React.FC<{ tag: string; onClick: () => void }> = (props) => {
  const TagStyled = styled.div`
    border-radius: 0.2em;
    padding: 0.3em;
    margin: 0.2em;
    background-color: #aba;
    &:hover {
      filter: brightness(80%);
      cursor: pointer;
    }
  `;

  return <TagStyled onClick={props.onClick}>{props.tag}</TagStyled>;
};
