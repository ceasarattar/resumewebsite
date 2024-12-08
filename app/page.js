import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-black">
      {/* Header Section with Image */}
      <div className="max-w-8xl mx-auto px-6 bg-white">
        <div className="relative w-full">
          <Image
            src="/backdrop.jpeg"
            alt="Chicago Backdrop"
            layout="responsive" // Ensures responsiveness
            width={3000} // Match the image's original width
            height={2096} // Match the image's original height
            className="object-contain" // Ensure the image is not cropped
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="flex max-w-7xl mx-auto min-h-screen">
        {/* Left Section: Expanded to 40% */}
        <div className="w-2/5 p-10 bg-gray-100 flex flex-col space-y-8">
          {/* Profile Section */}
          <div className="text-center">
            <Image
              src="/profile.jpeg" // Replace with your profile image path
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
            <h1 className="text-3xl font-bold mt-6">Ceasar Attar</h1>
            <p className="text-xl mt-4">
              University of Illinois at Chicago<br />
              Bachelor of Science, 2025
            </p>
          </div>

          {/* Contact Info with Icons */}
          <div className="space-y-6 mt-8 text-lg">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-black" />
              <span>Chicago, IL</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-black" />
              <a
                href="mailto:ceasarattar03@gmail.com"
                className="text-blue-500 underline"
              >
                Email
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-blue-700" />
              <a
                href="https://linkedin.com/in/ceasarattar"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaGithub className="text-black" />
              <a
                href="https://github.com/ceasarattar"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* About Me Section */}
          <section id="about">
            <h2 className="text-2xl font-semibold mt-8">About Me</h2>
            <p className="text-base mt-4">
              I am a Computer Science student at the University of Illinois at
              Chicago, expected to graduate in May 2025. I specialize in backend
              development, cybersecurity, and building robust software systems.
            </p>
          </section>

          {/* Technical Skills Section */}
          <section id="skills">
            <h2 className="text-2xl font-semibold mt-8">Technical Skills</h2>
            <ul className="list-disc ml-6 text-base mt-4">
              <li>Languages: Python, C, C++, C#, Java, JavaScript, SQL, F#, Ruby</li>
              <li>Frameworks: React, Hibernate, Ruby on Rails, RESTful APIs</li>
              <li>Tools: Git, GitHub, Jira, Maven, Unity, Figma</li>
              <li>
                Certifications: Google Foundations of Security, freeCodeCamp
                Responsive Web Design
              </li>
            </ul>
          </section>
        </div>

        {/* Vertical Line */}
        <div className="w-px bg-black"></div>

        {/* Right Section: Expanded to 60% */}
        <div className="w-3/5 p-12">
          {/* Professional Experience Section */}
          <section id="experience" className="mb-12">
            <h2 className="text-3xl font-semibold">Professional Experience</h2>
            <div className="mt-8">
              <h3 className="text-2xl font-bold">
                Digital Cash for Information Technology
              </h3>
              <p className="text-lg text-gray-600">
                Back End Cybersecurity Intern | May 2024 – August 2024
              </p>
              <ul className="list-disc ml-6 mt-4 text-lg">
                <li>
                  Improved Java backend development for financial apps, boosting
                  performance and scalability by 30%.
                </li>
                <li>
                  Integrated RESTful APIs with Postman, enhancing communication and
                  system performance.
                </li>
                <li>
                  Implemented AES and RSA encryption for financial data, processing
                  1,000+ transactions daily.
                </li>
                <li>
                  Streamlined team collaboration via Jira and agile sprints,
                  improving delivery times by 20%.
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold">J.P. Morgan Chase</h3>
              <p className="text-lg text-gray-600">
                Software Engineering Fellow | January 2024 – February 2024
              </p>
              <ul className="list-disc ml-6 mt-4 text-lg">
                <li>
                  Built a Python and React environment to analyze stock data, providing
                  real-time visualizations for decision-making.
                </li>
                <li>
                  Improved data visualization outputs by fixing TypeScript code, resulting in
                  more accurate and interactive charts.
                </li>
                <li>
                  Optimized J.P. Morgan Chase’s repository, enhancing the reliability of internal
                  analysis tools.
                </li>
                <li>
                  Integrated proprietary frameworks, contributing to improved functionality and
                  project outcomes.
                </li>
              </ul>
            </div>
          </section>

          {/* Technical Projects Section */}
          <section id="projects" className="mb-12">
            <h2 className="text-3xl font-semibold">Technical Projects</h2>
            <ul className="list-disc ml-6 mt-4 text-lg">
              <li>
                <strong>CTA Database App</strong>: Python/SQL-based application for
                analyzing and visualizing Chicago Transit Authority data, showcasing database
                management.
              </li>
              <li>
                <strong>Encrypted Messenger</strong>: A secure messaging platform using
                AES encryption, built with Java and MySQL, supporting private communication.
              </li>
              <li>
                <strong>Fast Food Frenzy</strong>: Unity-based game featuring AI mechanics,
                custom shaders, and engaging gameplay for users.
              </li>
              <li>
                <strong>Smart Alarm Clock</strong>: Arduino project enabling real-time
                environmental monitoring and serial communication for better user functionality.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
