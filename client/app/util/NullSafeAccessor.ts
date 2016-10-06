function isNotInstantiated(obj){
    return (obj === null || obj === undefined);
}

function isPrimitive(obj){
    let objType = typeof obj;
    return (objType === 'string' || objType === 'number' || objType === 'boolean');
}

function ಠ(propertyKey){
    let parent = this;
    let child = parent[propertyKey];

    if(isPrimitive(child)){
        return child;
    }

    if(isNotInstantiated(child)){
        parent[propertyKey] = {};
        child = parent[propertyKey];
    }

    child.ಠ = ಠ;

    return child;
}

export function ಠ_ಠ(obj){
    if(isNotInstantiated(obj)){
        obj = {};
    }

    obj.ಠ = ಠ;
    return obj;
}
