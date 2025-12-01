import { QualitativeExample, TableRow } from './types';

export const PAPER_TITLE = "Toward Ambulatory Vision: Learning Visually-Grounded Active View Selection";
export const CONFERENCE = "CVPR 2026 Submission #91";

export const TLDR_TEXT = "We introduce Visually Grounded Active View Selection (VG-AVS), enabling embodied agents to actively adjust their viewpoint for better Visual Question Answering using only current visual cues, achieving state-of-the-art performance on synthetic and real-world benchmarks.";

export const ABSTRACT_TEXT = `
Vision Language Models (VLMs) excel at visual question answering (VQA) but remain limited to snapshot vision, reasoning from static images. In contrast, embodied agents require ambulatory vision, actively moving to obtain more informative views. We introduce Visually Grounded Active View Selection (VG-AVS), a task that selects the most informative next viewpoint using only the visual information in the current image, without relying on scene memory or external knowledge. To support this task, we construct a synthetic dataset with automatically generated paired query–target views and question–answer prompts. We also propose a framework that fine-tunes pretrained VLMs through supervised fine-tuning (SFT) followed by RL-based policy optimization. Our approach achieves strong question answering performance based on viewpoint selection and generalizes robustly to unseen synthetic and real scenes. Furthermore, incorporating our learned VG-AVS framework into existing scene-exploration-based EQA systems improves downstream question-answering accuracy.
`;

export const BIBTEX = `@article{anonymous2026ambulatory,
  title={Toward Ambulatory Vision: Learning Visually-Grounded Active View Selection},
  author={Anonymous Authors},
  journal={CVPR Submission},
  year={2026}
}`;

export const CHART_DATA_PROCTHOR = [
  { name: 'No Action (Query)', score: 42.38, fill: '#94a3b8' },
  { name: 'Qwen2.5-VL-7B', score: 50.21, fill: '#94a3b8' },
  { name: 'ViLaSR', score: 45.42, fill: '#94a3b8' },
  { name: 'Fine-EQA', score: 53.32, fill: '#94a3b8' },
  { name: 'GPT-5', score: 72.09, fill: '#60a5fa' },
  { name: 'Gemini 2.5 Pro', score: 72.25, fill: '#60a5fa' },
  { name: 'Ours (SFT+RL)', score: 83.72, fill: '#2563eb' },
  { name: 'Target (Oracle)', score: 84.91, fill: '#cbd5e1' },
];

export const CHART_DATA_HM3D = [
  { name: 'No Action (Query)', score: 58.65, fill: '#94a3b8' },
  { name: 'Qwen2.5-VL-7B', score: 54.98, fill: '#94a3b8' },
  { name: 'ViLaSR', score: 53.90, fill: '#94a3b8' },
  { name: 'Fine-EQA', score: 54.72, fill: '#94a3b8' },
  { name: 'GPT-5', score: 64.91, fill: '#60a5fa' },
  { name: 'Gemini 2.5 Pro', score: 63.67, fill: '#60a5fa' },
  { name: 'Ours (SFT+RL)', score: 70.70, fill: '#2563eb' },
  { name: 'Target (Oracle)', score: 78.09, fill: '#cbd5e1' },
];

export const MAIN_RESULTS_DATA: TableRow[] = [
  {
    model: 'No Action (Query view)',
    procthor: { exist: 49.22, count: 16.36, state: 61.57, avg: 42.38 },
    hm3d: { exist: 67.50, count: 56.15, state: 54.59, attr: 66.67, obj: 48.33, avg: 58.65 }
  },
  {
    model: 'No Action (Target view)',
    procthor: { exist: 93.02, count: 69.14, state: 92.58, avg: 84.91 },
    hm3d: { exist: 86.67, count: 77.50, state: 80.00, attr: 74.48, obj: 71.79, avg: 78.09 }
  },
  {
    model: 'Qwen2.5-VL-7B (Backbone)',
    procthor: { exist: 64.34, count: 29.74, state: 56.55, avg: 50.21 },
    hm3d: { exist: 66.25, count: 46.15, state: 66.49, attr: 49.17, obj: 46.86, avg: 54.98 }
  },
  {
    model: 'ViLaSR (Spatial VLM)',
    procthor: { exist: 57.95, count: 25.46, state: 52.84, avg: 45.42 },
    hm3d: { exist: 68.33, count: 48.46, state: 52.70, attr: 50.00, obj: 50.00, avg: 53.90 }
  },
  {
    model: 'Fine-EQA',
    procthor: { exist: 63.57, count: 31.97, state: 64.41, avg: 53.32 },
    hm3d: { exist: 70.00, count: 52.31, state: 52.70, attr: 54.17, obj: 44.44, avg: 54.72 }
  },
  {
    model: 'GPT-5',
    procthor: { exist: 81.01, count: 55.58, state: 79.69, avg: 72.09 },
    hm3d: { exist: 76.67, count: 54.62, state: 65.95, attr: 65.83, obj: 60.00, avg: 64.91 }
  },
  {
    model: 'Gemini-2.5-Pro',
    procthor: { exist: 82.95, count: 52.79, state: 81.00, avg: 72.25 },
    hm3d: { exist: 74.17, count: 59.23, state: 60.81, attr: 64.17, obj: 60.00, avg: 63.67 }
  },
  {
    model: 'Ours (SFT+RL)',
    highlight: true,
    procthor: { exist: 91.47, count: 69.52, state: 90.17, avg: 83.72 },
    hm3d: { exist: 74.58, count: 71.54, state: 73.78, attr: 70.83, obj: 62.78, avg: 70.70 }
  }
];

export const QUALITATIVE_DATA: QualitativeExample[] = [
  // --- ProcTHOR Examples ---
  {
    id: 'pt-exist-1',
    dataset: 'ProcTHOR',
    category: 'Existence',
    question: "Choose an object that is present on the **bed**: \nA. bottle    B. teddy bear    C. pen    D. towel",
    think: "The task is to find an object on the bed. To do this, I need to exit the room by opening the door and then proceed to the bedroom. The door is slightly ajar, so I can see part of the adjacent room. The bedroom is located to the right of the current room, which means I should turn right. After exiting the room, I will be able to see the bed and search for the object there. ",
    action: "<head>73</head> <fwd>145</fwd> <view>-49</view>",
    imageAlt: "Finding teddy bear on bed",
    queryImage: "figures/procthor/procthor_1_query.png",   // Path starting from public/
    targetImage: "figures/procthor/procthor_1_target.png"
  },
  {
    id: 'pt-exist-2',
    dataset: 'ProcTHOR',
    category: 'Existence',
    question: "Choose an object that is present on the **dresser**: \nA. vase    B. potato    C. apple    D. faucet",
    think: "The task is to find an object on the dresser. To do this, I need to move towards the dresser. The dresser is located to the left of the door, so I should turn left and walk forward. Once there, I can look around to see if any of the objects on the dresser are visible. ",
    action: "<head>-64</head> <fwd>79</fwd> <view>21</view>",
    imageAlt: "Finding vase on dresser",
    queryImage: "figures/procthor/procthor_2_query.png",
    targetImage: "figures/procthor/procthor_2_target.png"
  },
  {
    id: 'pt-count-1',
    dataset: 'ProcTHOR',
    category: 'Counting',
    question: "How many bottles near the **TV stand**?",
    think: "I need to move towards the right side of the room where the TV stand is located. By rotating 76 degrees to the right, I can face the direction of the TV stand. Then, by moving forward 125 units, I will be closer to the TV stand. Finally I'll turn -44 degrees to the left to face the TV stand directly. ",
    action: "<head>76</head> <fwd>125</fwd> <view>-44</view>",
    imageAlt: "Counting bottles near TV stand",
    queryImage: "figures/procthor/procthor_3_query.png",
    targetImage: "figures/procthor/procthor_3_target.png"
  },
  {
    id: 'pt-count-2',
    dataset: 'ProcTHOR',
    category: 'Counting',
    question: "How many mugs are there on the **TV stand**?",
    think: "The TV stand is located to the upper left in the image. To see it, I need to turn my head to the left. After that, I should move forward until I can see the TV stand clearly. Once I'm close enough, I'll turn my head slightly to the right to focus on the mugs. ",
    action: "<head>-54</head> <fwd>145</fwd> <view>36</view>",
    imageAlt: "Counting mugs on TV stand",
    queryImage: "figures/procthor/procthor_4_query.png",
    targetImage: "figures/procthor/procthor_4_target.png"
  },
  {
    id: 'pt-state-1',
    dataset: 'ProcTHOR',
    category: 'State',
    question: "Choose a **faucet**'s state on the sink. \nA: turned off.    B: turned on.",
    think: "The faucet is on the left side of the sink, so I need to move towards it. The angle needed to get there is -57 degrees, which means I should turn left. After reaching the sink, I'll need to adjust my view slightly to the right by 26 degrees to see the faucet clearly. ",
    action: "<head>-57</head> <fwd>134</fwd> <view>26</view>",
    imageAlt: "Checking faucet state",
    queryImage: "figures/procthor/procthor_5_query.png",
    targetImage: "figures/procthor/procthor_5_target.png"
  },
  {
    id: 'pt-state-2',
    dataset: 'ProcTHOR',
    category: 'State',
    question: "Choose a **box**'s state on the dining table. \nA: closed.    B: opened.",
    think: "The table is on the left side of the image. To see the table, I need to turn to the left. Then, I can move forward to get closer to the table. Finally, I will turn slightly to the right to face the table. ",
    action: "<head>-67</head> <fwd>55</fwd> <view>24</view>",
    imageAlt: "Checking box state",
    queryImage: "figures/procthor/procthor_6_query.png",
    targetImage: "figures/procthor/procthor_6_target.png"
  },

  // --- HM3D Examples ---
  {
    id: 'hm-exist-1',
    dataset: 'HM3D',
    category: 'Existence',
    question: "Is there a **vase** on the **dining table** for the flowers?",
    think: "The table on the right side of the image is the dining table. The table is not fully visible, but the top right corner of the image shows part of it. To see the table, I need to turn to the right and move forward. ",
    action: "<head>94</head> <fwd>75</fwd> <view>-51</view>",
    imageAlt: "Real world dining table vase",
    queryImage: "figures/hm3d/hm_1_query.png",
    targetImage: "figures/hm3d/hm_1_target.png"
  },
  {
    id: 'hm-state-1',
    dataset: 'HM3D',
    category: 'State',
    question: "Did I leave the **refrigerator** door open in the kitchen?",
    think: "The refrigerator is on the left side of the image. To see it, I need to turn left and move forward.",
    action: "<head>-64</head> <fwd>127</fwd> <view>21</view>",
    imageAlt: "Real world refrigerator state",
    queryImage: "figures/hm3d/hm_2_query.png",
    targetImage: "figures/hm3d/hm_2_target.png"
  },
  {
    id: 'hm-attr-1',
    dataset: 'HM3D',
    category: 'Attribute',
    question: "Can you describe the hue of the **sizable pot** situated adjacent to the **entrance**?",
    think: "The sizable pot is located at the entrance, which is on the right side. To see it, I need to turn to the right and move towards the door.",
    action: "<head>64</head> <fwd>79</fwd> <view>-35</view>",
    imageAlt: "Real world pot hue",
    queryImage: "figures/hm3d/hm_3_query.png",
    targetImage: "figures/hm3d/hm_3_target.png"
  },
  {
    id: 'hm-exist-2',
    dataset: 'HM3D',
    category: 'Existence',
    question: "Are there any **suit jackets** hanging in the **closet**?",
    think: "The closet is on the right side, so I need to turn right and walk forward to get there.",
    action: "<head>46</head> <fwd>127</fwd> <view>-17</view>",
    imageAlt: "Real world closet check",
    queryImage: "figures/hm3d/hm_4_query.png",
    targetImage: "figures/hm3d/hm_4_target.png"
  },
  {
    id: 'hm-count-1',
    dataset: 'HM3D',
    category: 'Counting',
    question: "How many **decorative items** are hanging from the door handle next to the **stairs**?",
    think: "The door on the right side of the image is the one next to the stairs. I need to move towards it to see if there are any decorative items hanging from the door handle.",
    action: "<head>64</head> <fwd>125</fwd> <view>-42</view>",
    imageAlt: "Real world decorative items",
    queryImage: "figures/hm3d/hm_5_query.png",
    targetImage: "figures/hm3d/hm_5_target.png"
  },
  {
    id: 'hm-count-2',
    dataset: 'HM3D',
    category: 'Counting',
    question: "How many **framed pictures** are hanging on the wall near the **piano**?",
    think: "The framed picture is on the wall behind the piano. I need to move towards the piano to see it clearly.",
    action: "<head>-64</head> <fwd>145</fwd> <view>33</view>",
    imageAlt: "Real world framed pictures",
    queryImage: "figures/hm3d/hm_6_query.png",
    targetImage: "figures/hm3d/hm_6_target.png"
  },
  {
    id: 'hm-count-3',
    dataset: 'HM3D',
    category: 'Counting',
    question: "If I have six guests for dinner, how many **chairs** are available at the **dining table**?",
    think: "The dining table is located towards the right side of the room, and there are chairs visible on both sides of it. To see the entire table and the chairs, I need to move towards the right. ",
    action: "<head>67</head> <fwd>125</fwd> <view>-29</view>",
    imageAlt: "Real world dining chairs",
    queryImage: "figures/hm3d/hm_7_query.png",
    targetImage: "figures/hm3d/hm_7_target.png"
  },
  {
    id: 'hm-attr-2',
    dataset: 'HM3D',
    category: 'Attribute',
    question: "What is the **small lamp** next to the bed used for?",
    think: "The lamp is on the left side of the bed. I need to move towards it by turning left and then moving forward. After reaching the lamp, I will turn right slightly to face it directly.",
    action: "<head>-64</head> <fwd>125</fwd> <view>33</view>",
    imageAlt: "Real world small lamp",
    queryImage: "figures/hm3d/hm_8_query.png",
    targetImage: "figures/hm3d/hm_8_target.png"
  },
  {
    id: 'hm-attr-3',
    dataset: 'HM3D',
    category: 'Attribute',
    question: "What is the color of the **lamp shade** next to the **plant**?",
    think: "The plant is located on the far right side of the room, which is currently out of view. To see it, I need to turn right and move forward. This will allow me to see the plant and its lamp shade. ",
    action: "<head>67</head> <fwd>125</fwd> <view>-24</view>",
    imageAlt: "Real world lamp shade color",
    queryImage: "figures/hm3d/hm_9_query.png",
    targetImage: "figures/hm3d/hm_9_target.png"
  },
  {
    id: 'hm-state-2',
    dataset: 'HM3D',
    category: 'State',
    question: "Is the **dining table** set for dinner?",
    think: "The dining table is located in the area behind the sofa, which can be seen by looking towards the left.",
    action: "<head>-54</head> <fwd>167</fwd> <view>23</view>",
    imageAlt: "Real world dining table set",
    queryImage: "figures/hm3d/hm_10_query.png",
    targetImage: "figures/hm3d/hm_10_target.png"
  }
];