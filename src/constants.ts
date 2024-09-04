export const LANGUAGES = [
    { label: "Russian", code: "ru" },
    { label: "English", code: "en" },
];

export const currentURL =
    import.meta.env.MODE === "development" ? "http://localhost:5173" : "";
