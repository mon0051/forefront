export class Guid{
    private _id:string;

    getId(){
        return this._id;
    }

    constructor(){
        this._id = this.generateGuid();
    }

    private generateGuid():string{
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }).toUpperCase();
    }
}
