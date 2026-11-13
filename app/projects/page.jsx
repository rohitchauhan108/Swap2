import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { ProjectsView } from '@/views/PageViews';

export const metadata = { title: 'Projects' };

const imageExtensions = new Set(['.avif', '.gif', '.jpg', '.jpeg', '.png', '.webp']);

async function getProjectImageFiles() {
  const projectsDirectory = path.join(process.cwd(), 'public', 'projects');
  let folders;

  try {
    folders = await readdir(projectsDirectory, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') return {};
    throw error;
  }

  const projectImages = await Promise.all(
    folders
      .filter((folder) => folder.isDirectory())
      .map(async (folder) => {
        try {
          const files = await readdir(path.join(projectsDirectory, folder.name), { withFileTypes: true });
          return [
            folder.name,
            files
              .filter(
                (file) =>
                  file.isFile() && imageExtensions.has(path.extname(file.name).toLowerCase())
              )
              .map((file) => file.name)
              .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })),
          ];
        } catch (error) {
          if (error.code === 'ENOENT') return [folder.name, []];
          throw error;
        }
      })
  );

  return Object.fromEntries(projectImages);
}

export default async function Page({ searchParams }) {
  const imageFiles = await getProjectImageFiles();
  const { category } = await searchParams;
  return <ProjectsView imageFiles={imageFiles} initialCategory={category} />;
}
