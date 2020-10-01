/* eslint-disable */
const fs = require("fs");
const path = require("path");

const dirName = process.argv[2];
const dirPath = path.join(process.cwd(), "src", dirName);

fs.readdir(dirPath, (err, list) => {
  // console.log(list);
  const rst = list.filter((item) => {
    const st = fs.statSync(path.join(dirPath, item));
    console.log(st.isDirectory());
    return st.isDirectory();
  });
  console.log(rst);
  fs.writeFileSync(
    path.join(dirPath, "index.ts"),
    rst.reduce((rst, next) => (rst += `export * from "./${next}";\n`), "")
  );
});
