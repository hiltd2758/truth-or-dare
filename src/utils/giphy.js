// utils/giphy.js
const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_KEY;

export const KEYWORD_MAP = {
    // CẢM XÚC
    "xấu hổ": "embarrassed hiding face",
    "khóc": "crying tears",
    "hối hận": "regret sad",
    "tự ti": "insecure nervous",
    "tự hào": "proud celebration",
    "sợ": "scared afraid",
    "ghen": "jealous angry",
    "cô đơn": "lonely sad",
    "vui": "happy joy",
    "tức giận": "angry furious",
    "xúc động": "touched emotional",

    // TÌNH CẢM / QUAN HỆ
    "crush": "love heart eyes",
    "thích": "crush blushing",
    "người yêu": "couple kiss romance",
    "người yêu cũ": "ex relationship over",
    "bạn thân": "best friends hug",
    "hôn": "kiss romance",
    "phản bội": "betrayal shocked",
    "chia tay": "breakup sad crying",
    "yêu": "love heart",
    "thả thính": "flirting wink",
    "mập mờ": "confused relationship",
    "quay lại": "back together reunion",
    "ngoại tình": "cheating caught",
    "tay ba": "love triangle drama",

    // HÀNH ĐỘNG XÃ HỘI
    "nói dối": "lying pinocchio",
    "stalk": "stalking spying",
    "gọi điện": "phone call talking",
    "nhắn tin": "texting phone",
    "block": "blocked phone",
    "ghost": "ghosting disappear",
    "đổi": "swap exchange",
    "tuyên bố": "announcement statement",
    "xin lỗi": "apologize sorry bow",
    "từ chối": "rejected no",
    "cầu hôn": "proposal ring",

    // VUI CHƠI / TIỆC
    "say": "drunk stumbling",
    "uống": "drinking cheers toast",
    "nhậu": "drinking party",
    "hát": "singing microphone",
    "nhảy": "dancing celebration",
    "karaoke": "karaoke singing",
    "tiệc": "party celebrate",
    "bar": "bar nightclub drinks",

    // THÂN THỂ / NGOẠI HÌNH
    "trang điểm": "makeup beauty",
    "soi gương": "mirror vain",
    "tóc": "hair style",
    "ăn": "eating delicious",
    "ngủ": "sleeping snoring",
    "tập thể dục": "workout exercise gym",
    "plank": "plank exercise",
    "squat": "squat workout",
    "hít đất": "push up exercise",

    // TIỀN BẠC / CÔNG VIỆC
    "tiền": "money rich",
    "lương": "salary money paycheck",
    "mua": "shopping bags",
    "sếp": "boss angry office",
    "công ty": "office work corporate",
    "nghỉ việc": "quit job walking away",
    "phỏng vấn": "interview nervous suit",
    "freelance": "freelancer laptop coffee",
    "quỹ đen": "secret money hiding",

    // CÔNG NGHỆ / IT
    "deadline": "stressed deadline panic",
    "code": "coding programmer typing",
    "bug": "bug error fail facepalm",
    "commit": "working computer",
    "cv": "resume job interview",
    "gpa": "studying grades school",
    "thức khuya": "staying up late tired",
    "copy": "cheating copying exam",
    "debug": "debugging confused computer",
    "github": "github coding",
    "hackathon": "hackathon coding team",
    "intern": "intern nervous work",
    "ai": "robot ai technology",
    "chatgpt": "chatbot ai robot",

    // BÍ MẬT / DRAMA
    "bí mật": "secret shh whisper",
    "scandal": "drama shocked gasp",
    "lộ": "exposed caught shocked",
    "thật ra": "reveal truth shocked",

    // MẠNG XÃ HỘI
    "instagram": "instagram selfie",
    "facebook": "facebook scrolling",
    "tiktok": "tiktok dancing",
    "linkedin": "linkedin professional",
    "zalo": "phone chat",
    "story": "social media post",
    "like": "heart like thumbs up",
    "ảnh": "photo camera selfie",

    // HÀNH ĐỘNG VUI / THÁCH THỨC
    "vẽ": "drawing art creative",
    "nói": "talking speech",
    "tự tin": "confident proud",
    "catwalk": "catwalk model runway",
    "robot": "robot stiff dance",
    "yoga": "yoga meditation",
    "massage": "massage relax",
    "câu cá": "fishing relaxing",
    "bơi": "swimming water",
    "nhắm mắt": "eyes closed blindfolded",

    // GIA ĐÌNH
    "bố mẹ": "parents family",
    "mẹ": "mom family love",
    "gia đình": "family together",

    // TRƯỜNG HỌC
    "thầy cô": "teacher strict school",
    "bài tập": "homework stressed",
    "thi": "exam stress study",
    "lớp": "classroom school",
    "đồ án": "project group work",

    " thể dục": "do exercise",
    "GPA" : "GPA point",
    "PHP" : "PHP language programming",
    "livestream" : "livestream",

    "nghiện": "addicted",
    "giấc mơ": "dream"
};

export function getGifTag(question = "", isTrue = true) {
    const q = question.toLowerCase();

    for (const [vn, en] of Object.entries(KEYWORD_MAP)) {
        if (q.includes(vn)) return en;
    }

    return isTrue ? "truth dare funny" : "challenge dare funny";
}


export async function getTenorGIF(searchTag = "funny") {
    try {
        const url = new URL("https://api.giphy.com/v1/gifs/random");
        url.searchParams.set("api_key", GIPHY_API_KEY);
        url.searchParams.set("tag", searchTag);
        url.searchParams.set("rating", "pg-13");

        const res = await fetch(url.toString());
        if (!res.ok) throw new Error(`Giphy ${res.status}`);

        const { data } = await res.json();

        // Ưu tiên downsized (nhỏ, load nhanh) → fallback original
        return (
            data?.images?.downsized?.url ??
            data?.images?.fixed_height?.url ??
            data?.images?.original?.url ??
            null
        );
    } catch (err) {
        console.warn("GIF fetch failed:", err.message);
        return null;
    }
}