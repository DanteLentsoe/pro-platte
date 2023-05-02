import { Button, PageWrapper } from '@/components'
import Head from 'next/head'
import Link from 'next/link'
import NotFound404 from '../public/SVG/404.svg'
export default function Example() {
  return (
    <>
      <Head>
        <title>Palette Pro | 404</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold">
              <img src={NotFound404} alt="Not Found SVG" />
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button href="/" isButton={false}>
                Go back home
              </Button>
              <Link
                href="/contact"
                className="text-sm font-semibold text-gray-900"
              >
                Contact support <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </main>
      </PageWrapper>
    </>
  )
}
