// 用于自动更新版本号
import fs from "fs";

//获取package的json数据
const getPackageJson = url => {
  let data = fs.readFileSync(url);
  return JSON.parse(data);
};
let packageData = getPackageJson("./package.json");

// 每一次执行都会+1个小版本
const changeVersion = () => {
  let versions = packageData.version.split(".");
  let x = Number(versions[versions.length - 1]);
  x = x + 1;
  packageData.version = `${versions[0]}.${versions[1]}.${x}`;
};
changeVersion();
fs.writeFile("./package.json", JSON.stringify(packageData, null, "\t"), err => {
  if (err) {
    console.log(`package.json 版本号写入失败！版本：${packageData.version}`, err);
  } else {
    console.log(`package.json 版本号写入成功！版本：${packageData.version}`);
  }
});
