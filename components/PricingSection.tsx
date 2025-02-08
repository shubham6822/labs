import { Check, X, Home, Building, Building2 } from "lucide-react";

const PricingSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-[#1A1F2C] to-black relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9b87f5]/20 rounded-full filter blur-3xl"></div>

      {/* Content Container with White Background and Modern Shadow */}
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl p-12 relative shadow-[0_0_50px_0_rgba(155,135,245,0.1)] border border-white/20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-transparent bg-clip-text">
            Ready to Ignite Your Idea?
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Choose the perfect package for your project and get started today
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Lite Plan */}
          <div className="relative p-8 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <Home className="w-6 h-6 text-[#9b87f5]" />
              <h3 className="text-xl font-semibold text-gray-900">Lite</h3>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$5,699</span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Bring your own design and wireframe for 1-2 core features
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-red-400">
                <X className="w-5 h-5" />
                <span>No design or wireframe</span>
              </li>
              {[
                "2-week delivery",
                "1-2 core MVP features",
                "1 round of revisions",
                "Basic hosting setup",
                "Deploy & setup domain",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <Check className="w-5 h-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Plus Plan */}
          <div className="relative p-8 rounded-2xl border-2 border-[#9b87f5] bg-gradient-to-br from-[#1A1F2C] to-black text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="absolute -top-3 right-4 bg-[#9b87f5] text-white text-xs px-3 py-1 rounded-full">
              MOST POPULAR
            </div>
            <div className="flex items-center gap-2 mb-4">
              <Building className="w-6 h-6 text-[#9b87f5]" />
              <h3 className="text-xl font-semibold">Plus</h3>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">$7,699</span>
              <span className="ml-2 text-[#9b87f5]">Save $2000</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Perfect balance of features and cost
            </p>
            <ul className="space-y-4">
              {[
                "3-week delivery",
                "Functional application design",
                "2-4 core MVP features",
                "2 rounds of revisions",
                "Advanced hosting setup",
                "SEO optimization",
                "Analytics integration",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <Check className="w-5 h-5 text-[#9b87f5]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="relative p-8 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-[#9b87f5]" />
              <h3 className="text-xl font-semibold text-gray-900">Premium</h3>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$9,699</span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Everything you need for a successful launch
            </p>
            <ul className="space-y-4">
              {[
                "Full application design",
                "4-8 core MVP features",
                "3 rounds of revisions",
                "Advanced optimization",
                "1 month post-launch support",
                "SEO optimization",
                "CI/CD pipeline",
                "Analytics integration",
                "User feedback system",
                "A/B testing setup",
                "Basic API documentation",
                "Security audit",
                "Performance monitoring",
                "Conversion optimization",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <Check className="w-5 h-5 text-[#9b87f5]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
