import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { Page1Index } from "../Page1Index";

export const page1Routes = [
  {
    path: "",
    index: true,
    children: <Page1Index />
  },
  {
    path: "DetailA",
    index: false,
    children: <Page1DetailA />
  },
  {
    path: "DetailB",
    index: false,
    children: <Page1DetailB />
  }
];
