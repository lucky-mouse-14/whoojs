import { computed as r, openBlock as s, createElementBlock as a, normalizeClass as p, renderSlot as u } from "vue";
import "../style/index.css";
const i = Object.assign({
  name: "DemoButton"
}, {
  __name: "button",
  props: {
    type: {
      type: String,
      default: "primary"
    }
  },
  setup(e) {
    const t = e, o = r(() => ({
      [`whoo-button--${t.type}`]: t.type
    }));
    return (n, l) => (s(), a("button", {
      class: p(["whoo-button", o.value])
    }, [
      u(n.$slots, "default")
    ], 2));
  }
});
export {
  i as default
};
