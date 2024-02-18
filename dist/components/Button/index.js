import "../../assets/index.css";
import { jsx as o } from "react/jsx-runtime";
const e = "_container_1j7l4_1", r = {
  container: e,
  "fill-container": "_fill-container_1j7l4_43"
};
function s({ children: n, onClick: t, style: i, type: a }) {
  return a === "fill" ? /* @__PURE__ */ o("div", { style: i, onClick: t, className: r["fill-container"], children: n }) : /* @__PURE__ */ o("div", { style: i, onClick: t, className: r.container, children: n });
}
export {
  s as Button
};
