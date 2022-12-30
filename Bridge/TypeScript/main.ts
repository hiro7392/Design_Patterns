//  機能の抽象クラス
class Display{
    protected impl:DisplayImpl;
    constructor(impl:DisplayImpl){
        this.impl=impl;
    }
    public open():void{
        this.impl.rawOpen();
    };
    public print():void{
        this.impl.rawPrint();
    };
    public close():void{
        this.impl.rawClose();
    };
    public display():void{
        this.open();
        this.print();
        this.close();
    };
};

//  機能の実装クラス
class countDisplay extends Display{
    constructor(impl:DisplayImpl){
        super(impl);
    };
    public multileDisplay(times:number):void{
        this.open();
        for(let i=0;i<times;i++){
            this.print();
        }
        this.close();
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
        this.printLine();
    }
    public rawPrint(): void {
        console.log("|",this.str,"|");
    }
    public rawClose(): void {
        this.printLine();
    }
    private printLine():void{
        let output="*";
        for(let i=0;i<this.width+2;i++)output+="-";
        output+="*";
        console.log(output);
    }
};

const clientCode=()=>{
    const d1=new Display(new StringDisplayImpl("d1 hello!"));
    const d2=new Display(new StringDisplayImpl("d2 hello!"));
    const d3=new countDisplay(new StringDisplayImpl("d3 hello!"));

    d1.display();
    console.log();

    d2.display();
    console.log();

    d3.multileDisplay(3);
    console.log();
}
clientCode();
//  実行結果
/**
*-----------*
| d1 hello! |
*-----------*

*-----------*
| d2 hello! |
*-----------*

*-----------*
| d3 hello! |
| d3 hello! |
| d3 hello! |
*-----------*
 */