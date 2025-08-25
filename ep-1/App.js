import * as React from "react";
import * as ReactDOM from "react-dom/client";


const heading  = <h1
 id="title" key = "h1" >
        Namaste React whoa I am writing this in JSX!
 </h1>;

 const HeaderComponent = () => {
        return (
                <div>
        <h1>Hello World from Functional Component</h1>
        <h2>This is it's description</h2>        

        </div>
        )
 }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
