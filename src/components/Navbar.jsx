const Navbar = () => {
    const links = [
        { id: 1, text: "CHARACTERS", url: '#', current: false },
        { id: 2, text: 'COMICS', url: '#', current: true },
        { id: 3, text: 'MOVIES', url: '#', current: false },
        { id: 4, text: 'TV', url: '#', current: false },
        { id: 5, text: 'GAMES', url: '#', current: false },
        { id: 6, text: 'COLLECTIBLES', url: '#', current: false },
        { id: 7, text: 'VIDEOS', url: '#', current: false },
        { id: 8, text: 'FANS', url: '#', current: false },
        { id: 9, text: 'NEWS', url: '#', current: false },
        { id: 10, text: 'SHOP', url: '#', current: false },
    ];

    const linksList = links.map((link) => {
        return (
            <li key={link.id} className="ps-3  fw-bolder">
                <a href={link.url} className="">
                    {link.text}
                </a>

            </li>
        )

    });

    return (
        <nav id="navbar">
            <ul className="d-flex list-unstyled ">
                {linksList}
            </ul>
        </nav>
    )

}
export default Navbar