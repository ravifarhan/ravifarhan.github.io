export function Navbar() {
  return (
    <>
      <section>
        <nav className="bg-gray-800 p-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="text-white font-semibold text-lg">
                Home
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/about" className="text-white hover:text-gray-300">
                About
              </a>
              <a href="/contact" className="text-white hover:text-gray-300">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
