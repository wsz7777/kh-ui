import Vue from 'vue';

//   name: "color-picker",
//   template: "<div>color-picker</div>",
// });

var cp1 = Vue.extend({
  name: "color-picker",
  render: function render() {
    var h = arguments[0];
    return h("div", ["color-picker"]);
  }
});

export { cp1 };
//# sourceMappingURL=index.js.map
