import { ErrorSVG } from "@/assets/SVG";
import React, { FC } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { Button } from "../atoms";
import { PageWrapper } from "../organisms";

interface ErrorFallbackProps {
  error: Error;
}

const ErrorFallback: FC<ErrorFallbackProps> = ({ error }) => {
  const { resetBoundary } = useErrorBoundary();
  return (
    <PageWrapper>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Something went wrong
          </h2>
          <div className="flex items-center w-full h-full">
            <div className="mx-auto">
              <ErrorSVG />
            </div>
          </div>
          <p className="text-base leading-7 text-gray-600">{error?.message}</p>
          <div className="flex items-center justify-center gap-x-6">
            <Button onClick={resetBoundary} className="mt-24">
              Try again
            </Button>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
};

export default ErrorFallback;
