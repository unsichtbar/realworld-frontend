import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getArticle, getArticleComments } from "./api/article-api";
import { ArticleModel } from "../../models/ArticleModel";
import { CommentModel } from "../../models/CommentModel";

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
        {articleQuery.isFetching && <span>loading</span>}
        {articleQuery.isFetched && !articleQuery.error && (
          <ArticleDisplay article={articleQuery.data} />
        )}
      </div>
      <div>
        {comments.data?.map((comment) => (
          <CommentDisplay comment={comment} />
        ))}
      </div>
    </section>
  );
};

const ArticleDisplay: React.FC<{ article?: ArticleModel }> = (props) => {
  if (props.article)
    return (
      <div>
        <div>{props.article.title}</div>
        <span>Author {props.article.author.username}</span>
      </div>
    );
  else return null;
};

const CommentDisplay: React.FC<{ comment: CommentModel }> = (props) => {
  return (
    <div>
      <span>{props.comment.body}</span>{" "}
      <span>{props.comment.createdAt.toISOString()}</span>
    </div>
  );
};
