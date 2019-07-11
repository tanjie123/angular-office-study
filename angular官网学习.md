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

ProductDetailComponent是产品详情组件，用于显示某个特定的产品详情信息。

CartComponent是购物车组件，点击导航栏视图上的Checkout按钮后跳转到购物车视图。

### Angular功能特性

#### 组件

组件（Component）是Angular对视图的抽象，通过组件组合的方式向用户展现出各种不同的视图。组件包含两个核心内容，组件类（Component Class）和视图模板（Html Template）。

