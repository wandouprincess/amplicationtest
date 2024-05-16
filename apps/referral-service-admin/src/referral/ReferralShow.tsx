import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ReferralShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="creditEarned" source="creditEarned" />
        <TextField label="ID" source="id" />
        <TextField label="referralCode" source="referralCode" />
        <TextField label="referralDate" source="referralDate" />
        <TextField label="referredUserId" source="referredUserId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
