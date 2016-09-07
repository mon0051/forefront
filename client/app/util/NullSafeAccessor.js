"use strict";
function isNotInstantiated(obj) {
    return (obj === null || obj === undefined);
}
function isPrimitive(obj) {
    var objType = typeof obj;
    return (objType === 'string' || objType === 'number' || objType === 'boolean');
}
function ಠ(propertyKey) {
    var parent = this;
    var child = parent[propertyKey];
    if (isPrimitive(child)) {
        return child;
    }
    if (isNotInstantiated(child)) {
        parent[propertyKey] = {};
        child = parent[propertyKey];
    }
    child.ಠ = ಠ;
    return child;
}
function ಠ_ಠ(obj) {
    if (isNotInstantiated(obj)) {
        obj = {};
    }
    obj.ಠ = ಠ;
    return obj;
}
exports.ಠ_ಠ = ಠ_ಠ;
//# sourceMappingURL=NullSafeAccessor.js.map