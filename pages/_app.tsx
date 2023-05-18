import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/styles/index.css";
import ColorContextProvider from "@/context/ColorContext";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/templates/errorboundary";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary
      fallbackRender={({ error }) => <ErrorFallback error={error} />}>
      <ColorContextProvider>
        <Component {...pageProps} />
      </ColorContextProvider>
    </ErrorBoundary>
  );
}
