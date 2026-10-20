
# IT313 Lab 5: React State & Hooks

## Project Overview

The Lab Timer & Practice Tracker is a simple mobile application built using React Native and Expo. It allows students to track the number of practice problems they solve and monitor the time they spend working during laboratory sessions.

## Features

- **Practice Counter:** Displays the number of solved problems.
- **Solve +1:** Increases the solved count by one.
- **Reset:** Resets the solved count to zero without resetting the timer.
- **Achievement Message:** Displays "Great job!" when five or more problems have been solved.
- **Stopwatch:** Tracks elapsed time in minutes and seconds.
- **Start and Stop Controls:** Starts and pauses the stopwatch.
- **Timer Status:** Displays "Running…" or "Paused" depending on the timer state.

## React Concepts Used

- **useState:** Stores the solved count and stopwatch running state.
- **useEffect:** Starts the timer interval when the stopwatch is running.
- **Cleanup Function:** Uses clearInterval to stop the timer when paused or when the component unmounts.
- **Conditional Rendering:** Displays messages based on the current state.
- **Event Handling:** Uses button onPress handlers to update the application state.
- **Lifting State Up:** Keeps shared state in the LabScreen parent component and passes data and callbacks to its child components.
- **Custom Hook:** Uses useStopwatch to manage stopwatch logic separately from the user interface.

## Main Components

The components and custom hook are implemented in `App.tsx`.

- **LabScreen:** Manages the shared application state.
- **PracticeTracker:** Displays the solved counter, action buttons, and achievement message.
- **Stopwatch:** Displays the elapsed time and running status.
- **useStopwatch:** Manages the stopwatch timer and interval cleanup.

## How to Run the App in Expo Go

### Prerequisites

- Node.js installed on your computer.
- Expo Go installed on your mobile phone.
- The project files available on your computer.

### Instructions

1. Open the project folder in VS Code.
2. Open the integrated terminal.
3. Install the project dependencies by running:

   `npm install`

4. Start the Expo development server:

   `npx expo start`

5. Open Expo Go on your phone.
6. Scan the QR code displayed by Expo.
7. Wait for the application to load.

## Testing the Application

1. Verify that the initial solved count is zero and the timer displays `00:00`.
2. Press **Solve +1** five times and check that "Great job!" appears.
3. Press **Reset** and verify that the solved count returns to zero.
4. Press **Start** and verify that the timer counts upward.
5. Press **Stop** and verify that the timer pauses.
6. Confirm that resetting the solved count does not reset the stopwatch.

## Author

Name: Aiya Pailagao  
Course: IT313 – Mobile Programming  
Section: IT3R2

## Purpose

This project demonstrates the use of React state, effects, cleanup functions, conditional rendering, event handling, lifting state up, and custom hooks in a React Native application.
