import { BaseTraceFrame, TraceType } from '@base-types/node/utils';
import { z } from 'zod';

export enum ContentType {
  IMAGE = 'image',
  JSON = 'json',
  PDF = 'pdf',
  TEXT = 'text',
  VIDEO = 'video',
  CAROUSEL = 'carousel',
}

export const BasePayload = z.object({
  contentType: z.nativeEnum(ContentType, {
    description: 'The type of data within the trace payload',
  }),
  content: z.unknown({
    description: 'The actual data of the trace payload',
  }),
});
export type BasePayload = z.infer<typeof BasePayload>;

export const ImagePayload = BasePayload.extend({
  contentType: z.literal(ContentType.IMAGE),
  content: z.string({
    description: 'The URL to the image content',
  }),
});
export type ImagePayload = z.infer<typeof ImagePayload>;

export const JSONPayload = BasePayload.extend({
  contentType: z.literal(ContentType.JSON),
  content: z.unknown({
    description: 'The JSON object in its parsed, object form',
  }),
});
export type JSONPayload = z.infer<typeof JSONPayload>;

export const PDFPayload = BasePayload.extend({
  contentType: z.literal(ContentType.PDF),
  content: z.string({
    description: 'The URL to the PDF file',
  }),
});
export type PDFPayload = z.infer<typeof PDFPayload>;

export const TextPayload = BasePayload.extend({
  contentType: z.literal(ContentType.TEXT),
  content: z.string({
    description: 'The text content',
  }),
});
export type TextPayload = z.infer<typeof TextPayload>;

export const VideoPayload = BasePayload.extend({
  contentType: z.literal(ContentType.VIDEO),
  content: z.string({
    description: 'The URL to the video content',
  }),
});
export type VideoPayload = z.infer<typeof VideoPayload>;

export const CarouselPayload = BasePayload.extend({
  contenType: z.literal(ContentType.CAROUSEL),
  content: z.object({}),
});

export const ResponsePayload = z.discriminatedUnion('contentType', [ImagePayload, JSONPayload, PDFPayload, TextPayload, VideoPayload]);
export type ResponsePayload = z.infer<typeof ResponsePayload>;

export interface TraceFrame extends BaseTraceFrame<ResponsePayload> {
  type: TraceType.RESPONSE;
}
