import { HttpClient } from "../../../core/http/HttpClient";
import { CreateArticleFormInputs } from "./CreateArticle";

interface CreateArticleRequestPayload {
  article: {
    title: string;
    description: string;
    body: string;
    tagList?: string[];
  };
}
export async function createArticle(
  payload: CreateArticleFormInputs,
  httpClient: HttpClient
): Promise<any> {
  const mapped: CreateArticleRequestPayload = mapToHttp(payload);
  httpClient.post("/api/articles", mapped);
}

function mapToHttp(formInputs: CreateArticleFormInputs) {
  return { article: formInputs } as CreateArticleRequestPayload;
}
