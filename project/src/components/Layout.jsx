import NavBar from "./Navbar";
export default function Layout(props){
    return (
        <div className="layout-container">
            <NavBar />
            {props.children}
        </div>
    );
}