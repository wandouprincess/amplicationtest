import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ChatHistoryList } from "./chatHistory/ChatHistoryList";
import { ChatHistoryCreate } from "./chatHistory/ChatHistoryCreate";
import { ChatHistoryEdit } from "./chatHistory/ChatHistoryEdit";
import { ChatHistoryShow } from "./chatHistory/ChatHistoryShow";
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
        title={"ChatHistoryService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ChatHistory"
          list={ChatHistoryList}
          edit={ChatHistoryEdit}
          create={ChatHistoryCreate}
          show={ChatHistoryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
