"use client"

export const toBase64 = (str: string) => {
	return Buffer.from(str).toString("base64");
}

export function shimmer() {
    return `<svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.5)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="100" height="100" fill="url(#shimmer)">
          <animate
            attributeName="x"
            values="-150; 150"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>`
}