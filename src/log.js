const dayjs = require("dayjs");

const LogType = {
  INFO: "info",
  WARN: "warn",
  ERROR: "error"
};

function log(msg, type = LogType.INFO) {
  console.log(`[${dayjs().format("YYYY-MM-DD HH:mm:ss.SSS")}] [${type}] ${msg}`);
}

exports.info = (msg) => log(msg, LogType.INFO);
exports.warn = (msg) => log(msg, LogType.WARN);
exports.error = (msg) => log(msg, LogType.ERROR);
