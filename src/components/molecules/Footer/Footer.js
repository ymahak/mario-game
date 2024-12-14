import "./Footer.css";

const Footer = () => {
  return (
    <div className="copyright">Copyright © {new Date().getFullYear()} {" "}
      <a href="#" target="_blank" rel="noreferrer" className="copyright-link">Mahak</a>
    </div>
  )
}
export default Footer