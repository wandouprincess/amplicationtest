import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const UserSettingsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="kidsAge" source="kidsAge" />
        <TextField label="kidsInterests" source="kidsInterests" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
