function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
class Player{
    strategy:Strategy;
    results:number[][]=[
        [0,0,0],
        [0,0,0],
        [0,0,0],
    ];
    constructor(strategy:Strategy){
        this.strategy=strategy;
    }
}

interface Strategy{
    nextHand():number;
    study(boolean):void;
};
enum Hand {
    Rock, // 0
    Sessorse, // 1
    Papar, // 2
}
enum Result {
    Win, // 0
    Lose, // 1
    Even, // 2
}
const Hands:string[]=["Rock","SESSORS","PAPER"];

class WinningStrategy implements Strategy{
    private beforeHand:number;
    private nowHand:number;
    private won:boolean=false;
    constructor(){
        this.beforeHand=0;
        this.nowHand=0;
    }
    //  前回勝っていたら同じ手、そうでなければ違う手を出す
    public nextHand(): number {
        if(!this.won){
            this.beforeHand=getRandomInt(2);
        }
        return this.beforeHand;
    }
    public study(result:boolean): void {
        this.won=result;

    }
};

class RandomStrategy implements Strategy{
    private beforeHand:number;
    public nextHand():number{
        this.beforeHand=getRandomInt(3)
        return this.beforeHand;
    }
    public study(result:boolean): void {
        
    }
} 
function Battle(Player1:Player,Player2:Player):number{
    let result=0;
    const p1:number=Player1.strategy.nextHand();
    const p2:number=Player2.strategy.nextHand();
    console.log(`${Hands[p1]} vs ${Hands[p2]} `);

    if((p1+1)%3===p2){
        console.log("player1 won!");
        result=0;
    }else if((p2+1)%3===p1){
        console.log("player2 won!");
        result=1;
    }else{
        console.log("DRAW!");
        result=2;
    }
    Player1.strategy.study((p1+1)%3===p2);
    Player2.strategy.study((p2+1)%3===p1);
    return result;
}

function clientCode(){
    const Player1=new Player(new WinningStrategy());
    const Player2=new Player(new RandomStrategy());

    let win:number=0,lose:number=0,draw:number=0;
    for(let i=0;i<100;i++){
        const res=Battle(Player1,Player2)
        if(res===0){
            win++;
        }else if(res===1){
            lose++;
        }else{
            draw++;
        }
    }
    console.log(`player1 result\n win:${win} lose:${lose} draw:${draw}`);
}
clientCode()