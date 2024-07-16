# HangmanGame

A fun and interactive Hangman game built using Angular and styled with TailwindCSS.

# Hosted Link

You can follow the following link to find a hosted version of this project
https://hangman-game-ci.netlify.app/

## Table of Contents

- [Introduction](#introduction)
- [Rules of the Game](#rules-of-the-game)
- [Features](#features)
- [Getting Started](#getting-started)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a web-based version of the classic Hangman game. The game is built using Angular for the frontend logic and TailwindCSS for styling. Players try to guess a hidden word by suggesting letters within a limited number of attempts, in this game a player has 5 missing attempts before they lose the game, but if they are able to find the whole word in less that 5 mssing attempts they will that part of the game.

## Rules of the Game

1. The user chooses a category they want to play, example: Countries, Movies, TV Shows or Sports
2. The game randomly selects a word for the player to guess.
3. The player guesses letters one at a time.
4. If the guessed letter is in the word, it is revealed in its correct position(s).
5. If the guessed letter is not in the word, one attempt is subtracted from the remaining attempts.
6. The game ends when the player either guesses all the letters in the word or runs out of attempts.

## Features

- Random word selection
- Letter input validation
- Dynamic display of word progress and remaining attempts
- Responsive design with TailwindCSS

## Getting Started

### Prerequisites

- Node.js and npm (https://nodejs.org/)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/hangman-game.git
   cd hangman-game
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Development Server

1. Start the Angular development server:

   ```sh
   ng serve
   ```

2. Open your browser and navigate to `http://localhost:4200`.

## Development

### Folder Structure

- `src/`: Source code of the Angular application
- `src/app/`: Angular components, services, and modules
- `src/assets/`: Static assets like images and fonts
- `src/styles/`: Global styles including TailwindCSS configuration

### Styling with TailwindCSS

TailwindCSS is used for styling the application. The configuration is located in the `tailwind.config.js` file.

### Available Scripts

- `ng serve`: Starts the development server
- `ng build`: Builds the project for production
- `ng test`: Runs the unit tests
- `ng lint`: Lints the project files

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code follows the project's coding guidelines and is well-documented.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
