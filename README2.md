# noSQL Socaial Media Back End

## Description

For the those interested in the tech sphere and would like to post blogs where people can comment on them this is the application for you. It was built so that you can log into an account, create posts and comment on those posts.

## Installation

When opening your coding editor of choice open the integrated ternminal and run "node index.js" from the root level in order to get the server running. By default the server runs on port number 3001. If there are no error messages then you can open any of your browsers and from there type "http://localhost:3001/" and you should be brought to the log in page.

## Usage

If you have the server up and running your can run the following commands in order to get the following results from the server routes.

USER ROUTES

- Get: /api/user - Gets all active Users
- Post: /api/user - Creates a new user as long as you have - added a json object that includes a "username", "email", and "last".
- Put: /api/user/:id - Allows you to edit any of the user - info by passing a json object into it.
- Delete: /api/users - Allows you yo delete a user when you pass a "userId" json object into it.

POST ROUTES

- Get: /api/thoughts - Gets all currect thouths
- Post: /api/thoughts - Posts a new thought when you pass a "userId", "thoughtText", and "username" when you pass in the info as a json object.
- Put: /api/thoughts/:thoughtid - Allows you to edit a post when you pass in "thoughtText"

REACTION ROUTES

- Post: /api/thoghts:thoughtid - Posts a reactuon to the thought listed as the id. Make sure to past "reactionBody" as the actual reaction as a json object.
- Delete: /api/thoughts:thoughtId - Deletes a reaction associated with the thought put in the parameter.

FRIEND ROUTES

- Post: /api/users/userId - Adds a friend to the user listed in the parameter as long as the "userId", "username", "email", and "last" of the friend are passed in as a JSON object.
- Delete: /api/users/:userId - Deletes a user's friend when you pass the "id" of the friend in as a json object in the body of the route.

![Get All Users](/assets/Screenshot%202023-05-30%20at%201.44.25%20PM.png)

![Get All Thoughts](/assets/Screenshot%202023-05-30%20at%201.44.33%20PM.png)
 ![Post a Reactions](/assets/Screenshot%202023-05-30%20at%201.44.40%20PM.png)

## Credits

- Insomnia - https://docs.insomnia.rest/
- Node.js - https://nodejs.org/en
- mongoDb - https://www.mongodb.com/
- Express - https://www.npmjs.com/package/express
- Mongoose - https://www.npmjs.com/package/mongoose\

## License

MIT License

Copyright (c) 2023 Alex Horning

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
