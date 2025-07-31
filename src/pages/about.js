import Navbar from '../components/Navbar'
import Link from 'next/link'


export default function About() {
  return (
    <div>
      <Navbar />
      <section className="about mt-8 p-8 max-w-2xl mx-auto animate-fadeInLeft">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>
          My name is Derrick Ongwae, a Front-end web developer based in Nairobi, Kenya. I have a passion for creating Simple and functional web applications, 
          with a specialization in React and Next.js as well as HTML. I also have experience in building PostgreSQL databases and RESTful APIs using Flask.
        </p>
        <br />
        <p>
          If you made it this far, I'm also an artist and have a background in art and design, particularly in technical drawing.
          Hope you enjoy my work, and feel free to reach out and check out my art projects.
        </p>
        <p>
          <Link href="https://art-portfoilo.vercel.app/" className="a-link">Here</Link>
        </p>
      </section>
    </div>
  )
}


