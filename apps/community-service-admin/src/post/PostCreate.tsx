import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="authorId" source="authorId" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="postContent" multiline source="postContent" />
        <DateTimeInput label="publishedAt" source="publishedAt" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
