const Observable = require("./PatronObserver");

class MousePosition extends Observable{

    constructor(){
        super();
        this.posX = 0
        this.posY = 0
        this.prevX= 0
        this.prevY= 0
    }

    newPosition(x,y){
        this.prevX = this.posX
        this.prevY = this.posY
        this.posX = x
        this.posY = y
        this.notifyObservable(this)
    }


}


class ChangeX {
 
    notify(event){
        console.log(`The change in X was ${ event.posX- event.prevX}`)
    }

}

class ChangeY {
    notify(event){
        console.log(`The change in Y was ${event.posY- event.prevY}`)
    }

}

let mousePosition  = new  MousePosition()
let xchange = new ChangeX()
let ychange = new ChangeY()

mousePosition.subscribe(xchange)
mousePosition.subscribe(ychange)

mousePosition.newPosition(5,8)
mousePosition.newPosition(10,4)
