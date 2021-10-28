import "../../App.css";
import { useState } from "react";
import {
  Label,
  Container,
  InputWrapper,
  RadioGroup,
  MessageContentItem,
  MessageDisplay,
} from "../../components";
import { downloadJava } from "../../utils/javaFileGenerator";
import { downloadJSON } from "../../utils/jsonFileGenerator";
import {
  useMessageContext,
  withMessageProvider,
} from "../../components/MessageProvider";
import { downloadZipFile } from "../../utils/MultipleFileGenerator";

function App() {
  const [taskOwner, setTaskOwner] = useState();
  const [taskCode, setTaskCode] = useState("CVOR-");
  const [namespace, setNamespace] = useState("");
  const { handleAddMessage, messages, messageToEdit } = useMessageContext();

  return (
    <>
      <div className="App">
        <h1>Migration Generator</h1>
        <div>
          <Container>
            <InputWrapper
              relatesTo="taskOwner"
              labelContent="Task Owner (user code)"
              value={taskOwner}
              onChange={(e) => setTaskOwner(e.target.value)}
            />
            <InputWrapper
              relatesTo="taskcode"
              labelContent="Task Code"
              value={taskCode}
              onChange={(e) => setTaskCode(e.target.value)}
            />
          </Container>
          <Label relatesTo="namespace">Select your Namespace</Label>
          <Container>
            <RadioGroup
              belongsTo="namespace"
              data={["aps", "crm", "csm", "dim", "dm", "general", "iam", "wos"]}
              setNamespace={setNamespace}
            />
          </Container>
          <Container>
            <MessageContentItem
              onConfirm={handleAddMessage}
              messageToEdit={messageToEdit}
            />
          </Container>
          <Container>
            <MessageDisplay messages={messages} />
          </Container>
        </div>
      </div>
      <div className="fixedFooter">
        <Container>
          <button
            onClick={() => downloadJava(taskOwner, taskCode, namespace)}
            className="buttonContainer"
          >
            Download Java File
          </button>
          <button
            onClick={() => downloadJSON(taskCode, messages, namespace)}
            className="buttonContainer"
          >
            Download JSON File
          </button>
          <button
            onClick={() =>
              downloadZipFile({
                owner: taskOwner,
                taskCode,
                namespace,
                messages,
              })
            }
          >
            Download .Zip File
          </button>
        </Container>
      </div>
    </>
  );
}

export default withMessageProvider(App);
