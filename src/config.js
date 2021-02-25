import merge from "lodash/merge"

let HOST = "localhost"
let PORT = 9999

let CONFIG = {
  BASE_SERVER: `http://${HOST}:${PORT}`,

}

try {
  const pri = require("./private.js");
  merge(CONFIG, pri.default);
} catch (e) {
  console.log("Failed to load private configuration!");
}

export default CONFIG