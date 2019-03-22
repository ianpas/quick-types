declare namespace QuickApp
{
    //
    interface IComponent
    {
        template?(): any;
        onInit?(): void;
    }


    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event }
     */
    interface Event
    {
        readonly target: any;
        readonly bubbles: boolean;
        readonly cancelBubble: boolean;
        currentTarget: any;
        readonly defaultPrevented: boolean;
        readonly eventPhase: number;
    }

    interface UIEvent extends Event
    {

    }

    interface MouseEvent extends UIEvent
    {

    }

    interface EventTarget
    {

    }

    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node }
     */
    interface Node extends EventTarget
    {
        readonly childNodes: Array<Node>;
        readonly nextSibling: Node | null;
        readonly parentNode: Node | null;
        readonly previousSibling: Node | null;

        readonly nodeName: string;
        readonly nodeType: number;
    }

    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element }
     */
    interface Element extends Node
    {
        readonly tagName: string;
    }

    interface HTMLAttributes
    {
        /**
         * @type {string} 引用样式表
         */
        class?: string;

        /**
         * @type {string} 唯一标识
         */
        id?: string;

        /**
         * @type {ClickEventHandler} 组件被点击时触发
         */
        onclick?: ClickEventHandler;
    }

    interface ClickEvent extends MouseEvent
    {
        /**
         * @type "click"
         */
        type: "click";
    }

    type ClickEventHandler = (e: ClickEvent) => void;

    //
    interface HTMLDivElement extends HTMLAttributes
    {

    }

    //
    type InputElementType = "button" | "checkbox" | "radio" | "text" | "email" | "date" | "time" | "number" | "password";

    interface InputChangeEvent
    {
        /**
         * @type {string}
         * @todo 查看：官方文档中input组件为"checkbox"类型时，参数有value，但实际value值为null
         */
        value?: string,

        /**
         * @type {boolean} 仅当input组件type为"checkbox"时存在
         */
        checked?: boolean,

        /**
         * @type {name} 仅当input组件type为"checkbox"或"radio"时存在
         */
        name?: string
    }

    type InputChangeEventHandler = (e: InputChangeEvent) => void;

    interface HTMLInputElement extends HTMLAttributes
    {
        /**
         * @type {string} 支持动态修改
         * @default "text"
         */
        type?: InputElementType;

        /**
         * @type {string} input 组件的值
         */
        value?: string;

        /**
         * @type {string} 提示文本的内容，type 为 text|email|date|time 时生效
         */
        placeholder?: string;

        /**
         * @type {InputChangeEventHandler} input 组件的值、状态发生改变时触发, type 为 button 时无 change 事件
         * @param {InputChangeEvent} 事件参数取决于input组件的"type"
         */
        onchange?: InputChangeEventHandler;
    }
}
