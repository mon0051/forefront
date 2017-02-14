var roleController = require('roles');

var util = require('util');

module.exports.loop = function () {
    util.cleanupMemory();
    roleController.generateCreeps();
    roleController.performRole();

    for (var role in roleController.roles) {
        if (roleController.roles.hasOwnProperty(role)) {
            for(var creepName in Game.creeps){
                if(Game.creeps.hasOwnProperty(creepName)){
                    if(creepName.contains(role)){
                        Game.creeps[creepName].memory.role = function(){
                            var thatRole = role;
                            return function(){
                                return thatRole;
                            };
                        }();
                    }
                }
            }
        }
    }
};

