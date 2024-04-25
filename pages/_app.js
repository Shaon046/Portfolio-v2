import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div id="portal-root"> </div> <Component {...pageProps} />
    </>
  );
}
