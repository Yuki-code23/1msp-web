export type NewsItem = {
    id: string;
    date: string;
    title: string;
    category: string;
    content: string;
};

export const newsData: NewsItem[] = [
    {
        id: "1",
        date: "2024.12.01",
        title: "Webサイトをリニューアルしました。",
        category: "お知らせ",
        content: `
            <p>平素は格別のご高配を賜り、厚く御礼申し上げます。</p>
            <p>この度、当社Webサイトをリニューアルいたしました。</p>
            <p>今回のリニューアルでは、より見やすく、情報を分かりやすくお伝えできるWebサイトを目指しました。</p>
            <p>今後ともワンマイルサポート株式会社をよろしくお願い申し上げます。</p>
        `
    },
    {
        id: "2",
        date: "2024.11.15",
        title: "年末年始の営業について",
        category: "お知らせ",
        content: `
            <p>誠に勝手ながら、以下の期間を年末年始休業とさせていただきます。</p>
            <br>
            <p><strong>2024年12月29日（日） ～ 2025年1月3日（金）</strong></p>
            <br>
            <p>休業期間中にいただいたお問い合わせにつきましては、2025年1月4日（土）以降、順次対応させていただきます。</p>
            <p>ご不便をおかけいたしますが、何卒ご了承くださいますようお願い申し上げます。</p>
        `
    },
];
