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
//  機能の抽象クラス
var Display = /** @class */ (function () {
    function Display(impl) {
        this.impl = impl;
    }
    Display.prototype.open = function () {
        this.impl.rawOpen();
    };
    ;
    Display.prototype.print = function () {
        this.impl.rawPrint();
    };
    ;
    Display.prototype.close = function () {
        this.impl.rawClose();
    };
    ;
    Display.prototype.display = function () {
        this.open();
        this.print();
        this.close();
    };
    ;
    return Display;
}());
;
//  機能の実装クラス
var countDisplay = /** @class */ (function (_super) {
    __extends(countDisplay, _super);
    function countDisplay(impl) {
        return _super.call(this, impl) || this;
    }
    ;
    countDisplay.prototype.multileDisplay = function (times) {
        this.open();
        for (var i = 0; i < times; i++) {
            this.print();
        }
        this.close();
    };
    return countDisplay;
}(Display));
;
//  実装の抽象クラス
var DisplayImpl = /** @class */ (function () {
    function DisplayImpl() {
    }
    return DisplayImpl;
}());
;
//  実装の具象クラス
var StringDisplayImpl = /** @class */ (function (_super) {
    __extends(StringDisplayImpl, _super);
    function StringDisplayImpl(str) {
        var _this = _super.call(this) || this;
        _this.str = str;
        _this.width = str.length;
        return _this;
    }
    ;
    StringDisplayImpl.prototype.rawOpen = function () {
        this.printLine();
    };
    StringDisplayImpl.prototype.rawPrint = function () {
        console.log("|", this.str, "|");
    };
    StringDisplayImpl.prototype.rawClose = function () {
        this.printLine();
    };
    StringDisplayImpl.prototype.printLine = function () {
        var output = "*";
        for (var i = 0; i < this.width + 2; i++)
            output += "-";
        output += "*";
        console.log(output);
    };
    return StringDisplayImpl;
}(DisplayImpl));
;
var clientCode = function () {
    var d1 = new Display(new StringDisplayImpl("d1 hello!"));
    var d2 = new Display(new StringDisplayImpl("d2 hello!"));
    var d3 = new countDisplay(new StringDisplayImpl("d3 hello!"));
    d1.display();
    console.log();
    d2.display();
    console.log();
    d3.multileDisplay(3);
    console.log();
};
clientCode();
