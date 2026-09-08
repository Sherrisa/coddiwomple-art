type AnimatedLinkProps = {
  href: string;
  children: React.ReactNode;
  dotRadius: number;
  duration: string;
};

export default function AnimatedLink({
  href,
  children,
  dotRadius,
  duration,
}: AnimatedLinkProps) {
  return (
    <div className="relative mt-14 inline-block">
      <a
        href={href}
        className="text-lg font-semibold text-[#A2337E] transition-all hover:tracking-wide"
      >
        {children}
      </a>

      <svg
        className="absolute -bottom-6 left-1/2 h-5 w-full -translate-x-1/2 overflow-visible"
        viewBox="0 0 192 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 10 C28 2, 44 2, 64 10 S100 18, 124 10 S160 2, 188 10"
          fill="none"
        />

        <circle r={dotRadius} fill="#A2337E">
          <animateMotion
            dur={duration}
            repeatCount="indefinite"
            keyPoints="0;1;0"
            keyTimes="0;0.5;1"
            calcMode="linear"
            path="M4 10 C28 2, 44 2, 64 10 S100 18, 124 10 S160 2, 188 10"
          />
        </circle>
      </svg>
    </div>
  );
}