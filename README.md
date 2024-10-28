# Employee Dashboard Application

This is a React-based dashboard application for tracking employee performance data, monthly goals, attendance, and team progress. The app includes features like monthly data entry, dynamic performance graphs, and a selection interface for reviewing monthly employee performance metrics.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Employee Dashboard**: View and analyze each employee’s monthly performance, goals, and tasks.
- **Dynamic Performance Graphs**: Graphical representation of employee progress using `Chart.js`.
- **Monthly Data Entry**: Enter progress data for each month.
- **Attendance and Team Goals**: Track employee attendance and team goals within the dashboard.

## Tech Stack

- **Frontend**: Vite, React, React Router, Tailwind CSS
- **Charts**: Chart.js with React Chart.js 2 wrapper
- **Backend Mock API**: Simulated API using hardcoded data

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/employee-dashboard.git
   cd employee-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The app should be running on [http://localhost:3000](http://localhost:3000).

## Usage

1. **Select an Employee**: Navigate to an employee’s dashboard using the ID.
2. **Choose a Month**: Select a month from the dropdown to view or update monthly data.
3. **Enter Monthly Data**: Use the Monthly Data Entry form to add new performance data, which updates the dynamic graph.

## Project Structure

```bash
src/
├── components/
│   ├── Dashboard.js            # Employee Dashboard with data display
│   ├── PerformanceGraph.js     # Chart.js-based performance graph component
│   ├── MonthlyDataEntry.js     # Form to enter monthly progress data
│   ├── ...
├── data/
│   └── mockApi.js              # Mock API function to simulate fetching employee data
├── App.js                      # Main app component
└── index.js                    # App entry point
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request to make improvements or add features.

## License

This project is licensed under the MIT License.

