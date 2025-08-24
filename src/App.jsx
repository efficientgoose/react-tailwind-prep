const navigationItems = [
  { href: "", item: "Product" },
  { href: "", item: "Features" },
  { href: "", item: "Marketplace" },
  { href: "", item: "Company" },
];

export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen overflow-x-hidden">
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
                className="text-sm/6 text-white font-semibold hover:text-slate-400 transition-colors duration-300 ease-in-out"
              >
                {item.item}
              </a>
            ))}
          </div>

          {/* Login */}
          <div className="hidden lg:flex lg:flex-1 justify-end">
            <a
              href="#"
              className="font-semibold text-white text-sm/6 hover:text-slate-400 transition-colors duration-300 ease-in-out"
            >
              <div className="flex justify-center gap-2">
                <span>Log in</span>
                <span aria-hidden="true">→</span>
              </div>
            </a>
          </div>
        </nav>
      </header>

      <div className="relative inset-x-0 transform-gpu ">
        <div className="gradient-container pointer-events-none">
          <div className="absolute inset-x-0 top-0 mx-auto w-[40rem] h-[40rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 blur-[160px] rounded-full"></div>
          <div className="absolute top-[-15%] left-[-20%] w-[45rem] h-[45rem] rounded-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25 blur-[180px]"></div>
          <div className="absolute top-[-20%] right-[-15%] w-[50rem] h-[50rem] rounded-full bg-gradient-to-tr from-[#80bfff] to-[#9089fc] opacity-20 blur-[200px]"></div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-2xl py-32 z-10">
          <div className="text-center">
            <div className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Data to enrich your online business.
            </div>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              Unlock actionable insights from your data to make smarter
              decisions and accelerate growth. Our platform turns information
              into opportunities, helping your online business thrive with
              confidence.
            </p>
            <div className="flex items-center justify-center gap-x-16 mt-10">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-600/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-colors duration-300 ease-in-out"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 text-white font-semibold">
                <div className="flex gap-2">
                  Learn more
                  <span aria-hidden="true">→</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-96"></div>
    </div>
  );
}

