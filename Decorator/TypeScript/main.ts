

class StringDisplay{

}
//  文字列表示用の抽象クラス
abstract class Display{  
    public getColumns():string{
        return "columns";
    }
    public getRows():string{
        return "rows";
    }
    public getRowText():string{
        return "rowText";
    }
    public show():void{
        return;
    }
}
class Border{
    private display:Display;
}
class PullBorder extends Border{

}
class SideBorder{

}
function clientCodeForDecorator(){

}