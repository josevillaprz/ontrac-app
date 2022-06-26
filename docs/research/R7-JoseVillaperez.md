# Final Project 

* **RESEARCH 7- Week 4"**
* **Jose Villaperez**
* **May 01 2022**

<br>

## Understanding Redux

* **Action Creators:** functions that return an action from the arguments passed in
* **Actions:** objects created from action creators. have a type and a payload
* **Reducers:** take the action and the previous state and create a new state from that. pure functions
* **Store:** the store containes all the state
* **Dispatch:** this function is what triggers the state change called on store object

<br>

## Normalizing State Data

* Store your redux data in normalized form {id: {id, attr1, attr2, attr3}}
* many of the same principles of database normalization apply to redux stores aswell
* APIs frequently send back data in a nested form, that data needs to be transformed into a normalized shape before it can be included in the state tree

<br>

## Organizing Reducers
Reducer functions can become overly complex. These methods can be used to clean up the reudcer function.

* Utility functions can be used to reduce code being duplicated in the reducer cases
* Split each case into its own function.

<br>

## Redux Tool kit
Creating a redux app 'by hand' can be difficult and very time consuming. redux has a redux toolkit package which makes it easy to get all the stuff you need to create a redux application

* Redux toolkit only cover the logic of redux..to use with react you still need to use react-redux to allow component talk to the store
* Redux toolkit `configureStore` adds a middleware that prevents reducers from mutating the state.
* Toolkit uses createSlice to create out reducer logic and actions
	* allows you to write case reducers as functions inside an object
	* createSclice takes three field: name for the generated action types, initial state of the reducer, and the reducers.
	* 





## Reference Links

What resource(s) did you find most helpful for this research assignment and why? 


**Resource 1: Redux For Beginners | React Redux Tutorial**.       
easy to follow redux beginner tutorial.    
[youtube.com](https://www.youtube.com/watch?v=CVpUuw9XSjY&ab_channel=DevEd)  

**Resource 2: Smarter Redux with Redux Toolkit**.  
Provides more info on why redux toolkit is the best way to start up a redux applciation.       
[blog.logrocket.com](https://blog.logrocket.com/smarter-redux-redux-toolkit/)

**Resource 3: Writing Logic with Thunks**.  
Explains how redux thunks are used.         
[redux.js.org](https://redux.js.org/usage/writing-logic-thunks)




