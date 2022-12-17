//ファイル出力用
import * as fs from 'fs';

abstract class Builder{
    public filename:string;
    public content:string;
    constructor(){
        this.filename="";
        this.content="";
    }
    public abstract makeString(str:string):void;
    public abstract makeTitle(title:string):void;
    public abstract makeItems(items:string[]):void;
    public abstract show():void;
    public abstract close():void;
};
//　具象クラス1
//  HTMLファイルを使って文書を作成するクラス
class HTMLBuilder extends Builder{
    constructor(){
        super();
    }
    public makeString(str: string): void {
        this.content+="<p>";
        this.content+=str;
        this.content+="</p>\n\n";
    }
    public makeTitle(title:string):void{
        //  ヘッダー部分
        this.content+="<!DOCTYPE html>";
        this.content+="<html>\n";
        this.content+="<head>\n<title>\n";
        this.content+=title;
        this.content+="<head><title>\n";
        this.content+="</title></head>\n";
        this.content+="<body>\n";
        this.content+="<h1>";
        this.content+=title;
        this.content+="</h1>\n\n";

        //  ファイル名をタイトルに合わせる
        title+=".html";
        this.filename=title;
    };
    public makeItems(items:string[]):void{
        this.content+="<ul>\n";
        items.map((item)=>{
            this.content+="<li>";
            this.content+=item;
            this.content+="</li>\n";
        }); 
        this.content+="</ul>\n\n";
    };
    public show():void{
        this.content+="</body>\n";
        this.content+="</html>\n";
        console.log("HTMLBuilder result:\n",this.content);
    };
    public close():void{
        //const fs=new FileSystem();
        try{
            fs.writeFileSync(this.filename,this.content,'utf-8')
        }catch(err){
            console.log(err);
        }
    }
    
};

//  具象クラス2
//  txtファイルを使って文書を作成するクラス
class TextBuilder extends Builder{
    constructor(){
        super();
    }
    public makeString(str:string): void {
        this.content+=("■");
        this.content+=str;
        this.content+=("\n\n");
    }
    public makeTitle(title:string):void{
        this.content+=("============\n");
        this.content+=("「");
        this.content+=(title);
        this.content+=("」\n\n");
        //  ファイル名をタイトルに合わせる
        title+=".txt";
        this.filename=title;
    };
    public makeItems(items:string[]):void{
        items.map((item)=>{
            this.content+=("・");
            this.content+=item;
            this.content+=("\n");
        }); 
        this.content+=("\n");
    };
    public show():void{
        console.log("TextBuilder result:\n",this.content);
    };
    public close():void{
        //const fs=new FileSystem();
        try{
            fs.writeFileSync(this.filename,this.content,'utf-8')
        }catch(err){
            console.log(err);
        }
    }
    
};

// 1つの文書を作るクラス
class Director{
    
        public builder:Builder;
        //  コンストラクタ
        constructor(builder:Builder){
            this.builder=builder;
        };
        //  文書を作るメソッド
        public construct():void{  
            this.builder.makeTitle("Greeeting");
            this.builder.makeString("一般的なあいさつ");
            this.builder.makeItems([
                    "How are you?",
                    "Hello",
                    "Hi"
                ]);
            this.builder.show();
            this.builder.close();
        }
};



function client():void{
    const textBuilder:TextBuilder=new TextBuilder();
    const director1:Director=new Director(textBuilder);
    director1.construct();

    const htmlBulder:HTMLBuilder =new HTMLBuilder();
    const director2:Director=new Director(htmlBulder);
    director2.construct();

    return;
}
client();
/** 実行結果
 * TextBuilder result:
 ============
「Greeeting」

■一般的なあいさつ

・How are you?
・Hello
・Hi


HTMLBuilder result:
 <!DOCTYPE html><html>
<head>
<title>
Greeeting<head><title>
</title></head>
<body>
<h1>Greeeting</h1>

<p>一般的なあいさつ</p>

<ul>
<li>How are you?</li>
<li>Hello</li>
<li>Hi</li>
</ul>

</body>
</html>
 * 
 */