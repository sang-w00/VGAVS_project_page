import React from 'react';

export interface ChartDataPoint {
  name: string;
  score: number;
  fill?: string;
}

export interface Author {
  name: string;
  affiliation?: string;
  url?: string;
}

export interface PaperSection {
  id: string;
  title: string;
  component: React.ReactNode;
}

export interface QualitativeExample {
  id: string;
  dataset: 'ProcTHOR' | 'HM3D';
  category: 'Existence' | 'Counting' | 'State' | 'Attribute' | 'Object';
  question: string;
  think: string;
  action: string;
  imageAlt: string;
  queryImage?: string;
  targetImage?: string;
}

export interface TableRow {
  model: string;
  procthor: {
    exist: number;
    count: number;
    state: number;
    avg: number;
  };
  hm3d: {
    exist: number;
    count: number;
    state: number;
    attr: number;
    obj: number;
    avg: number;
  };
  highlight?: boolean;
}