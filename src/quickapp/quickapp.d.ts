/// <reference path="./jsx/jsx.d.ts" />

/// <reference path="./components/container.d.ts" />
/// <reference path="./components/basic.d.ts" />
/// <reference path="./components/form.d.ts" />

/**
 * 快应用自定义组件类型
 */
declare namespace QuickApp
{
    interface IBaseComponent
    {
        //
        template(): any;

        //
        onInit?(): void;

    }

    /**
     * @see {@link https://doc.quickapp.cn/framework/script.html}
     */
    interface IComponent extends IBaseComponent
    {
        data?: any;
        props?: any;
    }


    interface IPageComponent extends IBaseComponent
    {
    }
}


/**
 * 快应用原生组件类型
 */
declare namespace QuickApp
{
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
         * @type {any} 样式声明
         */
        style?: any;

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
}