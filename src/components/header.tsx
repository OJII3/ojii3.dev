import { Link } from "@tanstack/react-router";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <header className="sticky top-0 z-1 flex h-16 w-full items-center overflow-hidden bg-surface-header">
      <Link
        to="/"
        className="group relative block w-back-w px-2"
        aria-label="Back to top"
      >
        <svg
          width="128"
          height="48"
          viewBox="0 0 128 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>back</title>
          <path d="M128 0L80 48H0V0H128Z" fill="" className="fill-brand" />
          <path
            d="M123.12 2L79.1201 46H2V2H123.12Z"
            fill=""
            className="fill-surface-header"
          />
          <path
            d="M38 28H76L64 40H14L46 8H58L38 28Z"
            fill=""
            className="fill-brand"
          />
        </svg>
      </Link>

      <h1 className="absolute right-4 font-squada text-4xl leading-none text-content-primary">
        {title}
      </h1>
    </header>
  );
}
