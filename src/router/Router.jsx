import { Route, Routes } from "react-router-dom";

import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page2 } from "../Page2";
import { page1Routes } from "./Page1Routes";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1/*" element={<Page1 />}>
        {page1Routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            index={route.index}
            element={route.children}
          />
        ))}
      </Route>
      <Route path="/page2/*" element={<Page2 />} />
    </Routes>
  );
};
