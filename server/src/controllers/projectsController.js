import { db } from '../db/prisma.js';

export async function getAllProjects(req, res, next) {
  try {
    const projects = await db.getProjects();
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    next(error);
  }
}

export async function getProjectById(req, res, next) {
  try {
    const { id } = req.params;
    const project = await db.getProjectBySlugOrId(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        error: `Project not found with identifier: ${id}`,
      });
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    next(error);
  }
}
