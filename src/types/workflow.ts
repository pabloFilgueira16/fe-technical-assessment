import type { Tag } from './tags';

export interface Workflow {
  id: string;
  type: 'agent' | 'workflow';
  lastUpdated: string; // ISO date string
  name: string;
  tags: Tag[]
}
