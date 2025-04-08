const API_BASE = process.env.REACT_APP_API_BASE;
export const fetchColors = async () => {
    const res = await fetch(`${API_BASE}/get-colors`);
    return res.json();
};

export const saveColor = async (name: string, red: number, green: number, blue: number) => {
    const res = await fetch(`${API_BASE}/save-color`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, red, green, blue}),
    });
    return res.json();
};

export async function deleteColor(id: number): Promise<void> {
    const res = await fetch(`${API_BASE}/delete-color/${id}`, {
        method: 'DELETE',
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error?.message || 'Failed to delete color');
    }
}
