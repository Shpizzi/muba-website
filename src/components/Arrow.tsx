export default function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <path d="M4.5 12h15M11.5 4.2l8 7.8-8 7.8" />
    </svg>
  )
}
