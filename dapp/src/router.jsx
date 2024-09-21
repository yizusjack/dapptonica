// @mui material components
import Icon from "@mui/material/Icon";

// Pages
import AboutUs from "./layouts/pages/landing-pages/about-us";
import ContactUs from "./layouts/pages/landing-pages/contact-us";
import Author from "./layouts/pages/landing-pages/author";
import SignIn from "./layouts/pages/authentication/sign-in";

// Sections
import PageHeaders from "./layouts/sections/page-sections/page-headers";
import Features from "./layouts/sections/page-sections/featuers";
import Navbars from "./layouts/sections/navigation/navbars";
import NavTabs from "./layouts/sections/navigation/nav-tabs";
import Pagination from "./layouts/sections/navigation/pagination";
import Inputs from "./layouts/sections/input-areas/inputs";
import Forms from "./layouts/sections/input-areas/forms";
import Alerts from "./layouts/sections/attention-catchers/alerts";
import Modals from "./layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "./layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "./layouts/sections/elements/avatars";
import Badges from "./layouts/sections/elements/badges";
import BreadcrumbsEl from "./layouts/sections/elements/breadcrumbs";
import Buttons from "./layouts/sections/elements/buttons";
import Dropdowns from "./layouts/sections/elements/dropdowns";
import ProgressBars from "./layouts/sections/elements/progress-bars";
import Toggles from "./layouts/sections/elements/toggles";
import Typography from "./layouts/sections/elements/typography";
import Login from "./views/Login";
import LoginLayout from "./components/LoginLayout";

// Define routes
const routes = [

  {
    path: '/login',
    element: <Login />
  },  
  
  // Pages routes
  {
    path: "/about-us",
    element: <AboutUs />,
    key: "about-us",
  },
  {
    path: "/pages/landing-pages/contact-us",
    element: <ContactUs />,
    key: "contact-us",
  },
  {
    path: "/pages/landing-pages/author",
    element: <Author />,
    key: "author",
  },
  {
    path: "/sign-in",
    element: <SignIn />,
    key: "sign-in",
  },


  // Sections routes
  {
    path: "/sections/page-sections/page-headers",
    element: <PageHeaders />,
    key: "page-headers",
  },
  {
    path: "/sections/page-sections/features",
    element: <Features />,
    key: "features",
  },
  {
    path: "/sections/navigation/navbars",
    element: <Navbars />,
    key: "navbars",
  },
  {
    path: "/sections/navigation/nav-tabs",
    element: <NavTabs />,
    key: "nav-tabs",
  },
  {
    path: "/sections/navigation/pagination",
    element: <Pagination />,
    key: "pagination",
  },
  {
    path: "/sections/input-areas/inputs",
    element: <Inputs />,
    key: "inputs",
  },
  {
    path: "/sections/input-areas/forms",
    element: <Forms />,
    key: "forms",
  },
  {
    path: "/sections/attention-catchers/alerts",
    element: <Alerts />,
    key: "alerts",
  },
  {
    path: "/sections/attention-catchers/modals",
    element: <Modals />,
    key: "modals",
  },
  {
    path: "/sections/attention-catchers/tooltips-popovers",
    element: <TooltipsPopovers />,
    key: "tooltips-popovers",
  },

  // Elements routes
  {
    path: "/sections/elements/avatars",
    element: <Avatars />,
    key: "avatars",
  },
  {
    path: "/sections/elements/badges",
    element: <Badges />,
    key: "badges",
  },
  {
    path: "/sections/elements/breadcrumbs",
    element: <BreadcrumbsEl />,
    key: "breadcrumbs",
  },
  {
    path: "/sections/elements/buttons",
    element: <Buttons />,
    key: "buttons",
  },
  {
    path: "/sections/elements/dropdowns",
    element: <Dropdowns />,
    key: "dropdowns",
  },
  {
    path: "/sections/elements/progress-bars",
    element: <ProgressBars />,
    key: "progress-bars",
  },
  {
    path: "/sections/elements/toggles",
    element: <Toggles />,
    key: "toggles",
  },
  {
    path: "/sections/elements/typography",
    element: <Typography />,
    key: "typography",
  },
];

export default routes;
