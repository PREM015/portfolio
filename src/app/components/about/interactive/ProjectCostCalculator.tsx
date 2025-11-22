'use client';
import { useState } from 'react';

export default function ProjectCostCalculator() {
  const [projectType, setProjectType] = useState('website');
  const [pages, setPages] = useState(5);
  const [features, setFeatures] = useState<string[]>([]);

  const baseRates: Record<string, number> = {
    website: 2000,
    webapp: 5000,
    mobile: 8000,
    ecommerce: 10000,
  };

  const featureRates: Record<string, number> = {
    authentication: 500,
    payment: 1000,
    cms: 800,
    api: 1500,
    analytics: 300,
  };

  const calculateCost = () => {
    let cost = baseRates[projectType] || 0;
    cost += pages * 200;
    features.forEach((feature) => {
      cost += featureRates[feature] || 0;
    });
    return cost;
  };

  const toggleFeature = (feature: string) => {
    setFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  return (
    <div className="my-12 p-8 bg-white/5 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-cyan-300">Project Cost Calculator</h3>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Project Type</label>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="w-full p-3 bg-white/10 rounded-lg border border-white/20 text-white"
          >
            <option value="website">Website</option>
            <option value="webapp">Web App</option>
            <option value="mobile">Mobile App</option>
            <option value="ecommerce">E-commerce</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Number of Pages: {pages}
          </label>
          <input
            type="range"
            min="1"
            max="20"
            value={pages}
            onChange={(e) => setPages(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Additional Features</label>
          <div className="space-y-2">
            {Object.keys(featureRates).map((feature) => (
              <label key={feature} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={features.includes(feature)}
                  onChange={() => toggleFeature(feature)}
                  className="w-4 h-4"
                />
                <span className="capitalize">{feature}</span>
                <span className="text-sm text-gray-400">
                  (+${featureRates[feature]})
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t border-white/20 pt-6">
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">Estimated Cost</p>
            <p className="text-4xl font-bold text-cyan-400">
              ${calculateCost().toLocaleString()}
            </p>
            <p className="text-xs text-gray-500 mt-2">*Estimate only, final cost may vary</p>
          </div>
        </div>
      </div>
    </div>
  );
}
