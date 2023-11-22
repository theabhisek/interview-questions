class Logger{
    static instance=null;
    static getInstance(){
        if(!Logger.instance){
            Logger.instance = new Logger()
        }
        return this.instance
    }


  log(message) {
    console.log(message);
  }
}

const x = Logger.getInstance()
console.log(x);