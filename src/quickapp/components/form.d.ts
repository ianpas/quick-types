declare namespace QuickApp
{
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

    interface HTMLLabelElement extends HTMLAttributes
    {

    }

    interface HTMLOptionElement extends HTMLAttributes
    {

    }
    
    interface HTMLPickerElement extends HTMLAttributes
    {

    }

    interface HTMLSelectElement extends HTMLAttributes
    {
        
    }

    interface HTMLSliderElement extends HTMLAttributes
    {
        
    }

    interface HTMLSwitchElement extends HTMLAttributes
    {
        
    }

    interface HTMLTextAreaElement extends HTMLAttributes
    {
        
    }
}