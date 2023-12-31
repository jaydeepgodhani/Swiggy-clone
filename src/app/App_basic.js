import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const h3tag1 = React.createElement("h3", { id: "h3tag1" }, "By React CDN - h3 tag 1");
const h3tag2 = React.createElement("h3", { id: "h3tag2" }, "By React CDN - h3 tag 2");
const divdiv = React.createElement("div", { id: "divdiv" }, [
  h3tag1, h3tag2
]);

console.log(divdiv);

const jsx_heading0 = <div>through direct JSX0</div>;
const jsx_heading1 = <div>{jsx_heading0} through direct JSX1</div>;
const Func_comp1 = () => {
  return (<h1>through func component with return
    {jsx_heading1}
  </h1>);
}
console.log(<Func_comp1/>);

const Func_comp2 = () => (
  <h1>through func component without return</h1>
);

// root.render(divdiv);
root.render(<Func_comp1/>);