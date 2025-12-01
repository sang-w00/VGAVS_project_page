import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { TLDR } from './components/TLDR';
import { Method } from './components/Method';
import { ResultsChart } from './components/ResultsChart';
import { BibTeX } from './components/BibTeX';
import { QualitativeGallery } from './components/QualitativeGallery';
import { MainResultsTable } from './components/MainResultsTable';
import { DetailedQualitativeView } from './components/DetailedQualitativeView';
import { Button } from './components/Button';
import { Icons } from './components/Icons';
import { CHART_DATA_PROCTHOR, CHART_DATA_HM3D } from './constants';

const App: React.FC = () => {
  const [showDetailedView, setShowDetailedView] = useState(false);

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [showDetailedView]);

  if (showDetailedView) {
    return <DetailedQualitativeView onBack={() => setShowDetailedView(false)} />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">

      <Header />

      <main className="container mx-auto px-4 pb-20 space-y-24">

        {/* TLDR Section */}
        <TLDR />

        {/* Teaser Video/Image Placeholder */}
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 aspect-video relative group cursor-pointer">
          <video
            controls
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="avs_suppl_video.mp4"
          />
        </div>

        {/* Qualitative Examples Section (Moved Up) */}
        <section className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Qualitative Examples</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore how our model reasons about the scene and predicts precise movement actions to answer questions.
            </p>
          </div>

          {/* Gallery 1: ProcTHOR */}
          <QualitativeGallery dataset="ProcTHOR" />

          {/* Gallery 2: HM3D */}
          <QualitativeGallery dataset="HM3D" />

          {/* More Results Button */}
          <div className="flex justify-center pt-4">
            <Button
              onClick={() => setShowDetailedView(true)}
              variant="primary"
              className="px-8 py-4 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
              icon={<Icons.Eye />}
            >
              <span className="ml-2">View More Qualitative Comparisons</span>
            </Button>
          </div>
        </section>

        <hr className="border-slate-100 max-w-xl mx-auto" />

        {/* Methodology */}
        <Method />

        {/* Quantitative Results Section */}
        <section className="max-w-5xl mx-auto scroll-mt-24" id="results">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Quantitative Results</h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Our SFT+RL framework consistently outperforms baselines across diverse question types on both synthetic (ProcTHOR) and real-world (HM3D) benchmarks.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col h-[500px]">
              <ResultsChart data={CHART_DATA_PROCTHOR} title="AVS-ProcTHOR (Synthetic)" />
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col h-[500px]">
              <ResultsChart data={CHART_DATA_HM3D} title="AVS-HM3D (Real-World)" />
            </div>
          </div>

          <div className="bg-white p-1 rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
            <MainResultsTable />
          </div>
        </section>

        <BibTeX />

      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-12 text-center text-slate-500">
        <p className="mb-2">© 2026 Anonymous Authors.</p>
        <p className="text-sm">Project page template inspired by standard academic sites.</p>
      </footer>

    </div>
  );
};

export default App;