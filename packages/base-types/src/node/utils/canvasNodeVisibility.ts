export enum CanvasNodeVisibility {
  PREVIEW = 'preview',
  ALL_VARIANTS = 'all-variants',
}

export interface StepCanvasNodeVisibility {
  canvasVisibility?: CanvasNodeVisibility;
}
