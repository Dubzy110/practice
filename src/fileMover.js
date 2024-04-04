import { history } from "./history.js";

import fs from "fs";
import path from "path";

const __dirname = path.resolve();
const filePath = path.join(__dirname, "/files/");

export const fileMaker = (fileName) => {
  const filePath = path.join(__dirname, "/files/" + fileName);
  fs.writeFile(filePath, history.join("\n"), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("i am a file");
    }
  });
};
