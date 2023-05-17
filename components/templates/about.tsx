import React from 'react'
import { PageWrapper } from '../organisms'

const AboutPage = () => {
  return (
    <PageWrapper>
      <div className="mx-auto  py-12 sm:py-14 lg:py-16">
        <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mt-32">
            About Palette Pro
          </h2>
          <div className="mt-5">
            <p className="text-xl text-gray-500">
              Palette Pro is a powerful color tool that is designed to assist
              developers and UI/UX professionals in choosing the perfect color
              palette for their applications. With Palette Pro, you can easily
              upload your own images and extract the color scheme of your
              choice.
            </p>
            <p className="text-xl text-gray-500 mt-4">
              Using the eye dropper feature, you can quickly and easily select
              colors from any area of your uploaded image, giving you an
              accurate representation of the colors used in your design.
            </p>
            <p className="text-xl text-gray-500 mt-4">
              Palette Pro also provides a complementary color generator, which
              can help you find the perfect complementary colors for your chosen
              color scheme. This feature helps you to create a balanced and
              visually appealing design by generating colors that work well
              together.
            </p>
            <p className="text-xl text-gray-500 mt-4">
              Overall, Palette Prois an essential tool for anyone involved in
              application design, whether you are a developer, designer, or
              UI/UX professional. With its intuitive interface and powerful
              color extraction features, Palette Pro makes it easy to create
              beautiful and engaging designs that stand out from the crowd.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default AboutPage
