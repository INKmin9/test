const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices.',
    icon: '🌐',
    features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly'],
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps that work seamlessly on iOS and Android.',
    icon: '📱',
    features: ['React Native', 'Flutter', 'Native Performance'],
  },
  {
    title: 'Analytics Integration',
    description: 'Track user behavior and make data-driven decisions for your business.',
    icon: '📊',
    features: ['Google Analytics', 'Custom Events', 'Conversion Tracking'],
  },
  {
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure to support your growing business.',
    icon: '☁️',
    features: ['AWS', 'Google Cloud', 'Azure'],
  },
]

export default function Services() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We offer a wide range of services to help you build and grow your digital presence.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="bg-indigo-600 rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-6 opacity-90">Contact us today to discuss your project needs.</p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Get in Touch
        </a>
      </section>
    </div>
  )
}
