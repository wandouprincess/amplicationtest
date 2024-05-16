import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ReferralCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="creditEarned" source="creditEarned" />
        <TextInput label="referralCode" source="referralCode" />
        <DateTimeInput label="referralDate" source="referralDate" />
        <TextInput label="referredUserId" source="referredUserId" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
