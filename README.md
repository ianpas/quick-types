# 项目简介
项目包含使用typesciprt开发快应用时可以使用的类型定义文件。

# 安装方法

首先安装这个包：

```
npm i -D quick-types
```

然后在项目根目录下创建tsconfig.json文件，里面的内容为：

```json
{
    "compilerOptions": {
        "typeRoots": [
            "./node_modules"
        ],
        "jsx": "preserve"
    }
}
```

这样做是因为，本来包应该发布成@types/quickapp这样，就可以不用加json文件，它自己知道去node_moduels/@types找类型定义文件。

但是包名用@types开头的话，要去github DefinitelyTyped发pull request才行，暂时还没弄，所以先这样了。。