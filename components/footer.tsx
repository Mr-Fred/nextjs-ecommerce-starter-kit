import Link from "next/link";
import React from "react";

// Footer component
export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>Copyright &copy; 2023 Book Haven</p>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled d-flex justify-content-between">
              <li><Link href="/">Store</Link></li>
              <li><Link href="/collections/fiction-books">Fiction</Link></li>
              <li><Link href="/collections/non-fiction-books">Non Fiction</Link></li>
              {/* <li><Link href="/terms-and-conditions">Terms and Conditions</Link></li> */}
              <li><Link href="/privacy">Privacy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
