// pages/_app.tsx
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css"; // Se estiver usando CSS global

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: any;
}) {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "red" }}>Children content</div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
