import { NextResponse } from 'next/server';

const insights = [
  {
    id: 1,
    date: 'January 15, 2025',
    title: 'Travlor Announces Strategic Partnership with Global Tech Alliance for Sustainable AI Development',
    excerpt: 'The partnership aims to accelerate the ethical intelligence across industries manufacturing various...',
    category: 'Partnership',
    readTime: '5 min read'
  },
  {
    id: 2,
    date: 'August 08, 2025',
    title: 'Q2 Financial Report: Record-Breaking Growth in Digital Services Division',
    excerpt: 'Q2 2025 Q2 earnings exceeded projections with a 48% YoY rise in annual recurring revenue for cloud-based...',
    category: 'Financial',
    readTime: '8 min read'
  }
];

export async function GET() {
  return NextResponse.json(insights);
}
