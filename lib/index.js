import { Vue, Component } from 'vue-property-decorator';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var S = {"top":"index-module_top__1fIfx"};

let cp = class cp extends Vue {
  constructor() {
    super(...arguments);
    this.name = "color-picker";
  }

  render() {
    const h = arguments[0];
    return h("div", {
      "class": S.top
    }, ["color-picker"]);
  }

};
cp = __decorate([Component], cp);

var S$1 = {"b":"index-module_b__3ijLF"};

let ip = class ip extends Vue {
  constructor() {
    super(...arguments);
    this.name = "image-picker";
  }

  render() {
    const h = arguments[0];
    return h("div", {
      "class": S$1.b
    }, [h("div", ["color-picker"]), h("div", ["image-picker"])]);
  }

};
ip = __decorate([Component], ip);

export { cp, ip };
//# sourceMappingURL=index.js.map
