"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaFileDownload } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const [activeTab, setActiveTab] = useState("workExperience");

  const renderContent = () => {
    switch (activeTab) {
      case "educationalExperience":
        return (
          <div className="p-6">
            {/* Title */}
            <h2 className="text-3xl font-semibold text-center mb-4">Educational Experience</h2>
            <hr className="w-full mx-auto mb-4 border-t-2 border-gray-800" />

            {/* UIC Logo */}
            <div className="text-center mb-8">
              <Image
                src="/images/uic.png"
                alt="University of Illinois at Chicago Logo"
                width={300}
                height={300}
                className="mx-auto"
              />
            </div>

            {/* Description */}
            <div className="text-justify mb-8">
              <p className="text-md leading-relaxed mb-4">
                As a student at the University of Illinois at Chicago pursuing a Bachelor of Science in Computer Science,
                I have immersed myself in an academically rigorous environment that prioritizes both theoretical knowledge and
                practical skills. My coursework has been instrumental in equipping me with a robust understanding of the
                foundational and advanced aspects of computer science, including algorithms, operating systems, and database
                management. Each course has challenged me to think critically, solve problems creatively, and adopt a methodical
                approach to software development.
              </p>
              <p className="text-md leading-relaxed">
                My studies have also provided hands-on experience in web development, cybersecurity, and systems architecture,
                enabling me to connect theory to real-world applications. Through projects and collaborative assignments, I have
                developed technical proficiencies in analyzing complex systems, optimizing performance, and maintaining scalability.
                These experiences have not only expanded my technical toolkit but also honed my ability to collaborate effectively
                within diverse teams, reflecting the interdisciplinary nature of modern computing challenges.
              </p>
            </div>

            {/* ACM Section */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-6">
              <div className="ml-auto pr-90">
                <Image
                  src="/images/acm.png"
                  alt="ACM Logo"
                  width={200}
                  height={200}
                  className="mr-6"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold"><br /><br /><br />Association for Computing Machinery</h4>
                <p className="text-sm text-gray-600 mb-2">University of Illinois Chapter | September 2023 – Current</p>
                <p className="text-md">
                  As a member of ACM, I have actively contributed to fostering a community of computing enthusiasts on campus.
                  I have managed server operations, ensuring high uptime for student projects and events, and organized workshops
                  to advance members' technical skills. My role in organizing SIG events and hackathons has promoted collaboration
                  and innovation among peers while addressing real-world technical challenges. This involvement has strengthened my
                  leadership and technical skills while supporting the mission of ACM to advance computing as a science and profession.
                </p>
              </div>
            </div>
          </div>
        );

      case "workExperience":
        return (
          <div className="p-6">
            <h2 className="text-3xl font-semibold text-center mb-4">Work Experience</h2>
            <hr className="w-full mx-auto mb-4 border-t-2 border-gray-800" />
            {/* Digital Cash */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-6">
              <div className="ml-auto pr-90">
                <Image
                  src="/images/digitalcash.png"
                  alt="Digital Cash Logo"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">Digital Cash for Information Technology</h3>
                <p className="text-sm text-gray-600">Back End Cybersecurity Intern | May 2024 – August 2024</p>
                <p className="mt-2">
                  As a backend cybersecurity intern, I enhanced the performance of financial applications by implementing
                  Java-based solutions, resulting in a 30% performance boost. I integrated RESTful APIs using Postman to
                  improve system responsiveness and utilized advanced encryption methods, including AES and RSA, to secure
                  financial data. Additionally, I collaborated effectively with team members through Jira and agile sprints
                  to ensure project efficiency.
                </p>
              </div>
            </div>
            {/* J.P. Morgan */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-9">
              <div className="ml-auto pr-90">
                <Image
                  src="/images/chase.png"
                  alt="J.P. Morgan Logo"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">J.P. Morgan Chase</h3>
                <p className="text-sm text-gray-600">Software Engineering Fellow | January 2024 – February 2024</p>
                <p className="mt-2">
                  During this fellowship, I developed a Python-React environment to analyze complex stock market data,
                  significantly improving data accessibility for stakeholders. I enhanced data visualization by debugging
                  and optimizing TypeScript components. The role involved collaborating on proprietary frameworks to
                  ensure the reliability of internal analysis tools.
                </p>
              </div>
            </div>
            {/* Paris Baguette */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-6">
              <div className="ml-auto pr-90">
                <Image
                  src="/images/parisbaguette.png"
                  alt="Paris Baguette Logo"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">Paris Baguette</h3>
                <p className="text-sm text-gray-600">Barista | April 2024 – November 2024</p>
                <p className="mt-2">
                  Managed over 400 daily orders, ensuring quality customer service while handling catering and custom
                  cake orders. I streamlined inventory management processes to maintain operational efficiency and provided
                  personalized customer recommendations to increase sales and satisfaction. My contributions supported the
                  smooth functioning of a high-paced workplace.
                </p>
              </div>
            </div>
            {/* The North Face */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-6">
              <div className="ml-auto pr-90">
                <Image
                  src="/images/thenorthface.png"
                  alt="The North Face Logo"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">The North Face</h3>
                <p className="text-sm text-gray-600">Sales Associate | April 2023 – June 2024</p>
                <p className="mt-2">
                  Contributed to record-breaking sales, averaging $3,000 daily, by delivering personalized recommendations
                  and exceptional customer experiences. I collaborated on visual merchandising projects to enhance the
                  store’s appeal and consistently exceeded sales targets through teamwork and effective communication.
                </p>
              </div>
            </div>
            {/* Planet Fitness */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse gap-x-6">
              <div className="ml-auto pr-90">
                <Image
                  src="/images/planetfitness.png"
                  alt="Planet Fitness Logo"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">Planet Fitness</h3>
                <p className="text-sm text-gray-600">Sales Associate | May 2023 – July 2023</p>
                <p className="mt-2">
                  Assisted gym members with personalized fitness plans, membership options, and conducted engaging facility
                  tours. I managed front-desk responsibilities, ensuring seamless daily operations, and played a key role
                  in creating a welcoming and productive environment for all clients.
                </p>
              </div>
            </div>
          </div>
        );

      case "technicalProjects":
        return (
          <div className="p-6">
            <h2 className="text-3xl font-semibold text-center mb-4">Technical Projects</h2>
            <hr className="w-full mx-auto mb-4 border-t-2 border-gray-800" />

            {/* CTA Database App */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse">
              <Image
                src="/images/cta.png"
                alt="CTA Database App"
                width={200}
                height={100}
                className="ml-6"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold">CTA Database App</h3>
                <p className="mt-2">
                  This project is a Python-SQL console application designed for analyzing Chicago Transit Authority (CTA) data.
                  It leverages Python for the front-end interface and SQL for efficient back-end data retrieval.
                  Users can query real-time information, visualize ridership trends, and optimize transit planning.
                  The project emphasizes advanced database management, efficient querying, and robust software development skills.
                </p>
                <p className="mt-4">
                  <a
                    href="https://github.com/ceasarattar/CTA-Database-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    <i className="fa fa-external-link"></i> Find out more
                  </a>
                </p>
              </div>
            </div>

            {/* Encrypted Messenger */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse">
              <Image
                src="/images/messenger.png"
                alt="Encrypted Messenger"
                width={100}
                height={100}
                className="ml-6"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold">Encrypted Messenger</h3>
                <p className="mt-2">
                  A secure messaging application built using Java and MySQL, focusing on AES encryption to protect client-server communication.
                  The system features multi-threaded architecture for real-time interactions, robust data persistence through Hibernate, and a focus on confidentiality and reliability.
                  This project showcases expertise in Java programming, encryption, and database integration.
                </p>
                <p className="mt-4">
                  <a
                    href="https://github.com/ceasarattar/ServerClientSpring"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    <i className="fa fa-external-link"></i> Find out more
                  </a>
                </p>
              </div>
            </div>

            {/* Fast Food Frenzy */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse">
              <Image
                src="/images/pizza.png"
                alt="Fast Food Frenzy"
                width={100}
                height={100}
                className="ml-6"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold">Fast Food Frenzy</h3>
                <p className="mt-2">
                  A Unity-based game where players manage fast food restaurants under increasing challenges.
                  This game employs AI mechanics for dynamic gameplay, custom shaders for a visually immersive experience, and sound effects to enhance user engagement.
                  Developed using C# scripts, the game reflects proficiency in game development and interactive design.
                </p>
                <p className="mt-4">
                  <a
                    href="https://github.com/ceasarattar/FastFoodFrenzy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    <i className="fa fa-external-link"></i> Find out more
                  </a>
                </p>
              </div>
            </div>

            {/* Smart Alarm Clock */}
            <div className="flex flex-wrap items-center mb-8 flex-row-reverse">
              <Image
                src="/images/smartclock.png"
                alt="Smart Alarm Clock"
                width={100}
                height={100}
                className="ml-6"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold">Smart Alarm Clock</h3>
                <p className="mt-2">
                  An Arduino-based smart device designed for real-time environmental monitoring.
                  It combines functionality like temperature and humidity detection with user-friendly alarm settings.
                  Using C/C++ for microcontroller programming, the project showcases real-time serial communication and environmental sensing expertise.
                </p>
                <p className="mt-4">
                  <a
                    href="https://github.com/username/smart-alarm-clock"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    <i className="fa fa-external-link"></i> Find out more
                  </a>
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white text-black min-h-screen">
      <Head>
        <title>Ceasar Attar's Portfolio</title>
        <meta name="description" content="Ceasar Attar's personal portfolio showcasing work experience, technical projects, and educational background." />
      </Head>
      {/* Backdrop Image */}
      <div className="max-w-8xl mx-auto px-6 bg-white">
        <div className="relative w-full">
          <Image
            src="/images/backdrop.jpeg"
            alt="Chicago Backdrop"
            layout="responsive"
            width={3000}
            height={2096}
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex max-w-full mx-7 min-h-screen">
        {/* Left Section */}
        <div className="w-2/5 p-10 bg-gray-100 flex flex-col space-y-8">
          {/* Profile Section */}
          <div className="text-center">
            <Image
              src="/images/profilepicture.jpg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
            <h1 className="text-3xl font-bold mt-6">Ceasar Attar</h1>
            <p className="text-xl mt-4">
              University of Illinois at Chicago<br />
              Bachelor of Science in Computer Science<br />
              Expected Graduation May 2025
            </p>
            <div className="flex items-center justify-center gap-3">
              <FaMapMarkerAlt className="text-black" />
              <span>Chicago, IL</span>
            </div>
          </div>

          {/* About Me */}
          <section id="about" className="mt-6">
            <p className="text-center">
              I am a senior Computer Science student passionate about backend development, cybersecurity, and solving
              complex problems through efficient software solutions. I thrive in collaborative environments and excel at
              adapting to challenges under pressure. My work on the CTA Database App and Encrypted Messenger exemplifies
              my ability to deliver impactful projects.
            </p>
          </section>

          {/* Skills and Expertise */}
          <section id="skills" className="mt-6">
            <h2 className="text-2xl font-semibold text-center mb-2">Skills and Expertise</h2>
            <hr className="w-80 mx-auto border-black mb-4" />
            <div className="text-center space-y-3">
              <p>
                <strong>Certifications:</strong> Foundations of Security (Google), Responsive Web Design (freeCodeCamp),
                Back End Development and APIs (freeCodeCamp)
              </p>
              <p>
                <strong>Languages:</strong> Python, C, C++, C#, Java, JavaScript, SQL, F#, Ruby
              </p>
              <p>
                <strong>Developer and Design Tools:</strong> Git, GitHub, Jira, Maven, HTML, CSS, Google Test, Figma, Arduino
              </p>
              <p>
                <strong>Frameworks & Technologies:</strong> AWS, MySQL, React, Hibernate, RESTful API, Azure, Unity, Ruby
                on Rails
              </p>
            </div>
          </section>

          {/* Contact and Profiles */}
          <section id="contact" className="mt-8">
            <h2 className="text-2xl font-semibold text-center mb-2">Contact and Profiles</h2>
            <hr className="w-80 mx-auto border-black mb-4" />
            <div className="space-y-4 text-center text-lg">
              <div className="flex items-center justify-center gap-3">
                <FaEnvelope className="text-black" />
                <a href="mailto:ceasarattar03@gmail.com" className="text-blue-500 underline">
                  Email
                </a>
              </div>
              <div className="flex items-center justify-center gap-3">
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
              <div className="flex items-center justify-center gap-3">
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
              <div className="flex items-center justify-center gap-3">
                <FaFileDownload className="text-black" />
                <a
                  href="/resume.pdf"
                  download
                  className="text-blue-500 underline"
                >
                  Resume
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Right Section */}
        <div className="w-3/5 p-12">
          {/* Tabs */}
          <div className="flex justify-center gap-6 p-4 bg-gray-200 rounded-lg mb-6">
            <button
              onClick={() => setActiveTab("educationalExperience")}
              className={`text-lg font-medium ${activeTab === "educationalExperience" ? "text-black" : "text-gray-500"
                }`}
            >
              Educational Experience
            </button>
            <button
              onClick={() => setActiveTab("workExperience")}
              className={`text-lg font-medium ${activeTab === "workExperience" ? "text-black" : "text-gray-500"
                }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab("technicalProjects")}
              className={`text-lg font-medium ${activeTab === "technicalProjects" ? "text-black" : "text-gray-500"
                }`}
            >
              Technical Projects
            </button>
          </div>

          {/* Content */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
