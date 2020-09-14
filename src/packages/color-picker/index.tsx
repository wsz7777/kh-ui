import { Vue, Component } from "vue-property-decorator";

// import Vue, { VNode } from "vue";

// export const cp1 = Vue.extend({
//   name: "color-picker",
//   template: "<div>color-picker</div>",
// });
// export const cp1 = Vue.extend({
//   name: "color-picker",
//   render() {
//     return <div>color-picker</div>;
//   },
// });

@Component
export class cp extends Vue {
  name = "color-picker";
  
  render() {
    return <div>color-picker</div>;
  }
}
