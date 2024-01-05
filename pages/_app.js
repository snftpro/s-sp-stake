import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { Navbar } from "../Navbar/Navbar";



// This is the chain your dApp will work on.
const activeChain = "polygon";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    >
      <Component {...pageProps} />
      
      <Navbar />
      {/* Render the actual component (page) */}
      
    </ThirdwebProvider>
  );
}

export default MyApp;