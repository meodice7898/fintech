# TodoIt (Module 9)

A small TypeScript to-do list application from Chapter 2 of *Learn TypeScript 3 by Building Web Applications*.

## Run

Run these commands from the todoit-v1 directory:

    npm install
    npm run tsc
    npm run serve

Open the URL shown by BrowserSync (normally http://localhost:3000). For continuous TypeScript compilation, run `npm run watch` in a second terminal.

## Features

- Add tasks using the button, by leaving the input field, or by pressing Enter.
- Display tasks in alphabetical order.
- Filter visible tasks by a case-insensitive prefix.
- Click a task to remove it.

The application is intentionally in-memory: a page refresh clears the list.
