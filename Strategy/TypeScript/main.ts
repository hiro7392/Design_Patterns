class Player{
    strategy:Strategy;

}

interface Strategy{
    nextHand():number;
    study():void;
};
enum Hand {
    Rock, // 0
    Sessorse, // 1
    Papar, // 2
}
enum Result {
    Victory, // 0
    Lose, // 1
    Draw, // 2
}

class WinningStrategy implements Strategy{
    private beforeHand:number;
    private nowHand:number;
    nextHand(): number {
        return 0
    }
    study(): void {
        
    }
};

class ProbStrategy implements Strategy{

    nextHand():number{
        return 0;
    }
    study(): void {
        
    }
}   

function clientCode(){
    
}