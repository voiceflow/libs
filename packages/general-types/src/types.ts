export interface Prompt<V> {
  desc?: string; // desc when voice is 'audio'
  voice: V;
  content: string;
}
