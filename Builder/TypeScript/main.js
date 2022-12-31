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
//ファイル出力用
var fs = require("fs");
var Builder = /** @class */ (function () {
    function Builder() {
        this.filename = "";
        this.content = "";
    }
    return Builder;
}());
;
//　具象クラス1
//  HTMLファイルを使って文書を作成するクラス
var HTMLBuilder = /** @class */ (function (_super) {
    __extends(HTMLBuilder, _super);
    function HTMLBuilder() {
        return _super.call(this) || this;
    }
    HTMLBuilder.prototype.makeString = function (str) {
        this.content += "<p>";
        this.content += str;
        this.content += "</p>\n\n";
    };
    HTMLBuilder.prototype.makeTitle = function (title) {
        //  ヘッダー部分
        this.content += "<!DOCTYPE html>";
        this.content += "<html>\n";
        this.content += "<head>\n<title>\n";
        this.content += title;
        this.content += "<head><title>\n";
        this.content += "</title></head>\n";
        this.content += "<body>\n";
        this.content += "<h1>";
        this.content += title;
        this.content += "</h1>\n\n";
        //  ファイル名をタイトルに合わせる
        title += ".html";
        this.filename = title;
    };
    ;
    HTMLBuilder.prototype.makeItems = function (items) {
        var _this = this;
        this.content += "<ul>\n";
        items.map(function (item) {
            _this.content += "<li>";
            _this.content += item;
            _this.content += "</li>\n";
        });
        this.content += "</ul>\n\n";
    };
    ;
    HTMLBuilder.prototype.show = function () {
        this.content += "</body>\n";
        this.content += "</html>\n";
        console.log("HTMLBuilder result:\n", this.content);
    };
    ;
    HTMLBuilder.prototype.close = function () {
        //const fs=new FileSystem();
        try {
            fs.writeFileSync(this.filename, this.content, 'utf-8');
        }
        catch (err) {
            console.log(err);
        }
    };
    return HTMLBuilder;
}(Builder));
;
//  具象クラス2
//  txtファイルを使って文書を作成するクラス
var TextBuilder = /** @class */ (function (_super) {
    __extends(TextBuilder, _super);
    function TextBuilder() {
        return _super.call(this) || this;
    }
    TextBuilder.prototype.makeString = function (str) {
        this.content += ("■");
        this.content += str;
        this.content += ("\n\n");
    };
    TextBuilder.prototype.makeTitle = function (title) {
        this.content += ("============\n");
        this.content += ("「");
        this.content += (title);
        this.content += ("」\n\n");
        //  ファイル名をタイトルに合わせる
        title += ".txt";
        this.filename = title;
    };
    ;
    TextBuilder.prototype.makeItems = function (items) {
        var _this = this;
        items.map(function (item) {
            _this.content += ("・");
            _this.content += item;
            _this.content += ("\n");
        });
        this.content += ("\n");
    };
    ;
    TextBuilder.prototype.show = function () {
        console.log("TextBuilder result:\n", this.content);
    };
    ;
    TextBuilder.prototype.close = function () {
        //const fs=new FileSystem();
        try {
            fs.writeFileSync(this.filename, this.content, 'utf-8');
        }
        catch (err) {
            console.log(err);
        }
    };
    return TextBuilder;
}(Builder));
;
// 1つの文書を作るクラス
var Director = /** @class */ (function () {
    //  コンストラクタ
    function Director(builder) {
        this.builder = builder;
    }
    ;
    //  文書を作るメソッド
    Director.prototype.construct = function () {
        this.builder.makeTitle("Greeeting");
        this.builder.makeString("一般的なあいさつ");
        this.builder.makeItems([
            "How are you?",
            "Hello",
            "Hi"
        ]);
        this.builder.show();
        this.builder.close();
    };
    return Director;
}());
;
function client() {
    var textBuilder = new TextBuilder();
    var director1 = new Director(textBuilder);
    director1.construct();
    var htmlBulder = new HTMLBuilder();
    var director2 = new Director(htmlBulder);
    director2.construct();
    return;
}
client();
