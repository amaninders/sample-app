// src/app/about/page.tsx
import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          About Sample App
        </h1>
        <p className="mb-4">
          This is the about page of our sample app.
        </p>
        <nav className="space-x-4">
          <Link 
            href="/"
            className="text-blue-500 hover:text-blue-700"
          >
            Home
          </Link>
        </nav>
      </div>
    </main>
  )
}