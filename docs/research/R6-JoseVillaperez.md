# Final Project 

* **RESEARCH - week 2**
* **Jose Villaperez**
* **April 26 2022**

<br>

## Thinking in React
Basic thinking of how to structure your components and figure out state/props for each.

1. Break up your UI and draw boxes around your components. To figure out what should be a component use the **single responsibility principle**. A component ideally only does one thing. If the component gets larger it should be broken down into pieces that each only do one thing
![component breakdown image](https://images.ctfassets.net/vwq10xzbe6iz/56Zz924eNEdkXu56HSX6Aj/2e6a7456392eaf86bb6e34560a624677/2._Components.png)
2. A well strucuted json data model will allow you to map what needs to be a component since they follow a similar information architecture
3. Build a component hierarchy. 
4. Build a your UI with no interactivity at first
5. Take all your pieces of data in your app and ask these questions to determine what is state vs props
	* Is it passed in from a parent via props? If so, it probably isn’t state.
	* Does it remain unchanged over time? If so, it probably isn’t state.
	* Can you compute it based on any other state or props in your component? If so, it isn’t state.
6. To determine what component should own the state follow this as a guide:
	* Identify every component that renders something based on that state.
	* Find a common owner component (a single component above all the components that need the state in the hierarchy).
	* Either the common owner or another component higher up in the hierarchy should own the state.
	* If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.

<br>

## React/Redux File Structure
There is no set correct way of settng up your file structure for React. There are a few patterns that you can used.  

#### React
* **Grouping by Feature or Route:** each route or feature has its own folder containing the components and styles for those routes/features.
* **Grouping by File Type:** example all components go in the component folder. All styles go into the styles folder.

#### Redux
* **Rails Style:** separate folder for actions, constants, reducers, containers, and components.
* **Ducks:** instead of keeping actions, action types, and reducers in their own separate files per components, these necessities of Redux should be modularized in a way that they can be self contained


<br>

## PropTypes
PropTypes is react way to add type checking to react components

* Checks that props passed into components are of a certain type
* Warns in the console instead of breaking app
* Proptypes are set in the component the props are requested.

<br>

## CSS Modules
Css Modules allow you to add local scope to your styles

* Styles can be imported and used on individual components.
* Helps avoid namespace collision

<br>


## Create React app with node api

* `create-react-app my-app-name` then create a /client directory within the my-app-name folder
* import all react boilerplate into the client directory
* create a `package.json' inside the my-app-name and upate as follows:

```js
{
  "name": "example-create-react-app-express",
  "version": "1.0.0",
  "scripts": {
    "client": "cd client && yarn start",
    "server": "nodemon server.js",
    "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\""
  },
  "dependencies": {
    "body-parser": "^1.18.3",
    "express": "^4.16.4"
  },
  "devDependencies": {
    "concurrently": "^4.0.1"
  }
}
```

* install server dependecies
* create `server.js` and build api entry point listening on a port other than reacts default 3000
	

<br>
## Reference Links
What resource(s) did you find most helpful for this research assignment and why? 


**Resource 1: Learn React - A Visual Explanation**.  
breaks down how react components are separated and how to separate busines logic of components.  
[mannhowie.com](https://mannhowie.com/react-and-redux-a-visual-explanation)  

**Resource 2: PropTypes in React JS Tutorial**.   
This video shows how to use proptypes and how it is useful in react projects.     
[www.youtube.com](https://www.youtube.com/watch?v=7_67nxgw5W4&ab_channel=PedroTech)

**Resource 3: Title**      
[Site Address](https://www.someaddress.com/full/url/)




