const navigationItems = [
  { href: "", item: "Product" },
  { href: "", item: "Features" },
  { href: "", item: "Marketplace" },
  { href: "", item: "Company" },
];

export default function App() {
  return (
    <div className="bg-gray-900">
      <header>
        <nav className="flex justify-between items-center p-6 lg:px-8">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#">
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="logo"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Links */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigationItems.map((item, index) => (
              <a
                href={item.href}
                key={index}
                className="text-sm/6 text-white font-semibold"
              >
                {item.item}
              </a>
            ))}
          </div>

          {/* Login */}
          <div className="hidden lg:flex lg:flex-1 justify-end">
            <a href="#" className="font-semibold text-white text-sm/6">
              <div className="flex justify-center gap-2">
                <span>Log in</span>
                <span aria-hidden="true">→</span>
              </div>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

