'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-white/70 mb-6">{error.message}</p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center rounded-lg bg-gold px-6 py-3 text-black text-sm font-semibold hover:opacity-90 transition"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
