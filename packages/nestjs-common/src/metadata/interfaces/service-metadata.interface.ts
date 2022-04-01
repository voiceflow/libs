/** Public metadata for a service. */
export interface ServiceMetadata {
  metadata: {
    version: string;
    buildNumber: string;
    gitSha: string;
  };
}
