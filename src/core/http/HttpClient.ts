type Errors = { errors: { [key: string]: string[] } };
type Response<T> = T extends null | undefined ? Errors : T;

class HttpClient {
  api_base = "/api";

  async get<T>(url: string): Promise<T> {
    const res = await fetch(url);
    const json = res.json();
    return json;
  }

  async post<T>(url: string, body: any): Promise<Response<T>> {
    try {
      const res = await fetch(url, { body, method: "POST" });
      const json = await res.json();
      return json;
    } catch (error) {
      return { errors: {} };
    }
  }

  async delete() {}

  async put() {}
}

export default new HttpClient();
