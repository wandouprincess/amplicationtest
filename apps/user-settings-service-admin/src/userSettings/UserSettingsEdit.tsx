import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const UserSettingsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="kidsAge" source="kidsAge" />
        <TextInput label="kidsInterests" multiline source="kidsInterests" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
