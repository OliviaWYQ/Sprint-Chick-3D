class Event {
    constructor(sender){
        this.sender = sender;
        this.listerner = [];
    }

    attach(callbacks) {
        this.listerner.push(callbacks)
    }

    notify (args) {
        for (let i = 0; i<this.listerner.length; i++){
            this.listerner[i](this.sender, args)
        }
    }
}
export default Event;
