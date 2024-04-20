function NavBar() {
    return (
        <p>This is the navigation.</p>
    );
}

function MainContent() {
    return (
        <h1>This is the main content</h1>
    );
}

ReactDOM.render(
    <div>
        <NavBar />
        <MainContent />
        document.getElementById("root").textContent("<h1 id="header">This is the header</h1>")
    </div>,
    document.getElementById("root")
);