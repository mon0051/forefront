export var Guid = (function () {
    function Guid() {
        this._id = this.generateGuid();
    }
    Guid.prototype.getId = function () {
        return this._id;
    };
    Guid.prototype.generateGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }).toUpperCase();
    };
    return Guid;
}());
//# sourceMappingURL=Guid.js.map