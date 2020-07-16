declare const tslintPlugin: () => void;

declare module '@voiceflow/database' {}

declare module '@voiceflow/database/initializeTest' {
  export default tslintPlugin;
}
