/// <reference path="../src/index.d.ts" />

import UxModule from "../ux-module.ux";
import styles from "../main.css";
import styles2 from "../main.scss";
import styles3 from "../main.less";
import { JsxEmit } from "typescript";

const div = <div
    id="1"
    class="div">
</div>;

const input = <input
    id="1"
    class="input"
    type="text"
    value="hi"
    placeholder="placeholder"
    onchange={(e: QuickApp.InputChangeEvent) => { }}
    onclick={(e: QuickApp.ClickEvent) => { }}
/>;

const list = <list>

</list>;

const list_item = <list-item>

</list-item>;

const popup = <popup>

</popup>;

const refresh =<refresh>

</refresh>;

const richtext = <richtext>

</richtext>;

const stack =<stack>

</stack>;

const swiper = <swiper>

</swiper>;

const tabs = <tabs>

</tabs>;

const tab_bar =<tab-bar>

</tab-bar>;

const tab_content = <tab-content>

</tab-content>;