import { SideBar } from "@/components/organisms";
import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";

interface Option {
  value: string;
  label: string;
  tailwind: string;
}

interface ContainerProps {
  direction: string;
  justify: string;
  align: string;
  gap: number;
}

// Define the Box component
const Box = styled.div`
  width: 50px;
  height: 50px;
  background-color: #007bff;
  margin: 5px;
`;
// Define the Container with dynamic styles based on props
const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap}px;
`;
const directionOptions: Option[] = [
  { value: "row", label: "Row", tailwind: "flex-row" },
  { value: "column", label: "Column", tailwind: "flex-col" }
];
const justifyContentOptions: Option[] = [
  { value: "flex-start", label: "Start", tailwind: "justify-start" },
  { value: "flex-end", label: "End", tailwind: "justify-end" },
  { value: "center", label: "Center", tailwind: "justify-center" },
  {
    value: "space-between",
    label: "Space Between",
    tailwind: "justify-between"
  },
  { value: "space-around", label: "Space Around", tailwind: "justify-around" },
  { value: "space-evenly", label: "Space Evenly", tailwind: "justify-evenly" }
];

const alignItemsOptions: Option[] = [
  { value: "stretch", label: "Stretch", tailwind: "items-stretch" },
  { value: "flex-start", label: "Start", tailwind: "items-start" },
  { value: "flex-end", label: "End", tailwind: "items-end" },
  { value: "center", label: "Center", tailwind: "items-center" },
  { value: "baseline", label: "Baseline", tailwind: "items-baseline" }
];
const gapOptions: Option[] = Array.from({ length: 21 }, (_, i) => ({
  value: i.toString(),
  label: `${i}px`,
  tailwind: `gap-${i}`
}));

const LayoutSandbox = () => {
  const [direction, setDirection] = useState<Option>(directionOptions[0]);
  const [justify, setJustify] = useState<Option>(justifyContentOptions[0]);
  const [align, setAlign] = useState<Option>(alignItemsOptions[0]);
  const [gap, setGap] = useState<Option>(gapOptions[0]);
  const tailwindClasses = `${direction.tailwind} ${justify.tailwind} ${align.tailwind} ${gap.tailwind}`;

  const [copiedTailwind, setCopiedTailwind] = useState(false);
  const [copiedCSS, setCopiedCSS] = useState(false);
  const [copiedReact, setCopiedReact] = useState(false);

  const copyCode = (
    code: string,
    setCopied: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const cssCode = `
display: flex;
flex-direction: ${direction.value};
justify-content: ${justify.value};
align-items: ${align.value};
gap: ${gap.value}px;
  `;

  const reactCode = `
const Container = styled.div\`
  display: flex;
  flex-direction: ${direction.value};
  justify-content: ${justify.value};
  align-items: ${align.value};
  gap: ${gap.value}px;
\`;
  `;

  return (
    <SideBar>
      <div className="flex flex-wrap gap-4 w-fit">
        {/* container one */}
        <div className="w-full">
          <div className="border-4 rounded-lg p-4 border-greenSpecial20 w-full">
            <Container
              direction={direction.value}
              justify={justify.value}
              align={align.value}
              gap={Number(gap.value)}
              className="rounded">
              <Box />
              <Box />
              <Box />
            </Container>
          </div>

          <div className="mt-4">
            <Select
              defaultValue={direction}
              options={directionOptions}
              className="mt-2"
              isSearchable={false}
              name="direction"
              onChange={(selectedOption: Option | null) =>
                setDirection(selectedOption!)
              }
            />
            <Select
              defaultValue={justify}
              options={justifyContentOptions}
              className="mt-2"
              isSearchable={false}
              name="justify"
              onChange={(selectedOption: Option | null) =>
                setJustify(selectedOption!)
              }
            />
            <Select
              defaultValue={align}
              options={alignItemsOptions}
              isSearchable={false}
              className="mt-2"
              name="align"
              onChange={(selectedOption: Option | null) =>
                setAlign(selectedOption!)
              }
            />
            <Select
              defaultValue={gap}
              options={gapOptions}
              isSearchable={false}
              className="mt-2"
              name="gap"
              onChange={(selectedOption: Option | null) =>
                setGap(selectedOption!)
              }
            />
          </div>
        </div>
        {/* container two */}
        <div className="w-full">
          <div className="mt-4">
            <h2 className="text-lg font-bold mb-2">Tailwind CSS:</h2>
            <div className="p-2 bg-gray-200 rounded-lg">
              <pre className="whitespace-pre-wrap">{tailwindClasses}</pre>
              <button
                className={`mt-2 py-1 px-3 bg-blue-500 text-white rounded ${
                  copiedTailwind ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => copyCode(tailwindClasses, setCopiedTailwind)}
                disabled={copiedTailwind}>
                {copiedTailwind ? "Copied" : "Copy Code"}
              </button>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-bold mb-2">CSS:</h2>
            <div className="p-2 bg-gray-200 rounded-lg">
              <pre className="whitespace-pre-wrap">{cssCode}</pre>
              <button
                className={`mt-2 py-1 px-3 bg-blue-500 text-white rounded ${
                  copiedCSS ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => copyCode(cssCode, setCopiedCSS)}
                disabled={copiedCSS}>
                {copiedCSS ? "Copied" : "Copy Code"}
              </button>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-bold mb-2">
              React (styled-components):
            </h2>
            <div className="p-2 bg-gray-200 rounded-lg">
              <pre className="whitespace-pre-wrap">{reactCode}</pre>
              <button
                className={`mt-2 py-1 px-3 bg-blue-500 text-white rounded ${
                  copiedReact ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => copyCode(reactCode, setCopiedReact)}
                disabled={copiedReact}>
                {copiedReact ? "Copied" : "Copy Code"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </SideBar>
  );
};

export default LayoutSandbox;
