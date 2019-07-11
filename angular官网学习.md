# Angular官网学习

## 背景和目标

本人作为已经已有两年工作经验的Java后端开发工程师，为了扩宽自己的技术路线，想学习Angular作为自己前端开发的技术栈。由于Angular官网提供了丰富的教学实例，故使用官网资源作为基础教材进行学习。

## 学习思路

通过完成官网示例中的[在线商店](<https://angular.cn/start>)和[英雄指南](<https://angular.cn/tutorial>)两个案例掌握Angular的功能特性。



## 实验工程

1. online-store
2. heroes-tutoturial



## 在线商店项目

### 介绍

在线商店（onlie-store）是一个包含导航栏、产品列表、产品详情、购物车和支付功能的示例项目。其中，组件设计如下：![组件分类](C:\Users\tanji\tanjie\git_workspace\angular-office-study\design\online-store\组件分类.png)



其中，

AppComponent是根组件，包含NavbarComponent、ProductListComponent、ProductDetailComponent、CartComponent子组件，用于初始化整个视图。

NavbarComponent是导航栏组件，可以将当前视图导航到支付视图页面。

ProductListComponent是产品列表组件，用于显示产品列表信息。

ProductAlertsComponent是产品提醒组件，当某一产品的价格大于特定值时提供用户。

ProductDetailComponent是产品详情组件，用于显示某个特定的产品详情信息。

CartComponent是购物车组件，点击导航栏视图上的Checkout按钮后跳转到购物车视图。

### Angular功能特性

#### Angular Cli

Angular Cli是Angular平台为开发者提供的快速构建Angular应用的命令行工具，通过该工具能够快速的生成应用、组件、服务、模块、模型等。

Angular Cli命令列表：

```shell
ng serve --open  # start applicaiton


```



#### 组件

组件（Component）是Angular对视图的抽象，通过组件组合的方式向用户展现出各种不同的视图。组件包含两个核心内容，组件类（Component Class）和视图模板（Html Template）。

#### 指令

##### 结构型指令

*ngFor、*ngIf

##### 属性绑定

属性绑定语法：[]

解释：将指定的值赋值给模板的属性。

例如：

```
<a [title]="product.name + ' details'">
   {{ product.name }}
</a>
```

##### 插值表达式

插值表达式语法：{{}}

解释：将组件属性的值渲染为文本。

例如:

```
<a [title]="product.name + ' details'">
   {{ product.name }}
</a>
```

##### 事件绑定

事件绑定语法：()

解释：将某事件绑定到当前组件的特定方法。

例如：

```
<button (click)="share(product)">分享</button>
```

##### 监听子组件事件

步骤：

1.在子组件中定义发送事件，例如：

```
@Output()
  notify = new EventEmitter();
```

此处，定义了一个名叫notify的事件，它需要被@Output()注解。

2.在父组件的视图模板中引用子组件，并将事件绑定到指定的方法

```
<app-product-alerts [product]="product" (notify)="onNotify(product)"></app-product-alerts>
```

此处，将当前组件的onNotify()方法绑定到子组件的notify事件上，当子组件的notify事件发生时，该方法会响应。

#### 路由

路由器可以让我们在浏览器的应用中从一个视图导航到另一个视图。Angular路由器会根据浏览器上的URL和你定义的路由表来决定如何显示组件。导航的方式分为三种：

1.通过浏览器URL地址栏导航

2.通过页面上的链接导航

3.通过浏览器上的前进和后退按钮导航

