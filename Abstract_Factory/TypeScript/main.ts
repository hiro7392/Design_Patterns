//  抽象クラスの生成を担当する抽象クラス
abstract class AbstractFactory{

};
//  抽象的な部品のItemクラス
//  LinkとTrayのsuper class
abstract class Item{
    protected caption:string;

    public Item(caption:string){
        this.caption=this.caption;
    }
    //  サブクラスで実装    HTMLの文字列が戻り値になる
    public abstract makeHTML():string;
}

//  部品Trayの抽象クラス
abstract class Tray extends Item{
    protected 
}