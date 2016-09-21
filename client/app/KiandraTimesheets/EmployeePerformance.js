"use strict";
var Employee_1 = require("./Employee");
var Team_1 = require("./Team");
var TimesheetEntry_1 = require("./TimesheetEntry");
var EmployeePerformance = (function () {
    function EmployeePerformance() {
        this.dependencies = [
            Employee_1.Employee,
            EmployeePerformanceCW,
            EmployeePerformanceTS,
            Team_1.Team
        ];
    }
    return EmployeePerformance;
}());
exports.EmployeePerformance = EmployeePerformance;
var EmployeePerformanceCW = (function () {
    function EmployeePerformanceCW() {
        this.dependencies = [
            TimesheetEntry_1.TimesheetEntryByDayExtended
        ];
    }
    return EmployeePerformanceCW;
}());
exports.EmployeePerformanceCW = EmployeePerformanceCW;
var EmployeePerformanceTS = (function () {
    function EmployeePerformanceTS() {
        this.dependencies = [];
    }
    return EmployeePerformanceTS;
}());
exports.EmployeePerformanceTS = EmployeePerformanceTS;
//# sourceMappingURL=EmployeePerformance.js.map