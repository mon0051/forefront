import {Employee} from "./Employee";
import {Team} from "./Team";
import {Dependent} from "./Dependent";
import {TimesheetEntryByDayExtended} from "./TimesheetEntry";
export class EmployeePerformance implements Dependent{
    dependencies = [
        Employee,
        EmployeePerformanceCW,
        EmployeePerformanceTS,
        Team
    ];
}

export class EmployeePerformanceCW implements Dependent{
    dependencies = [
        TimesheetEntryByDayExtended
    ];
}

export class EmployeePerformanceTS implements Dependent{
    dependencies = [];
}



