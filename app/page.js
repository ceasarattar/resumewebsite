import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6">
    <header className="text-center mt-10">
      <h1 className="text-4xl font-bold">Ceasar Attar</h1>
      <p className="text-lg mt-2">
        Computer Science Student | Backend Developer
      </p>
      <p className="text-sm text-gray-600">
        ceasarattar03@gmail.com | (312) 801-0583 |{' '}
        <a
          href="https://linkedin.com/in/ceasarattar"
          className="text-blue-500"
        >
          LinkedIn
        </a>{' '}
        |{' '}
        <a href="https://github.com/ceasarattar" className="text-blue-500">
          GitHub
        </a>
      </p>
    </header>

    <main className="mt-10">
      <section id="about" className="mb-10">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>
          I am a Computer Science student at the University of Illinois at
          Chicago, expected to graduate in May 2025. I specialize in backend
          development, cybersecurity, and building robust software systems.
        </p>
      </section>

      <section id="skills" className="mb-10">
        <h2 className="text-2xl font-semibold">Technical Skills</h2>
        <ul className="list-disc ml-6">
          <li>Languages: Python, C, C++, C#, Java, JavaScript, SQL, F#, Ruby</li>
          <li>Frameworks: React, Hibernate, Ruby on Rails, RESTful APIs</li>
          <li>Tools: Git, GitHub, Jira, Maven, Unity, Figma</li>
          <li>
            Certifications: Google Foundations of Security, freeCodeCamp
            Responsive Web Design
          </li>
        </ul>
      </section>

      <section id="experience" className="mb-10">
        <h2 className="text-2xl font-semibold">Professional Experience</h2>

        <div>
          <h3 className="text-lg font-bold">
            Digital Cash for Information Technology
          </h3>
          <p className="text-sm text-gray-600">
            Back End Cybersecurity Intern | May 2024 – August 2024
          </p>
          <ul className="list-disc ml-6">
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

        <div className="mt-6">
          <h3 className="text-lg font-bold">J.P. Morgan Chase</h3>
          <p className="text-sm text-gray-600">
            Software Engineering Fellow | January 2024 – February 2024
          </p>
          <ul className="list-disc ml-6">
            <li>
              Built Python and React solutions for stock data analysis,
              delivering real-time insights.
            </li>
            <li>
              Enhanced data visualization accuracy by debugging and optimizing
              TypeScript code.
            </li>
            <li>
              Contributed to proprietary frameworks for improved project
              functionality and reliability.
            </li>
          </ul>
        </div>
      </section>

      <section id="projects" className="mb-10">
        <h2 className="text-2xl font-semibold">Technical Projects</h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>CTA Database App</strong>: Python/SQL-based application for
            Chicago Transit Authority data analysis and visualization.
          </li>
          <li>
            <strong>Encrypted Messenger</strong>: Secure messaging system using
            AES encryption, Java, and MySQL.
          </li>
          <li>
            <strong>Fast Food Frenzy</strong>: Unity-based game with AI
            mechanics, custom shaders, and enhanced gameplay.
          </li>
          <li>
            <strong>Smart Alarm Clock</strong>: Arduino project with real-time
            environmental monitoring and serial communication.
          </li>
        </ul>
      </section>

      <section id="contact" className="mb-10">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>
          Email:{' '}
          <a
            href="mailto:ceasarattar03@gmail.com"
            className="text-blue-500"
          >
            ceasarattar03@gmail.com
          </a>
        </p>
        <p>Phone: (312) 801-0583</p>
        <p className="mt-4">
          <a
            href="/resume.pdf"
            download
            className="text-blue-500 underline"
          >
            Download My Resume!
          </a>
        </p>
      </section>
    </main>
  </div>
);}