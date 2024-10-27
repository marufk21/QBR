export  const employees = [
    {
        "employeeId": 'E001',
        "employeeName": "Alice Smith",
        "data": {
            "Present Goals": {
                "January": 80,
                "February": 70,
                "March": 90,
                "April": 85,
                "May": 75,
                "June": 88,
                "July": 92,
                "August": 80,
                "September": 83,
                "October": 78,
                "November": 89,
                "December": 91
            },
            "Future Goals": {
                "January": 80,
                "February": 75,
                "March": 85,
                "April": 82,
                "May": 70,
                "June": 90,
                "July": 88,
                "August": 80,
                "September": 85,
                "October": 76,
                "November": 87,
                "December": 90
            },
            "Tasks Cleared": {
                "January": 80,
                "February": 75,
                "March": 90,
                "April": 85,
                "May": 78,
                "June": 88,
                "July": 92,
                "August": 81,
                "September": 84,
                "October": 79,
                "November": 89,
                "December": 91
            },
            "Changes in Plans": {
                "January": 80,
                "February": 70,
                "March": 85,
                "April": 90,
                "May": 75,
                "June": 88,
                "July": 92,
                "August": 80,
                "September": 83,
                "October": 77,
                "November": 86,
                "December": 89
            },
            "Graph Performance": {
                "January": 80,
                "February": 75,
                "March": 90,
                "April": 82,
                "May": 78,
                "June": 85,
                "July": 90,
                "August": 80,
                "September": 84,
                "October": 76,
                "November": 88,
                "December": 91
            },
            "Team Performance": {
                "January": 80,
                "February": 78,
                "March": 85,
                "April": 90,
                "May": 72,
                "June": 88,
                "July": 91,
                "August": 80,
                "September": 83,
                "October": 77,
                "November": 89,
                "December": 92
            },
            "Attendance": {
                "January": 80,
                "February": 85,
                "March": 90,
                "April": 88,
                "May": 87,
                "June": 90,
                "July": 93,
                "August": 80,
                "September": 85,
                "October": 76,
                "November": 89,
                "December": 91
            }
        }
    }
];


export const fetchEmployee = (id) => {
    return employees.find(emp => emp.employeeId === id) || null;
};