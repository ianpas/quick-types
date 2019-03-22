/// <reference path="./quickapp.d.ts" />

declare namespace JSX
{
    /**
     * 容器组件
     */
    interface IntrinsicElements
    {
        /**
         * @type {QuickApp.HTMLDivElement} 基本容器
         * @see {@link https://doc.quickapp.cn/widgets/div.html }
         */
        div: QuickApp.HTMLDivElement;

        /**
         * @type {QuickApp.HTMLListElement} 列表视图容器
         * @see {@link https://doc.quickapp.cn/widgets/list.html }
         */
        list: QuickApp.HTMLListElement;

        /**
        * @type {QuickApp.HTMLListItemElement} <list>的子组件，用来展示列表具体 item，宽度默认充满 list 组件
        * @see {@link https://doc.quickapp.cn/widgets/list-item.html }
        */
        "list-item": QuickApp.HTMLListItemElement;

        /**
         * @type {QuickApp.HTMLPopupElement} 在点击控件或者某个区域后，浮出一个气泡来引导用户，气泡内容通过子组件来定义。如果设置了遮罩层，可通过点击遮罩层的任意位置退出，否者点击气泡外的任意区域退出
         * @see {@link https://doc.quickapp.cn/widgets/popup.html }
         */
        popup: QuickApp.HTMLPopupElement;

        /**
        * @type {QuickApp.HTMLRefreshElement} 下拉刷新容器
        * @see {@link https://doc.quickapp.cn/widgets/refresh.html }
        */
        refresh: QuickApp.HTMLRefreshElement;

        /**
        * @type {QuickApp.HTMLRichTextElement} 富文本容器。文本内容直接写在标签内容区，内容格式需与 type 相匹配，只支持静态内容，由于需要实时编译，文本内容尽量不要频繁改变，否则可能导致性能问题
        * @see {@link https://doc.quickapp.cn/widgets/richtext.html }
        */
        richtext: QuickApp.HTMLRichTextElement;

        /**
        * @type {QuickApp.HTMLStackElement} 基本容器，子组件排列方式为层叠排列，每个直接子组件按照先后顺序依次堆叠，覆盖前一个子组件
        * @see {@link https://doc.quickapp.cn/widgets/stack.html }
        */
        stack: QuickApp.HTMLStackElement;

        /**
        * @type {QuickApp.HTMLSwiperElement} 滑块视图容器
        * @see {@link https://doc.quickapp.cn/widgets/swiper.html }
        */
        swiper: QuickApp.HTMLSwiperElement;

        /**
        * @type {QuickApp.HTMLTabsElement} tab 容器
        * @see {@link https://doc.quickapp.cn/widgets/tabs.html }
        */
        tabs: QuickApp.HTMLTabsElement;

        /**
        * @type {QuickApp.HTMLTabBarElement} <tabs>的子组件，用来展示 tab 的标签区，子组件排列方式为横向排列
        * @see {@link https://doc.quickapp.cn/widgets/tab-bar.html }
        */
       "tab-bar": QuickApp.HTMLTabBarElement;

       /**
        * @type {QuickApp.HTMLTabContentElement} <tabs>的子组件，用来展示 tab 的内容区，高度默认充满 tabs 剩余空间，子组件排列方式为横向排列
        * @see {@link https://doc.quickapp.cn/widgets/tab-content.html }
        */
       "tab-content": QuickApp.HTMLTabContentElement;
    }

    /**
     * 表单组件
     */
    interface IntrinsicElements
    {
        /**
         * @type {QuickApp.HTMLInputElement} 提供可交互的界面，接收用户的输入，默认为单行
         * @see {@link https://doc.quickapp.cn/widgets/input.html }
         */
        input: QuickApp.HTMLInputElement;
    }
}