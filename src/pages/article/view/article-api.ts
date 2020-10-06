import { useQuery } from "react-query";
import { HttpClient, useHttpClient } from "../../../core/http/HttpClient";
import { ArticleModel } from "../../../models/ArticleModel";
import { CommentModel } from "../../../models/CommentModel";

export const useArticle = (id: string) => {
  const httpClient = useHttpClient();
  return useQuery(["article", { slug: id }], getArticle(httpClient));
};

export const useArticleComments = (id: string) => {
  const httpClient = useHttpClient();
  return useQuery(["article", id], getArticleComments(httpClient));
};

function getArticle(httpClient: HttpClient) {
  return async function (
    key: string,
    slug: {
      slug: string;
    }
  ): Promise<ArticleModel> {
    const res: ArticleModel = {
      slug: "hello-world",
      author: {
        bio: "ich komme aus amerika",
        following: false,
        username: "alex",
        image: "https://i.ytimg.com/vi/nlYlNF30bVg/hqdefault.jpg",
      },
      body: "hello there world",
      createdAt: new Date(),
      description: "just sayin' hi",
      favorited: false,
      favoritesCount: 5,
      tagList: ["comfy"],
      title: "Hello world " + slug.slug,
      updatedAt: new Date(),
    };
    return res;
  };
}

function getArticleComments(httpClient: HttpClient) {
  return async function (
    key: string,
    vars: {
      slug: string;
    }
  ): Promise<CommentModel[]> {
    const res: CommentModel[] = [
      {
        author: {
          bio: "ich komme aus amerika",
          following: false,
          username: "alex",
          image: "https://i.ytimg.com/vi/nlYlNF30bVg/hqdefault.jpg",
        },
        body: "First",
        createdAt: new Date(),
        id: 123,
        updatedAt: new Date(),
      },
    ];
    return res;
  };
}
