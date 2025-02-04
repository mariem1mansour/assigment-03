import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
// using React.createElement

const Title = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "Hello H1 Tag"),
  React.createElement("h2", {}, "Hello H2 Tag"),
  React.createElement("h3", {}, "Hello H3 Tag"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Title);

//same element using jsx

const JsxTitle = (
  <div>
    <h1>Hello from jsx H1 Tag</h1>
    <h2>Hello from jsx H2 Tag</h2>
    <h3>Hello from jsx H3 Tag</h3>
  </div>
);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(JsxTitle);

//functional componenet

const JsxComponent = () => (
  <div>
    <h1>Hello from jsx Component H1 Tag</h1>
    <h2>Hello from jsx Component H2 Tag</h2>
    <h3>Hello from jsx Component H3 Tag</h3>
  </div>
);

// passing attribut in the tag
const JsxComponentWithTags = () => (
  <div>
    <h1 style={{ color: "purple" }}>Hello from jsx Component H1 Tag</h1>
    <h2 style={{ color: "blue" }}>Hello from jsx Component H2 Tag</h2>
    <h3 style={{ color: "pink" }}>Hello from jsx Component H3 Tag</h3>
  </div>
);

const ParentComponenent = () => (
  <div>
    <h1 style={{ color: "red" }}>Parent Component </h1>
    <h1>1st method</h1>
    <JsxComponent />
    <h1>2nd method</h1>
    <JsxComponent></JsxComponent>
  </div>
);

// Header Componenet
const Header = () => (
  <div className="Header">
    <div className="Logo">
      <img
        src="https://t3.ftcdn.net/jpg/01/32/67/54/360_F_132675456_2I1T2Qo0g1fd3o5pUpPv59RUrCH5sbWl.jpg"
        alt="logo"
      />
    </div>
    <div className="Search">
      <input type="text" placeholder="Search" />
    </div>
    <div className="UserIcon">
      <img
        src="https://png.pngtree.com/png-vector/20221203/ourmid/pngtree-cartoon-style-female-user-profile-icon-vector-illustraton-png-image_6489286.png"
        alt="user icon"
      />
    </div>
  </div>
);

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(
  <div>
    <Header />
    <JsxComponent />
    <JsxComponentWithTags />
    <ParentComponenent />
  </div>
);
