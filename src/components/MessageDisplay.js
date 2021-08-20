import React from "react";
import { Message } from "./Message";

export const MessageDisplay = ({ messages }) => {
  return (
    <div style={{paddingBottom: "50px"}}>
      {messages.map((item) => (
        <Message
          key={item.code}
          code={item.code}
          englishContent={item.content[0].text}
          portugueseContent={item.content[1].text}
        />
      ))}
    </div>
  );
};
