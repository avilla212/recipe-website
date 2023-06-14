"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  

  return (
    <nav className="bg-[#DEDDDD]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Navigation */}
          <div className="flex items-center space-x-6">
            {/* About link */}
            <Link href="/#about">
              <p className="font-bold cursor-pointer">About</p>
            </Link>

            {/* Recipes link */}
            <Link href="/#recipes">
              <p className="font-bold cursor-pointer">Recipes</p>
            </Link>
          </div>

          {/* Search bar */}
          <div className="relative flex-grow px-16">
            <input
              type="text"
              placeholder="Search ..."
              className=" px-3 py-2 rounded-md focus:outline-none"
            />
          </div>

          {/* Mobile menu toggle */}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
