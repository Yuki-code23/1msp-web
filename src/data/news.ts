export type NewsItem = {
    id: string;
    date: string;
    title: string;
    category: string;
};

export const newsData: NewsItem[] = [
    {
        id: "1",
        date: "2024.12.01",
        title: "Webサイトをリニューアルしました。",
        category: "お知らせ",
    },
    {
        id: "2",
        date: "2024.11.15",
        title: "年末年始の営業について",
        category: "お知らせ",
    },
];
