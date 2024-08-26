import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import "./page.module.css";
import { AuthProvider } from './context/AuthContext.js';
import {Navbar, NavbarBrand, NavbarContent, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className="d-flex flex-column min-vh-100">
          {/* Header */}
          {/* 
          <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar> */}
    <header className="bg-dark text-white pt-2">
            <div className="container">
            <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p>
              {/*<h1 className="m-0">Your Company Name</h1>*/}
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-grow-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-dark text-white py-3 mt-auto">
            <div className="container text-center">
              <p className="m-0">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
          </footer>

          {/* Bootstrap JS */}
          <script 
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
            crossOrigin="anonymous">
          </script>
        </body>
      </html>
    </AuthProvider>
  );
}
