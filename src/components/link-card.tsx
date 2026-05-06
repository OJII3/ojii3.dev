import { Link } from "@tanstack/react-router";

type LinkCardProps = {
  label: string;
  href: string;
  external?: boolean;
};

export function LinkCard({ label, href, external = false }: LinkCardProps) {
  const className =
    "relative flex items-center h-link-h lg:h-12 w-full bg-surface-sunken border border-line-subtle hover:border-brand transition-colors group clip-link-card";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <span className="text-base lg:text-xl text-content-secondary font-squada pl-3 tracking-wide group-hover:text-brand transition-colors">
          {label}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="ml-auto mr-6"
          aria-hidden="true"
        >
          <path
            d="M3 11L11 3M11 3H5M11 3V9"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-content-disabled group-hover:text-brand transition-colors"
          />
        </svg>
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      <span className="text-base lg:text-xl text-content-secondary font-squada pl-3 tracking-wide group-hover:text-brand transition-colors">
        {label}
      </span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="ml-auto mr-6"
        aria-hidden="true"
      >
        <path
          d="M2 7H12M8 3L12 7L8 11"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-content-disabled group-hover:text-brand transition-colors"
        />
      </svg>
    </Link>
  );
}
