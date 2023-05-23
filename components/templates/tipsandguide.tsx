import { SideBar } from "@/components/organisms";
import { useMemo } from "react";
import { Accordion } from "../molecules";
const Tips = () => {
  const contentArr = useMemo(
    () => [
      {
        title: "Color Perception",
        body: "Colors can significantly influence how users perceive your application. For instance, colors can contribute to a user's impression about the brand's personality. Cooler tones like blues and greens often convey a professional, trustworthy vibe. In contrast, warmer colors like reds, oranges, and yellows can be seen as more playful and energetic."
      },
      {
        title: "Colors and Emotion",
        body: "Different colors can evoke different emotional responses. Red can convey excitement, passion, or danger. Blue is often associated with peace, trust, and reliability. Green can suggest growth, freshness, and environmental consciousness. Yellow is often associated with happiness, positivity, and energy. Understanding these emotional connotations can help to create an application that conveys the right mood to its users."
      },
      {
        title: "Color Attention",
        body: "Bright, contrasting colors can draw users' attention to specific elements in the application, such as buttons or calls to action. Knowing how to leverage this can increase user engagement and guide users' behavior within the application."
      },
      {
        title: "Color Usability",
        body: "Good use of color can improve usability. For instance, different colors can be used to distinguish between different types of information, buttons, or sections. However, it's essential to consider accessibility – some users may have difficulty distinguishing between certain colors. Tools like contrast checkers can be used to ensure your color scheme is accessible to all users."
      },
      {
        title: "Color Cultural Context",
        body: "Remember that colors can have different meanings in different cultures. What's considered positive and engaging in one culture might be seen as offensive or off-putting in another. So, consider your target audience and their cultural context when choosing colors."
      }
    ],
    []
  );
  return (
    <SideBar>
      <div className="flex flex-col w-full mx-auto">
        {contentArr?.map((content, i) => {
          return (
            <Accordion
              title={content?.title}
              key={`content-${i}`}
              classname="max-w-[800px]">
              <article>
                <p>{content?.body}</p>
              </article>
            </Accordion>
          );
        })}
      </div>
    </SideBar>
  );
};

export { Tips };
