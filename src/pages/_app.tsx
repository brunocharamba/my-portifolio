import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/asap-condensed";
import { QueryClientProvider } from "react-query";

import { queryClient } from "../services/query";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
