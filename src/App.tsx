import React, { FC, lazy, Suspense } from "react";

const App: FC = () => {
   const isLoggedIn = useSelector((state: RootState) => state.auth.isAuthenticated);
   return (
      <Router>
         <Switch>
            <Route path="/">
               <Suspense fallback={<p>Loading...</p>}>{isLoggedIn ? <Home /> : <Auth />}</Suspense>
            </Route>
         </Switch>
      </Router>
   );
};

export default App;
