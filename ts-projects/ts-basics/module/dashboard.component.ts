import { devide, log as mathlog  } from './math.util';
import { generatePayslip, calculateSalary, log} from './employee.service';

export default class Dashboard {
    employeeId;

    createDashboard(){
        devide(10,2);
        mathlog();
        generatePayslip();
        calculateSalary();
        log();
    }
}

export function logDashboardActivities(){
    console.log("logged Dashboard Activiites");
}