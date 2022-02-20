import { Route, Routes } from "react-router-dom";

import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { Page1Index } from "../Page1Index";
import { Page2 } from "../Page2";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1/*" element={<Page1 />}>
        <Route index element={<Page1Index />} />
        <Route path="DetailA" element={<Page1DetailA />} />
        <Route path="DetailB" element={<Page1DetailB />} />
      </Route>
      <Route path="/page2/*" element={<Page2 />} />
    </Routes>
  );
};
