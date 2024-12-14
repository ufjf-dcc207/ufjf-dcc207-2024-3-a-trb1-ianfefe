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
            <li>Animação</li>
            <li>Terror</li>
            <li>comedia</li>
            <li>Ficção</li>
          </ul>
        </nav>
      </div>
    </>
  )
}