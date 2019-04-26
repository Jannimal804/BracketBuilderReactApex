// import external modules
import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Spinner from "../components/spinner/spinner";

// import internal(own) modules
import MainLayoutRoutes from "../layouts/routes/mainRoutes";
import FullPageLayout from "../layouts/routes/fullpageRoutes";
import ErrorLayoutRoute from "../layouts/routes/errorRoutes";

// Main Layout
const LazyEcommerceDashboard = lazy(() => import("../views/dashboard/ecommerceDashboard"));
const LazyAnalyticsDashboard = lazy(() => import("../views/dashboard/analyticsDashboard"));
const LazySalesDashboard = lazy(() => import("../views/dashboard/salesDashboard"));
// const LazyEmail = lazy(() => import("../views/email/email"));
const LazyChat = lazy(() => import("../views/chat/chat"));
const LazyContacts = lazy(() => import("../views/contacts/contacts"));
const LazyTodo = lazy(() => import("../views/todo/todo"));
const LazyCalender = lazy(() => import("../views/calender/calender"));
const LazyGrid = lazy(() => import("../views/ui-kit/grid"));
const LazyTypography = lazy(() => import("../views/ui-kit/typography"));
const LazySyntaxHighlighter = lazy(() => import("../views/ui-kit/syntaxHighlighter"));
const LazyHelperClasses = lazy(() => import("../views/ui-kit/helperClasses"));
const LazyTextUtility = lazy(() => import("../views/ui-kit/textUtility"));
const LazyFeather = lazy(() => import("../views/ui-kit/feather"));
const LazyColorPallete = lazy(() => import("../views/colorPalletes/colorPallete"));
const LazyLists = lazy(() => import("../views/components/reactstrap/lists"));
const LazyButton = lazy(() => import("../views/components/reactstrap/buttons"));
const LazyBreadcrumbs = lazy(() => import("../views/components/reactstrap/breadcrumbs"));
const LazyAlerts = lazy(() => import("../views/components/reactstrap/alerts"));
const LazyBadges = lazy(() => import("../views/components/reactstrap/badges"));
const LazyDropdowns = lazy(() => import("../views/components/reactstrap/dropdowns"));
const LazyTabs = lazy(() => import("../views/components/reactstrap/tabs"));
const LazyInputGroups = lazy(() => import("../views/components/reactstrap/inputGroups"));
const LazyMediaObjects = lazy(() => import("../views/components/reactstrap/mediaObjects"));
const LazyPagination = lazy(() => import("../views/components/reactstrap/pagination"));
const LazyProgressBars = lazy(() => import("../views/components/reactstrap/progressBars"));
const LazyModals = lazy(() => import("../views/components/reactstrap/modals"));
const LazyCollapse = lazy(() => import("../views/components/reactstrap/collapse"));
const LazyTooltips = lazy(() => import("../views/components/reactstrap/tooltips"));
const LazyPopover = lazy(() => import("../views/components/reactstrap/popover"));
const LazySelect = lazy(() => import("../views/components/extra/select"));
const LazySlider = lazy(() => import("../views/components/extra/slider"));
const LazyUpload = lazy(() => import("../views/components/extra/upload"));
const LazyEditor = lazy(() => import("../views/components/extra/editor"));
const LazyDragAndDrop = lazy(() => import("../views/components/extra/dragAndDrop"));
const LazyInputTags = lazy(() => import("../views/components/extra/inputTags"));
const LazySwitches = lazy(() => import("../views/components/extra/switches"));
const LazyToastr = lazy(() => import("../views/components/extra/toastr"));
const LazyInputs = lazy(() => import("../views/forms/elements/inputs"));
const LazyInputGrids = lazy(() => import("../views/forms/elements/inputGrids"));
const LazyBasicForms = lazy(() => import("../views/forms/layouts/basicForms"));
const LazyBorderedForms = lazy(() => import("../views/forms/layouts/borderedForms"));
const LazyFormActions = lazy(() => import("../views/forms/layouts/formActions"));
const LazyHiddenLabels = lazy(() => import("../views/forms/layouts/hiddenLabels"));
const LazyHorizontalForms = lazy(() => import("../views/forms/layouts/horizontalForms"));
const LazyValidation = lazy(() => import("../views/forms/validation"));
const LazyStripedRows = lazy(() => import("../views/forms/layouts/stripedRows"));
const LazyWizard = lazy(() => import("../views/forms/wizard"));
const LazyRegular = lazy(() => import("../views/tables/regular"));
const LazyExtended = lazy(() => import("../views/tables/extended"));
const LazyReactTableExtended = lazy(() => import("../views/tables/reactTableExtended"));
const LazyBasicCard = lazy(() => import("../views/cards/basicCard"));
const LazyExtendedCard = lazy(() => import("../views/cards/extendedCard"));
const LazyStatisticCard = lazy(() => import("../views/cards/statisticCard"));
const LazyAdvancedCard = lazy(() => import("../views/cards/advancedCard"));
const LazyChartist = lazy(() => import("../views/charts/chartist/chartist"));
const LazyChart = lazy(() => import("../views/charts/chartjs/chart"));
const LazyGoogle = lazy(() => import("../views/maps/google"));
const LazyHorizontalTimeline = lazy(() => import("../views/pages/horizontalTimeline"));
const LazyVerticalTimeline = lazy(() => import("../views/pages/verticalTimeline"));
const LazyUserProfile = lazy(() => import("../views/pages/userProfile"));
const LazyInvoice = lazy(() => import("../views/pages/invoice"));
const LazyGallery = lazy(() => import("../views/pages/gallery"));
const LazyFAQ = lazy(() => import("../views/pages/faq"));
const LazyKnowledgeBase = lazy(() => import("../views/pages/knowledgeBase"));
const LazySearch = lazy(() => import("../views/pages/search"));
const LazyBlankPage = lazy(() => import("../views/pages/blankPage"));
const LazyChangeLogPage = lazy(() => import("../views/pages/changeLogPage"));
const LazyGyms = lazy(() => import("../components/GoogleMaps"))

// Full Layout
const LazyForgotPassword = lazy(() => import("../views/pages/forgotPassword"));
const LazyLogin = lazy(() => import("../views/pages/login"));
const LazyRegister = lazy(() => import("../views/pages/register"));
const LazyMaintainance = lazy(() => import("../views/pages/maintainance"));
const LazyLockScreen = lazy(() => import("../views/pages/lockScreen"));

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
                        <LazyEcommerceDashboard {...matchprops} />
                     </Suspense>
                  )}
               />
               <MainLayoutRoutes
                  exact
                  path="/analytics-dashboard"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyAnalyticsDashboard {...matchprops} />
                     </Suspense>
                  )}
               />
               <MainLayoutRoutes
                  exact
                  path="/sales-dashboard"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazySalesDashboard {...matchprops} />
                     </Suspense>
                  )}
               />
               {/* Single Views */}
               <MainLayoutRoutes
                  exact
                  path="/colorpalettes"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyColorPallete {...matchprops} />
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
            </Switch>
         </BrowserRouter>
      );
   }
}

export default Router;
