import React, { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const Popup: React.FC = () => {
  const [url, setUrl] = useState<string>("");
  const [theme, setTheme] = useState<"light" | "dark">(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    // Listen for system theme changes
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (e: MediaQueryListEvent) =>
      setTheme(e.matches ? "dark" : "light");
    mq.addEventListener("change", handleThemeChange);
    return () => mq.removeEventListener("change", handleThemeChange);
  }, []);

  useEffect(() => {
    // @ts-expect-error: Chrome API is available in extension context
    if (typeof chrome !== "undefined" && chrome.tabs) {
      // @ts-expect-error: Chrome API is available in extension context
      chrome.tabs.query(
        { active: true, currentWindow: true },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (tabs: any[]) => {
          if (tabs[0]?.url) {
            setUrl(tabs[0].url);
          }
        }
      );
    }
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  function isSafeUrl(url: string) {
    try {
      const u = new URL(url);
      return u.protocol === "http:" || u.protocol === "https:";
    } catch {
      return false;
    }
  }

  return (
    <div
      className={`p-4 rounded-md min-w-[320px] min-h-fit flex flex-col items-center justify-center text-center transition-colors duration-200
        ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <div className="w-full flex justify-end mb-2">
        <button
          onClick={toggleTheme}
          className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
      <h1 className="text-xl font-bold mb-2">Linker</h1>
      {url ? (
        isSafeUrl(url) ? (
          <div className="p-2 bg-white rounded-md">
            {/* <p className="mb-4 break-all">{url}</p> */}
            <QRCodeSVG value={url} size={180} />
          </div>
        ) : (
          <p className="mb-4 text-red-500">Invalid or unsafe URL</p>
        )
      ) : (
        <p className="mb-4">Loading current tab URL...</p>
      )}
    </div>
  );
};

export default Popup;
