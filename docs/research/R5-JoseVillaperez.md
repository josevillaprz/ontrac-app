# Final Project 

* **RESEARCH 5 - Week 2**
* **Jose Villaperez**
* **April 17 2022**

<br>

## Restful API Design
> Basics of REST API and how to build a production ready API keeping the RESTful architecure syle in mind.
  
* Using the appropriate HTTP **verbs**. ( GET, POST, PUT, PATCH, DELETE ) 
* Construct URLs that are easy to understand for you and future devs
	* URL's should be created with nouns not verbs. For example: `/users` instead of `/getAllUsers`
	* Separate your resources. Avoid too much nesting of resources try to only go one level deep.
* Proper metadata in the headers.
	* Make sure to send the default content type.
* Proper use of HTTP status codes.
* Always implement Authentication and Authoraizatio on actions that allow the api user to manipulate data.
	* Validate requests data
	* Dont allow too many requests to a single resource.
* Error handling.
* Implement versioning with your API
	* Not using versioning can break users API integrations when major changes are made to the api.
* Use CORS
* Writ API documentation and keep it updated as the API changes.

<br>

## Document Before Development
* Documenting before developement helps you understand from the users perspective and what they would need to knwo
* Becomes a sort of pseudo code for when youre ready to develop.

<br>

## Atomic Design
> Atomic Design breaks down UI into simpler elements that we can use to build templates for pages. This process makes designing quicker.

* Levels of atomic design: **Atoms, Molecules, Organisms, Template, Pages**.
	* Atoms: An example of an atom would be a button
	* Molecule: A molecule is a collection of atoms to create another component
	* Organisms: An organism is a collection of molecules and atoms such as a navbar that contains a search component and a navigation list component
	* Templates/pages: These are the containers that containe all of the above. This is where the ui is made up of all the elements. While some organisms or even molecules may have logic like an api request most of the logic *should* be handled in the container element.

<br>

## Reference Links

**Resource 1: Best practices for REST API design**  
[Site Address](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)  

**Resource 2: atomic design**    
[Site Address](https://bradfrost.com/blog/post/atomic-web-design/)

**Resource 3: The right way to place business logic in your React application**      
[Site Address](https://itnext.io/the-right-way-to-place-business-logic-in-your-react-application-8bf16145f48d)




