export const LANGUAGES = [
    { label: "Russian", code: "ru" },
    { label: "English", code: "en" },
];

export const currentURL =
    import.meta.env.MODE === "development"
        ? "http://172.27.33.20:5173"
        : "cryptoroll.com";
