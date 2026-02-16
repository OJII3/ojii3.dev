import { Link } from "@tanstack/react-router";

type AngledButtonProps = {
  to: string;
  label: string;
};

export function AngledButton({ to, label }: AngledButtonProps) {
  return (
    <Link
      to={to}
      className="relative inline-flex items-center h-btn-h lg:h-14 w-btn-w lg:w-56 group"
    >
      {/* Base dark rectangle */}
      <div className="absolute inset-0 bg-bg-button border-2 border-border-dark" />

      {/* Label text */}
      <span className="relative z-10 text-xl text-text-main font-squada pl-3 leading-none">
        {label}
      </span>

      {/* Orange angled section */}
      <div
        className="absolute right-0 top-0 h-full w-[67px] lg:w-[80px] bg-accent"
        style={{
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* Double chevron >> */}
      <div className="absolute right-[4px] top-1/2 -translate-y-1/2 z-10 flex items-center gap-0">
        <svg
          width="18"
          height="28"
          viewBox="0 0 18 28"
          fill="none"
          className="-mr-2"
          aria-hidden="true"
        >
          <path
            d="M0 0L14 14L0 28"
            stroke="var(--color-bg-main)"
            strokeWidth="4"
          />
        </svg>
        <svg
          width="18"
          height="28"
          viewBox="0 0 18 28"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 0L14 14L0 28"
            stroke="var(--color-bg-main)"
            strokeWidth="4"
          />
        </svg>
      </div>
    </Link>
  );
}
