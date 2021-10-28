import "../../App.css";
import { useState } from "react";
import _map from "lodash/map";
import { csm, crm, dm, wos } from "./sourceObjects";
import { checkForDuplicates } from "./utils";
import { RadioGroup } from "../../components";
function DuplicateVerifier() {
  const [shouldStatus, setShouldStatus] = useState("");
  const [messageToTest, setMessageToTest] = useState("");
  const [duplicateCodes, setDuplicateCodes] = useState({});

  const [systemFile, setSystemFile] = useState(null);

  const shouldCreate = () => {
    if (!messageToTest) return;
    if (duplicateCodes[messageToTest]) {
      const codes = duplicateCodes[messageToTest];
      return setShouldStatus(
        `No, this message already exists, you can use with this codes: ${codes}`
      );
    }
    setShouldStatus("Yes, feel free to do it!");
  };

  const setSystem = (value) => {
    const files = {
      csm,
      crm,
      dm,
      wos,
    };
    const selectedFile = files[value];
    if (!selectedFile) return;

    setSystemFile(value);
    setDuplicateCodes(checkForDuplicates(selectedFile, value));
  };

  return (
    <div
      style={{ margin: "0px 32px", display: "flex", flexDirection: "column" }}
    >
      <div className="twoBytwoGrid">
        <div
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
            padding: "24px",
            borderRadius: "4px",
            marginBottom: "16px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Choose your source message file</h2>

          <RadioGroup
            belongsTo="systemFile"
            data={["aps", "crm", "csm", "dim", "dm", "general", "iam", "wos"]}
            setNamespace={setSystem}
          />
        </div>
        <div
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
            padding: "24px",
            borderRadius: "4px",
            marginBottom: "16px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Should I create a new message?</h2>
          <div className="fullWidth">
            <input
              className="fullWidth"
              placeholder=""
              value={messageToTest}
              onChange={(e) => setMessageToTest(e.target.value)}
            />
          </div>
          <button
            disabled={!messageToTest || !systemFile}
            style={{ marginTop: 8, width: 320, alignSelf: "center" }}
            onClick={shouldCreate}
          >
            Should I?
          </button>
          <p style={{ wordBreak: "break-word" }}>{shouldStatus}</p>
        </div>
      </div>

      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
          padding: "24px",
          borderRadius: "4px",
          marginTop: "16px",
          marginBottom: "32px",
          alignSelf: "center",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Duplicate Messages And Codes</h2>
        <div>
          {_map(duplicateCodes, (duplicateCodesInternal, key) => {
            return (
              <div key={key}>
                <p className="labelStyle">{key}</p>
                <div style={{ wordBreak: "break-word" }}>
                  {_map(duplicateCodesInternal, (code, key) => {
                    return <span key={key}> {code}</span>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DuplicateVerifier;
