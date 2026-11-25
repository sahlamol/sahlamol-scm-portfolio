// All portfolio content lives here. Edit this file to update the site.
export const profile = {
  name: "Sahlamol V B",
  title: "S&OP · Supply Planning · Demand Planning",
  headline: "I turn forecast, stock and shortfall data into monthly S&OP decisions with named owners.",
  intro:
    "Entry-level supply chain analyst with SAP MM plant experience and two end-to-end planning projects built in MySQL, Excel, Python and PowerPoint. I balance supply against demand, root-cause stockouts, and allocate short supply with the customer in mind. Currently pursuing an online MBA in Operations Management.",
  location: "Thodupuzha, Kerala, India (near Kochi). Open to relocation and onsite work",
  email: "sahlabasheer09@gmail.com",
  linkedin: "https://www.linkedin.com/in/sahlamol",
  targetRoles: ["Supply Chain Analyst", "S&OP / Supply Planning", "Demand Planning", "Procurement"],
  files: {
    report: "/files/Inventory_Planning_SOP_Analytics_Report.pdf",
    deck: "/files/SOP_Review_Pack.pptx"
  }
};

export const kpis = [
  { value: "45%", label: "Forecast error cut", note: "WAPE 18.6% → 10.2%, 2025 hold-out" },
  { value: "100%", label: "Tier 1 customer fill", note: "up from 84.7% (+15.3 pts)" },
  { value: "107", label: "Shortfalls flagged", note: "of 360 SKU-warehouse-months" },
  { value: "68→88%", label: "Inventory accuracy", note: "150 SKUs, 4 weeks (internship)" }
];

export const projects = [
  {
    id: "sop",
    name: "Inventory Planning and S&OP Analytics",
    tag: "Featured · 2026",
    tools: ["MySQL 8", "Excel", "PowerPoint"],
    problem: "A planning team needs to know whether its forecast beats a benchmark, where supply and demand are out of balance, why stockouts happen, and what the monthly S&OP review should decide.",
    approach: "Analysed two synthetic datasets separately: 100 items with 7 years of daily demand, and 20 SKUs across 2 warehouses over 250 days. Built a re-runnable SQL pipeline, an Excel workbook with live formulas, and a 6-slide mock S&OP review pack.",
    contribution: [
      "Built a seasonal-index forecast in MySQL that beat naive on all 100 items.",
      "Built a monthly supply plan comparing stock plus arrivals against forecast and safety stock.",
      "Root-caused 1,178 stockout days across 20 SKUs.",
      "Tested forecast errors beyond 3 standard deviations to flag anomalies for review with Sales.",
      "Set safety stock, reorder point and EOQ by ABC-XYZ segment; flagged 3 low-value erratic items for SKU rationalization.",
      "Wrote 7 recommended actions, each with a named owner, and an A/B/C allocation rule for short supply."
    ],
    results: [
      ["Forecast error (WAPE)", "18.6% → 10.2%"],
      ["Shortfalls flagged", "107 of 360 (~30%)"],
      ["Under-buffered SKU-warehouses", "13 of 40 (33%)"],
      ["Stockout days from forecast misses", "38% (46% of cost)"],
      ["Forecast anomalies flagged", "29 (20 unexplained)"]
    ],
    note: "Synthetic data. Results demonstrate method, not real company performance."
  },
  {
    id: "alloc",
    name: "Forecast Accountability and Constrained Allocation",
    tag: "2026",
    tools: ["Python", "MySQL", "Excel"],
    problem: "When supply is short, which customers get stock first, and how much shortfall can be recovered from orders that are blocked?",
    approach: "Compared tiered priority-first allocation against proportional and fair-share rules in 3 scenarios: supply delay, demand spike and new key account.",
    contribution: [
      "Lifted Tier 1 customer fill from 84.7% to 100% (+15.3 pts) using priority-first allocation.",
      "Found 39,554 blocked order lines and released them by tier in MySQL on 180K+ order lines, recovering 12.1% of shortfall."
    ],
    results: [
      ["Tier 1 fill", "84.7% → 100%"],
      ["Shortfall recovered", "12.1%"],
      ["Blocked order lines found", "39,554"]
    ],
    note: "Demand is synthetic, sales owners are simulated, DataCo orders are real, and the 85% supply cap is an assumption."
  }
];

export const rootCause = [
  { label: "Forecast miss", pct: 37.7 },
  { label: "Other / unexplained", pct: 31.3 },
  { label: "Long lead time", pct: 22.3 },
  { label: "Low buffer", pct: 8.7 }
];

export const actions = [
  ["Adopt a seasonal-index baseline forecast", "Demand Planning"],
  ["Review unexplained anomalies and forecast-miss SKUs with Sales", "Demand Planner / Sales"],
  ["Raise safety stock on the 13 under-buffered SKU-warehouses", "Supply Planner"],
  ["Weekly review of class A; lean policy or rationalisation for CZ", "Supply Planner / Product Mgmt"],
  ["Protect class A stock; agree a minimum-fill floor for class C", "S&OP lead"],
  ["Review long-lead-time SKUs (lead-time risk)", "Logistics Planning"],
  ["Bring the 107 shortfall SKU-months to the monthly review", "S&OP lead"]
];

export const experience = [
  {
    role: "Documentation and Logistics Intern", org: "Shreeji Translogistics Ltd, Chennai", when: "Feb 2025",
    points: [
      "Achieved zero customs delays on 3-5 weekly air freight consignments by preparing EXW, CIF and DDP documents and coordinating 3 stakeholders per shipment.",
      "Cut follow-up queries by 25% by tracking shipments against plan and root-causing missing documents."
    ]
  },
  {
    role: "Shipping and Logistics Trainee", org: "General Shipping and Logistics, Cochin", when: "Apr – May 2024",
    points: [
      "Raised inventory accuracy by 20 points (68% to 88%) across 150 SKUs in 4 weeks with an Excel tracking workflow built with warehouse teams.",
      "Informed supplier selection by benchmarking 5-6 vendors on unit cost."
    ]
  },
  {
    role: "Warehouse Management Trainee", org: "Ajmi Flour Mills (India) Pvt Ltd, Kottayam", when: "May 2023",
    points: [
      "Cut Goods Receipt to QC handoff time by 50% (8 to 4 hours) by root-causing delays through KPI analysis; plant management adopted the change.",
      "Performed master data maintenance (PO, vendor and material master) in SAP MM, validating 30 records, by running PR, PO and GR/GI postings in a continuous-process mill."
    ]
  }
];

export const skills = [
  { group: "Planning", items: ["S&OP", "Supply and demand balancing", "Shortfall analysis", "Stockout root cause", "Allocation strategy", "Cross-functional action tracking"] },
  { group: "Demand", items: ["Demand forecasting", "WAPE", "Bias", "FVA", "Anomaly review", "Order inflow vs forecast"] },
  { group: "Inventory", items: ["ABC-XYZ segmentation", "Safety stock", "Reorder point", "EOQ", "SKU rationalization", "Master data accuracy"] },
  { group: "Systems and tools", items: ["SAP MM (internship)", "SAP S/4HANA (coursework)", "Excel", "PowerPoint", "SQL (MySQL)", "Python (pandas)", "Power BI"] }
];
export const learning = "Learning, not yet hands-on: SAP APO SNP and IBP.";

export const education = [
  { name: "MBA, Operations Management (online)", org: "Manipal University Jaipur", when: "Expected 2028" },
  { name: "B.Voc, Logistics Management", org: "Nirmala College, Muvattupuzha", when: "2025 · CGPA 8.67/10" },
  { name: "2nd Rank Holder", org: "Mahatma Gandhi University (B.Voc)", when: "2025" }
];
export const certifications = [
  ["Supply Chain Management Specialization", "Rutgers (Coursera)", "2026"],
  ["Supply Chain Software Tools", "Unilever (Coursera)", "2026"],
  ["Data Visualization with Power BI", "Microsoft (Coursera)", "2026"],
  ["Sourcing and Procurement in SAP S/4HANA", "SAP", "2025"],
  ["Advanced MS Excel", "Microsoft", "2025"]
];
