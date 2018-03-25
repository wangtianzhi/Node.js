var fs = require("fs");

console.log("准备打开fs");
fs.stat('input.txt', function(err, stats) {
  if(err) {
    return console.error(err);
  }
  console.log(stats);
  console.log("读取fs成功");

  // 检查文件类型
  console.log("是否为文件" + stats.isFile());
  console.log("是否为目录" + stats.isDirectory());
});