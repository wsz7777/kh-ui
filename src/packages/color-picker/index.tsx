import { Vue, Component } from "vue-property-decorator";

import S from "./index.module.scss";

@Component
export class cp extends Vue {
  name = "color-picker";

  render() {
    return <div class={S.top}>color-picker</div>;
  }
}
