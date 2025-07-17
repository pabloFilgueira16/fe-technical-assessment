import type { Workflow } from '../types/workflow';


export const sampleWorkflows: Workflow[] = [
  {
    id: '1',
    type: 'agent',
    lastUpdated: '2024-06-01T10:00:00Z',
    name: '📄 Article Writer',
    tags: [{ id: 't3', name: 'Test', color: '#8D33FF' }],
  },
  {
    id: '2',
    lastUpdated: '2024-06-02T12:30:00Z',
    name: '📄 Order Processing - Subproject',
    tags: [{ id: 't3', name: 'Test', color: '#8D33FF' }],
    type: 'agent'
  },
  {
    id: '3',
    lastUpdated: '2024-06-03T09:15:00Z',
    name: '💡 FAQ Assistant',
    tags: [{ id: 't4', name: 'faq', color: '#33FF57' }],
    type: 'workflow'
  },
  {
    id: '4',
    type: 'workflow',
    tags: [],
    lastUpdated: '2024-06-04T14:45:00Z',
    name: '💡 Lead Qualification',
  },
  {
    id: '5',
    type: 'agent',
    lastUpdated: '2024-06-05T08:20:00Z',
    name: '🍎 Appointment Scheduler',
    tags: [{ id: 't7', name: 'feedback', color: '#33FFEC' }],
  },
  {
    id: '6',
    type: 'workflow',
    lastUpdated: '2024-06-06T16:10:00Z',
    name: '🍎 Feedback Collection',
    tags: [{ id: 't8', name: 'survey', color: '#FF8C33' }, { id: 't6', name: 'survey', color: '#4b33ffff' }],
  },
  {
    id: '7',
    type: 'agent',
    lastUpdated: '2024-06-07T11:00:00Z',
    name: '✏️ Content Editor',
    tags: [{ id: 't9', name: 'editor', color: '#FF33A8' }]
  },
  {
    id: '8',
    type: 'workflow',
    lastUpdated: '2024-06-08T13:30:00Z',
    name: '🍎 Event Organizer',
    tags: []
  },
  {
    id: '9',
    type: 'agent',
    lastUpdated: '2024-06-09T15:45:00Z',
    name: '📄 Invoice Generator',
    tags: [{ id: 't10', name: 'finance', color: '#33FFA8' }, { id: 't11', name: 'billing', color: '#FF3333' }]
  },
  {
    id: '10',
    type: 'workflow',
    lastUpdated: '2024-06-10T09:20:00Z',
    name: '✏️ Survey Builder',
    tags: [{ id: 't12', name: 'survey', color: '#338DFF' }]
  },
  {
    id: '11',
    type: 'agent',
    lastUpdated: '2024-06-11T17:05:00Z',
    name: '🍎 Meeting Coordinator',
    tags: [{ id: 't13', name: 'meeting', color: '#FFD133' }, { id: 't14', name: 'calendar', color: '#33FFD1' }]
  },
  {
    id: '12',
    type: 'workflow',
    lastUpdated: '2024-06-12T10:40:00Z',
    name: '📄 Report Compiler',
    tags: []
  },
  {
    id: '13',
    type: 'agent',
    lastUpdated: '2024-06-13T12:15:00Z',
    name: '✏️ Idea Collector',
    tags: [{ id: 't15', name: 'ideas', color: '#A833FF' }, { id: 't16', name: 'brainstorm', color: '#FF8D33' }, { id: 't17', name: 'notes', color: '#33FF8D' }]
  },
  {
    id: '14',
    type: 'workflow',
    lastUpdated: '2024-06-14T14:55:00Z',
    name: '🍎 Feedback Analyzer',
    tags: [{ id: 't18', name: 'feedback', color: '#FF338D' }]
  },
];