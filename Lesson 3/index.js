// This is an imperative way of writing React.
const h1 = document.createElement("h1");
h1.textContent = "This is the header";
h1.className = "header";
document.getElementById("root").append(h1);

// This is a declarative way of writing React.
const element = <h1 className="header2">Declarative header</h1>;

ReactDOM.render(element, document.getElementById("root"));

const navigation = (
    <nav>
        <h1>My website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);

ReactDOM.render(navigation, document.getElementById("root"));