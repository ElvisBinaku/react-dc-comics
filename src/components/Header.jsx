import Navbar from "./Navbar"
export default function Header() {
    return (
        <header className="d-flex justify-content-between align-items-center container mt-3">
            <figure id="main-logo">
                <img src="src/assets/img/dc-logo.png" alt="dc main logo" />
            </figure>
            <Navbar />
        </header>
    )
}