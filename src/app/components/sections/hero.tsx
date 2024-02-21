import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Welcome to the Next.js Starter</h1>
        <p className="hero__subtitle">
          This is a simple starter project for Next.js with TypeScript, Tailwind CSS, and ESLint.
        </p>
        <div className="hero__cta">
          <Link href="/about">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}