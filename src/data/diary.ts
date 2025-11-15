// src/data/diary.ts
export type VideoType =
  | "raw"
  | "bilibili"
  | "bilibili-nano"
  | "youtube"
  | "douyin"
  | "douyin-wide"
  | "tiktok";

export interface DiaryEntry {
  text?: string;
  date: string;
  images?: string[];
  tags?: string[];
  location?: string;
  /** 与 VideoEmbed 保持一致 */
  video?: {
    type: VideoType;
    id: string; // BV 号 / YouTube ID / 原生 mp4 地址
    ratio?: string | number;
    poster?: string;
  };
  music?: {
    // 支持两种写法：
    // 1) 歌单  https://music.163.com/#/playlist?id=14273792576
    // 2) 单曲  https://music.163.com/#/song?id=xxxxxxx
    type: "playlist" | "song";
    id: string;
    lyric?: boolean; // 是否显示歌词
    theme?: "auto" | "dark" | "light";
    size?: "default" | "compact";
  };
}

export const diaryEntries: DiaryEntry[] = [
  {
    text: "测试音乐",
    date: "2025-11-15 22:01",
    music: {
      type: "song",
      id: "1957502053",
      lyric: true,
      //   theme: "auto",
      size: "compact",
    },
    tags: ["测试"],
    location: "南京",
  },
  {
    text: "测试视频。",
    date: "2025-11-15 18:32",
    video: {
      type: "bilibili",
      id: "BV1h5QaY5EaH", // 只留 BV 号
    },
    tags: ["测试"],
    location: "南京",
  },
  {
    text: "测试图片。",
    date: "2025-11-15 18:30",
    images: [
      "https://img-zsx.oss-cn-shanghai.aliyuncs.com/cb04a9a64f09bd4ba85d9908439653ed.jpg",
    ],
    tags: ["测试"],
    location: "南京",
  },
  // … 更多日记
];

export function getRecentDiaryEntries(count = 30): DiaryEntry[] {
  return [...diaryEntries]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
