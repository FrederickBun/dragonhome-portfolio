import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "〔龙窝〕主页",
  DESC: "世界再大，大不过你我凝视的微笑",
  EMAIL: "i@setbun.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "你似乎迷失了方向",
  DESCRIPTION: "这里是假的 404 页面，其实是 磅豆龙 的个人 Portfolio 页面。",
};

export const USES: Metadata = {
  TITLE: "我的装备",
  DESCRIPTION: "看看我都用些什么",
};

export const WORK: Metadata = {
  TITLE: "所属组织",
  DESCRIPTION: "我会在哪些地方完成我的工作",
};

export const PROJECTS: Metadata = {
  TITLE: "项目",
  DESCRIPTION: "我制作的有趣的小项目",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/FrederickAsYou",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/FrederickBun"
  }
];
