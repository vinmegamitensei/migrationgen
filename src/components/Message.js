import React from "react";
import { useMessageContext } from "./MessageProvider";

export const Message = ({ code, englishContent, portugueseContent }) => {
  const { handleRemoveMessage, handleEditMessage } = useMessageContext();
  
  return (
    <div className="messageWrapper">
      <p>
        <strong>Code: </strong>
        {code}
      </p>
      <p>
        <strong>EN: </strong>
        {englishContent}
      </p>
      <p>
        <strong>PT: </strong>
        {portugueseContent}
      </p>
      <button onClick={() => handleRemoveMessage(code)} className="buttonContainer">Remove</button>
      <button onClick={() => handleEditMessage(code)}>Edit</button>

    </div>
  );
};
