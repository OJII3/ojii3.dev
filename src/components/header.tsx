import { Link } from "@tanstack/react-router";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <header className="relative flex h-16 w-full items-center overflow-hidden bg-surface-header">
      <Link
        to="/"
        className="group relative block h-full w-back-w"
        aria-label="Back to top"
      >
        <svg
          className="size-full"
          viewBox="0 0 128 64"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 0H128L80 64H0V0Z"
            className="fill-surface-back-link transition-colors group-hover:fill-content-secondary"
          />
          <path
            d="M44 8H51L30 36H79L64 56H8L44 8Z"
            className="fill-surface-header transition-transform group-hover:-translate-x-1"
          />
        </svg>
      </Link>

      <h1 className="absolute right-4 font-squada text-3xl leading-none text-content-primary">
        {title}
      </h1>
    </header>
  );
}
