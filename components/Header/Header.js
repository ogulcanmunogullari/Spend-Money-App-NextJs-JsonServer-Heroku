import Link from "next/link"
import React from "react"

function Header() {
  return (
    <header className="container mx-auto py-3 sm:py-5 px-2 sm:px-0 text-lg sm:text-2xl">
      <ul className="flex flex-row w-full justify-between items-center">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="https://ogulcanmunogullari.vercel.app/">
            <a>Developer Portfolio</a>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
