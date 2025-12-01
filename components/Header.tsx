import React from 'react';
import { PAPER_TITLE, CONFERENCE } from '../constants';
import { Button } from './Button';
import { Icons } from './Icons';

export const Header: React.FC = () => {
  return (
    <header className="py-16 md:py-24 text-center px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
        {PAPER_TITLE}
      </h1>
      {/* <p className="text-xl md:text-2xl text-slate-600 mb-8 font-medium">
        {CONFERENCE}
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Button variant="primary" icon={<Icons.Paper />}>
          Paper
        </Button>
        <Button variant="secondary" icon={<Icons.Code />}>
          Code
        </Button>
        <Button variant="secondary" icon={<Icons.Data />}>
          Dataset
        </Button>
      </div>

      <div className="text-slate-500 text-sm">
        Anonymous Authors
      </div> */}
    </header>
  );
};