import React from "react";
import Sidebar from "./Sidebar";
import OpenConversation from "./OpenConversation";
import { useConversations } from "../contexts/ConversationsProvider";

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations();
  return (
    <div style={{ height: "100vh" }} className="d-flex">
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  );
}
