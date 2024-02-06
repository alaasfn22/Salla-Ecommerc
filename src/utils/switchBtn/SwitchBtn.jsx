import {useEffect, useState} from "react";
import {animateScroll as scroll} from "react-scroll";
import "./switchBtn.css";
const SwitchBtn = () => {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };
  const [up, setUp] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setUp(true);
      } else {
        setUp(false);
      }
    });
  }, []);

  const handleScrollUp = () => {
    scroll.scrollToTop({
      duration: 500, // Adjust the duration as needed
      smooth: "smooth", // You can choose different easing functions
    });
  };

  return (
    <div className="fixed bottom-10 right-10   flex flex-col items-center bg-btn-color2/25 rounded-full z-50">
      <button
        onClick={handleScrollUp}
        className={` ${
          up
            ? "w-8 flex justify-center items-center transition-all duration-500 z-50 h-8"
            : "hidden"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          data-lucide="chevron-up"
          className="lucide lucide-chevron-up h-5 w-5 text-white mt-1"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
      <button
        onClick={toggleTheme}
        className="rounded-full h-10 w-10 bg-btn-color2 text-white flex justify-center items-center z-20"
      >
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            data-lucide="sun"
            className="lucide lucide-sun h-5 w-5"
            id="light-theme"
          >
            <circle cx={12} cy={12} r={4} />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            data-lucide="moon"
            className="lucide lucide-moon h-5 w-5"
            id="dark-theme"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default SwitchBtn;
