// components/Header.jsx
const Header = () => {
    return (
        <header className="header">
            <img
                src="https://www.cine-calidad.legal/templates/4e0892c448f8b258a110658d7fbe8452/images/logo.webp"
                alt="Cinecalidad"
                className="logo"
            />

            <div className="search-box">
                <input type="text" placeholder="Buscar película..." />
                <button>Buscar</button>
            </div>
        </header>
    );
};

export default Header;