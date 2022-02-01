class AlarmClock {
  constructor(alarmCollection, timerId) {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id1) {
    if (id1 === undefined) {
      throw new Error("Параметр id не передан");
    }
    if (this.alarmCollection.some((item) => item.id === id1)) {
      console.error("Mistake!");
      return;
    }
    this.alarmCollection.push({
      time: time,
      callback: callback,
      id: id1,
    });
  }

  removeClock(id) {
    let before = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter((item) => item.id != id);
    let end = this.alarmCollection.length;
    return before > end;
  }

  getCurrentFormattedTime() {
    let now = new Date();
    let hours = now.getHours();
    hours = hours < 10 ? "0" + hours : hours;
    let minutes = now.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutes}`;
  }

  start() {
    let func = () => {
      this.alarmCollection.forEach((item) => {
        if (item.time === this.getCurrentFormattedTime()) {
          item.callback();
        }
      });
    };
    if (this.timerId !== null) {
      this.timerId = setInterval(func, 5000);
    }
  }

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach((element) => {
      console.log(element.id + "-" + element.time);
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

let testClock = new AlarmClock();
testClock.addClock("19:09", () => console.log("Вставай"), 1);
testClock.addClock(
  "19:14",
  () => {
    console.log("Ну вставай уже!");
    testClock.removeClock(2);
  },
  2
);
testClock.addClock(
  "19:15",
  () => {
    console.log("Пора вставааать!");
    testClock.clearAlarms();
    testClock.printAlarms();
  },
  3
);
testClock.printAlarms();
testClock.start();

/*class AlarmClock{
    constructor(alarmCollection, timerId){
        this.alarmCollection = [];
        this.timerId = null;
    }
   

    addClock(time, callback, id1){
        if(id1 === undefined){
            throw new Error('Не передан параметр id')
        }
        if(this.alarmCollection.some(item => item.id === id1)) {
        console.error('Mistake!');
        return
        }

        // это массив
        this.alarmCollection.push({
            time: time,
            callback: callback,
            id: id1
        })
    }

    removeClock(id){
         let before = this.alarmCollection.length;
         this.alarmCollection = this.alarmCollection.filter(item => item.id != id)
         let end = this.alarmCollection.length
         return before > end
        }
    
    getCurrentFormattedTime(){
       let now = new Date()
       let hours = now.getHours();
       hours = hours < 10 ? '0' + hours : hours; 
       let minutes = now.getMinutes();
       minutes = minutes < 10 ? '0' + minutes : minutes;
       return `${hours}:${minutes}`
    }
       start(){
       let func = () => {
            this.alarmCollection.forEach((item) => {
                if(item.time === this.getCurrentFormattedTime()){
                   item.callback();
                }
            })
            }

        if(this.timerId === null){
            this.timerId = setInterval(func, 5000)
        }
        setInterval(func, 5000)
       }

    stop(){
      if(this.timerId !== null){
          clearInterval(this.timerId);
          this.timerId = null;
      }
    }

    printAlarms(){
        this.alarmCollection.forEach(element => {
            console.log(element.id + '-' + element.time)
        })
    }
    clearAlarms(){
        this.stop()
        this.alarmCollection = [];
    }
}




let testClock =  new AlarmClock()
testClock.addClock("22:13", () => console.log('Вставай'), 1);
testClock.addClock("22:14", () =>{
console.log('Вставай, второй раз говорю');
testClock.removeClock(2);
}, 2);
testClock.addClock("22:14", () =>{
console.log('Ну все, пора вставать');
testClock.clearAlarms();
testClock.printAlarms();
}, 3);
testClock.printAlarms();
testClock.start(); */
