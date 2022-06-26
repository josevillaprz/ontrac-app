# Instructions 
Update this document to summarize integrative research and activity conducted this week. This should include material provided to you in this program in addition to your own independent study.    

<br>

# Final Project 

* **RESEARCH 8**
* **Jose Villaperez**
* **May 8 2022**

<br>

## Sequelize Basic Setup
Sequelize is an ORM that makes it easy to manage a SQL database for node based projects.

1. `npm init` if not already created
2. Install sequelize and the preferred databse client
3. To initialize sequelize, install and use sequelize CLI to create the required files needed. `npm install --save sequelize-cli`.
4. Initialize sequelize `npx sequelize init`. This creates the config, migrations, models, seeder files.
5. create the database using Sequelize. `npx sequelize db:create`

<br>

## Sequelize: Many-to-Many
A many to many relationship is described as many records in one table relate to many other records in another table.

* To set up a many to many relationship we need a bridging table/model. Sequelize can create this for you automatically but its best to explicitly write it out.
	* Add the associations to the bridge table
	* update the associations on the two tables being connected
* The bridge model contains the foreign keys of the two related tables.
* Once the model is created we need to update the associatons in the bridge, and related models.

<br>

## Sequelize Validation
By default sequelize validates data being insterted into the database by validating the input data follows our model schema. Sequelize also allows you to further specify [validation rules](https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/#:~:text=Validations%20are%20checks%20performed%20in,to%20the%20database%20at%20all.) with model validations.

* A list of model validation rules can be found found in the sequelize docs and are used by defining them in the model attributes. Validation are automatically run on create, update, save.

```js
sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
    validate: {
    	// Validates name is between 2 - 20 characters
    	len: [2, 20]
    }
```

* When a validation error occurs the error is not always user friendly to read. to fix this we can add a message to the validation rule.

```js
sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
    validate: {
    	// Validates name is between 2 - 20 characters with a custom message if invalid
    	len: {
    		args: [2, 10],
    		msg: 'Please enter a name with atleast 2 character but no more than 20.'
    	}
    }
```

* No validation runs when the attribute is set to allow null.
* Sequelize allows custom validaton rules aswell. 

<br>

## Sequelize Hooks
In general Hooks are extenston provided by a library that occur when an event happens in your program. 

* Sequelize has [hooks](https://github.com/sequelize/sequelize/blob/v6/src/hooks.js#L7) that can be ran before or after sequelize events are executed.  


<br>

## Sequelize Aggregate Functions
Sequelize allows you to aggregate functions such as finding the max/minimum of data you are querying.

* Aggregates are added to the sequelize methods attributes property

```js
const student = await db.Student.findOne({
  attributes: [sequelize.fn("COUNT", sequelize.col("id"))],
  raw: true
});
```
* setting the raw property to true returns the result more readable.

<br>  

## Node/Express error handling
Its important to have proper error handling that prevents an error to crash a server and rather handle the error in a way that maintains the server running.

* error handling can be done at each route but if it becomes to redundant it is best to use middlewares.
* using middlewares allows you to have more control over the error and separates the routes from the error handling logic.

<br>

## Reference Links
What resource(s) did you find most helpful for this research assignment and why? 


**Resource 1: 6 Common Sequelize Queries Explained in SQL**  
This article looks at common sequelize query methods and shows how they compare to raw SQL queries.  
[maximorlov.com](https://maximorlov.com/6-common-sequelize-queries-rewritten-in-sql/)


**Resource 2: Validations & Constraints**   
This documentation gives a great explanation on how to use validation.     
[sequelize.org](https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/#:~:text=Validations%20are%20checks%20performed%20in,to%20the%20database%20at%20all.)

**Resource 3: Sequelize hooks explained with code examples**.  
This article was helpful in understanding sequelize hooks and how to implement them.        
[sebhastian.com](https://sebhastian.com/sequelize-hooks/)

**Resource 3: Sequelize hooks explained with code examples**.  
A Guide to Error Handling in Express.js    
[scoutapm.com](https://scoutapm.com/blog/express-error-handling#h_625988582581619642987320)







