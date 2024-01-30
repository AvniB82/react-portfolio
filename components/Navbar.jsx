import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
      <div class="navBar" className="flex items-center justify-between px-4 py-2 bg-gray-800">
        <nav className="hidden md:flex gap-6">
          <Link className="text-white hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-white hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-white hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </div>
    )
  }