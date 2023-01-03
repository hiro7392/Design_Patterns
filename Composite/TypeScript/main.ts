abstract class Entry{
    abstract getName():string;
    abstract getSize():number;
    abstract printList():void;
    constructor(){}
}

class File_ extends Entry{
    private name:string;
    private size:number;
    constructor(name:string,size:number){
        super()
        this.name=name;
        this.size=size;
    }
    public getName(): string {
        return this.name;
    }
    public getSize(): number {
        return this.size;
    }
    public printList(): void {
        console.log("file: ",this.getName());
    }
}
class Directory_ extends Entry{
    private name:string;
    private dir:Entry[];
    constructor(name:string){
        super()
        this.name=name;
        this.dir=[];
    }
    public getName(): string {
        return this.name;
    }
    public getSize(): number {
        let sum=0;
        this.dir.map((elem)=>{
            sum+=elem.getSize();
        })
        return sum;
    }
    public printList(): void {
        console.log("dir:",this.name);
        this.dir.map((elem)=>{
            elem.printList();
        })
        
    }
    public add(entry:Entry):void{
        this.dir=[...this.dir,entry];
    }
    public printSizeAndName():void{
        console.log(this.name," : ",this.getSize());
    }
    public printAll():void{
        console.log(this.dir);
    }
}

function clientCode(){
    const f1:File_=new File_("root.html",100);
    const f2:File_=new File_("second.txt",200);
    const f3:File_=new File_("thired.txt",200);

    const d1:Directory_=new Directory_("sub1");
    const d2:Directory_=new Directory_("sub2");
    d1.add(f1);
    d1.add(f2);
    d1.add(f3);
    d2.add(d1);
    d2.printList();
    //d2.printAll();
}

clientCode();

