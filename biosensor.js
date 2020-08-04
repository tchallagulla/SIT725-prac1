let getRandomArbitrary= function(min, max){
    return parseInt(Math.random() * (max - min) + min);
}


class Biosensor{
    constructor(name){
        this.name=name;
        this.live();
        this.currentHeartBeat = 0;
    
    }
    display(){
        console.log('Person:'+this.name+"  || HR: "+this.currentHeaRTBeat);
    }
    heartBeat(){
        this.currentHeartBeat= getRandomArbitrary(60,80);
        this.display()
    }


live(){
    console.log("IT's ALIVEE")
    setInterval(() => {this.heartBeat()}, 1000)

    }
        
}

//output to the console

let james = new Biosensor('James')
let sara = new Biosensor('Sara')