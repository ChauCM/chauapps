import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="relative">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Cao Minh Chau
              </h1>
              <p className="text-2xl text-gray-600">Flutter Developer</p>
              <div className="mt-2 h-1 w-24 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            </div>

            {/* About Me */}
            <section className="mb-20">
              <div className="bg-white rounded-3xl shadow-xl p-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>
                <div className="flex flex-col md:flex-row items-center gap-10">
                  <div className="w-56 h-56 flex-shrink-0">
                    <img
                      src="/images/profile.jpg"
                      alt="Cao Minh Chau"
                      className="w-full h-full rounded-2xl object-cover shadow-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Flutter developer with 5+ years building cross platform applications serving hundreds of thousands of users.
                      Experienced in hardware integration, real time systems, and scaling mobile applications.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        Flutter Expert
                      </span>
                      <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        Cross Platform
                      </span>
                      <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        5+ Years Experience
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-20">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Featured Projects</h2>

              {/* Cohart */}
              <motion.div
                className="bg-white rounded-3xl shadow-xl overflow-hidden mb-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="h-96 bg-gray-100">
                    <img
                      src="/images/cohart.webp"
                      alt="Cohart Art Marketplace"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Cohart Art Marketplace</h3>
                    <a href="https://www.cohart.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 mb-4 text-sm">
                      www.cohart.com
                    </a>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Built high quality visual social platform for artists and collectors. Implemented NFC card scanning
                      and Stripe tap to pay for seamless art purchases. Crafted pixel perfect UI showcasing artwork with
                      gallery grade presentation.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-lg text-sm">Flutter</span>
                      <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-lg text-sm">NFC</span>
                      <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-lg text-sm">Stripe SDK</span>
                      <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-lg text-sm">Tap to Pay</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ELSA */}
              <motion.div
                className="bg-white rounded-3xl shadow-xl overflow-hidden mb-10"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-10 flex flex-col justify-center order-2 md:order-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">ELSA Speak Learning Games</h3>
                    <a href="https://elsaspeak.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 mb-4 text-sm">
                      elsaspeak.com
                    </a>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Shipped 4 core learning games with Lottie and Rive animations serving 400K+ weekly active users.
                      Integrated Amplitude analytics for data driven improvements.
                      Rolling out Flutter Web version with full animation support.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm">Bloc</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm">RxDart</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm">Lottie</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm">Rive</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm">Amplitude</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm">Flutter Web</span>
                    </div>
                  </div>
                  <div className="h-96 bg-gray-100 order-1 md:order-2">
                    <div className="flex gap-2 h-full p-4">
                      <div className="flex-[1.3] h-full overflow-hidden rounded-lg">
                        <img
                          src="/images/elsa-web.jpg"
                          alt="ELSA Web"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-[0.7] h-full overflow-hidden rounded-lg">
                        <img
                          src="/images/elsa-mobile.png"
                          alt="ELSA Mobile"
                          className="w-full h-full object-contain bg-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* EtonHouse */}
              <motion.div
                className="bg-white rounded-3xl shadow-xl overflow-hidden mb-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="h-80 bg-gray-100 flex items-center justify-center p-6">
                    <img
                      src="/images/ble-bluetooth.gif"
                      alt="BLE Device Integration"
                      className="max-w-full max-h-full w-auto h-auto rounded-2xl shadow-xl object-contain"
                    />
                  </div>
                  <div className="p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">EtonHouse School Management</h3>
                    <a href="https://www.etonhouse.edu.sg" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 mb-4 text-sm">
                      www.etonhouse.edu.sg
                    </a>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Integrated Bluetooth OEM thermometers for contactless temperature monitoring across 12 schools.
                      Built the complete BLE connection handling, data sync, and error recovery system.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-50 text-green-600 rounded-lg text-sm">Flutter</span>
                      <span className="px-3 py-1 bg-green-50 text-green-600 rounded-lg text-sm">BLE</span>
                      <span className="px-3 py-1 bg-green-50 text-green-600 rounded-lg text-sm">Real Time Sync</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Additional Projects in Cards */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Student Check-in */}
                <motion.div
                  className="bg-white rounded-2xl shadow-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      📍
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Student Check in System</h3>
                  <p className="text-gray-600 mb-4">
                    Developed location based check in with flutter_map and Mapbox tiles. Implemented reverse geocoding
                    for address display and location-based student check-in that displays positions on interactive maps.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">flutter_map</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Mapbox</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Geocoding</span>
                  </div>
                </motion.div>

                {/* Multi-Platform */}
                <motion.div
                  className="bg-white rounded-2xl shadow-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      📱
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">4 Apps from Single Codebase</h3>
                  <p className="text-gray-600 mb-4">
                    Deployed 4 customized app variants for different schools using Flutter flavors.
                    Maintained iOS, Android, and Web versions with shared business logic.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Flutter Flavors</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Codemagic</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">CI/CD</span>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="mb-20">
              <div className="bg-white rounded-3xl shadow-xl p-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Technical Skills</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-purple-700 mb-3">Languages</h3>
                    <p className="text-gray-700">Dart, TypeScript, C#</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-blue-700 mb-3">State Management</h3>
                    <p className="text-gray-700">Bloc, Provider, RxDart</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3">Backend</h3>
                    <p className="text-gray-700">ASP.NET Core, PostgreSQL, Firebase</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-orange-700 mb-3">Hardware</h3>
                    <p className="text-gray-700">BLE, NFC, Bluetooth</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-pink-700 mb-3">Payment</h3>
                    <p className="text-gray-700">Stripe SDK, Tap to Pay</p>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-indigo-700 mb-3">Mapping</h3>
                    <p className="text-gray-700">flutter_map, Mapbox</p>
                  </div>
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-teal-700 mb-3">Analytics</h3>
                    <p className="text-gray-700">Sentry, Amplitude</p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Tools</h3>
                    <p className="text-gray-700">Git, Docker, Figma</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl shadow-xl p-10 text-white">
                <h2 className="text-3xl font-bold mb-8 text-center">Let's Connect</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:averagechau@gmail.com"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-xl hover:shadow-lg transition-shadow font-medium"
                  >
                    <Mail className="w-5 h-5" />
                    averagechau@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/averagechau/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl hover:shadow-lg transition-shadow font-medium"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/chaucm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-xl hover:shadow-lg transition-shadow font-medium"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                  <a
                    href="tel:+84876543444"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-green-600 rounded-xl hover:shadow-lg transition-shadow font-medium"
                  >
                    <Phone className="w-5 h-5" />
                    +84 876543444
                  </a>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;