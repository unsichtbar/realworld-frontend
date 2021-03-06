import React from "react";
import { Box } from "../../../core/components/box/box";
import { Input } from "../../../core/components/input/Input";
import { Button } from "../../../core/components/button/Button";
import { TagModel } from "../../../models/TagModel";
import { LoginRedirect } from "../../login/LoginRedirect";
import { useCreateArticle } from "./create-article-api";
import { TextArea } from "../../../core/components/textarea/TextArea";
import { useUser } from "../../../core/auth/Authentication";

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

export const CreateArticle: React.FC<{}> = () => {
  const { user } = useUser();
  const [formValues, setFormValues] = React.useState(initialFormValues);
  const [mutate] = useCreateArticle();

  if (!user) {
    return <LoginRedirect />;
  }

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = mutate(formValues);
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
    <Box>
      <form onSubmit={submitForm}>
        <div>
          <Input
            type="text"
            name="title"
            placeholder="title"
            value={formValues.title}
            onChange={changeForm}
          />
        </div>
        <div>
          <Input
            type="text"
            name="description"
            placeholder="description"
            value={formValues.description}
            onChange={changeForm}
          />
        </div>
        <TextArea
          name="body"
          placeholder="body"
          value={formValues.body}
          onChange={changeForm}
          size="sm"
        />
        <div>
          <Button type="submit">Submit</Button>
        </div>{" "}
      </form>
    </Box>
  );
};
