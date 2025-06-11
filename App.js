  
    const heading = React.createElement("h1", {id: "heading"}, "Hellow World from React!");


    const parent = React.createElement(
        "Div", {id: "parent"}, 
        React.createElement("div", {id: "child"},
            [
                React.createElement("h1",{id: "child1"},"I m h1 tag"),
                React.createElement("h2",{id: "child2"},"I m h2 tag"),
            ]
        )
    );
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);