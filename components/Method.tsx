import React from 'react';
import { Figure } from './Figure';

export const Method: React.FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-slate-900">Visually-Grounded Active View Selection (VG-AVS)</h2>

        <p className="text-lg text-slate-700 mb-8 leading-relaxed">
          We propose VG-AVS, a novel task where an agent must predict the optimal next viewpoint to answer a question based solely on the current view. Unlike traditional Embodied Question Answering (EQA) which relies on map-building or long-horizon navigation, VG-AVS focuses on the immediate, fine-grained "ambulatory vision"—the ability to make small, intelligent adjustments to viewpoint to resolve occlusion or ambiguity.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Continuous Action Space</h3>
            <p className="text-slate-700 mb-4">
              We define a continuous action space consisting of:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <li><strong>Heading Rotation (φ<sup>h</sup>):</strong> Azimuthal turn relative to current orientation.</li>
              <li><strong>Forward Translation (d):</strong> Distance to move forward.</li>
              <li><strong>View Rotation (φ<sup>v</sup>):</strong> Final head turn to center the object of interest.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Training Strategy</h3>
            <p className="text-slate-700">
              We employ a two-stage training process:
            </p>
            <ol className="list-decimal list-inside space-y-4 mt-4 text-slate-700">
              <li className="pl-2">
                <span className="font-semibold text-slate-900">Supervised Fine-Tuning (SFT):</span>
                Initializes the model using ground-truth actions derived from our synthetic dataset.
              </li>
              <li className="pl-2">
                <span className="font-semibold text-slate-900">Reinforcement Learning (RL):</span>
                Further refines the policy using a verifier-based reward, allowing the model to generalize beyond the training distribution and optimize for answerability.
              </li>
            </ol>
          </div>
        </div>

        <Figure
          src="/figures/method_overview.png"
          alt="Training Pipeline"
          caption={
            <span>
              <strong>Figure 1.</strong> Overview of training strategies. (Top) SFT trains the model to predict ground-truth actions. (Bottom) RL allows the model to explore and is rewarded when the final view enables a frozen VLM verifier to correctly answer the question.
            </span>
          }
        />
      </div>
    </section>
  );
};