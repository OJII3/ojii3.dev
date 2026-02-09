import { Link } from "@tanstack/react-router";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <header className="relative bg-bg-header h-16 lg:h-20 w-full flex items-center overflow-hidden">
      {/* Back link - angular arrow shape */}
      <Link
        to="/"
        className="relative h-full w-back-w lg:w-40 flex items-center justify-center group"
      >
        {/* Arrow background */}
        <div
          className="absolute inset-0 bg-border group-hover:bg-border-light transition-colors"
          style={{
            clipPath: "polygon(0 0, 70% 0, 100% 50%, 70% 100%, 0 100%)",
          }}
        />
        {/* Arrow icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="relative z-10 -ml-4"
          aria-hidden="true"
        >
          <path
            d="M20 8L12 16L20 24"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      {/* Title - aligned right */}
      <h1 className="absolute right-4 text-3xl lg:text-4xl text-text-main font-squada leading-none">
        {title}
      </h1>
    </header>
  );
}
