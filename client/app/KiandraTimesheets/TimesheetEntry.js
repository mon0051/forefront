"use strict";
var Project_1 = require("./Project");
var Agreement_1 = require("./Agreement");
var TimesheetEntry = (function () {
    function TimesheetEntry() {
        this.dependencies = [
            Agreement_1.Agreement,
            Project_1.Project
        ];
    }
    return TimesheetEntry;
}());
var TimesheetEntryDetail = (function () {
    function TimesheetEntryDetail() {
        this.dependencies = [TimesheetEntry];
    }
    return TimesheetEntryDetail;
}());
var TimesheetEntryBreakdown = (function () {
    function TimesheetEntryBreakdown() {
        this.dependencies = [TimesheetEntryDetail];
    }
    return TimesheetEntryBreakdown;
}());
var TimesheetEntryByDay = (function () {
    function TimesheetEntryByDay() {
        this.dependencies = [TimesheetEntryBreakdown];
    }
    return TimesheetEntryByDay;
}());
var TimesheetEntryByDayExtended = (function () {
    function TimesheetEntryByDayExtended() {
        this.dependencies = [
            TimesheetEntryByDay
        ];
    }
    return TimesheetEntryByDayExtended;
}());
exports.TimesheetEntryByDayExtended = TimesheetEntryByDayExtended;
//# sourceMappingURL=TimesheetEntry.js.map