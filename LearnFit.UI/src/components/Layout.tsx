import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

export default function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

function Header() {
    return <Navigation />;
}

function Footer() {
    return <footer>Footer</footer>;
}

