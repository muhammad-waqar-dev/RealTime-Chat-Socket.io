import React, { useState } from "react";
import Login from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../contexts/ContactsProvider";
import { ConversationsProvider } from "../contexts/ConversationsProvider";

function App() {
  const [Id, setId] = useLocalStorage("id");

  const dashBoard = (
    <ContactsProvider>
      <ConversationsProvider id={Id}>
        <Dashboard id={Id} />
      </ConversationsProvider>
    </ContactsProvider>
  );

  return Id ? dashBoard : <Login onSubmitId={setId} />;
}

export default App;
