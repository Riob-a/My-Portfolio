import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, imageUrl, description, slug, aosDelay = 0 }) {
    return (
        <Link href={`/projects/${slug}`}>
            <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                className="block cursor-pointer"
            >
                <div
                    className="project-card overflow-hidden"
                    data-aos="fade-in"
                    data-aos-delay={aosDelay}
                >
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={600}
                        height={300}
                        className="card-image w-full h-60 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900">/. {title}</h3>
                        <p className="text-sm text-gray-600">{description}</p>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
