const roles = [
    {
        "role": "Full Stack Developer"
    },
    {
        "role": "Frontend Developer"
    },
    {
        "role": "Backend Developer"
    },
];

export default function Body() {
    // Smooth scroll function
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 80; // Account for sticky header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='px-12 lg:px-24 gap-10 md:px-16'>
            {/* Hero Section - Account for header height */}
            <div className='flex flex-col-reverse md:flex-row min-h-screen pb-8 md:pb-0'>
                {/* text */}
                <div className='flex flex-col gap-3 justify-center flex-1 py-8 md:py-0'>
                    <div className='text-2xl font-bold lg:text-4xl md:text-3xl sm:text-3xl'>
                        Hey,
                    </div>
                    <div className='text-4xl font-extrabold lg:text-6xl md:text-5xl sm:text-5xl'>
                        I'm Diya
                    </div>
                    <div className='text-lg font-bold text-gray-600 my-3 lg:text-3xl md:text-2xl sm:text-xl leading-relaxed'>
                        I'm a tech enthusiast and full-stack developer who enjoys creating end-to-end web solutions. Currently exploring new ways to build better digital experiences.
                    </div>

                    {/* Buttons */}
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4'>
                        <button
                            onClick={() => scrollToSection('about-me')}
                            className='border-2 border-orange-600 px-5 py-3 rounded-2xl hover:-translate-y-0.5 transition-all delay-100 hover:bg-orange-600 hover:text-white hover:drop-shadow-lg text-center hover:border-none'
                        >
                            About me
                        </button>
                        <button
                            onClick={() => scrollToSection('my-cv')}
                            className='border-2 bg-orange-600 px-5 py-3 rounded-2xl hover:-translate-y-0.5 transition-all delay-100 text-white hover:drop-shadow-lg text-center'
                        >
                            View my CV
                        </button>
                    </div>
                </div>

                {/* photo */}
                <div className='drop-shadow-xl flex justify-center items-center flex-1 py-4 md:py-0'>
                    <img
                        src='/diya.png'
                        className='w-72 h-72 sm:w-80 sm:h-80 md:w-full md:h-auto md:max-w-md lg:max-w-lg xl:max-w-xl object-cover rounded-full md:rounded-none'
                        alt="Diya Prajapati"
                    />
                </div>
            </div>

            {/* About me section */}
            <div id="about-me" className='py-20'>
                <div className='text-4xl font-bold mb-8 text-center'>
                    About Me
                </div>
                <div className='max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 font-medium'>
                    <p className='mb-6'>
                        Welcome to my portfolio! I'm Diya, a passionate full-stack developer with a love for creating innovative web solutions. My journey in technology began with curiosity and has evolved into a career dedicated to building meaningful digital experiences.
                    </p>
                    <p className='mb-6'>
                        I specialize in modern web technologies and enjoy working on both frontend and backend development. My approach combines technical expertise with creative problem-solving to deliver solutions that not only work well but also provide excellent user experiences.
                    </p>
                    <p>
                        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying updated with the latest trends in web development.
                    </p>
                </div>
            </div>

            {/* My CV section */}
            <div id="my-cv" className='py-20 bg-gray-50 -mx-12 lg:-mx-24 md:-mx-16 px-12 lg:px-24 md:px-16'>
                <div className='text-4xl font-bold mb-8 text-center'>
                    Resume
                </div>
                <div className='max-w-4xl mx-auto text-center'>
                    <p className='text-xl text-gray-700 mb-8 font-medium'>
                        Download my resume to learn more about my experience, skills, and achievements in web development.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                        <a
                            href="https://drive.google.com/file/d/1wun2LYYfv4xbhTbayKclTdzxynH5MXu7/view?usp=sharing"
                            target='_blank'
                            rel="noopener noreferrer"
                            className='inline-block'
                        >
                            <button className='border-2 border-orange-600 bg-orange-600 text-white px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all delay-100 hover:drop-shadow-lg hover:bg-orange-700'>
                                View Resume Online
                            </button>
                        </a>
                        <a
                            href="https://drive.google.com/uc?export=download&id=1wun2LYYfv4xbhTbayKclTdzxynH5MXu7"
                            target='_blank'
                            rel="noopener noreferrer"
                            className='inline-block'
                        >
                            <button className='border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all delay-100 hover:bg-orange-600 hover:text-white hover:drop-shadow-lg'>
                                Download PDF
                            </button>
                        </a>
                    </div>
                    <div className='text-xl text-gray-700 font-medium mt-8'> You can contact me for hiring or any freelance projects. </div>
                    <div className='mt-10'>
                        <p className='text-lg font-medium text-gray-700 mb-8'>I am open for the following roles. </p>
                        <div className="flex flex-row gap-4 justify-center">
                            {roles.map((role, id) => (
                                <div key={id} className="border-2 border-orange-700 px-2 py-1 rounded-md text-orange-700 cursor-pointer">
                                    {role.role}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}