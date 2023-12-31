import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h3>Error...</h3>
      <p>{err.status} : {err.statusText}</p>
    </div>
  )
}

export default Error;