// import external modules
import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Spinner from "../components/spinner/spinner";

// import internal(own) modules
import MainLayoutRoutes from "../layouts/routes/mainRoutes";
import FullPageLayout from "../layouts/routes/fullpageRoutes";
import ErrorLayoutRoute from "../layouts/routes/errorRoutes";

const LazyLogin = lazy(() => import("../views/pages/login"));
const LazyCalender = lazy(() => import("../views/calender/calender"));
const LazyGyms = lazy(() => import("../components/GoogleMaps"));
const LazyCompetitor = lazy(() => import("../views/pages/competitorpage"));
const LazyDB = lazy (() => import("../components/compDatabase"));
const LazyChat = lazy(() => import("../views/chat/chat"));

// Error Pages
const LazyErrorPage = lazy(() => import("../views/pages/error"));

class Router extends Component {
    render() {
       return (
          // Set the directory path if you are deplying in sub-folder
          <BrowserRouter basename="/">
             <Switch>
                {/* Dashboard Views */}
                <MainLayoutRoutes
                   exact
                   path="/"
                   render={matchprops => (
                      <Suspense fallback={<Spinner />}>
                         <LazyLogin {...matchprops} />
                      </Suspense>
                   )}
                />
                <MainLayoutRoutes
                  exact
                  path="/competitors"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyDB {...matchprops} />
                     </Suspense>
                  )}
               />
                <MainLayoutRoutes
                  exact
                  path="/gyms"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyGyms {...matchprops} />
                     </Suspense>
                  )}
               />
               <MainLayoutRoutes
                  exact
                  path="/calendar"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyCalender {...matchprops} />
                     </Suspense>
                  )}
               />
               <MainLayoutRoutes
                  exact
                  path="/compprofile"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyCompetitor {...matchprops} />
                     </Suspense>
                  )}
               />
               <MainLayoutRoutes
                  exact
                  path="/chat"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyChat {...matchprops} />
                     </Suspense>
                  )}
               />
               <ErrorLayoutRoute
                  exact
                  path="/pages/error"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyErrorPage {...matchprops} />
                     </Suspense>
                  )}
               />

               <ErrorLayoutRoute
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyErrorPage {...matchprops} />
                     </Suspense>
                  )}
               />
            </Switch>
         </BrowserRouter>
           );
        }
     }

     export default Router;
