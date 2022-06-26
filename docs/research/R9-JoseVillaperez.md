# Final Project 

* **RESEARCH 9**
* **Jose Villaperez**
* **May 15 2022**

<br>

## stateful vs stateless applications
stateful applications may store your logged in status when logging in. This can cause an issue because if the site is spread across multiple servers, everytime you browse through the site its not a guarantee that your logged in status is saved to that server db forcing you to have to log in again. Alternatively you can make your application stateless by storing the status locally to the client so they dont depend on one sole server db to validate logged in status

* Statless sends you a token, stored on your local machine and is valid for a certain time after logging in. When making a request, this token is sent to the server and checked against a separate db where it determines if you can make the request.
* The site can use as many servers as it want because you will have your token to send along with any request.

<br>

## Authentication in SPA
Important concepts for dealing with user authentication 

* Dont use URL query paramters to send sensitive data
* Create limits on server requests to prevent attacks, ban users making hundereds of requests in short periods of time
* Regularly update dependecies
* use authentication: Token, Cookie
* Store tokens in session
* Hash passwords before storing in the database and do not send passwords back to the user.

<br>

## Understanding JWT Flow

* A **JSON Web Token** or **JWT** is an encoded JSON object, in a string or Token.
* in node you can generate a JWT with the jswonwebtoken library.
* Once the jwt is generated it can be stored in session or a cookie
* jwt allows you to create private paths that require the jwt in the header to complete a successful request.


![Sign In diagram](https://softwareontheroad.com/static/3e88596cd79104cfe4a44b2aeb09bb53/384f8/6-sign_in_diagram.webp)

<br>

## Password Reset Flow
A reset password flow consists of the following components:

* A link to send the user to the start of the workflow.
* A form that lets the user submit their email.
* A lookup that validates the email and sends an email to the address.
* An email that contains the reset token with an expiry that allows the user to reset their password.
* A form that let’s the user generate a new password.
* Saving the new password and letting the user log in again with the new password.

<br>

## Reference Links
What resource(s) did you find most helpful for this research assignment and why? 


**Resource 1: Build A Node.js API Authentication With JWT Tutorial**.   
This resource provides an easy to follow and understand jwt tutorial.  
[www.youtube.com](https://www.youtube.com/watch?v=2jqok-WgelI&ab_channel=DevEd)  

**Resource 2: Forgot password & Password reset flow in node.js**.  
Article about how to setup password reset with a nodejs project.   
[dev.to](https://dev.to/cyberwolve/how-to-implement-password-reset-via-email-in-node-js-132m)

**Resource 3: How To Use Joi for Node API Schema Validation**.   
Joi is a serverside validation library that allows you to validate user input requests made to the server with schemas.      
[www.digitalocean.com](https://www.digitalocean.com/community/tutorials/how-to-use-joi-for-node-api-schema-validation)

**Resource 4: How to Use Node Environment Variables**.      
[www.freecodecamp.org](https://www.freecodecamp.org/news/how-to-use-node-environment-variables-with-a-dotenv-file-for-node-js-and-npm/)




