function notInstantiated(obj) {
    return typeof obj === 'undefined' || typeof obj === 'null';
}

function ensureInstantiated(obj) {
    if (notInstantiated(obj)) {
        return {
            isNull:true
        }
    }

    return obj;
}

function isPrimitive(obj) {
    if (notInstantiated(obj)) {
        return false;
    }
    return (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean');
}

export function nullSafe(obj, returnIfNotInstantiated: any = {isNull: true}, primitive = undefined) {
    /*
    If JavaScript had memoization, the approach below would be better, as it is purely functional
    However, as it stands, it would require the recalculation of this function many times.
    function safeObj(){
        return ensureInstantiated(obj);
    }
    */
    let safeObj = ensureInstantiated(obj);

    return {
        access: (func) => {
            if (safeObj.attemptedInvalidPrimitivePropertyAccess === true) {
                return safeObj;
            }
            if (isPrimitive(safeObj)) {
                try {
                    return nullSafe(func(safeObj), returnIfNotInstantiated);
                }
                catch (e) {
                    return nullSafe(null, returnIfNotInstantiated, safeObj);
                }
            }
            try {
                return nullSafe(func(safeObj), returnIfNotInstantiated);
            }
            catch (e) {
                return nullSafe(null, returnIfNotInstantiated);
            }
        },
        resolve: () => {
            if (notInstantiated(safeObj)) {
                return returnIfNotInstantiated;
            }

            return safeObj;
        },
        attemptedInvalidPrimitivePropertyAccess: isPrimitive(primitive),
        primitive: primitive
    }
}