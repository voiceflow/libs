export type MarkupNode = string | { attributes: Record<string, unknown>; text: Markup };

export type Markup = Array<MarkupNode>;
