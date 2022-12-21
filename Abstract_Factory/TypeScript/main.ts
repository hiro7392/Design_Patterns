import * as fs from 'fs';

//  抽象的な部品のItemクラス
//  LinkとTrayの親class
abstract class Item{
    public caption:string;

    constructor(caption:string){
        this.caption=caption;
    }
    //  サブクラスで実装    HTMLの文字列が戻り値になる
    public abstract makeHTML():string;

    public showParams():void{
        console.log("caption : ",this.caption);
    }
};

//  抽象的な部品のLinkクラス
abstract class Link extends Item{
    public url:string;

    constructor(caption:string,url:string){
        super(caption);
        this.url=url;
    }
}


//  部品Trayの抽象クラス
abstract class Tray extends Item{
    public tray: Item[];

    constructor(caption:string){
        super(caption);
        this.tray=[];
    }
    public add(item:Item):void{
        this.tray.push(item);
    }
}

//  抽象的な製品Pageクラス
abstract class Page{
    protected title:string;
    protected author:string;
    protected content:Item[];

    constructor(title:string, author:string){
        this.title=title;
        this.author=author;
        this.content=[];
    }
    public abstract makeHTML():string;
    public add(item:Item):void{
        this.content.push(item);
    }
    public output(filename:string):void{
        try{
            fs.writeFileSync(filename,this.makeHTML(),'utf-8')
        }catch(err){
            console.log(err);
        }
    }
};

//  抽象クラスの生成を担当するインターフェイス(抽象クラス)
interface AbstractFactory{
    createPage(title:string,author:string):Page;
    createLink(caption:string,url:string):Link;
    createTray(caption:string):Tray;
};

// 部品の具象クラス1 Listのリンク
class ListLink extends Link{
    constructor(caption:string,url:string){
        super(caption,url);
    }
    public makeHTML(): string {
        return "<li><a href=\"" + this.url + "\">"+ this.caption+"</a></li>\n";
    }
}
//  部品の具象クラス2 ListのTray
class ListTray extends Tray{
    constructor(caption:string){
       super(caption); 
    }
    public makeHTML(): string {
        let sb:string="";
        sb+=("<li>\n");
        sb+=this.caption;
        sb+=("\n<ul>\n");
        this.tray.map((item)=>{
            sb+=(item.makeHTML());
        })
        sb+=("</ul>\n");
        sb+=("</li>\n");

        return sb;
    }
}
//  部品の具象クラス3 ListのPage
class ListPage extends Page{
    constructor(title:string,author:string){
        super(title,author);
    }
    public makeHTML(): string {
        let sb:string="";
        sb+="<!DOCTYPE html>";
        sb+="<html>\n";
        sb+="<head>\n<title>\n";
        sb+=this.title;
        sb+="<head><title>\n";
        sb+="</title></head>\n";
        sb+="<body>\n";
        sb+="<h1>";
        sb+=this.title;
        sb+="</h1>\n\n";
        sb+="<ul>\n";
        this.content.map((item)=>{
            sb+=(item.makeHTML());
        })
        sb+="</ul>\n";
        sb+="<ht><address>";
        sb+=this.author;
        sb+="</address>\n";
        sb+="</body>\n";
        sb+="</html>\n";
        return sb;
    }
}

//  Listの生成を担当する  具象クラス1
class ListFactory implements AbstractFactory{
    createLink(caption: string, url: string): Link {
        return new ListLink(caption,url);
    }
    createTray(caption: string): Tray {
        return new ListTray(caption);
    }
    createPage(title: string, author: string): Page {
        return  new ListPage(title,author);
    }
}
function clientCode(factory:AbstractFactory){
    const blog1:Link=factory.createLink("News 1","https://example.com/news1");
    const blog2:Link=factory.createLink("News 2","https://example.com/news2");
    blog1.showParams();
    blog2.showParams();


    const blogTray:Tray=factory.createTray("Blog Site");
    blogTray.add(blog1);
    blogTray.add(blog2);
    

    const page:Page=factory.createPage("Blog ","Hiromichi Kawahara");
    page.add(blogTray);

    page.output("blog.html")

}

console.log("Client:Testing client code with the first Factory type ...");
clientCode(new ListFactory());  //ListFactoryで生成

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