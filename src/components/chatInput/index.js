import React, { useState } from "react";
import { ChatInputContainer } from "./styles";
import { Button } from "@material-ui/core";
import { db } from "../../firebase";
import firebase from "firebase";

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "mgarreaza13",
      userImage:
        "https://lh3.googleusercontent.com/a-/AOh14GgNDQ9c-FPnM6PWSYOqbji0Sx6IxO-JoKbObCE8NA=s96-c",
    });

    setInput("");
    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;
