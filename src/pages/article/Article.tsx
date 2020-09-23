import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getArticle, getArticleComments } from "./api/article-api";
import { ArticleModel } from "../../models/ArticleModel";
import { CommentModel } from "../../models/CommentModel";
import styled from "styled-components";

export const Article: React.FC<{}> = () => {
  const { id }: { id: string } = useParams();
  const articleQuery = useQuery(["article", { slug: id }], getArticle);

  const comments = useQuery(
    ["articleComments", { slug: id }],
    getArticleComments
  );

  return (
    <section>
      <div>
        {articleQuery.isFetching && <span>Loading</span>}
        {articleQuery.isFetched && !articleQuery.error && (
          <ArticleDisplay article={articleQuery.data} />
        )}
      </div>
      <div>
        {comments.data?.map((comment) => (
          <CommentDisplay comment={comment} key={comment.id} />
        ))}
      </div>
    </section>
  );
};

const ArticleDisplay: React.FC<{ article?: ArticleModel }> = (props) => {
  if (props.article) {
    const { author } = props.article;
    return (
      <>
        <div>{props.article.title}</div>
        <div>
          <span>
            <Avatar src={author.image ? author.image : ""} />
          </span>
          <span>
            <span>{author.username}</span>
            <span>{props.article.createdAt.toUTCString()}</span>
          </span>
        </div>
        <div>{props.article.body}</div>
      </>
    );
  } else return null;
};

const CommentDisplay: React.FC<{ comment: CommentModel }> = (props) => {
  return (
    <div>
      <span>{props.comment.body}</span>{" "}
      <span>{props.comment.createdAt.toISOString()}</span>
    </div>
  );
};

const Avatar = styled.img`
  height: 2em;
  width: 2em;
  border-radius: 25%;
`;
