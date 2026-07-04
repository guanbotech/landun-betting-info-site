export type RiskLevel = "低" | "中" | "高";

export type Category = {
  slug: string;
  name: string;
  description: string;
  accent: string;
  cover: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  author: string;
  readTime: string;
  summary: string;
  body: string[];
  faq: { q: string; a: string }[];
};

export type Platform = {
  slug: string;
  name: string;
  type: string;
  supported: string[];
  updatedAt: string;
  risk: RiskLevel;
  score: number;
  basics: { label: string; value: string }[];
  overview: string;
  strengths: string[];
  cautions: string[];
  risks: string[];
};

export type TopicPage = {
  slug: string;
  title: string;
  parentSlug: string;
  parentName: string;
  description: string;
  cover: string;
  highlights: string[];
  risks: string[];
};

export const site = {
  name: "蓝盾博彩情报站",
  url: "https://asiabocaitop1.com",
  description:
    "记录博彩平台公开资料、入口变化、规则条款和风险提醒，方便读者自己核对。",
};

export const categories: Category[] = [
  {
    slug: "esports-betting",
    name: "电子竞技",
    description: "写电竞赛事规则、赛制变化、阵容消息和结算争议，重点看信息有没有过期。",
    accent: "cyan",
    cover: "esports",
  },
  {
    slug: "sports-betting",
    name: "体育博彩",
    description: "记录足球、篮球等赛事规则，关注延期、伤停、加时和结算口径。",
    accent: "blue",
    cover: "sports",
  },
  {
    slug: "poker",
    name: "德州扑克",
    description: "看桌型、抽水、锦标赛条款、账号限制和提款规则，不要只看宣传语。",
    accent: "violet",
    cover: "poker",
  },
  {
    slug: "online-games",
    name: "棋牌游戏",
    description: "收集牛牛、三公、百家乐、炸金花、龙虎斗、斗地主等规则和活动限制。",
    accent: "teal",
    cover: "games",
  },
  {
    slug: "risk-warning",
    name: "风险提醒",
    description: "记录入口异常、仿冒页面、账户限制、支付延迟和客服转账风险。",
    accent: "orange",
    cover: "risk",
  },
  {
    slug: "platform-reviews",
    name: "博彩资讯",
    description: "更新平台资料、规则变化、入口核对和用户容易忽略的条款。",
    accent: "emerald",
    cover: "review",
  },
  {
    slug: "rankings",
    name: "平台资料榜",
    description: "按公开资料、条款清晰度、更新时间和风险记录做平台列表。",
    accent: "amber",
    cover: "ranking",
  },
];

export const categoryModules: Record<string, { title: string; description: string }[]> = {
  "esports-betting": [
    { title: "赛制和结算", description: "BO1、BO3、BO5、重赛、弃权、技术暂停，这些条款要分开看。" },
    { title: "阵容和版本", description: "版本更新、首发名单、地图池变化，都会让旧资料失效。" },
    { title: "平台资料", description: "看平台支持哪些项目，结算规则写得是否清楚，入口是否稳定。" },
    { title: "入口核对", description: "域名、证书、公告来源、客服渠道，至少核一遍再继续看。" },
    { title: "常见风险", description: "临场换人、数据延迟、重赛结算和追损，是电竞类内容里最常见的问题。" },
  ],
  "sports-betting": [
    { title: "足球规则", description: "让球、大小球、延期、中断、加时是否计入，别混在一起看。" },
    { title: "篮球规则", description: "节次、加时、轮休、盘口关闭时间，临场变化最多。" },
    { title: "赛前核对", description: "赛程、伤停、首发、天气和数据来源，最好逐项确认。" },
    { title: "平台资料", description: "看支持赛事、规则页面、更新时间和争议处理方式。" },
    { title: "常见风险", description: "赛程改期、结算口径不同、追亏加码，都是需要避开的坑。" },
  ],
  poker: [
    { title: "基础规则", description: "现金桌、锦标赛、盲注、抽水和桌型限制分开列。" },
    { title: "平台资料", description: "桌型、费用、账号限制、机器人治理和更新时间都要写清楚。" },
    { title: "资金风险", description: "提款限制、桌局公平性、账户安全，比宣传文案更重要。" },
    { title: "平台条款", description: "多账号、外挂、异常对局、冻结账户，这些条款要单独看。" },
    { title: "注意事项", description: "长期波动、情绪决策、超预算参与，是扑克玩家最容易忽略的部分。" },
  ],
  "online-games": [
    { title: "玩法分类", description: "牛牛、三公、百家乐、炸金花、龙虎斗、斗地主，规则差别很大。" },
    { title: "活动条款", description: "时间、流水、有效投注、封顶金额和排除项要先看。" },
    { title: "平台资料", description: "看支持游戏、规则页面、入口状态和近期更新时间。" },
    { title: "流水限制", description: "有效投注范围、提款条件、账户等级限制，通常写在细则里。" },
    { title: "常见风险", description: "误读活动、过度参与、地区限制、客服争议，都要提前留意。" },
  ],
  "risk-warning": [
    { title: "虚假入口识别", description: "核对域名拼写、证书、公告来源和跳转链路是否异常。" },
    { title: "仿冒网站提醒", description: "关注相似 Logo、相似域名、镜像页面和非官方客服渠道。" },
    { title: "充值提现风险", description: "记录到账延迟、费用不透明、提款条件变化和异常审核。" },
    { title: "账号安全风险", description: "提醒密码、二次验证、设备登录和账号冻结条款。" },
    { title: "客服与转账风险", description: "警惕私下转账、非公开收款、诱导沟通和身份核验问题。" },
  ],
  "platform-reviews": [
    { title: "行业动态", description: "记录平台资料、规则变化、入口变动和近期风险提醒。" },
    { title: "怎么看资料", description: "先看平台类型、支持内容、更新时间，再看条款和争议记录。" },
    { title: "榜单说明", description: "榜单只方便查资料，不代表使用建议或保证。" },
    { title: "入口核对", description: "域名、公告、证书、客服渠道和更新时间，一个都别省。" },
    { title: "常见问题", description: "规则、活动、账户、支付和自我限制工具集中放在这里。" },
  ],
};

export const articles: Article[] = [
  {
    slug: "esports-market-risk-checklist",
    title: "电竞盘口变化前，先看这五件事",
    description: "版本、首发、地图池、更新时间、结算条款，少看一项都可能误判。",
    category: "esports-betting",
    tags: ["电竞博彩", "盘口规则", "风险提醒"],
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-26",
    author: "编辑部",
    readTime: "7 分钟",
    summary: "电竞信息变得快，旧盘口截图和二手消息都不能直接拿来用。",
    body: [
      "电竞博彩的问题不只在赛果。版本更新、临场换人、地图选择和结算口径，都会影响判断。",
      "第一类信息是赛事版本。不同补丁可能改变英雄、地图和道具强度，旧数据不能直接套用到新版本。第二类信息是首发名单和替补规则，尤其是跨赛区赛事，临场调整会影响盘口理解。",
      "第三类信息是地图池或赛制。BO1、BO3、BO5 的容错空间不同，结算条款也可能不同。第四类信息是盘口更新时间，过期截图和二次传播消息都需要谨慎看待。",
      "第五类信息是平台自己的结算说明，包括中断、重赛、弃权和技术暂停。读者在任何操作前都应查看平台公开规则，并设置预算上限。",
    ],
    faq: [
      {
        q: "电竞博彩文章需要给出具体投注建议吗？",
        a: "不建议。资讯站更适合记录规则、数据核对方法和风险提醒，避免诱导读者操作。",
      },
      {
        q: "盘口截图适合长期参考吗？",
        a: "截图会快速过期，更适合作为辅助材料。长期参考价值主要来自规则解释和核验流程。",
      },
    ],
  },
  {
    slug: "sports-betting-rule-page-template",
    title: "看体育博彩规则，先确认这些条款",
    description: "让球、大小球、延期、中断、加时和数据源，规则页里都要找得到。",
    category: "sports-betting",
    tags: ["体育博彩", "规则核对", "规则说明"],
    publishedAt: "2026-06-08",
    updatedAt: "2026-06-24",
    author: "规则研究员",
    readTime: "6 分钟",
    summary: "别只看赛事热度，结算条款才是最容易出争议的地方。",
    body: [
      "看体育博彩规则时，先确认盘口类型、结算条件、取消规则、延期规则和数据来源。",
      "规则说明应直接写清楚，不要只依赖截图或转述。遇到延期、中断、弃赛、赛果修正等情况时，应以平台公开条款和赛事官方公告为准。",
      "文章中可以链接到平台资料页，但按钮应使用中性文案，例如查看资料、阅读评测、核对入口，避免注册或投注导向。",
    ],
    faq: [
      {
        q: "体育博彩资料应该先看什么？",
        a: "建议先看结算规则、延期或取消条款、数据来源和风险提醒，再查看平台资料。",
      },
      {
        q: "是否需要每篇文章都写免责声明？",
        a: "建议保留。博彩相关内容需要持续提醒年龄限制、地区法规和财务风险。",
      },
    ],
  },
  {
    slug: "poker-platform-data-model",
    title: "德州扑克平台资料，重点看桌型和资金规则",
    description: "现金桌、锦标赛、抽水、提款限制和账号冻结条款，比宣传语更值得看。",
    category: "poker",
    tags: ["德州扑克", "平台资料库", "风控"],
    publishedAt: "2026-06-02",
    updatedAt: "2026-06-20",
    author: "资料库编辑",
    readTime: "8 分钟",
    summary: "平台资料不等于使用建议，关键是把规则、费用和风险写明白。",
    body: [
      "看德州扑克平台资料，先看桌型、费用、提款条件、账号限制和争议处理方式。",
      "平台资料不要写成平台很可靠或很安全，只写公开信息、编辑部看到的情况和需要读者自己核对的事项。风险等级也要说明依据，例如条款是否清楚、资料是否过期、公开争议集中在哪里。",
      "对于扑克内容，公平性、机器人治理、桌型流动性和提款条件都属于重点观察项。相关资料需要持续核对和更新。",
    ],
    faq: [
      {
        q: "平台资料页是不是使用建议？",
        a: "不是。资料页只记录信息和风险点，不建议读者直接使用任何平台。",
      },
      {
        q: "风险等级如何更新？",
        a: "可以根据公开条款变化、入口状态、投诉类型和编辑核对结果定期调整。",
      },
    ],
  },
  {
    slug: "online-games-offer-terms",
    title: "棋牌游戏活动别急着点，先看流水和排除项",
    description: "活动时间、流水倍数、有效投注、封顶金额和地区限制，经常藏在细则里。",
    category: "online-games",
    tags: ["棋牌游戏", "活动规则", "风险提醒"],
    publishedAt: "2026-05-28",
    updatedAt: "2026-06-18",
    author: "内容编辑",
    readTime: "5 分钟",
    summary: "活动文案看起来简单，真正要看的是限制条件。",
    body: [
      "棋牌游戏活动容易漏看细则。活动名称、适用范围、时间、流水、有效投注、封顶金额和取消条件都要看。",
      "站内按钮建议使用查看规则、风险提醒、核对入口，不使用诱导注册或领取类文案。活动模块只讲规则和限制，不做转化页。",
      "当活动规则出现地区限制、游戏限制或账户等级限制时，应在摘要和风险提醒框里重复提示。",
    ],
    faq: [
      {
        q: "活动模块能放在首页吗？",
        a: "可以，但应作为规则提醒内容处理，突出限制条件和更新时间。",
      },
      {
        q: "什么是有效投注？",
        a: "有效投注通常指平台规则认可的投注额，不同游戏和活动可能有排除项。",
      },
    ],
  },
  {
    slug: "risk-alert-entry-verification",
    title: "博彩平台入口怎么核对",
    description: "看域名拼写、证书、公告来源、镜像跳转和客服渠道，别只认页面长得像。",
    category: "risk-warning",
    tags: ["入口核对", "风险提醒", "资料核对"],
    publishedAt: "2026-05-20",
    updatedAt: "2026-06-22",
    author: "风控观察员",
    readTime: "6 分钟",
    summary: "入口页最怕仿冒和跳转，先确认来源再继续。",
    body: [
      "核对入口时，先看域名拼写、证书、公告来源和客服渠道。页面长得像，不等于来源可靠。",
      "资料页中的入口核对说明应包括最后核对时间、核对项目、可能的风险、读者需要自行确认的事项。链接去向要清楚，不能用跳转误导读者。",
      "当入口发生变化时，应更新平台资料页和相关文章，并保留风险提醒，不使用绝对化保证表达。",
    ],
    faq: [
      {
        q: "可以写绝对化保证吗？",
        a: "不建议，也不符合本站文案规则。应使用可核对、需确认、公开资料显示等中性表达。",
      },
      {
        q: "入口核对页是否需要免责声明？",
        a: "需要。读者仍需遵守所在地法律并自行承担财务风险。",
      },
    ],
  },
  {
    slug: "guide-responsible-gambling",
    title: "博彩资讯：预算、冷静期和自我限制",
    description: "设置预算上限，记录时间，必要时启用冷静期和自我排除。",
    category: "platform-reviews",
    tags: ["博彩资讯", "责任博彩", "风险控制"],
    publishedAt: "2026-05-14",
    updatedAt: "2026-06-19",
    author: "指南编辑",
    readTime: "7 分钟",
    summary: "如果已经开始追亏、借钱或隐瞒支出，就该停下来。",
    body: [
      "责任博彩提醒不是装饰内容，而是博彩资讯站必须长期保留的风险说明。读者应设置预算、记录时间、启用冷静期，并了解自我排除工具。",
      "如果读者出现借钱参与、隐瞒支出、频繁追损或影响工作生活等情况，应停止继续参与并寻求专业帮助。内容站不应承诺结果，也不应淡化风险。",
      "相关内容会持续链接到风险提醒、平台资料和免责声明，让读者在查看资料时始终看到审慎立场。",
    ],
    faq: [
      {
        q: "指南栏目是否适合放平台链接？",
        a: "可以放资料页内链，但应优先链接风险提醒、规则说明和免责声明。",
      },
      {
        q: "什么是冷静期？",
        a: "冷静期是限制自己在一段时间内停止或减少参与的自我管理安排。",
      },
    ],
  },
];

export const topicPages: TopicPage[] = [
  {
    slug: "champions-league",
    title: "欧冠",
    parentSlug: "sports-betting",
    parentName: "体育博彩",
    description: "欧冠赛程密集，重点看伤停、轮换、加时是否计入和延期规则。",
    cover: "sports",
    highlights: ["赛程与延期规则", "球队伤停与首发", "盘口更新时间", "体育平台资料"],
    risks: ["赛程临时调整", "加时结算口径", "数据来源不一致"],
  },
  {
    slug: "premier-league",
    title: "英超",
    parentSlug: "sports-betting",
    parentName: "体育博彩",
    description: "英超临场消息多，先看首发、伤停、天气和盘口更新时间。",
    cover: "sports",
    highlights: ["赛前信息核对", "让球与大小球规则", "伤停名单", "体育平台资料"],
    risks: ["盘口更新过快", "首发变化", "结算条款差异"],
  },
  {
    slug: "nba",
    title: "NBA",
    parentSlug: "sports-betting",
    parentName: "体育博彩",
    description: "NBA 重点看球员出场状态、背靠背赛程、加时结算和临场轮休。",
    cover: "sports",
    highlights: ["球员出场状态", "加时结算规则", "赛程背靠背", "篮球平台资料"],
    risks: ["临场轮休", "盘口关闭时间", "数据延迟"],
  },
  {
    slug: "f1",
    title: "F1",
    parentSlug: "sports-betting",
    parentName: "体育博彩",
    description: "F1 要分清排位、正赛、安全车、退赛和天气变化带来的结算差异。",
    cover: "sports",
    highlights: ["排位与正赛规则", "天气与安全车", "车队信息", "结算说明"],
    risks: ["退赛场景", "天气变化", "规则解释差异"],
  },
  {
    slug: "chinese-super-league",
    title: "中超",
    parentSlug: "sports-betting",
    parentName: "体育博彩",
    description: "中超先核赛程、首发、场地和天气，再看盘口变化。",
    cover: "sports",
    highlights: ["赛程核对", "首发名单", "天气与场地", "体育平台资料"],
    risks: ["赛程调整", "数据源滞后", "结算争议"],
  },
  {
    slug: "sports-betting-regulation",
    title: "体育平台规则",
    parentSlug: "sports-betting",
    parentName: "体育博彩",
    description: "记录体育平台的公开条款、入口状态、更新时间和争议点。",
    cover: "ranking",
    highlights: ["平台资料", "风险等级", "规则说明", "更新时间"],
    risks: ["资料过期", "把资料误当建议", "入口变化"],
  },
  {
    slug: "league-of-legends",
    title: "英雄联盟",
    parentSlug: "esports-betting",
    parentName: "电子竞技",
    description: "英雄联盟先看版本、首发名单、红蓝方和 BO3/BO5 规则。",
    cover: "esports",
    highlights: ["版本更新", "首发名单", "BO3/BO5 规则", "赛事数据来源"],
    risks: ["临场换人", "版本影响", "重赛结算"],
  },
  {
    slug: "cs2",
    title: "CS2",
    parentSlug: "esports-betting",
    parentName: "电子竞技",
    description: "CS2 重点看地图池、阵容、换图规则、技术暂停和结算说明。",
    cover: "esports",
    highlights: ["地图池", "战队阵容", "赛制规则", "盘口更新时间"],
    risks: ["地图更换", "技术暂停", "数据延迟"],
  },
  {
    slug: "dota2",
    title: "DOTA2",
    parentSlug: "esports-betting",
    parentName: "电子竞技",
    description: "DOTA2 版本影响很大，禁选、阵容和赛制变化要单独看。",
    cover: "esports",
    highlights: ["版本环境", "英雄禁选", "赛制说明", "赛事数据"],
    risks: ["版本波动", "临场变阵", "结算差异"],
  },
  {
    slug: "honor-of-kings",
    title: "王者荣耀",
    parentSlug: "esports-betting",
    parentName: "电子竞技",
    description: "王者荣耀重点看首发、版本、赛制和临场名单变化。",
    cover: "esports",
    highlights: ["赛事规则", "首发名单", "版本变化", "平台资料"],
    risks: ["临场名单变化", "版本影响", "盘口更新延迟"],
  },
  {
    slug: "valorant",
    title: "无畏契约",
    parentSlug: "esports-betting",
    parentName: "电子竞技",
    description: "无畏契约先看地图选择、队员名单、赛制和技术暂停规则。",
    cover: "esports",
    highlights: ["地图选择", "战队名单", "赛制说明", "数据来源"],
    risks: ["地图池变化", "技术暂停", "结算口径"],
  },
  {
    slug: "crossfire",
    title: "穿越火线",
    parentSlug: "esports-betting",
    parentName: "电子竞技",
    description: "穿越火线看地图、战队名单、赛事规则和结算口径。",
    cover: "esports",
    highlights: ["赛事规则", "地图信息", "战队资料", "盘口时间"],
    risks: ["规则差异", "数据滞后", "结算争议"],
  },
  {
    slug: "niuniu-online",
    title: "牛牛在线游戏",
    parentSlug: "online-games",
    parentName: "棋牌游戏",
    description: "牛牛在线先看玩法规则、活动门槛、流水限制和提款条件。",
    cover: "games",
    highlights: ["规则说明", "活动条款", "流水限制", "平台资料"],
    risks: ["活动误读", "有效投注范围", "提款条件"],
  },
  {
    slug: "sangong-online",
    title: "三公在线游戏",
    parentSlug: "online-games",
    parentName: "棋牌游戏",
    description: "三公在线重点看规则差异、活动限制、账户等级和客服说明。",
    cover: "games",
    highlights: ["玩法规则", "活动限制", "平台资料", "常见问题"],
    risks: ["规则差异", "流水限制", "账户限制"],
  },
  {
    slug: "baccarat-online",
    title: "百家乐在线游戏",
    parentSlug: "online-games",
    parentName: "棋牌游戏",
    description: "百家乐在线先看游戏规则、活动条款、入口来源和预算限制。",
    cover: "games",
    highlights: ["规则说明", "平台资料", "活动条款", "风险提醒"],
    risks: ["过度参与", "活动误读", "入口异常"],
  },
  {
    slug: "golden-flower-online",
    title: "炸金花在线",
    parentSlug: "online-games",
    parentName: "棋牌游戏",
    description: "炸金花在线要看玩法规则、资金波动、账户限制和活动细则。",
    cover: "games",
    highlights: ["规则说明", "平台资料", "资金限制", "FAQ"],
    risks: ["资金波动", "账户限制", "规则争议"],
  },
  {
    slug: "dragon-tiger-online",
    title: "龙虎斗在线",
    parentSlug: "online-games",
    parentName: "棋牌游戏",
    description: "龙虎斗在线先看规则、活动排除项、入口来源和客服渠道。",
    cover: "games",
    highlights: ["规则说明", "活动条款", "入口核对", "风险提醒"],
    risks: ["规则误读", "活动限制", "入口仿冒"],
  },
  {
    slug: "doudizhu-online",
    title: "斗地主在线",
    parentSlug: "online-games",
    parentName: "棋牌游戏",
    description: "斗地主在线重点看玩法规则、活动条件、账号限制和资料更新时间。",
    cover: "games",
    highlights: ["玩法规则", "平台资料", "活动条件", "常见问题"],
    risks: ["活动限制", "账户规则", "资料过期"],
  },
];

export const platforms: Platform[] = [
  {
    slug: "northstar-review",
    name: "北辰资料库",
    type: "综合平台资料",
    supported: ["电竞", "体育", "扑克"],
    updatedAt: "2026-06-27",
    risk: "中",
    score: 82,
    basics: [
      { label: "资料情况", value: "较完整" },
      { label: "规则说明", value: "需逐项核对" },
      { label: "入口状态", value: "定期记录" },
      { label: "编辑备注", value: "规则页较多，入口记录要定期复查" },
    ],
    overview:
      "北辰资料库收录综合类平台的公开信息，包含支持内容、规则页面、入口记录和使用前注意事项。这里只做资料记录，不做使用建议。",
    strengths: ["入口变化是否有公告记录", "提款条件是否写清楚", "活动条款是否有地区限制", "客服渠道是否一致", "争议处理方式是否明确"],
    cautions: ["需核对地区限制", "活动条款需要单独阅读", "入口变化时应更新记录"],
    risks: ["条款变更", "提款条件差异", "客服响应不稳定"],
  },
  {
    slug: "atlas-esports",
    name: "星图电竞资料",
    type: "电竞平台资料",
    supported: ["电竞赛事", "赛前盘口", "规则说明"],
    updatedAt: "2026-06-25",
    risk: "中",
    score: 78,
    basics: [
      { label: "资料情况", value: "中等" },
      { label: "规则说明", value: "需关注结算场景" },
      { label: "入口状态", value: "待复核" },
      { label: "编辑备注", value: "重点看赛事取消规则" },
    ],
    overview:
      "星图电竞资料主要记录电竞平台的项目范围、盘口更新时间、结算规则、入口状态和常见争议。继续访问前，请自己核对平台公告和当地法规。",
    strengths: ["入口变化是否有公告记录", "提款条件是否写清楚", "活动条款是否有地区限制", "客服渠道是否一致", "争议处理方式是否明确"],
    cautions: ["临场数据变化快", "赛事重开规则需核对", "不要依赖单一消息源"],
    risks: ["盘口延迟", "赛程调整", "结算争议"],
  },
  {
    slug: "river-poker",
    name: "河牌扑克资料",
    type: "德州扑克资料",
    supported: ["现金桌", "锦标赛", "扑克规则"],
    updatedAt: "2026-06-21",
    risk: "高",
    score: 69,
    basics: [
      { label: "资料情况", value: "待补充" },
      { label: "规则说明", value: "部分条款需核验" },
      { label: "入口状态", value: "不稳定记录" },
      { label: "编辑备注", value: "建议强化风险提示" },
    ],
    overview:
      "河牌扑克资料风险较高。先看资金规则、桌型说明、争议处理和账户限制，再决定是否继续了解。",
    strengths: ["入口变化是否有公告记录", "提款条件是否写清楚", "活动条款是否有地区限制", "客服渠道是否一致", "争议处理方式是否明确"],
    cautions: ["留意提款限制", "核对机器人治理说明", "关注账户冻结条款"],
    risks: ["账号限制", "资金延迟", "桌局公平性争议"],
  },
  {
    slug: "clearline-games",
    name: "清线游戏资料",
    type: "棋牌游戏资料",
    supported: ["棋牌游戏", "活动规则", "资料核对"],
    updatedAt: "2026-06-18",
    risk: "低",
    score: 86,
    basics: [
      { label: "资料情况", value: "较完整" },
      { label: "规则说明", value: "活动限制明确" },
      { label: "入口状态", value: "稳定记录" },
      { label: "编辑备注", value: "活动细则要和提款规则一起看" },
    ],
    overview:
      "清线游戏资料主要记录棋牌游戏规则、活动限制、流水条件、有效投注和入口来源。",
    strengths: ["入口变化是否有公告记录", "提款条件是否写清楚", "活动条款是否有地区限制", "客服渠道是否一致", "争议处理方式是否明确"],
    cautions: ["不同活动限制不同", "需关注有效投注范围", "更新时间不能省略"],
    risks: ["流水误读", "活动排除项", "地区限制"],
  },
];

export const legalPages = [
  { href: "/about", label: "关于我们" },
  { href: "/disclaimer", label: "免责声明" },
  { href: "/privacy", label: "隐私政策" },
  { href: "/terms", label: "服务条款" },
  { href: "/sitemap.xml", label: "站点地图" },
];

export function categoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function articleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function platformBySlug(slug: string) {
  return platforms.find((platform) => platform.slug === slug);
}

export function topicBySlug(slug: string) {
  return topicPages.find((topic) => topic.slug === slug);
}

export function topicsByParent(parentSlug: string) {
  return topicPages.filter((topic) => topic.parentSlug === parentSlug);
}

export function articlesByCategory(slug: string) {
  return articles.filter((article) => article.category === slug);
}

export function relatedArticles(currentSlug: string, limit = 3) {
  const current = articleBySlug(currentSlug);
  if (!current) return articles.slice(0, limit);
  return articles
    .filter((article) => article.slug !== currentSlug && article.category === current.category)
    .concat(articles.filter((article) => article.slug !== currentSlug && article.category !== current.category))
    .slice(0, limit);
}
