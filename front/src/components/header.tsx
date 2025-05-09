import './header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo.png" alt="Logo APAE" className="logo" />
        <span className="empresa">APAE</span>
        <nav className="nav">
          <a href="#">Sobre nós</a>
          <a href="#">Plataforma</a>
          <a href="#">Sede Campinas</a>
        </nav>
      </div>
      <div className="header-right">
        <button className="btn aluno">Sou aluno</button>
        <button className="btn professor">Sou professor</button>
      </div>
    </header>
  );
}
