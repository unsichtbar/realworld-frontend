import React from "react";
import { TagModel } from "../../../models/TagModel";
import { createArticle } from "./create-article-api";

export interface CreateArticleFormInputs {
  title: string;
  description: string;
  body: string;
  tagList: TagModel[];
}

const initialFormValues: CreateArticleFormInputs = {
  title: "",
  description: "",
  body: "",
  tagList: [],
};

export const CreateArticle: React.FC<any> = (props) => {
  const [formValues, setFormValues] = React.useState(initialFormValues);

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formValues);
    createArticle(formValues);
  }

  function changeForm(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    e.preventDefault();
    const { name, value } = e.currentTarget as {
      name: keyof Omit<CreateArticleFormInputs, "tagList">;
      value: string;
    };
    const cloned: CreateArticleFormInputs = JSON.parse(
      JSON.stringify(formValues)
    );
    cloned[name] = value;
    setFormValues(cloned);
  }
  return (
    <>
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={formValues.title}
          onChange={changeForm}
        ></input>
        <input
          type="text"
          name="description"
          placeholder="description"
          value={formValues.description}
          onChange={changeForm}
        ></input>
        <textarea
          name="body"
          placeholder="body"
          value={formValues.body}
          onChange={changeForm}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
