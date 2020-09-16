import { Vue, Component } from "vue-property-decorator";

import S from "./index.module.scss";

@Component
export class ip extends Vue {
  name = "image-picker";

  render() {
    return (
      <div class={S.b}>
        <div>color-picker</div>
        <div>image-picker</div>
      </div>
    );
  }
}
