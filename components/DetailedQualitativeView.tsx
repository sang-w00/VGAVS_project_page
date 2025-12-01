import React from 'react';
import { Icons } from './Icons';
import { Button } from './Button';
import { Figure } from './Figure';

interface DetailedQualitativeViewProps {
  onBack: () => void;
}

export const DetailedQualitativeView: React.FC<DetailedQualitativeViewProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200 px-4 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <Button onClick={onBack} variant="outline" icon={<Icons.ArrowLeft />}>
            Back to Project Page
          </Button>
          <h2 className="text-lg font-bold text-slate-900 hidden md:block">
            Extended Qualitative Results
          </h2>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12 space-y-16">

        {/* Section 1: Comparison Strip */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Comparison with Baselines</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Visualizing how our SFT+RL framework (right) compares to EQA baselines and supervised-only methods (middle) in recovering visual information.
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-200">
            <Figure
              src="/figures/qualitative.png"
              alt="Qualitative Comparison Strip"
              caption={
                <span>
                  <strong>Figure 4.</strong> Qualitative results in AVS-ProcTHOR (top) and AVS-HM3D (bottom).
                  <span className="text-blue-600 font-semibold"> Blue</span> denotes the object of interest.
                  <span className="text-green-600 font-bold"> ✓</span> corresponds to correct answers,
                  <span className="text-red-600 font-bold"> ✗</span> to wrong answers.
                  Our method consistently finds views that answer the question correctly.
                </span>
              }
            />
          </div>
        </section>

        {/* Section 2: EQA Pipeline Integration */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Integration into EQA Pipeline</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Demonstrating how our active view selection module acts as a "plug-and-play" refinement step at the end of a standard EQA exploration trajectory.
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-200">
            <Figure
              src="/figures/EQA.png"
              alt="EQA Integration"
              caption={
                <span>
                  <strong>Figure 6.</strong> Illustration of integrating our AVS framework into an EQA pipeline.
                  The yellow line represents exploration. The <span className="text-blue-600">blue arrow</span> represents the final viewpoint refinement by our model.
                  Standard EQA often stops with the target partially occluded; our model minimally adjusts to reveal it.
                </span>
              }
            />
          </div>
        </section>

      </div>
    </div>
  );
};