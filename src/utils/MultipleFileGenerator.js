import { saveAs } from "file-saver";
import JSZip from 'jszip';
import { formatFileName } from "./shared";
import { formatDataToJSON } from "./jsonFileGenerator";
import { formatDataToJava } from "./javaFileGenerator";

export function downloadZipFile({owner, taskCode, namespace, messages}) {
    let zip = new JSZip();
    zip.folder(`resources/migration/${namespace}`).file(`${formatFileName(taskCode, "json")}`,formatDataToJSON(messages, namespace));
    zip.folder(`message/migration/changesets/${namespace}`).file(`${formatFileName(taskCode, "java")}`,formatDataToJava(owner, taskCode, namespace));
    zip.generateAsync({type: "blob"}).then(function(content) {
        saveAs(content, formatFileName(taskCode, "zip"));
    });
}
