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

// Sections components
import BaseLayout from "../../components/BaseLayout";
import View from "../../components/View";

// Buttons page components
import ButtonsGradient from "./components/ButtonsGradient";
import ButtonsContained from "./components/ButtonsContained";
import ButtonsOutlined from "./components/ButtonsOutlined";
import ButtonsSizes from "./components/ButtonsSizes";
import ButtonsIconLeft from "./components/ButtonsIconLeft";
import ButtonsIconRight from "./components/ButtonsIconRight";

// Buttons page components code
import buttonsGradientCode from "./components/ButtonsGradient/code";
import buttonsContainedCode from "./components/ButtonsContained/code";
import buttonsOutlinedCode from "./components/ButtonsOutlined/code";
import buttonsSizesCode from "./components/ButtonsSizes/code";
import buttonsIconLeftCode from "./components/ButtonsIconLeft/code";
import buttonsIconRightCode from "./components/ButtonsIconRight/code";

function Buttons() {
  return (
    <BaseLayout
      title="Buttons"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/buttons" },
        { label: "Buttons" },
      ]}
    >
      <View title="Buttons gradient" code={buttonsGradientCode}>
        <ButtonsGradient />
      </View>
      <View title="Buttons contained" code={buttonsContainedCode}>
        <ButtonsContained />
      </View>
      <View title="Buttons outlined" code={buttonsOutlinedCode}>
        <ButtonsOutlined />
      </View>
      <View title="Buttons sizes" code={buttonsSizesCode}>
        <ButtonsSizes />
      </View>
      <View title="Buttons icon left" code={buttonsIconLeftCode}>
        <ButtonsIconLeft />
      </View>
      <View title="Buttons icon right" code={buttonsIconRightCode}>
        <ButtonsIconRight />
      </View>
    </BaseLayout>
  );
}

export default Buttons;
