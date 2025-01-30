// src/app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to Sample App
        </h1>
        <p className="mb-4">
          This is a subdomain of your main GitHub Pages site.
        </p>
        <nav className="space-x-4">
          <Link 
            href="/about"
            className="text-blue-500 hover:text-blue-700"
          >
            About
          </Link>
        </nav>
      </div>
    </main>
  )
}