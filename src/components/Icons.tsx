import React from "react";

export function KakaoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 3C6.477 3 2 6.477 2 10.765c0 2.766 1.87 5.187 4.675 6.477-.193.71-.72 2.64-.828 3.048-.13.504.185.498.39.362.164-.108 2.617-1.777 3.666-2.49.68.098 1.38.15 2.097.15 5.523 0 10-3.477 10-7.765S17.523 3 12 3z" />
    </svg>
  );
}
