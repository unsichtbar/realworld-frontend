import HttpClient from "../../../core/http/HttpClient";
import { ArticleModel } from "../../../models/ArticleModel";
import { CommentModel } from "../../../models/CommentModel";

export async function getArticle(
  key: string,
  vars: {
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
    title: "Hello world " + vars.slug,
    updatedAt: new Date(),
  };
  return res;
}

export async function getArticleComments(
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
}
