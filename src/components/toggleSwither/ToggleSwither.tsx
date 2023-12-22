"use client";

import { Languages } from "@/shared/i18n/types";
import { Select } from "@/shared/ui";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

const ToggleSwither = ({ localeCodes }: { localeCodes: Languages[] }) => {
  const pathName = usePathname();

  const currentLocale = useLocale();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";

    const segments = pathName.split("/");
    segments[1] = locale;

    return segments.join("/");
  };

  const handleChange = (selectedLocale: string) => {
    const newPath = redirectedPathName(selectedLocale);
    window.location.href = newPath;
  };

  return (
    <div className="pl-6">
      <Select
        onChange={handleChange}
        items={localeCodes}
        defaultValue={currentLocale}
      />
    </div>
  );
};

export { ToggleSwither };
