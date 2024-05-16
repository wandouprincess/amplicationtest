import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="authorId" source="authorId" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="postContent" multiline source="postContent" />
        <DateTimeInput label="publishedAt" source="publishedAt" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
