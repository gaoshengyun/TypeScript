## **安装TypeScript**

TypeScript的命令行工具安装方法:

```
npm i typescript -g
```

以上命令是全局环境安装tsc命令,安装完之后,我们就可以在任何地方执行tsc命令了.

编译一个TypeScript文件很简单

```
tsc hello.ts
```

我们约定使用TypeScript编写的文件以 .ts 为后缀,用TypeScript编写React编写时,以 .tsx 为后缀.

### **编译器**

现在主流的编辑器都支持TypeScript,推荐使用[Visual Studio Code](https://code.visualstudio.com/),它是一款开源,跨终端的轻量级编辑器,内置了TypeScript支持,它本身就是用TypeScript编写的

> 国产的编辑器[HBuilder](https://www.dcloud.io/hbuilderx.html)也是内置支持TypeScript,目前支持windows和mac系统,有兴趣的可以尝试一下.

sublimeText 和 Atom等编辑器需要安装相关TypeScript插件才可以支持.