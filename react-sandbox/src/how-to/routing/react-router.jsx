// /*** https://v5.reactrouter.com/web/guides/philosophy  11/22/2022*/

// /***Static vs Dynamic routing
//  * Static Routing: Predefined routes at compile time with routes determined by URL changes.
//  * Dynamic routing: changes based upon factors such as screen size change. Routes are chosen at runtime NOT BASED upon user-triggered URL change.
//  * 
//  */
//  const App = () => (
//     <AppLayout>
//       <Route path="/invoices" component={Invoices} />
//     </AppLayout>
//   );
  
//   const Invoices = () => (
//     <Layout>
//       {/* always show the nav */}
//       <InvoicesNav />
  
//       <Media query={PRETTY_SMALL}>
//         {screenIsSmall =>
//           screenIsSmall ? (
//             // small screen has no redirect
//             <Switch>
//               <Route
//                 exact
//                 path="/invoices/dashboard"
//                 component={Dashboard}
//               />
//               <Route path="/invoices/:id" component={Invoice} />
//             </Switch>
//           ) : (
//             // large screen does!
//             <Switch>
//               <Route
//                 exact
//                 path="/invoices/dashboard"
//                 component={Dashboard}
//               />
//               <Route path="/invoices/:id" component={Invoice} />
//               <Redirect from="/invoices" to="/invoices/dashboard" />
//             </Switch>
//           )
//         }
//       </Media>
//     </Layout>
//   );
// /*** Nested Routes
//  * 
//  * Example
//  * 
//  */

//  const App = () => (
//     <BrowserRouter>
//       {/* here's a div */}
//       <div>
//         {/* here's a Route */}
//         <Route path="/tacos" component={Tacos} />
//       </div>
//     </BrowserRouter>
//   );
  
//   // when the url matches `/tacos` this component renders
//   const Tacos = ({ match }) => (
//     // here's a nested div
//     <div>
//       {/* here's a nested Route,
//           match.url helps us make a relative path */}
//       <Route path={match.url + "/carnitas"} component={Carnitas} />
//     </div>
//   );

