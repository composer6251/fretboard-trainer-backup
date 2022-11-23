## BEST PRACTICES AND CORE CONCEPTS

## DECLARATIVE STYLE PROGRAMMING

## React Steps for Declarative Programming
### Identify your component’s different visual states
### Determine what triggers those state changes
### Represent the state in memory using useState
### Remove any non-essential state variables
### Connect the event handlers to set the state

## DOS

## DONT'S

## State concepts in react.js
### Unidirectional data flow. Data flows down
### Don't pass properties through children elements that don't need it. 
### If you are passing elements
<br></br>

## Context API: 
#### Global data access
#### Use when MANY components at different nesting levels need same data. 
#### DON'T USE TO AVOID PROP DRILLING
#### Makes code reuse more difficult.

### Use Cases:
#### Themes
#### Caching


## Component Composition React's built in way of avoid prop drilling.
### THIS IS DEPENDENCY INJECTION IN REACT
#### NOT LIMITED TO PASSING SINGLE CHILD ELEMENT, CAN PASS MULTIPLE ELEMENTS
#### Use to avoid prop drilling (passing props many levels through uninterested components to get to the component that needs it)

Java equivilant: Injecting the dependency class into the dependent class that needs it. As opposed to passing in properties and using them to construct the object 