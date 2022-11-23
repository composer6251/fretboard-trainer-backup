/******The file is to show general best practices for react.js**/

/***TOOLCHAINS */
// If you’re learning React or creating a new single-page app, use Create React App.
// If you’re building a server-rendered website with Node.js, try Next.js.
// If you’re building a static content-oriented website, try Gatsby.
// If you’re building a component library or integrating with an existing codebase, try More Flexible Toolchains.


/***All React components must act like pure functions with respect to their props.*/
// A pure function is one that, when given the same input, produces the same result. No chance of unexpected result.

// Always use preventDefault to prevent default behavior performed by the browser during actions