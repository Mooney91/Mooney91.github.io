import Link from 'next/link';

export default function Page() {
  return (
    <>
    <div>
    <h2>Curriculum Vitae</h2>
      <div className="font-mono text-xl flex items-center justify-center mb-5">
            <Link
                key="Education"
                href="/cv/education"
                className="bg-black text-white"
                >
                <p className="font-mono text-4xl hidden md:block">| Education |</p>
            </Link>
      </div>
      <div className="font-mono text-xl flex items-center justify-center">
            <Link
                key="Work Experience"
                href="/cv/work"
                className="bg-black text-white"
                >
                <p className="font-mono text-4xl hidden md:block">| work Experience |</p>
            </Link>
      </div>
    </div>
    </>
  )
}
