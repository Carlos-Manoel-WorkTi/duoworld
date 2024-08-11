import { WordData } from "../DTOs/WordData";

const DataWords = {
  "header": ["origem", "tradução", "fala", "classe", "tempo", "timeCreate"], // Adiciona timeCreate ao header
  "date": "2024-08-08",
  "data": [
    {
      "origem": "hello",
      "tradução": "olá",
      "fala": "relou",
      "classe": "substantivo",
      "tempo": "presente",
      "timeCreate": "2024-08-08T10:00:00Z" // Adiciona timeCreate para cada item
    },
    {
      "origem": "run",
      "tradução": "correr",
      "fala": "rruan",
      "classe": "verbo",
      "tempo": "presente",
      "timeCreate": "2024-08-08T10:05:00Z" // Adiciona timeCreate para cada item
    },
    {
      "origem": "book",
      "tradução": "livro",
      "fala": "buuk",
      "classe": "substantivo",
      "tempo": "presente",
      "timeCreate": "2024-08-08T10:10:00Z" // Adiciona timeCreate para cada item
    },
    {
      "origem": "quickly",
      "tradução": "rapidamente",
      "fala": "advérbio",
      "classe": "advérbio",
      "tempo": "presente",
      "timeCreate": "2024-08-08T10:15:00Z" // Adiciona timeCreate para cada item
    },
    {
      "origem": "beautiful",
      "tradução": "linda",
      "fala": "biarifu",
      "classe": "adjetivo",
      "tempo": "presente",
      "timeCreate": "2024-08-08T10:20:00Z" // Adiciona timeCreate para cada item
    },
    {
      "origem": "die",
      "tradução": "morrer",
      "fala": "dai",
      "classe": "verbo",
      "tempo": "presente",
      "timeCreate": "2024-08-08T10:25:00Z" // Adiciona timeCreate para cada item
    },
    {
      "origem": "the",
      "tradução": "o/a",
      "fala": "dê",
      "classe": "adjetivo",
      "tempo": "presente",
      "timeCreate": "2024-08-08T10:30:00Z" // Adiciona timeCreate para cada item
    }
  ] as WordData[]
}

export default DataWords;
