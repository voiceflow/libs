import Ajv from "ajv";

export const validateAJV = (schema: Record<string, any>) => (value): boolean => (
  !!(new Ajv({ allErrors: true })).compile(schema)(value)
);

export const inherit = (parent: Record<string, any>, derivedSchema: Record<string, any>) => ({
  type: derivedSchema.type ?? parent.type,
  required: Array.from(
    new Set([
      ...(derivedSchema.required ?? []), 
      ...(parent.required ?? [])
    ])
  ),
  additionalProperties: derivedSchema.additionalProperties ?? parent.additionalProperties,
  properties: [
    ...Object.entries(parent.properties),
    ...Object.entries(derivedSchema.properties)
  ].reduce((acc, [propName, declare]) => ({
    ...acc,
    [propName]: declare
  }), {})
});
