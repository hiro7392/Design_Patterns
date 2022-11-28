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
// 抽象クラス
var Factory = /** @class */ (function () {
    function Factory(name) {
        this.ownerName = name;
    }
    Factory.prototype.someOperation = function () {
        var product = this.createProduct();
        return "Factory: The same factory's code has just worked with \n ".concat(product.operation());
    };
    return Factory;
}());
//  インスタンスを生成する具象クラス
var ConcreteFactory1 = /** @class */ (function (_super) {
    __extends(ConcreteFactory1, _super);
    function ConcreteFactory1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteFactory1.prototype.createProduct = function () {
        return new ConcreteProduct1(this.ownerName);
    };
    return ConcreteFactory1;
}(Factory));
var ConcreteFactory2 = /** @class */ (function (_super) {
    __extends(ConcreteFactory2, _super);
    function ConcreteFactory2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteFactory2.prototype.createProduct = function () {
        return new ConcreteProduct2(this.ownerName);
    };
    return ConcreteFactory2;
}(Factory));
// interfaceを用いる場合
// interface Product{
//     operation():string;
// }
// class ConcreteProduct1 implements Product{
//     public operation(): string{
//         return '{ConcreteProduct1 operation called}';
//     }
// }
// class ConcreteProduct2 implements Product{
//     public operation(): string {
//         return '{ConcreteProduct2 operation called}';
//     }
// }
var Product = /** @class */ (function () {
    function Product(name) {
        this.ownerName = name;
    }
    return Product;
}());
var ConcreteProduct1 = /** @class */ (function (_super) {
    __extends(ConcreteProduct1, _super);
    function ConcreteProduct1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteProduct1.prototype.operation = function () {
        return "product1 operation my owner is ".concat(this.ownerName);
    };
    return ConcreteProduct1;
}(Product));
var ConcreteProduct2 = /** @class */ (function (_super) {
    __extends(ConcreteProduct2, _super);
    function ConcreteProduct2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteProduct2.prototype.operation = function () {
        return "product2 operation my owner is ".concat(this.ownerName);
    };
    return ConcreteProduct2;
}(Product));
function clientCode(factory) {
    console.log(factory.someOperation());
    console.log('Client: I\'m. not aware of the factory\'s class, but it still works.');
}
console.log('App launched with the ConcreteFactory 1');
clientCode(new ConcreteFactory1('tanaka'));
console.log('');
console.log('App launched with the ConcreteFactory 2');
clientCode(new ConcreteFactory2('sato'));
