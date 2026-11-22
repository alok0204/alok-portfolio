import { initialProjects } from '../config/portfolioData';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export async function fetchHealth() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/health`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });
    if (!res.ok) throw new Error(`Health check failed with status ${res.status}`);
    return await res.json();
  } catch (error) {
    console.warn('Backend health check error:', error.message);
    return { status: 'offline', error: error.message };
  }
}

export async function fetchProjects() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(`${API_BASE_URL}/api/projects`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`Failed to fetch projects (HTTP ${res.status})`);
    }

    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      return { data, source: 'backend' };
    }
    if (data.data && Array.isArray(data.data) && data.data.length > 0) {
      return { data: data.data, source: 'backend' };
    }
    return { data: initialProjects, source: 'seed-fallback' };
  } catch (error) {
    console.info('Backend API notice: falling back to client-side project data while server connects.', error.message);
    return { data: initialProjects, source: 'offline-fallback', error: error.message };
  }
}

export async function fetchProjectById(id) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/projects/${id}`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });
    if (!res.ok) throw new Error(`Project not found (HTTP ${res.status})`);
    return await res.json();
  } catch (error) {
    const fallback = initialProjects.find(p => p.id === id || p.slug === id);
    if (fallback) return { data: fallback };
    throw error;
  }
}

export async function sendContactMessage(payload) {
  const res = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const responseData = await res.json().catch(() => null);

  if (!res.ok) {
    const errorMessage = responseData?.error || responseData?.message || `Error ${res.status}: Failed to deliver message`;
    const details = responseData?.errors ? responseData.errors.map(e => e.msg || e.message).join(', ') : null;
    throw new Error(details ? `${errorMessage}: ${details}` : errorMessage);
  }

  return responseData;
}
