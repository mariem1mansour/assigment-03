import React from "react";
import ReactDOM from "react-dom/client";
const Title = React.createElement("div", { class: "title" }, [
  React.createElement("h1", {}, "Hello H1 Tag"),
  React.createElement("h2", {}, "Hello H2 Tag"),
  React.createElement("h3", {}, "Hello H3 Tag"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Title);

const jsxTitle = (
  <div>
    <h1>Hello from jsx H1 Tag</h1>
    <h2>Hello from jsx H2 Tag</h2>
    <h3>Hello from jsx H3 Tag</h3>
  </div>
);

const jsxFunctional = () => <jsxTitle />;
