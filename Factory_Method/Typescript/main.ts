// 抽象クラス
abstract class Factory{
    public abstract createProduct():Product;
    public ownerName:string;
    constructor(name:string){
        this.ownerName=name;
    }

    public someOperation():string{
        const product=this.createProduct();
        return `Factory: The same factory\'s code has just worked with \n ${product.operation()}`;
    }
}

//  インスタンスを生成する具象クラス
class ConcreteFactory1 extends Factory{
    
    public createProduct():Product{
        return new ConcreteProduct1(this.ownerName);
    }
}
class ConcreteFactory2 extends Factory{
    public createProduct(): Product {
        return new ConcreteProduct2(this.ownerName);
    }
}
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

abstract class Product{
    public ownerName:string;
    constructor(name:string){
        this.ownerName=name;
    }
    public abstract operation():string;
    
}
class ConcreteProduct1 extends Product{
    public operation():string{
        return `product1 operation my owner is ${this.ownerName}`;
    }
}
class ConcreteProduct2 extends Product{
    public operation():string{
        return `product2 operation my owner is ${this.ownerName}`;
    }
}
function clientCode(factory:Factory){
    console.log(factory.someOperation());
    console.log('Client: I\'m. not aware of the factory\'s class, but it still works.');
}

console.log('App launched with the ConcreteFactory 1');
clientCode(new ConcreteFactory1('tanaka'));
console.log('');

console.log('App launched with the ConcreteFactory 2');
clientCode(new ConcreteFactory2('sato'));

// output
// App launched with the ConcreteFactory 1
// Factory: The same factory's code has just worked with 
//  product1 operation my owner is tanaka
// Client: I'm. not aware of the factory's class, but it still works.

// App launched with the ConcreteFactory 2
// Factory: The same factory's code has just worked with 
//  product2 operation my owner is sato
// Client: I'm. not aware of the factory's class, but it still works.