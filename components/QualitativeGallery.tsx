import React, { useState } from 'react';
import { QUALITATIVE_DATA } from '../constants';
import { Icons } from './Icons';
import { QualitativeExample } from '../types';

interface QualitativeGalleryProps {
  dataset: 'ProcTHOR' | 'HM3D';
}

const parseAction = (actionStr: string) => {
  // Regex to capture the numbers inside the tags
  const regex = /<head>(-?\d+)<\/head>\s*<fwd>(\d+)<\/fwd>\s*<view>(-?\d+)<\/view>/;
  const match = actionStr.match(regex);

  if (!match) return null;

  const [_, head, fwd, view] = match;
  const headVal = parseInt(head, 10);
  const fwdVal = parseInt(fwd, 10);
  const viewVal = parseInt(view, 10);

  return [
    `1. Rotate ${headVal >= 0 ? 'right' : 'left'} by ${Math.abs(headVal)} degrees.`,
    `2. Move forward ${fwdVal}cm.`,
    `3. Rotate ${viewVal >= 0 ? 'right' : 'left'} by ${Math.abs(viewVal)} degrees.`
  ];
};

export const QualitativeGallery: React.FC<QualitativeGalleryProps> = ({ dataset }) => {
  const [activeCategory, setActiveCategory] = useState<QualitativeExample['category'] | 'All'>('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter first by dataset, then by category
  const datasetData = QUALITATIVE_DATA.filter(item => item.dataset === dataset);

  // Get available categories for this dataset
  const availableCategories = Array.from(new Set(datasetData.map(item => item.category)));
  const categories = ['All', ...availableCategories] as const;

  const filteredData = activeCategory === 'All'
    ? datasetData
    : datasetData.filter(item => item.category === activeCategory);

  const currentItem = filteredData[currentIndex];

  const handleCategoryChange = (cat: typeof activeCategory) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredData.length) % filteredData.length);
  };

  const datasetLabel = dataset === 'ProcTHOR' ? 'Synthetic Scenes (ProcTHOR)' : 'Real-World Scenes (HM3D)';
  const datasetColor = dataset === 'ProcTHOR' ? 'blue' : 'green';

  const parsedActions = currentItem ? parseAction(currentItem.action) : null;

  return (
    <div className={`rounded-3xl shadow-xl border border-slate-200 overflow-hidden bg-white mb-12`}>
      {/* Gallery Header */}
      <div className={`p-4 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 bg-${datasetColor}-50/30`}>
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg bg-${datasetColor}-100 text-${datasetColor}-700`}>
            {dataset === 'ProcTHOR' ? <Icons.Data /> : <Icons.Video />}
          </div>
          <h3 className="font-bold text-lg text-slate-800">{datasetLabel}</h3>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat as any)}
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${activeCategory === cat
                ? `bg-slate-800 text-white shadow-md`
                : 'text-slate-500 hover:bg-slate-200 hover:text-slate-800'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 md:p-8">
        {filteredData.length > 0 && currentItem ? (
          <div className="space-y-6">

            {/* Header: Question & Nav */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 leading-tight whitespace-pre-line">
                  <span className="text-slate-400 mr-2">Q:</span>
                  {currentItem.question.split(/(\*\*.*?\*\*)/).map((part, index) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return (
                        <span key={index} className="text-blue-600 bg-blue-50 px-1 rounded">
                          {part.slice(2, -2)}
                        </span>
                      );
                    }
                    return part;
                  })}
                </h3>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-500 transition-colors"
                  aria-label="Previous example"
                >
                  <Icons.ArrowLeft />
                </button>
                <span className="text-sm font-mono text-slate-400 min-w-[3ch] text-center">
                  {currentIndex + 1}/{filteredData.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-500 transition-colors"
                  aria-label="Next example"
                >
                  <Icons.ArrowRight />
                </button>
              </div>
            </div>

            {/* Visuals */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative group rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3]">
                <img
                  src={currentItem.queryImage || `https://placehold.co/600x450/f1f5f9/475569?text=${dataset}+Input+View:+${encodeURIComponent(currentItem.imageAlt)}`}
                  alt={`Initial view for ${currentItem.imageAlt}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur text-white text-xs font-semibold px-2 py-1 rounded shadow-sm">
                  Query View
                </div>
              </div>
              <div className="relative group rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3]">
                <img
                  src={currentItem.targetImage || `https://placehold.co/600x450/f1f5f9/475569?text=${dataset}+Refined+View:+${encodeURIComponent(currentItem.imageAlt)}`}
                  alt={`Refined view for ${currentItem.imageAlt}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute top-3 left-3 bg-${datasetColor}-600/90 backdrop-blur text-white text-xs font-semibold px-2 py-1 rounded shadow-sm`}>
                  Target View
                </div>
              </div>
            </div>

            {/* Reasoning & Action */}
            <div className="space-y-4">
              {/* Thinking Block */}
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 relative">
                <div className="flex items-center gap-2 text-slate-600 font-bold mb-2 text-xs uppercase tracking-wide">
                  <Icons.Brain />
                  Internal Reasoning
                </div>
                <p className="text-slate-800 leading-relaxed italic text-base md:text-lg">
                  <span className="text-slate-400 font-mono text-xs not-italic mr-2 select-none">&lt;think&gt;</span>
                  {currentItem.think}
                  <span className="text-slate-400 font-mono text-xs not-italic ml-2 select-none">&lt;/think&gt;</span>
                </p>
              </div>

              {/* Action Block */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 font-mono text-sm text-slate-600 shadow-sm overflow-x-auto">
                <div className="flex items-center gap-2 text-slate-500 font-bold mb-2 text-xs uppercase tracking-wide border-b border-slate-200 pb-2">
                  <Icons.Footprints />
                  Executed Action
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-slate-500 text-xs font-bold block mb-1">Raw Output:</span>
                    <div className="bg-white p-3 rounded border border-slate-200 text-slate-700 break-all text-xs md:text-sm shadow-sm">
                      {currentItem.action}
                    </div>
                  </div>

                  {parsedActions && (
                    <div>
                      <span className="text-slate-500 text-xs font-bold block mb-1">Parsed Action:</span>
                      <div className="bg-white p-3 rounded border border-slate-200 shadow-sm">
                        <ul className="text-slate-700 space-y-1 text-xs md:text-sm">
                          {parsedActions.map((line, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-slate-400 select-none">•</span>
                              {line}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        ) : (
          <div className="text-center py-20 text-slate-400 bg-slate-50 rounded-xl border border-dashed border-slate-200">
            No examples available for this category.
          </div>
        )}
      </div>
    </div>
  );
};