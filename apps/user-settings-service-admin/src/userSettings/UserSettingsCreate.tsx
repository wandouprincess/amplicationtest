import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const UserSettingsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="kidsAge" source="kidsAge" />
        <TextInput label="kidsInterests" multiline source="kidsInterests" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
