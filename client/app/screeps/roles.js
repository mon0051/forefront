var roles = {};
roles.harvester = require('role.harvester');
roles.builder = require('role.builder');
roles.upgrader = require('role.upgrader');

var identityFunction = function(role){
    return function(){return role};
};

module.exports = {
    roles: roles,
    generateCreeps: function () {
        for (var role in roles) {
            if (roles.hasOwnProperty(role)) {
                for(var creep in Game.creeps){
                    if(Game.creeps.hasOwnProperty(creep)){

                        console.log(Game.creeps[creep].memory.role);
                    }
                }
                if (_.filter(Game.creeps, (creep)=> creep.memory.role() == role).length < roles[role].idealUnits) {
                    Game.spawns['Main'].createCreep([WORK, CARRY, MOVE], (role + (Math.random() * 1000).toFixed()), {
                        role: identityFunction(role)
                    });
                }
            }
        }
    },

    resetCreepRoles: function () {
        for (var role in roles) {
            if (roles.hasOwnProperty(role)) {
                for (var creepName in Game.creeps) {
                    if (Game.creeps.hasOwnProperty(creepName)) {
                        if (role !== undefined && role !==null && creepName.includes(role)) {
                            Game.creeps[creepName].memory.role = identityFunction(role);
                        }
                    }
                }
            }
        }
    },

    performRole: function () {
        for (var creeperName in Game.creeps) {
            if (!(Game.creeps.hasOwnProperty(creeperName))) continue;
            var creeper = Game.creeps[creeperName];
            if (roles[creeper.memory.role()]) {
                roles[creeper.memory.role()].run(creeper);
                continue;
            }
            roles.harvester.run(creeper);
        }
    }
};