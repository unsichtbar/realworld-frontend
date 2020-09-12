type Errors = { errors: { [key: string]: string[] } };
export interface ApiResponse {
  errors?: {
    [key: string]: string[];
  };
}

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "OPTIONS";

class HttpClient {
  api_base = "/api";

  async get<T extends ApiResponse>(url: string): Promise<T> {
    return this.executeRequest(url, { method: "GET" });
  }

  async post<T extends ApiResponse>(url: string, body: any): Promise<T> {
    return this.executeRequest(url, { body, method: "POST" });
  }

  async delete(url: string, body: any) {
    return this.executeRequest(url, { body, method: "DELETE" });
  }

  async put(url: string, body: any) {
    return this.executeRequest(url, { body, method: "PUT" });
  }

  private async executeRequest(
    url: string,
    options: { body?: any; method: HttpMethod }
  ) {
    const uri =
      url.startsWith("https://") || url.startsWith("http://")
        ? url
        : `${this.api_base}${url.startsWith("/") ? url : "/" + url}`;
    try {
      const res = await fetch(uri, {
        body: options.body,
        method: options.method,
      });
      const json = await res.json();
      return json;
    } catch (error) {
      return ({ errors: { error: ["must not be null"] } } as unknown) as any;
    }
  }
}

export default new HttpClient();
