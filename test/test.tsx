/// <reference path="../src/index.d.ts" />

import UxModule from "../ux-module.ux";
import styles from "../main.css";
import styles2 from "../main.scss";
import styles3 from "../main.less";

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

