/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Kit 2 React components
import MKBox from "../../../../components/template/MKBox";

// Sections components
import BaseLayout from "../../components/BaseLayout";
import View from "../../components/View";

// Stats page components
import NavbarDark from "./components/NavbarDark";

// Stats page components code
import navbarDarkCode from "./components/NavbarDark/code";

function Navbars() {
  return (
    <BaseLayout
      title="Navbars"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/navigation/navbars" },
        { label: "Navbars" },
      ]}
    >
      <View title="Navbar dark" code={navbarDarkCode}>
        <MKBox py={6}>
          <NavbarDark />
        </MKBox>
      </View>
    </BaseLayout>
  );
}

export default Navbars;
