import reduceS from "./reduceS.js";
import go1Sync from "../.internal/go1Sync.js";

export default function goS(..._) {
  return reduceS(go1Sync, _);
}
