import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import projects from '../../data/projects';
import { FaLink, FaWindowClose } from "react-icons/fa";

export default function ProjectDetail() {
    const router = useRouter();
    const { slug } = router.query;
    const [animationClass, setAnimationClass] = useState('animate-scaleIn');

    const project = projects.find((p) => p.slug === slug);

    useEffect(() => {
        // Scale in on mount
        setAnimationClass('animate-scaleIn');

        // Listen for route change to apply fade out
        const handleRouteChangeStart = () => {
            setAnimationClass('animate-scaleOut');
        };

        router.events.on('routeChangeStart', handleRouteChangeStart);

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
        };
    }, [router]);

    if (!project) return <div className="p-8">Project not found or loading...</div>;

    return (
        <div className={`slug project-car p-8 mt-8 mb-8 max-w-5xl mx-auto  ${animationClass}`}>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">/.{project.title}</h1>
                <button
                    className="text-red-500 text-4xl hover:text-red-700 transition duration-300 "
                    onClick={() => {
                        setAnimationClass('animate-scaleOut');
                        setTimeout(() => router.push('/projects'), 200);
                    }}
                >
                    <FaWindowClose />
                </button>
            </div>

            <img
                src={project.imageUrl}
                alt={project.title}
                className="slug-image w-full mb-6"
            />
            <br />

            <section className='text-center '>
                <p>
                    Github: <Link href={project.frontend} className="text-blue-500 hover:underline">frontend</Link> |
                    Backend: <Link href={project.backend} className="text-blue-500 hover:underline">backend</Link></p>
            </section>

            <br /><hr /><br />
            <section className='mb-8' >
                <p className="text-lg text-gray-700">
                    <b>Description:</b> {project.description}
                </p>
                <br />
                <p className="text-lg text-gray-700">
                    <b>Details:</b> {project.details}
                </p>
            </section>

            <section className="main-detail">
                <h2 className="text-2xl font-bold mt-6 mb-4">/. Stack</h2>
                <ul className="list-disc list-inside mb-6">
                    {project.stack.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>
            </section>
            <br /><hr /><br />

            <Link href={project.link} className="button">
                View Project
            </Link>
        </div>
    );
}
