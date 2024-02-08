export default function Footer() {
  return (
    <footer className="container-fluid bg-dark text-white mt-auto">
      <div className="row">
        <div className="col p-3 text-center">
          &copy; {new Date().getFullYear()} <span className="text-secondary">Simple Website with NextJS 13 and Bootstrap</span>
        </div>
      </div>  
    </footer>
  )
}