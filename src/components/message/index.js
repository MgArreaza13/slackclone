import React from "react";
import { MessageContainer, MessageInfo } from "./styles";

function Message({ key, message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userImage} alt={user} />
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p> {message} </p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;
