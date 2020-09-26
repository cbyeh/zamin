## About

This web app creates a place to advertise local businesses. The advantage of using this is the ability for the businesses to not only advertise themselves, but sell according to their strengths, as they have full control in how to advertise.

They also may create listings circadianly, as in they may create it on a day-to-day basis by what products or services they're offering that day. E.g. daily specials for restaurants, limited shop items, and testimonials.

The goal is to create a network for people who want to discover less popular hidden gems in their area, or experience something completely new, while supporting these local businesses.

This project started after seeing my favorite restaurants and small businesses have to close due to the COVID 19 pandemic.

## Technicalities

The stack used is MongoDB with help from packages Mongoose, Express, and others. AWS S3 to store images of listings. Node for package management and running the server, and React as our client framework.

## Onboarding

### _Environment_

Our IDE of choice is Microsoft Visual Studio Code, install it if you haven't, or set up an alternate IDE with the plugins below.

Next install the VSCode plugins **ESLint**, **Prettier ESLint**, and **Prettier - Code formatter** and make sure they're enabled.

Add following lines to settings.json, which you can open from the Command Palette (Ctrl+Shift+P) or (Cmd+Shift+P) on Mac:

`"editor.formatOnSave": true`

`"eslint.format.enable": true`

`"prettier.singleQuote": true`

Make sure they're separated by commas. This allows our code to automatically be consistent to follow the prettier JS style, and all strings that are not HTML or JSON will use single quotes to distinguish from HTML.

Alternatively open settings (Ctrl+,) or (Cmd+,) on mac, then **Text Editor -> Formatting -> check (Format a file on save...)**, and **Extensions -> ESLint -> check (Enables ESLint as a formatter)**, and finally **Extensions -> Prettier -> check (if true, will use single instead of double quotes)**

### _Code_

Clone the repository: `git clone https://github.com/cbyeh/zamin.git`, install Git if you don't have it.

Next go to both **client** and **server** directories and run `npm install`, install Node.js if you don't have it.

Run `npm install -g nodemon`, which allows the server to automatically restart on code changes.

Next create a **.env** file in **server** and paste the MongoDB ATLAS URI I provided, or create your own.

To run the app, use commands `nodemon server` in **server** and `npm start` in **client**.

### _Version Control_

Never push directly to master. Create a new branch in the parent directory `git checkout -b dev/Yourname` and create a pull request when ready for review.
