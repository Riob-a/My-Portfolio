import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function About() {
    return (
        <div>
            <Navbar />
            {/* Resume 3-column Grid */}
            <section className="resume px-8 py-12 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">

                    {/* Experience Column */}
                    <section className='col-card' data-aos="fade-up" data-aos-duration="800">
                        <div >
                            <h3 className="text-xl font-semibold mb-4">/. Experience</h3>
                            <div className="space-y-4">
                                {[
                                    { year: "| 2024 - Present", role: "Freelance", desc: "Web Developer (Front and Backend)" },
                                    { year: "| 2022", role: "Kenyatta National Hospital", desc: "Industrial attache" },
                                    { year: "| 2021", role: "Kenya Technical Trainers Institute", desc: "Industrial attache" }
                                ].map((item, i) => (
                                    <div key={i} className="about  p-4 shadow">
                                        <p className="font-semibold">{item.year}</p>
                                        <p className="card-p font-bold">{item.role}</p>
                                        <p className="card-p">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Expertise Column */}
                    <section className='col-cards' data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
                        <div  >
                            <h3 className="text-xl font-semibold mb-4">/. Expertise</h3>

                            <div className="mb-6 col-card">
                                <h5 className="font-semibold">Frameworks</h5>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {["Next.js", "Vite", "Tailwind", "Bootstrap", "Framer Motion", "AOS.js", "WOW.js"].map(skill => (
                                        <span key={skill} className="badge">{skill}</span>
                                    ))}
                                </div>
                            </div>
                            <br /><hr /><br />
                            <div className="mb-6 col-card">
                                <h5 className="font-semibold">Front-end</h5>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {["React", "React Router", "HTML", "CSS", "JavaScript", "Axios", "react-toastify"].map(skill => (
                                        <span key={skill} className="badge">{skill}</span>
                                    ))}
                                </div>
                            </div>
                            <br /><hr /><br />
                            <div className="mb-6 col-card">
                                <h5 className="font-semibold">Back-end</h5>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {["Flask", "Flask-JWT-Extended", "Flask-Migrate", "Python", "SQLAlchemy"].map(skill => (
                                        <span key={skill} className="badge">{skill}</span>
                                    ))}
                                </div>
                            </div>
                            <br /><hr /><br />
                            <div className="mb-6 col-card">
                                <h5 className="font-semibold">Databases</h5>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {["PostgreSQL", "SQLite"].map(skill => (
                                        <span key={skill} className="badge">{skill}</span>
                                    ))}
                                </div>
                            </div>
                            <br /><hr /><br />
                            <div className="mb-6 col-card">
                                <h5 className="font-semibold">Tools</h5>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {["Figma", "dbdiagram.io", "Render", "Cloudinary", "Railway", "Vercel", "GitHub", "Postman"].map(skill => (
                                        <span key={skill} className="badge">{skill}</span>
                                    ))}
                                </div>
                            </div>
                            <br /><hr /><br />
                            <div className="mb-6 col-card">
                                <h5 className="font-semibold">Certifications</h5>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {["Data Analysis with Python", "Software Development Essentials", "Teamwork", "Problem-solving"].map(skill => (
                                        <span key={skill} className="badge">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Education Column */}
                    <section className='col-card' data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                        <div  >
                            <h3 className="text-xl font-semibold mb-4">/. Education</h3>
                            <div className="space-y-4 ">
                                <div className="col-cards p-4" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
                                    <p className="font-semibold">| 2024</p>
                                    <p><strong>Moringa</strong></p>
                                    <p>Software Development</p>
                                    <p>Grade: (A - Pass)</p>
                                </div>
                                <div className="col-cards p-4" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
                                    <p className="font-semibold">| 2020 - 2023</p>
                                    <p><strong>Nairobi National Polytechnic</strong></p>
                                    <p>Information Communication Technology</p>
                                    <p>Grade: (Credit)</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


                {/* Download CV */}
                <section className='col-cards m-2 mt-8 mb-8' data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                    <div className=" text-center">
                        <h3 className="text-xl font-semibold mb-4">/. C.V</h3>
                        <a
                            href="/DERRICK RIOBA ONGWAE Software - engineer(C).pdf"
                            download
                            className="inline-block button"
                        >
                            Download C.V
                        </a>
                    </div>
                </section>
            </section>
        </div >
    )
}

