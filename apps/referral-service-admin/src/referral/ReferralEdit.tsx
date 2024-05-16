import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ReferralEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="creditEarned" source="creditEarned" />
        <TextInput label="referralCode" source="referralCode" />
        <DateTimeInput label="referralDate" source="referralDate" />
        <TextInput label="referredUserId" source="referredUserId" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
