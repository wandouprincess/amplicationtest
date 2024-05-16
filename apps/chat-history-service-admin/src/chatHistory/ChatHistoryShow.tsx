import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ChatHistoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="message" source="message" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
