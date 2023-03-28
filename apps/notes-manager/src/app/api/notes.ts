const BASE_API = 'http://localhost:3000/notes';

export interface Note {
  id?: number;
  title: string;
  content: string;
  created_at: string;
}

export class NotesService {

  public static async fetchAll(): Promise<Note[]> {
    try {
      const response = await fetch(`${BASE_API}`);
      const notes = await response.json();
      return notes;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  public static async fetchById(id: number): Promise<Note | null> {
    try {
      const response = await fetch(`${BASE_API}/${id}`);
      const note = await response.json();
      return note;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public static async create(note: Note): Promise<Note> {
    try {
      const response = await fetch(`${BASE_API}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      });
      const newNote = await response.json();
      return newNote as Note;
    } catch (error) {
      console.error(error);
      return {} as Note;
    }
  }

  public static async deleteById(id: number): Promise<boolean> {
    try {
      await fetch(`${BASE_API}/${id}`, {
        method: 'DELETE'
      });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}