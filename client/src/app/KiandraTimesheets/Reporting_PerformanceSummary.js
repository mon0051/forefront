"use strict";
var EmployeePerformance_1 = require("./EmployeePerformance");
var storedProcedures_1 = require("./storedProcedures");
var PerformanceReport = (function () {
    function PerformanceReport() {
        this.dependencies = [
            EmployeePerformance_1.EmployeePerformance,
            storedProcedures_1.sp_GetTotalHoursInPeriod,
            storedProcedures_1.multiValueParam
        ];
    }
    PerformanceReport.prototype.reporting_PerformanceSummary = function (startDate, endDate, datePeriod, employeeIds, teamIds) {
    };
    return PerformanceReport;
}());
exports.PerformanceReport = PerformanceReport;
//# sourceMappingURL=Reporting_PerformanceSummary.js.map