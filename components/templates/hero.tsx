import Link from "next/link";
import { PageWrapper } from "../organisms";
import { Button } from "../atoms";

const Hero = () => {
  return (
    <PageWrapper>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Palette Pro
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Palette Pro is a powerful tool for designers and developers looking
            to create stunning color palettes for their projects. Upload images,
            retrieve colors, and generate complementary tones to bring your
            designs to life.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button isButton={false} href="/editor">
              Get started
            </Button>
            <Link
              href="/about"
              className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Hero;
