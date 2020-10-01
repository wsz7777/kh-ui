/* eslint-disable */
const fs = require("fs");
// const { Kebab2Camel } = require("kh-tool");
const path = require("path");

const fileName = process.argv[2];
console.log(fileName);
const newPath = path.join(process.cwd(), "src", "packages", fileName);


function Kebab2Camel(s) {
  return s.replace(/(^|-)(\w)/g, function (all, $1, $2) {
    console.log(all, $1, $2);
    return $2.toUpperCase();
  });
}

const str_tsx = `import { Vue, Component } from "vue-property-decorator";

import S from "./index.module.scss";

@Component
export class ${Kebab2Camel(fileName)} extends Vue {
  name = "${fileName}";
  
  render() {
    return <div class={S.top}>${fileName}</div>;
  }
}
`;

const str_css = "";

fs.mkdir(path.join(newPath), () => {
  fs.writeFileSync(path.join(newPath, `index.module.scss`), str_css);
  fs.writeFileSync(path.join(newPath, `index.tsx`), str_tsx);
});
