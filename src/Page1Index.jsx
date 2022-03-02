import { Link, useNavigate } from "react-router-dom";

export const Page1Index = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Page1ページです</h1>
        <Link to={{ pathname: "DetailA", state: arr }}>DetailA</Link>
        <br />
        <Link to="DetailB">DetailB</Link>
        <br />
        <button onClick={() => navigate("DetailA")}>DetailA</button>
      </div>
    </>
  );
};
