import { Link } from "react-router-dom";

export const Page2Index = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      <Link to="100">URL Parameter</Link>
      <br />
      <Link to="100?name=hogehoge">query Parameter</Link>
    </div>
  );
};
