/*Observable class is used to convert a class as 'observable', then this class will be able to subscribe or unsubcribe other classes and notify them about changes in its structure  */
class Observable {
  constructor() {
    this.observers = []; //array to store the observers
  }

  subscribe(notifyingClass) {
    this.observers.push(notifyingClass);  //add a class as osberver
  }

  unsubscribe(notifyingClass) {   //remove a class as osberver
    
    this.observers = this.observers.filter(
      (observer) => observer !== notifyingClass
    );
  }

  notifyObservable(event) { //send a message to each observer according to the event.
    this.observers.forEach((observer) => {
      observer.notify(event);  //It's needed the observer have mthod notify
    });
  }
}


class NumberExample extends Observable {  //converting Number example as observable class
  constructor() {
    super(); //calling the father class to use subscribe, unsubscribe and notiy methods
    this.value = 0;
  }

  /*The increment method execute a action and notify it to subcribers */
  increment() {
    this.value++;
    this.notifyObservable(this);
  }
}

/* suscribd classes, the method notify is executed by  notifyObservable method*/
class NumberExampleSpanish {
  notify(event) {
    console.log(`El nuevo numero es : ${event.value}`);
  }
}

class NumberExampleEnglish {
  notify(event) {
    console.log(`The new number is: ${event.value}`);
  }
}

/*
let numberexample = new NumberExample()

numberexample.subscribe(new NumberExampleSpanish)

numberexample.subscribe(new NumberExampleEnglish)

numberexample.increment()
numberexample.increment()


numberexample.increment()
numberexample.increment()
*/
module.exports = Observable
