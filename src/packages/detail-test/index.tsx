import { Vue, Component } from "vue-property-decorator";

import S from "./index.module.scss";

@Component
export class DetailTest extends Vue {
  name = "detail-test";
  
  render() {
    return <div class={S.top}>detail-test</div>;
  }
}
