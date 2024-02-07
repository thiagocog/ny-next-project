import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="container-fluid bg-dark text-white">
        <div className="row">
          <div className="col p-3">
            Image
          </div>
          <div className="col p-3 text-end align-self-center">
            Nav
          </div>
        </div>
      </nav>
    </>
  )
}