import type { WheelPickerOption } from "./WheelPicker";
import { WheelPicker, WheelPickerWrapper } from "./WheelPicker";

const options: WheelPickerOption[] = [
  {
    label: "Next.js",
    value: "nextjs",
  },
  {
    label: "Vite",
    value: "vite",
  },
  {
    label: "Laravel",
    value: "laravel",
  },
  {
    label: "React Router",
    value: "react-router",
  },
  {
    label: "Astro",
    value: "astro",
  },
  {
    label: "TanStack Start",
    value: "tanstack-start",
  },
  {
    label: "TanStack Router",
    value: "tanstack-router",
  },
  {
    label: "Gatsby",
    value: "gatsby",
  },
];

export function WheelPickerSimpleDemo() {
  return (
    <div className="w-56">
      <WheelPickerWrapper>
        <WheelPicker options={options} defaultValue="react-router" />
      </WheelPickerWrapper>
    </div>
  );
}
