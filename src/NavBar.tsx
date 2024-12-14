import './NavBar.css';

export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">logo</div>
        {/* <div className="menu">Menu</div> */}
        <nav>
          <ul>
            <li>Home</li>
            <li>Ação</li>
            <li>Animação</li>
            <li>Comédia</li>
            <li>Ficção</li>
            <li>Romance</li>
            <li>Terror</li>
          </ul>
        </nav>
      </div>
    </>
  )
}