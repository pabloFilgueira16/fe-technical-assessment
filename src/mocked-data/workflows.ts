import type { Workflow } from '../types/workflow';


export const sampleWorkflows: Workflow[] = [
  {
    id: '1',
    type: 'agent',
    lastUpdated: '2024-06-01T10:00:00Z',
    name: 'Customer Support Bot',
    tags: []
  },
  {
    id: '2',
    lastUpdated: '2024-06-02T12:30:00Z',
    name: 'Order Processing',
    tags: [{ id: 't3', name: 'orders', color: '#8D33FF' }],
    type: 'agent'
  },
  {
    id: '3',
    lastUpdated: '2024-06-03T09:15:00Z',
    name: 'FAQ Assistant',
    tags: [{ id: 't4', name: 'faq', color: '#33FF57' }],
    type: 'workflow'
  },
  {
    id: '4',
    type: 'workflow',
    tags: [],
    lastUpdated: '2024-06-04T14:45:00Z',
    name: 'Lead Qualification',
  },
  {
    id: '5',
    type: 'agent',
    lastUpdated: '2024-06-05T08:20:00Z',
    name: 'Appointment Scheduler',
    tags: [{ id: 't7', name: 'feedback', color: '#33FFEC' }],
  },
  {
    id: '6',
    type: 'workflow',
    lastUpdated: '2024-06-06T16:10:00Z',
    name: 'Feedback Collection',
    tags: [{ id: 't8', name: 'survey', color: '#FF8C33' }, { id: 't6', name: 'survey', color: '#4b33ffff' }],
  },
];