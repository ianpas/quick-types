/// <reference path="./quickapp.d.ts" />

declare namespace JSX
{
    /**
     * @interface 快应用原生组件
     * @see {@link https://doc.quickapp.cn/widgets/div.html }
     */
    interface IntrinsicElements
    {
        /**
         * @type {div} 基本容器
         * @see {@link https://doc.quickapp.cn/widgets/div.html }
         */
        div: QuickApp.HTMLDivElement;

        /**
         * @type {input} 提供可交互的界面，接收用户的输入，默认为单行
         * @see {@link https://doc.quickapp.cn/widgets/input.html }
         */
        input: QuickApp.HTMLInputElement;
    }
}