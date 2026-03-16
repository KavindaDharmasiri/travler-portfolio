import { NextResponse } from 'next/server';

const services = [
  {
    id: 1,
    title: 'Strategic Consulting',
    description: 'Expert services to navigate complex market dynamics and optimize high-impact decision-making for growth.',
    icon: 'chart',
    features: [
      'Market Analysis',
      'Business Strategy',
      'Risk Management',
      'Performance Optimization'
    ]
  },
  {
    id: 2,
    title: 'Digital Infrastructure',
    description: 'Custom cloud-based solutions and scalable enterprise software architecture for the modern digital landscape.',
    icon: 'cloud',
    features: [
      'Cloud Migration',
      'System Architecture',
      'DevOps Solutions',
      'Infrastructure Security'
    ]
  },
  {
    id: 3,
    title: 'Asset Intelligence',
    description: 'Maximizing portfolio value through data-driven investment strategies and risk management.',
    icon: 'analytics',
    features: [
      'Portfolio Management',
      'Predictive Analytics',
      'Investment Strategy',
      'Risk Assessment'
    ]
  }
];

export async function GET() {
  return NextResponse.json(services);
}
