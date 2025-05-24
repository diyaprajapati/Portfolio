import { motion } from "framer-motion";

const roles = [
    { role: "Full Stack Developer" },
    { role: "Frontend Developer" },
    { role: "Backend Developer" },
];

export default function Body() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    return (
        <div className="px-12 lg:px-24 gap-10 md:px-16">
            {/* Hero Section */}
            <motion.div
                className="flex flex-col-reverse md:flex-row min-h-screen pb-8 md:pb-0"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Text */}
                <motion.div
                    className="flex flex-col gap-3 justify-center flex-1 py-8 md:py-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                >
                    <div className="text-2xl font-bold lg:text-4xl md:text-3xl sm:text-3xl">Hey,</div>
                    <div className="text-4xl font-extrabold lg:text-6xl md:text-5xl sm:text-5xl">I'm Diya</div>
                    <div className="text-lg font-bold text-gray-600 my-3 lg:text-3xl md:text-2xl sm:text-xl leading-relaxed">
                        I'm a tech enthusiast and full-stack developer who enjoys creating end-to-end web solutions. Currently exploring new ways to build better digital experiences.
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
                        <button
                            onClick={() => scrollToSection("about-me")}
                            className="border-2 border-orange-600 px-5 py-3 rounded-2xl hover:-translate-y-0.5 transition-all delay-100 hover:bg-orange-600 hover:text-white hover:drop-shadow-lg text-center"
                        >
                            About me
                        </button>
                        <button
                            onClick={() => scrollToSection("my-cv")}
                            className="border-2 bg-orange-600 px-5 py-3 rounded-2xl hover:-translate-y-0.5 transition-all delay-100 text-white hover:drop-shadow-lg text-center"
                        >
                            View my CV
                        </button>
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div
                    className="drop-shadow-xl flex justify-center items-center flex-1 py-4 md:py-0"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <img
                        src="/diya.png"
                        className="w-72 h-72 sm:w-80 sm:h-80 md:w-full md:h-auto md:max-w-md lg:max-w-lg xl:max-w-xl object-cover rounded-full md:rounded-none"
                        alt="Diya Prajapati"
                    />
                </motion.div>
            </motion.div>

            {/* About Me Section */}
            <motion.div
                id="about-me"
                className="py-20"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="text-4xl font-bold mb-8 text-center">About Me</div>
                <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 font-medium">
                    <p className="mb-6">
                        Welcome to my portfolio! I'm Diya, a passionate full-stack developer with a love for creating innovative web solutions...
                    </p>
                    <p className="mb-6">
                        I specialize in modern web technologies and enjoy working on both frontend and backend development...
                    </p>
                    <p>
                        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects...
                    </p>
                </div>
            </motion.div>

            {/* My CV Section */}
            <motion.div
                id="my-cv"
                className="py-20 bg-gray-50 -mx-12 lg:-mx-24 md:-mx-16 px-12 lg:px-24 md:px-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="text-4xl font-bold mb-8 text-center">Resume</div>
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-xl text-gray-700 mb-8 font-medium">
                        Download my resume to learn more about my experience, skills, and achievements in web development.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="https://drive.google.com/file/d/1wun2LYYfv4xbhTbayKclTdzxynH5MXu7/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <button className="border-2 border-orange-600 bg-orange-600 text-white px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all delay-100 hover:drop-shadow-lg hover:bg-orange-700">
                                View Resume Online
                            </button>
                        </a>
                        <a
                            href="https://drive.google.com/uc?export=download&id=1wun2LYYfv4xbhTbayKclTdzxynH5MXu7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all delay-100 hover:bg-orange-600 hover:text-white hover:drop-shadow-lg">
                                Download PDF
                            </button>
                        </a>
                    </div>
                    <div className="text-xl text-gray-700 font-medium mt-8">
                        You can contact me for hiring or any freelance projects.
                    </div>
                    <div className="mt-10">
                        <p className="text-lg font-medium text-gray-700 mb-8">I am open for the following roles.</p>
                        <div className="flex flex-row gap-4 justify-center">
                            {roles.map((role, id) => (
                                <motion.div
                                    key={id}
                                    className="bg-orange-200/60 px-2 py-1 rounded-full text-orange-600 cursor-pointer"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {role.role}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
