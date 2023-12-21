import { languages } from "@/shared/i18n/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ToggleSwither = () => {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";

    const segments = pathName.split("/");
    segments[1] = locale;

    return segments.join("/");
  };

  return (
    <ul className="flex gap-x-3">
      {languages.map((locale) => {
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className="rounded-md border bg-black px-3 py-2 text-black-100"
            >
              {locale}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { ToggleSwither };
