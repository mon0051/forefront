import {EmployeePerformance} from "./EmployeePerformance";
import {sp_GetTotalHoursInPeriod, multiValueParam} from "./storedProcedures";
import {Dependent} from "./Dependent";

export class PerformanceReport implements Dependent{
    dependencies = [
        EmployeePerformance,
        sp_GetTotalHoursInPeriod,
        multiValueParam
    ];

    reporting_PerformanceSummary(startDate: Date, endDate: Date, datePeriod: number, employeeIds: string, teamIds: string) {

    }
}



