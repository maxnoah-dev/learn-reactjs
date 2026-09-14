export default function Header() {
    return (
    <>
      <header>
        <ul className="container-header">
          <li className="brand">Wanderlust</li>

          <div className="nav-group">
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
          </div>

          <div className="auth-group">
            <li>Login</li>
            <li>Sign up</li>
          </div>
        </ul>
      </header>
    </>
  );

}