declare namespace QuickApp
{
    interface HTMLAnchorElement extends HTMLAttributes
    {

    }

    interface HTMLImageElement extends HTMLAttributes
    {
        /**
         * @type {uri string} 图片的 uri，同时支持本地和云端路径，支持的图片格式包括静态类型（png, jpg）和动态类型（gif）。支持 svg 类型图片格式（svg）1020+
         */
        src?: string;
    }

    interface HTMLTextElement extends HTMLAttributes
    {

    }

    interface HTMLProgressElement extends HTMLAttributes
    {

    }

    interface HTMLRatingElement extends HTMLAttributes
    {

    }

    interface HTMLSpanElement extends HTMLAttributes
    {

    }
}