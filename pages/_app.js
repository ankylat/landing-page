import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavComponent from "@/components/NavComponent";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <main className="h-screen flex flex-col">
      <Head>
        <title>anky</title>
      </Head>
      <NavComponent />
      <Component {...pageProps} />
    </main>
  );
}
