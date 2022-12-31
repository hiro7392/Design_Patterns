"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var fs = require("fs");
//  抽象的な部品のItemクラス
//  LinkとTrayの親class
var Item = /** @class */ (function () {
    function Item(caption) {
        this.caption = caption;
    }
    Item.prototype.showParams = function () {
        console.log("caption : ", this.caption);
    };
    return Item;
}());
;
//  抽象的な部品のLinkクラス
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link(caption, url) {
        var _this = _super.call(this, caption) || this;
        _this.url = url;
        return _this;
    }
    return Link;
}(Item));
//  部品Trayの抽象クラス
var Tray = /** @class */ (function (_super) {
    __extends(Tray, _super);
    function Tray(caption) {
        var _this = _super.call(this, caption) || this;
        _this.tray = [];
        return _this;
    }
    Tray.prototype.add = function (item) {
        this.tray.push(item);
    };
    return Tray;
}(Item));
//  抽象的な製品Pageクラス
var Page = /** @class */ (function () {
    function Page(title, author) {
        this.title = title;
        this.author = author;
        this.content = [];
    }
    Page.prototype.add = function (item) {
        this.content.push(item);
    };
    Page.prototype.output = function (filename) {
        try {
            fs.writeFileSync(filename, this.makeHTML(), 'utf-8');
        }
        catch (err) {
            console.log(err);
        }
    };
    return Page;
}());
;
;
// 部品の具象クラス1 Listのリンク
var ListLink = /** @class */ (function (_super) {
    __extends(ListLink, _super);
    function ListLink(caption, url) {
        return _super.call(this, caption, url) || this;
    }
    ListLink.prototype.makeHTML = function () {
        return "<li><a href=\"" + this.url + "\">" + this.caption + "</a></li>\n";
    };
    return ListLink;
}(Link));
//  部品の具象クラス2 ListのTray
var ListTray = /** @class */ (function (_super) {
    __extends(ListTray, _super);
    function ListTray(caption) {
        return _super.call(this, caption) || this;
    }
    ListTray.prototype.makeHTML = function () {
        var sb = "";
        sb += ("<li>\n");
        sb += this.caption;
        sb += ("\n<ul>\n");
        this.tray.map(function (item) {
            sb += (item.makeHTML());
        });
        sb += ("</ul>\n");
        sb += ("</li>\n");
        return sb;
    };
    return ListTray;
}(Tray));
//  部品の具象クラス3 ListのPage
var ListPage = /** @class */ (function (_super) {
    __extends(ListPage, _super);
    function ListPage(title, author) {
        return _super.call(this, title, author) || this;
    }
    ListPage.prototype.makeHTML = function () {
        var sb = "";
        sb += "<!DOCTYPE html>";
        sb += "<html>\n";
        sb += "<head>\n<title>\n";
        sb += this.title;
        sb += "<head><title>\n";
        sb += "</title></head>\n";
        sb += "<body>\n";
        sb += "<h1>";
        sb += this.title;
        sb += "</h1>\n\n";
        sb += "<ul>\n";
        this.content.map(function (item) {
            sb += (item.makeHTML());
        });
        sb += "</ul>\n";
        sb += "<ht><address>";
        sb += this.author;
        sb += "</address>\n";
        sb += "</body>\n";
        sb += "</html>\n";
        return sb;
    };
    return ListPage;
}(Page));
//  Listの生成を担当する  具象クラス1
var ListFactory = /** @class */ (function () {
    function ListFactory() {
    }
    ListFactory.prototype.createLink = function (caption, url) {
        return new ListLink(caption, url);
    };
    ListFactory.prototype.createTray = function (caption) {
        return new ListTray(caption);
    };
    ListFactory.prototype.createPage = function (title, author) {
        return new ListPage(title, author);
    };
    return ListFactory;
}());
function clientCode(factory) {
    var blog1 = factory.createLink("News 1", "https://example.com/news1");
    var blog2 = factory.createLink("News 2", "https://example.com/news2");
    blog1.showParams();
    blog2.showParams();
    var blogTray = factory.createTray("Blog Site");
    blogTray.add(blog1);
    blogTray.add(blog2);
    var page = factory.createPage("Blog ", "Hiromichi Kawahara");
    page.add(blogTray);
    page.output("blog.html");
}
console.log("Client:Testing client code with the first Factory type ...");
clientCode(new ListFactory()); //ListFactoryで生成
//result
/*
<!DOCTYPE html><html>
<head>
<title>
Blog <head><title>
</title></head>
<body>
<h1>Blog </h1>

<ul>
<li>
Blog Site
<ul>
<li><a href="https://example.com/news1">News 1</a></li>
<li><a href="https://example.com/news2">News 2</a></li>
</ul>
</li>
</ul>
<ht><address>Hiromichi Kawahara</address>
</body>
</html>

*/ 
