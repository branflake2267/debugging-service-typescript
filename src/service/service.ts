
class Service {

  _myIntervalTimer: ReturnType<typeof setTimeout>;
  _count: number;

  constructor() {
    console.log("Service initialized...");

    this._count = 0;
  }

  public run() {
    console.log("Service running...");

    // Emulate long running process
    this._myIntervalTimer = setInterval(this._runOnInterval.bind(this), 1000);
  }

  private _runOnInterval() {
    console.log(`${this._count}. Doing something...`);
    
    // Count iterations
    this._count++; 

    if (this._count > 9) {
      // Stop timer
      clearTimeout(this._myIntervalTimer);
      console.log("Service completed...");
    }
  }

}

export default new Service();
