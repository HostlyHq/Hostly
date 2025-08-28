
// Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header always on top */}
      <Header />

      {/* Page content */}
      <main className="flex-grow">
        <Outlet />  
        {/* React Router will render the page here */}
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
}
