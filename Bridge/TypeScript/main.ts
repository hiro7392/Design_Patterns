//  機能の抽象クラス
class Display{
    protected impl:DisplayImpl;
    constructor(impl:DisplayImpl){
        this.impl=impl;
    }
    public open():void{

    };
    public print():void{
        
    };
    public close():void{
        
    };
    public display():void{
        
    };
};

//  機能の実装クラス
class countDisplay extends Display{
    public multileDisplay():void{

    }
};
//  実装の抽象クラス
abstract class DisplayImpl{
    public abstract rawOpen():void;
    public abstract rawPrint():void;
    public abstract rawClose():void;
};
//  実装の具象クラス
class StringDisplayImpl extends DisplayImpl{
    private str:string;
    private width:number;
    constructor(str:string){
        super()
        this.str=str;
        this.width=str.length;
    };
    public rawOpen(): void {
        
    }
    public rawPrint(): void {
        
    }
    public rawClose(): void {
        
    }
};

const clientCode=()=>{
    const d1=new Display(new StringDisplayImpl("d1 hello!"));
    
}