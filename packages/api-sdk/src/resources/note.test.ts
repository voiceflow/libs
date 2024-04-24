import { describe, expect, it, vi } from 'vitest';

import Note from './note';

const NOTE = { id: 'qwe', text: 'text', mentions: [1, 2], meta: {} };

const createClient = () => {
  const fetch = {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    patch: vi.fn(),
    delete: vi.fn(),
  };

  const resource = new Note(fetch as any);

  return {
    fetch,
    resource,
  };
};

describe('NoteResource', () => {
  it('.upsert', async () => {
    const { fetch, resource } = createClient();

    fetch.put.mockResolvedValue({ data: NOTE });

    const data = await resource.upsert('1', NOTE as any);

    expect(fetch.put).toHaveBeenCalledTimes(1);
    expect(fetch.put).toHaveBeenCalledWith('notes/1', { note: NOTE });
    expect(data).toBe(NOTE);
  });

  it('.delete', async () => {
    const { fetch, resource } = createClient();

    await resource.delete('1', 'qwe');

    expect(fetch.delete).toHaveBeenCalledTimes(1);
    expect(fetch.delete).toHaveBeenCalledWith('notes/1/qwe');
  });
});
