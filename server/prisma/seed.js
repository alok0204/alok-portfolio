import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const initialProjects = [
  {
    title: 'Campus Connect',
    slug: 'campus-connect',
    description: 'A student-focused project named Campus Connect.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    imageUrl: null,
    githubUrl: 'https://github.com/alok0204/CampusConnect',
    liveUrl: null,
    featured: true,
  },
  {
    title: 'Habit Tracker',
    slug: 'habit-tracker',
    description: 'A personal project focused on tracking activities and building consistent habits.',
    technologies: ['Planning / In Progress'],
    imageUrl: null,
    githubUrl: null, // Placeholder - pending public release
    liveUrl: null,
    featured: true,
  },
];

async function main() {
  console.log('Seeding initial portfolio projects...');

  for (const proj of initialProjects) {
    const upserted = await prisma.project.upsert({
      where: { slug: proj.slug },
      update: {
        title: proj.title,
        description: proj.description,
        technologies: proj.technologies,
        imageUrl: proj.imageUrl,
        githubUrl: proj.githubUrl,
        liveUrl: proj.liveUrl,
        featured: proj.featured,
      },
      create: proj,
    });
    console.log(`- Upserted project: ${upserted.title} (${upserted.slug})`);
  }

  console.log('Database seeding completed successfully.');
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
