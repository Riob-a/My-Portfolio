// src/data/projects.js
const projects = [
    {
        title: 'Demo',
        slug: 'demo',
        imageUrl: '/Derricks Demo 1.jpg',
        description: 'My first Individual project to test my knowledge.',
        details: 'Built using React, Bootstrap, and deployed on Vercel. Integrated with Cloudinary, with a flask backend.',
        frontend: "https://github.com/Riob-a/Demo-Project-F-end",
        backend: "https://github.com/Riob-a/Demo-Project-Backend",
        stack: ['React', 'Axios','React Toastify','Framer Motion', 'Flask', 'PostgreSQL','SQLAlchemy','JWT','SendGrid','Cloudinary'],
        link: "https://demo-project-f-end.vercel.app/",

    },
    {
        title: 'Blogers',
        slug: 'blogers',
        imageUrl: '/blogers1.jpg',
        description: 'A full-stack blog platform with Flask.',
        details: 'Features JWT authentication, markdown editing, and PostgreSQL database and a RESTful API that allows all of the CRUD operations.',
        frontend: "https://github.com/Riob-a/blogers-front-end",
        backend: "https://github.com/Riob-a/blogers-backend",
        stack: ['React','React Router','Axios','React Toastify','Framer Motion', 'Flask', 'PostgreSQL','SQLAlchemy','JWT','SendGrid','Cloudinary'],
        link: "https://blogers-front-end-srpb.vercel.app/",

    },
    {
        title: 'Admin / Demo ',
        slug: 'admin-demo',
        imageUrl: '/demo Admin 2.jpg',
        description: 'A full-stack admin dashboard with Flask for the demo app.',
        details: 'Features JWT authentication, role-based access, PostgreSQL database and a RESTful API that allows all of the CRUD operations',
        frontend: "https://github.com/Riob-a/Demo-Project-F-end",
        backend: "https://github.com/Riob-a/Demo-Project-Backend",
        stack: ['React', 'Flask', 'PostgreSQL'],
        link: "https://demo-project-admin-wheat.vercel.app/",

    },
    {
        title: 'Art Portfolio ',
        slug: 'art-portfolio',
        imageUrl: '/art-portfolio1.jpg',
        description: 'A full-stack Next.js art portfolio with Flask for the database.',
        details: 'Features a PostgreSQL database.',
        frontend: "https://github.com/Riob-a/Art-portfoilo",
        backend: "https://github.com/Riob-a/Art-portfoilo-backend",
        stack: ['Next.js', 'Flask', 'PostgreSQL'],
        link: "https://art-portfoilo.vercel.app/",
    },
];

export default projects;
