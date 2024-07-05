import "aos/dist/aos.css";
import "../styles/globals.css";

import AOS from "aos";
import type { AppProps } from "next/app";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { useEffect } from "react";
import { useDarkMode, useEffectOnce } from "usehooks-ts";
import { useRouter } from "next/router"; // Import useRouter

// Initialize Vivid (https://vivid.lol)
// if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
//   import("vivid-studio").then((v) => v.run());
//   import("vivid-studio/style.css");
// }

const siteTitle = "Robz — Landing Template.";
const siteDescription =
  "Make CSS styling a breeze with Vivid's in-browser visual editor that automatically updates your code.";

const App = ({ Component, pageProps }: AppProps) => {
  const { isDarkMode, toggle: toggleDarkMode } = useDarkMode();
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    if (isDarkMode) {
      //Change Dark Mode here
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty("color-scheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty("color-scheme", "light");
    }
  }, [isDarkMode]);

  // Initialize animations
  useEffectOnce(() => {
    AOS.init({
      once: true,
      // Animations always disabled in dev mode; disabled on phones in prod
      disable: process.env.NODE_ENV === "development" ? true : "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/robzlogo.png" />
        <link rel="icon" href="/icons/robzlogo.png" />
        <meta
          property="og:image"
          content="" //"https://vivid.lol/images/landing-page.png"
        />
      </Head>
      <NextSeo
        title={siteTitle}
        description={siteDescription}
        themeColor={isDarkMode ? "#18181b" : "#fafafa"}
        openGraph={{
          title: siteTitle,
          description: siteDescription,
        }}
      />
      <Component
        {...pageProps}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        router={router} // Pass router as a prop to the component
      />
    </>
  );
};

export default App;
