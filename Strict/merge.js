import entriesDeepL from "../.internal/entriesDeepL.js";
import objectDeep from "../.internal/objectDeep.js";
import flatL from "../Lazy/flatL.js";
import mapL from "../Lazy/mapL.js";
import curry from "./curry.js";
import go from "./go.js";

function merge(...objs) {
  return go(objs, mapL(entriesDeepL), flatL, objectDeep);
}

export default curry(merge);
