import { ArticleModel } from "../../models/ArticleModel";

interface ProfileArticlesQueryResponse {
  articles: ArticleModel[];
  articlesCount: number;
}
export async function getGlobalFeed(): Promise<ArticleModel[]> {
  const res: ProfileArticlesQueryResponse = {
    articles: [
      {
        slug: "how-to-train-your-dragon",
        title: "How to train your dragon",
        description: "Ever wonder how?",
        body: "something completely different",
        tagList: ["dragons", "training"],
        createdAt: new Date(),
        updatedAt: new Date(),
        favorited: false,
        favoritesCount: 0,
        author: {
          username: "jake",
          bio: "I work at statefarm",
          image: "https://i.stack.imgur.com/xHWG8.jpg",
          following: false,
        },
      },
      {
        slug: "how-to-train-your-dragon-2",
        title: "How to train your dragon 2",
        description: "So toothless",
        body: "It a dragon",
        tagList: ["dragons", "training"],
        createdAt: new Date("2016-02-18T03:22:56.637Z"),
        updatedAt: new Date("2016-02-18T03:48:35.824Z"),
        favorited: false,
        favoritesCount: 0,
        author: {
          username: "jake",
          bio: "I work at statefarm",
          image: "https://i.stack.imgur.com/xHWG8.jpg",
          following: false,
        },
      },
    ],
    articlesCount: 2,
  };
  return res.articles;
}
