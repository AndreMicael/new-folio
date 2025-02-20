
export async function fetchProjetos() {
    const response = await fetch("http://localhost:3000/api/projetos");
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    
    const data = await response.json();
    return data.data || [];
  }