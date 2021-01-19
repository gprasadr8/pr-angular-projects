import MyDashboard, { logDashboardActivities } from './dashboard.component';

// name need not be the same for default export
//in dashboard.component we have exported Dashboard class as a default export
//while importing default export we don't need to use same name Dashboard.
// we can use any name to import default export
const dashboard: MyDashboard = new MyDashboard();
dashboard.createDashboard();
dashboard.employeeId = 120;
logDashboardActivities();