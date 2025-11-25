import { Link, Outlet } from "react-router-dom";
import "./SidebarLayout.css";

export default function SidebarLayout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2 className="logo">⚛ Lab 4</h2>

        <nav className="menu">
          <Link to="/section1">Section 1 – useEffect</Link>
          <Link to="/section2">Section 2 – useRef</Link>
          <Link to="/section3">Section 3 – Fetch API</Link>
          <Link to="/section4">Section 4 – Forms</Link>
          <Link to="/section5">Section 5 – Router</Link>
          <Link to="/section6">Section 6 – Context</Link>
          <Link to="/section7">Section 7 – Custom Hook</Link>
          <Link to="/section8">Section 8 – BlogDash</Link>
        </nav>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
