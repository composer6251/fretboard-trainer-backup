/******The Data Flows Down!!!!!!! 
 * This is commonly called a “top-down” or “unidirectional” data flow. 
 * Any state is always owned by some specific component, 
 * and any data or UI derived from that state can only affect components “below” them in the tree.
*/

/***
 * React may batch multiple setState() calls into a single update for performance.
Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.
PASS IN CALLBACK FUNCTION AS SECOND ARGUMENT IF POSSIBLE */

// setState function
// versions:
//      1. takes an object /**DO NOT USE FOR UPDATING ACCORDING TO PROPS OR STATE */
//      2. takes a function