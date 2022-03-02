import { Page2Index } from "../Page2Index";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    path: "",
    index: true,
    children: <Page2Index />
  },
  {
    path: ":id",
    index: false,
    children: <UrlParameter />
  }
];
