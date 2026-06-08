export type LifecycleStage = 'submitted' | 'processed' | 'confirmed' | 'finalized' | 'failed';

export type LifecycleEvent = {
  bundleId: string;
  stage: LifecycleStage;
  slot?: number;
  timestamp: string;
  notes?: string;
};

export function createLifecycleEvent(input: Omit<LifecycleEvent, 'timestamp'>): LifecycleEvent {
  return { ...input, timestamp: new Date().toISOString() };
}
