# SongVersuz ReadME

## Project Abstract
This project challenged me to create a project that reflected me in a short amount of time. I decided to utilize TypeScript, along with React and React Router, to create a Song Favoriter. The application allows users to browse and favorite Songs from the Deezer API, providing an interactive and enjoyable experience for Music fans.

### Installation and Usage
[Click this link]()

### Preview:

![preview](/src/assets/images/Screenshot%202023-06-08%20at%205.13.45%20PM.png)

## Challenges and Struggles
Utilizing an API that required authorization from an API key was a new challenge for me which I then had to figure out how to utilize typeScript on top of it was one of the biggest challenges.

### Syntax and Typing: 
TypeScript introduces a new syntax and requires explicit typing. We had to familiarize ourselves with the TypeScript syntax and understand how to apply types to variables, functions, and components.

### Type Errors: 
TypeScript enforces strict typing, which meant we had to ensure that all variables and functions were properly typed. We encountered type errors and had to debug and fix them to ensure the code was valid.

### Integration with React: 
Integrating TypeScript with React required understanding how to apply types to React components, props, and state. We had to refactor our existing React components to include TypeScript types and ensure proper integration with React features.

### Tooling and Configuration: 
Setting up TypeScript in our project required configuring the TypeScript compiler, updating project files, and installing TypeScript-specific tooling. We had to learn how to use TypeScript-specific tools and understand their role in the development workflow.

### Learning Curve: 
Learning a new technology always involves a learning curve. We had to dedicate time and effort to understand TypeScript concepts, best practices, and how to apply them effectively in our project.

## Wins
Despite the challenges faced, I achieved several wins while learning and implementing TypeScript:

### Improved Code Quality: 
TypeScript's static typing helped catch errors early in the development process. By ensuring variables and functions were properly typed, I improved the overall code quality and reduced runtime errors.

### Enhanced Developer Experience: 
TypeScript's tooling and IDE support improved our development experience. Features such as autocompletion, type checking, and error highlighting helped us write more robust and error-free code.

### Reduced Debugging Time: 
TypeScript's type system helped catch many potential bugs during development, reducing the time spent on debugging. The compiler's feedback guided us in fixing issues early on, improving the overall development efficiency.

### Increased Confidence in Refactoring: 
With TypeScript, refactoring became less daunting. The static typing allowed me to make changes with confidence, knowing that the TypeScript compiler would catch any breaking changes or inconsistencies.

## Core Components Worked On
Here are the core components that I worked on:

### App
- The App component is the main component of the application. It fetches data from the Deezer API and manages the state of the songs and favorites. It also renders the Header, Error, and Main components based on the application state.
### Main
- The Main component renders the main content of the application, which is a list of songs. It receives the song data, chooseSong, and removeFavorite functions as props and maps the song data to individual Song components.
### Song
- The Song component represents an individual song. It receives the song data, chooseSong, and removeFavorite functions as props. It displays the song title, album cover, and a button to mark the song as a favorite.
### Utilities
- Contains utility functions used within the application.
- Provides the cleanData function to format and clean the song data received from the API.
### Cypress Testing
- Contains Cypress tests for the Favorites Page and Main Page.
- Tests the functionality of favoriting and unfavoriting songs, as well as the rendering of song details.
- Tests also account for server errors and bad routes
## Conclusion
This project was my first stab at utilzing TypeScript by myself in a solo setting and i absoulutly loved it! It has really changed my way of going at code, now I love to start from the top component and work my way down to the bottom utilzing typeScript as I go!

## Contributor
- Jacob MacFarlane - [Github](https://github.com/JacobMacFarlane) | [LinkedIn](https://www.linkedin.com/in/jacob-macfarlane-052593261/)
