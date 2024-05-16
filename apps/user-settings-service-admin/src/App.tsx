import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserSettingsList } from "./userSettings/UserSettingsList";
import { UserSettingsCreate } from "./userSettings/UserSettingsCreate";
import { UserSettingsEdit } from "./userSettings/UserSettingsEdit";
import { UserSettingsShow } from "./userSettings/UserSettingsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"UserSettingsService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserSettings"
          list={UserSettingsList}
          edit={UserSettingsEdit}
          create={UserSettingsCreate}
          show={UserSettingsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
