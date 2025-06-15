export const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
)

// Farcaster icon with proper background and white content
export const FarcasterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    {/* Orange background with rounded corners */}
    <rect width="24" height="24" rx="4.8" fill="currentColor" />
    {/* White Farcaster logo paths - scaled to fit 24x24 */}
    <g fill="white">
      {/* Main body/frame */}
      <path d="M6.19 3.73h11.62v16.54h-1.71v-7.58h-.02c-.19-2.09-1.85-3.73-3.88-3.73s-3.69 1.64-3.88 3.73h-.02v7.58H6.19V3.73Z" />
      {/* Left extension */}
      <path d="M3.09 6.08l.69 2.35h.59v9.49c-.29 0-.53.24-.53.53v.64h-.11c-.29 0-.53.24-.53.53v.64h5.97v-.64c0-.29-.24-.53-.53-.53h-.11v-.64c0-.29-.24-.53-.53-.53h-.64V6.08H3.09Z" />
      {/* Right extension */}
      <path d="M16.22 17.92c-.29 0-.53.24-.53.53v.64h-.11c-.29 0-.53.24-.53.53v.64h5.97v-.64c0-.29-.24-.53-.53-.53h-.11v-.64c0-.29-.24-.53-.53-.53V8.43h.59l.69-2.35h-4.27v11.84h-.64Z" />
    </g>
  </svg>
)
