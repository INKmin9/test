export default function About() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are a team dedicated to building modern web applications with the latest technologies.
        </p>
      </section>

      <section className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          Our mission is to create high-quality, performant web applications that provide
          excellent user experiences. We believe in clean code, modern practices, and
          continuous improvement.
        </p>
        <p className="text-gray-600">
          This project serves as a testing ground for Google Analytics integration,
          allowing us to track user interactions and optimize our applications based on real data.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-indigo-600">Our Values</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
              <span className="text-gray-700">Quality over quantity</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
              <span className="text-gray-700">User-centric design</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
              <span className="text-gray-700">Continuous learning</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
              <span className="text-gray-700">Open collaboration</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-purple-600">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Router'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
