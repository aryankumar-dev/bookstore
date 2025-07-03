import fs from 'fs/promises';

export const readJSON = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
};

export const writeJSON = async (path, data) => {
  await fs.writeFile(path, JSON.stringify(data, null, 2));
};
