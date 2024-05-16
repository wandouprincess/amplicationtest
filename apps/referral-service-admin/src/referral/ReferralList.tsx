import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ReferralList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Referrals"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="creditEarned" source="creditEarned" />
        <TextField label="ID" source="id" />
        <TextField label="referralCode" source="referralCode" />
        <TextField label="referralDate" source="referralDate" />
        <TextField label="referredUserId" source="referredUserId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
      </Datagrid>
    </List>
  );
};
