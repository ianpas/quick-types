declare namespace QuickApp
{
    interface HTMLDivElement extends HTMLAttributes
    {

    }



    interface HTMLListElement extends HTMLAttributes
    {

    }

    interface HTMLListItemElement extends HTMLAttributes
    {
        /**
         * @type {string} list-item 类型，值为自定义的字符串，如'loadMore'。相同的 type 的 list-item 必须具备完全一致的 DOM 结构。因此，在 list-item 内部需谨慎使用 if 和 for，因为 if 和 for 可能造成相同的 type 的 list-item 的 DOM 结构不一致，从而引发错误
         */
        type: string;
    }

    interface HTMLPopupElement extends HTMLAttributes
    {

    }

    interface HTMLRefreshElement extends HTMLAttributes
    {

    }

    interface HTMLRichTextElement extends HTMLAttributes
    {

    }

    interface HTMLStackElement extends HTMLAttributes
    {

    }

    interface HTMLSwiperElement extends HTMLAttributes
    {

    }

    interface HTMLTabsElement extends HTMLAttributes
    {

    }

    interface HTMLTabBarElement extends HTMLAttributes
    {

    }

    interface HTMLTabContentElement extends HTMLAttributes
    {

    }
}