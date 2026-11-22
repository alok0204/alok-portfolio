import { PrismaClient } from '@prisma/client';

let prisma;
let isPrismaAvailable = false;

// Fallback in-memory store for when PostgreSQL is not yet connected locally
const memoryStore = {
  projects: [
    {
      id: 'proj-1',
      title: 'Campus Connect',
      slug: 'campus-connect',
      description: 'A student-focused project named Campus Connect.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      imageUrl: null,
      githubUrl: 'https://github.com/alok0204/CampusConnect',
      liveUrl: null,
      featured: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'proj-2',
      title: 'Habit Tracker',
      slug: 'habit-tracker',
      description: 'A personal project focused on tracking activities and building consistent habits.',
      technologies: ['Planning / In Progress'],
      imageUrl: null,
      githubUrl: null,
      liveUrl: null,
      featured: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  contactMessages: [],
};

if (process.env.DATABASE_URL) {
  try {
    prisma = new PrismaClient();
    // Test connectivity
    prisma.$connect()
      .then(() => {
        isPrismaAvailable = true;
        console.log('✓ Successfully connected to PostgreSQL via Prisma ORM.');
      })
      .catch((err) => {
        console.warn('! PostgreSQL connection pending or unreachable, using active in-memory repository store:', err.message);
      });
  } catch (err) {
    console.warn('! PrismaClient initialization warning:', err.message);
  }
} else {
  console.info('ℹ DATABASE_URL not set in local environment; using built-in verified project repository.');
}

export const db = {
  async getProjects() {
    if (isPrismaAvailable && prisma) {
      try {
        return await prisma.project.findMany({
          orderBy: { createdAt: 'desc' },
        });
      } catch (err) {
        console.warn('Prisma query error, falling back to repository store:', err.message);
      }
    }
    return memoryStore.projects;
  },

  async getProjectBySlugOrId(identifier) {
    if (isPrismaAvailable && prisma) {
      try {
        const found = await prisma.project.findFirst({
          where: {
            OR: [{ id: identifier }, { slug: identifier }],
          },
        });
        if (found) return found;
      } catch (err) {
        console.warn('Prisma query error, falling back:', err.message);
      }
    }
    return memoryStore.projects.find((p) => p.id === identifier || p.slug === identifier) || null;
  },

  async createContactMessage({ name, email, message }) {
    if (isPrismaAvailable && prisma) {
      try {
        return await prisma.contactMessage.create({
          data: { name, email, message },
        });
      } catch (err) {
        console.warn('Prisma insertion error, saving to memory repository:', err.message);
      }
    }
    const newMessage = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name,
      email,
      message,
      createdAt: new Date(),
    };
    memoryStore.contactMessages.push(newMessage);
    return newMessage;
  },

  isDbConnected() {
    return isPrismaAvailable;
  },
};

export default prisma;
