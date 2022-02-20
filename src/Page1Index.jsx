import { Link } from "react-router-dom";

export const Page1Index = () => {
  return (
    <>
      <div>
        <h1>Page1ページです</h1>
        <Link to="DetailA">DetailA</Link>
        <br />
        <Link to="DetailB">DetailB</Link>
      </div>
    </>
  );
};
