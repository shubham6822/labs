import { X, Check } from "lucide-react";

interface ComparisonItem {
  traditional: string;
  modern: string;
}

const comparisonData: ComparisonItem[] = [
  {
    traditional: "6-12 months to launch MVP",
    modern: "3-4 weeks to market-ready MVP",
  },
  {
    traditional: "High development and resource costs",
    modern: "Cost-effective without compromising quality",
  },
  {
    traditional: "Outdated or inconsistent technologies",
    modern: "Modern, scalable, and AI-driven technologies",
  },
  {
    traditional: "Fragmented teams with communication delays",
    modern: "Dedicated, full-stack team with seamless collaboration",
  },
  {
    traditional: "Basic, uninspired UI/UX",
    modern: "User-centric, sleek, and modern design",
  },
  {
    traditional: "Limited transparency and irregular updates",
    modern: "Transparent communication with weekly progress reports",
  },
  {
    traditional: "Minimal or expensive for updates",
    modern: "Continuous support and scalable iterations",
  },
  {
    traditional: "Limited third-party integrations",
    modern: "Full suite of seamless integrations",
  },
  {
    traditional: "Manual testing with high error rates",
    modern: "Automated and manual testing for zero-bug release",
  },
  {
    traditional: "Requires costly redevelopment for scaling",
    modern: "Built to scale from day one",
  },
  {
    traditional: "One-size-fits-all solutions",
    modern: "Tailored solutions based on your unique needs",
  },
];

const ComparisonTable = () => {
  return (
    <section className="py-2  0 px-4 bg-gradient-to-b from-black/60 to-black/40">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-lg font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 pb-5">
          Tech is expensive (we keep it budget-friendly)
        </h3>
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Why Choose Us?
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-6 text-left bg-gray-900/50 text-gray-400 font-medium rounded-tl-lg">
                  Traditional Approach
                </th>
                <th className="p-6 text-left bg-gray-900/50 text-gray-400 font-medium rounded-tr-lg">
                  Our Approach
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-800 hover:bg-gray-900/30 transition-colors "
                >
                  <td className="p-6 text-gray-400 ">
                    <div className="flex items-start gap-4 reveal ">
                      <div className="mt-1 p-1 rounded-full bg-red-500/10">
                        <X className="w-5 h-5 text-red-500" />
                      </div>
                      <span>{item.traditional}</span>
                    </div>
                  </td>
                  <td className="p-6 text-emerald-400">
                    <div className="flex items-start gap-4 reveal">
                      <div className="mt-1 p-1 rounded-full bg-emerald-500/10">
                        <Check className="w-5 h-5 text-emerald-500" />
                      </div>
                      <span>{item.modern}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
