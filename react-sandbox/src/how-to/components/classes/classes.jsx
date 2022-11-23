// import React from 'react';
// import Button from 'react-bootstrap/Button';



// /***Class components differ from function components in the classes can have state. 
//  * They also render the component as opposed to functional compoonents which are rendered by the caller/user of the component */



// export default class Clock extends React.Component { // Classes must extend React.Component
//     constructor(props) { // Must
//       super(props); //Class components should always call the base constructor with props.
//       this.state = {
//         propss: props,
//         date: new Date(),
//         flag: true,
//         }; // State declaration.
    
//         // This binding is necessary to make `this` work in the callback. This is needed when passing function reference to onClick, as opposed to the exection of the method
//         // i.e. Either bind the method to `this`, or use parentheses in the method
//         this.handleClick = this.handleClick.bind(this);

//         /****KEYS: Provide key to go with the value */
//         //Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity
//         const numbers = [1, 2, 3, 4, 5];
//         const listItems = numbers.map((number) =>
//           <li key={number.toString()}>
//             {number}
//           </li>
//         );    

//         function ListItem(props) {
//           props.numbers.map((number) => {
//             render (
//               <li key={number.toString()}> 
//               {number}
//               </li>
//             )
//           })
//         }
//     }
  
//     handleClick(){
//         console.log('This: ', this);
//     }

//     componentDidMount() {}
    
//       componentWillUnmount() {
//         clearInterval(this.timerID);
//       }
    
//       tick() {
//         this.setState({
//           date: new Date()
//         });
//       }

//     render() { // Classes do their own rendering
//       return (
//         <div>
//           <Button onClick={this.handleClick}>Click Me</Button>
//           <div>
//             {this.flag && <Button>I am conditionally rendered</Button>}
//           </div>
//           <ListItem key={number} {...this.props}></ListItem>
//         </div>

//       );
//     }
//   }