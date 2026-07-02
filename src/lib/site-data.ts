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
  url: "https://asia-bet-data.com",
  description:
    "面向中文用户整理博彩资讯、平台资料、风险提醒、入口核对与规则指南，强调信息核对、理性判断和访问前风险识别。",
};

export const categories: Category[] = [
  {
    slug: "esports-betting",
    name: "电竞博彩",
    description: "追踪主流电竞项目的盘口规则、赛事节奏、数据来源和常见风险。",
    accent: "cyan",
    cover: "esports",
  },
  {
    slug: "sports-betting",
    name: "体育博彩",
    description: "整理足球、篮球及综合体育投注规则、赛程变量和风控要点。",
    accent: "blue",
    cover: "sports",
  },
  {
    slug: "poker",
    name: "德州扑克",
    description: "关注扑克平台资料、桌型规则、资金管理和对局安全提醒。",
    accent: "violet",
    cover: "poker",
  },
  {
    slug: "online-games",
    name: "棋牌游戏",
    description: "整理牛牛、三公、百家乐、炸金花、龙虎斗、斗地主等棋牌游戏规则、活动条件和访问前注意事项。",
    accent: "teal",
    cover: "games",
  },
  {
    slug: "risk-warning",
    name: "风险提醒",
    description: "记录入口变更、异常条款、账户限制、支付延迟等需要核对的信息。",
    accent: "orange",
    cover: "risk",
  },
  {
    slug: "platform-reviews",
    name: "博彩资讯",
    description: "聚合平台资料、行业规则、风险提醒、入口核对和监管观察等博彩资讯内容。",
    accent: "emerald",
    cover: "review",
  },
  {
    slug: "rankings",
    name: "博彩监管",
    description: "按资料完整度、规则清晰度、风险提示充分度和更新时间整理博彩监管观察与平台资料索引。",
    accent: "amber",
    cover: "ranking",
  },
];

export const categoryModules: Record<string, { title: string; description: string }[]> = {
  "esports-betting": [
    { title: "电竞赛事规则说明", description: "整理 BO1、BO3、BO5、重赛、弃权和技术暂停等常见结算场景。" },
    { title: "电竞盘口变化提醒", description: "关注版本更新、首发名单、地图池和盘口更新时间对信息判断的影响。" },
    { title: "电竞平台资料", description: "聚合电竞平台支持项目、规则公开度、入口状态和风险等级。" },
    { title: "电竞入口核对", description: "记录域名、公告来源、证书状态和客服渠道等访问前核对项。" },
    { title: "电竞博彩风险提醒", description: "提示临场变阵、数据延迟、结算争议和过度参与风险。" },
  ],
  "sports-betting": [
    { title: "足球相关规则", description: "说明让球、大小球、延期、中断和加时是否计入等常见规则。" },
    { title: "篮球相关规则", description: "关注节次、加时、球员缺阵和盘口关闭时间等变量。" },
    { title: "赛前信息核对", description: "核对赛程、伤停、首发、天气、盘口更新时间和数据来源。" },
    { title: "体育平台资料", description: "整理体育平台支持项目、资料完整度和规则公开度。" },
    { title: "体育博彩风险提醒", description: "提醒赛程变更、结算口径差异和追逐亏损风险。" },
  ],
  poker: [
    { title: "德州扑克规则说明", description: "解释现金桌、锦标赛、盲注、抽水和桌型限制等基础规则。" },
    { title: "扑克平台资料", description: "记录桌型、费用、账号限制、机器人治理和资料更新时间。" },
    { title: "桌局与资金风险", description: "提示资金管理、桌局公平性、提款限制和账号安全问题。" },
    { title: "常见平台规则", description: "汇总多账号、外挂、异常对局、冻结账户等条款说明。" },
    { title: "德州扑克风险提醒", description: "强调长期波动、情绪决策和超预算参与风险。" },
  ],
  "online-games": [
    { title: "棋牌游戏类型", description: "按牛牛、三公、百家乐、炸金花、龙虎斗、斗地主等类型整理规则差异和体验前注意事项。" },
    { title: "活动规则说明", description: "说明活动时间、流水倍数、有效投注、最高限制和排除项。" },
    { title: "棋牌游戏平台资料", description: "整理棋牌游戏平台支持内容、规则公开度、入口状态和风险等级。" },
    { title: "流水与限制提醒", description: "提醒读者先读有效投注范围、提款条件和账户等级限制。" },
    { title: "棋牌游戏风险提醒", description: "提示活动误读、过度参与、地区限制和客服争议风险。" },
  ],
  "risk-warning": [
    { title: "虚假入口识别", description: "核对域名拼写、证书、公告来源和跳转链路是否异常。" },
    { title: "仿冒网站提醒", description: "关注相似 Logo、相似域名、镜像页面和非官方客服渠道。" },
    { title: "充值提现风险", description: "记录到账延迟、费用不透明、提款条件变化和异常审核。" },
    { title: "账号安全风险", description: "提醒密码、二次验证、设备登录和账号冻结条款。" },
    { title: "客服与转账风险", description: "警惕私下转账、非公开收款、诱导沟通和身份核验问题。" },
  ],
  "platform-reviews": [
    { title: "行业资讯整理", description: "聚合平台资料、规则变化、风险提醒和入口核对相关资讯。" },
    { title: "平台资料怎么看", description: "从平台类型、支持内容、资料完整度、风险等级和更新时间入手。" },
    { title: "博彩监管怎么看", description: "理解监管和榜单内容只做资料索引，不等于推荐或背书。" },
    { title: "入口核对方法", description: "核对域名、公告、证书、客服渠道和最近更新时间。" },
    { title: "常见问题", description: "整理规则、活动、账户、支付和责任博彩相关问题。" },
  ],
};

export const articles: Article[] = [
  {
    slug: "esports-market-risk-checklist",
    title: "电竞博彩盘口变化前需要核对的五类信息",
    description: "从赛事版本、首发名单、地图池、盘口更新时间和结算规则五个角度建立电竞博彩核对清单。",
    category: "esports-betting",
    tags: ["电竞博彩", "盘口规则", "风险提醒"],
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-26",
    author: "编辑部",
    readTime: "7 分钟",
    summary: "电竞赛事变量密集，用户应先核对规则与数据来源，再判断是否继续阅读平台资料。",
    body: [
      "电竞博彩的核心风险并不只来自赛果波动，还来自版本更新、临场换人、地图选择和盘口结算口径。查看电竞博彩相关资料时，建议先核对赛事规则、平台结算说明、入口更新时间和风险提示，再决定是否继续阅读平台详情。",
      "第一类信息是赛事版本。不同补丁可能改变英雄、地图和道具强度，旧数据不能直接套用到新版本。第二类信息是首发名单和替补规则，尤其是跨赛区赛事，临场调整会影响盘口理解。",
      "第三类信息是地图池或赛制。BO1、BO3、BO5 的容错空间不同，结算条款也可能不同。第四类信息是盘口更新时间，过期截图和二次传播消息都需要谨慎看待。",
      "第五类信息是平台自己的结算说明，包括中断、重赛、弃权和技术暂停。读者在任何操作前都应查看平台公开规则，并设置预算上限。",
    ],
    faq: [
      {
        q: "电竞博彩文章需要给出具体投注建议吗？",
        a: "不建议。资讯站更适合整理规则、数据核对方法和风险提醒，避免给出诱导性判断。",
      },
      {
        q: "盘口截图适合长期参考吗？",
        a: "截图会快速过期，更适合作为辅助材料。长期参考价值主要来自规则解释和核验流程。",
      },
    ],
  },
  {
    slug: "sports-betting-rule-page-template",
    title: "体育博彩规则怎么看：访问前需要核对哪些内容",
    description: "整理体育博彩常见规则，包括术语说明、结算条件、限制条款、常见问题和风险提醒。",
    category: "sports-betting",
    tags: ["体育博彩", "规则核对", "规则说明"],
    publishedAt: "2026-06-08",
    updatedAt: "2026-06-24",
    author: "规则研究员",
    readTime: "6 分钟",
    summary: "一篇长期有参考价值的规则说明，应优先解释结算逻辑和异常场景，而不是渲染收益。",
    body: [
      "查看体育博彩规则时，建议优先确认盘口类型、结算条件、取消规则、延期规则和数据来源，避免只看赛事热度而忽略具体条款。",
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
    title: "德州扑克平台资料怎么看：桌型规则与资金风险提醒",
    description: "查看德州扑克平台资料时，应重点关注桌型规则、资金限制、风险等级、争议处理和常见问题。",
    category: "poker",
    tags: ["德州扑克", "平台资料库", "风控"],
    publishedAt: "2026-06-02",
    updatedAt: "2026-06-20",
    author: "资料库编辑",
    readTime: "8 分钟",
    summary: "平台资料的价值在于定期更新和清楚说明风险，而不是替平台背书。",
    body: [
      "查看德州扑克平台资料时，应重点关注平台类型、支持内容、更新时间、风险等级、入口核对说明、桌型规则、费用结构、账号限制和常见风险。",
      "平台资料不应声称平台可靠或安全，只能描述公开信息、编辑部观察和需要读者自行核对的事项。风险等级也需要说明依据，例如条款透明度、资料完整度和用户争议类型。",
      "对于扑克内容，公平性、机器人治理、桌型流动性和提款条件都属于重点观察项。相关资料需要持续核对和更新。",
    ],
    faq: [
      {
        q: "平台资料页是否等于推荐？",
        a: "不是。资料页只做信息整理和风险提示，不构成使用建议。",
      },
      {
        q: "风险等级如何更新？",
        a: "可以根据公开条款变化、入口状态、投诉类型和编辑核对结果定期调整。",
      },
    ],
  },
  {
    slug: "online-games-offer-terms",
    title: "棋牌游戏活动规则怎么看：流水、有效投注与限制条款提醒",
    description: "拆解棋牌游戏活动规则页常见术语，提醒读者关注流水倍数、有效投注和时间限制。",
    category: "online-games",
    tags: ["棋牌游戏", "活动规则", "风险提醒"],
    publishedAt: "2026-05-28",
    updatedAt: "2026-06-18",
    author: "内容编辑",
    readTime: "5 分钟",
    summary: "活动信息应按规则资料处理，避免刺激性领取文案，并突出限制条件。",
    body: [
      "棋牌游戏活动容易出现信息不对称。阅读活动规则时，应重点查看活动名称、适用范围、时间、流水要求、有效投注范围、最高限制、取消条件和客服争议处理。",
      "站内按钮建议使用查看规则、风险提醒、核对入口，不使用诱导注册或领取类文案。活动模块的定位是资料索引，不是转化页。",
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
    title: "博彩平台入口怎么核对：域名、镜像与更新时间提醒",
    description: "整理博彩平台入口核对方法，包括域名、证书、公告来源、镜像状态和更新时间。",
    category: "risk-warning",
    tags: ["入口核对", "风险提醒", "资料核对"],
    publishedAt: "2026-05-20",
    updatedAt: "2026-06-22",
    author: "风控观察员",
    readTime: "6 分钟",
    summary: "入口核对内容应强调识别风险与资料更新，不应伪装官方页面或诱导跳转。",
    body: [
      "平台入口相关内容必须克制。资讯站可以说明如何核对域名、证书、公告来源和客服渠道，但不应伪装为平台官方入口，也不应设置恶意跳转。",
      "资料页中的入口核对说明应包括最后核对时间、核对项目、可能的风险、读者需要自行确认的事项。链接去向要清楚，不能用跳转误导读者。",
      "当入口发生变化时，应更新平台资料页和相关文章，并保留风险提醒，不使用绝对化保证表达。",
    ],
    faq: [
      {
        q: "可以使用绝对化背书表述吗？",
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
    title: "博彩资讯：建立预算上限和冷静期的基础方法",
    description: "整理责任博彩相关提醒，包括预算上限、冷静期、自我排除和求助资源。",
    category: "platform-reviews",
    tags: ["博彩资讯", "责任博彩", "风险控制"],
    publishedAt: "2026-05-14",
    updatedAt: "2026-06-19",
    author: "指南编辑",
    readTime: "7 分钟",
    summary: "博彩资讯栏目应把风险教育放在核心位置，帮助读者识别过度参与信号。",
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
    description: "整理欧冠赛事规则、赛程变量、赛前信息核对和平台资料参考。",
    cover: "sports",
    highlights: ["赛程与延期规则", "球队伤停与首发", "盘口更新时间", "体育平台资料"],
    risks: ["赛程临时调整", "加时结算口径", "数据来源不一致"],
  },
  {
    slug: "premier-league",
    title: "英超",
    parentSlug: "sports-betting",
    parentName: "体育博彩",
    description: "关注英超赛事资讯、盘口规则、赛前信息和风险提醒。",
    cover: "sports",
    highlights: ["赛前信息核对", "让球与大小球规则", "伤停名单", "体育平台资料"],
    risks: ["盘口更新过快", "首发变化", "结算条款差异"],
  },
  {
    slug: "nba",
    title: "NBA",
    parentSlug: "sports-betting",
    parentName: "体育博彩",
    description: "整理 NBA 篮球相关规则、球员状态、赛程变量和平台资料。",
    cover: "sports",
    highlights: ["球员出场状态", "加时结算规则", "赛程背靠背", "篮球平台资料"],
    risks: ["临场轮休", "盘口关闭时间", "数据延迟"],
  },
  {
    slug: "f1",
    title: "F1",
    parentSlug: "sports-betting",
    parentName: "体育博彩",
    description: "整理 F1 赛事规则、排位赛、正赛、天气变量和结算注意事项。",
    cover: "sports",
    highlights: ["排位与正赛规则", "天气与安全车", "车队信息", "结算说明"],
    risks: ["退赛场景", "天气变化", "规则解释差异"],
  },
  {
    slug: "chinese-super-league",
    title: "中超",
    parentSlug: "sports-betting",
    parentName: "体育博彩",
    description: "关注中超赛程、球队信息、盘口变化和赛前核对事项。",
    cover: "sports",
    highlights: ["赛程核对", "首发名单", "天气与场地", "体育平台资料"],
    risks: ["赛程调整", "数据源滞后", "结算争议"],
  },
  {
    slug: "sports-betting-regulation",
    title: "体育博彩监管",
    parentSlug: "sports-betting",
    parentName: "体育博彩",
    description: "整理体育博彩平台资料、风险等级、规则透明度和监管观察。",
    cover: "ranking",
    highlights: ["平台资料索引", "风险等级", "规则公开度", "更新时间"],
    risks: ["资料过期", "平台背书误读", "入口变化"],
  },
  {
    slug: "league-of-legends",
    title: "英雄联盟",
    parentSlug: "esports-betting",
    parentName: "电子竞技",
    description: "整理英雄联盟赛事规则、版本变化、地图池和盘口风险提醒。",
    cover: "esports",
    highlights: ["版本更新", "首发名单", "BO3/BO5 规则", "赛事数据来源"],
    risks: ["临场换人", "版本影响", "重赛结算"],
  },
  {
    slug: "cs2",
    title: "CS2",
    parentSlug: "esports-betting",
    parentName: "电子竞技",
    description: "关注 CS2 地图池、赛制、战队名单和结算规则。",
    cover: "esports",
    highlights: ["地图池", "战队阵容", "赛制规则", "盘口更新时间"],
    risks: ["地图更换", "技术暂停", "数据延迟"],
  },
  {
    slug: "dota2",
    title: "DOTA2",
    parentSlug: "esports-betting",
    parentName: "电子竞技",
    description: "整理 DOTA2 版本、阵容、赛制和盘口核对资料。",
    cover: "esports",
    highlights: ["版本环境", "英雄禁选", "赛制说明", "赛事数据"],
    risks: ["版本波动", "临场变阵", "结算差异"],
  },
  {
    slug: "honor-of-kings",
    title: "王者荣耀",
    parentSlug: "esports-betting",
    parentName: "电子竞技",
    description: "整理王者荣耀赛事规则、战队信息、版本变化和风险提醒。",
    cover: "esports",
    highlights: ["赛事规则", "首发名单", "版本变化", "平台资料"],
    risks: ["临场名单变化", "版本影响", "盘口更新延迟"],
  },
  {
    slug: "valorant",
    title: "无畏契约",
    parentSlug: "esports-betting",
    parentName: "电子竞技",
    description: "关注无畏契约地图、赛制、战队阵容和盘口资料。",
    cover: "esports",
    highlights: ["地图选择", "战队名单", "赛制说明", "数据来源"],
    risks: ["地图池变化", "技术暂停", "结算口径"],
  },
  {
    slug: "crossfire",
    title: "穿越火线",
    parentSlug: "esports-betting",
    parentName: "电子竞技",
    description: "整理穿越火线赛事规则、战队信息、地图和风险提醒。",
    cover: "esports",
    highlights: ["赛事规则", "地图信息", "战队资料", "盘口时间"],
    risks: ["规则差异", "数据滞后", "结算争议"],
  },
  {
    slug: "niuniu-online",
    title: "牛牛在线游戏",
    parentSlug: "online-games",
    parentName: "棋牌游戏",
    description: "整理牛牛在线游戏规则、活动条件、流水限制和平台资料。",
    cover: "games",
    highlights: ["规则说明", "活动条款", "流水限制", "平台资料"],
    risks: ["活动误读", "有效投注范围", "提款条件"],
  },
  {
    slug: "sangong-online",
    title: "三公在线游戏",
    parentSlug: "online-games",
    parentName: "棋牌游戏",
    description: "整理三公在线游戏规则、平台资料、活动限制和风险提醒。",
    cover: "games",
    highlights: ["玩法规则", "活动限制", "平台资料", "常见问题"],
    risks: ["规则差异", "流水限制", "账户限制"],
  },
  {
    slug: "baccarat-online",
    title: "百家乐在线游戏",
    parentSlug: "online-games",
    parentName: "棋牌游戏",
    description: "整理百家乐在线游戏资料、规则说明、平台核对和风险提醒。",
    cover: "games",
    highlights: ["规则说明", "平台资料", "活动条款", "风险提醒"],
    risks: ["过度参与", "活动误读", "入口异常"],
  },
  {
    slug: "golden-flower-online",
    title: "炸金花在线",
    parentSlug: "online-games",
    parentName: "棋牌游戏",
    description: "整理炸金花在线规则、平台资料、活动条件和风险提醒。",
    cover: "games",
    highlights: ["规则说明", "平台资料", "资金限制", "FAQ"],
    risks: ["资金波动", "账户限制", "规则争议"],
  },
  {
    slug: "dragon-tiger-online",
    title: "龙虎斗在线",
    parentSlug: "online-games",
    parentName: "棋牌游戏",
    description: "整理龙虎斗在线游戏规则、活动条款、平台资料和风险提醒。",
    cover: "games",
    highlights: ["规则说明", "活动条款", "入口核对", "风险提醒"],
    risks: ["规则误读", "活动限制", "入口仿冒"],
  },
  {
    slug: "doudizhu-online",
    title: "斗地主在线",
    parentSlug: "online-games",
    parentName: "棋牌游戏",
    description: "整理斗地主在线游戏规则、平台资料、活动限制和常见风险。",
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
      { label: "资料完整度", value: "较完整" },
      { label: "规则公开度", value: "需逐项核对" },
      { label: "入口状态", value: "定期记录" },
      { label: "编辑备注", value: "适合持续补充规则说明、入口核对记录和风险提醒" },
    ],
    overview:
      "北辰资料库主要整理综合类平台的公开资料，包括支持内容、规则说明、入口核对状态、风险等级和使用前注意事项。页面内容仅作资料参考，不构成平台推荐。",
    strengths: ["支持内容分类清晰", "资料更新时间醒目", "相关评测资料较集中"],
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
      { label: "资料完整度", value: "中等" },
      { label: "规则公开度", value: "需关注结算场景" },
      { label: "入口状态", value: "待复核" },
      { label: "编辑备注", value: "重点看赛事取消规则" },
    ],
    overview:
      "星图电竞资料主要关注电竞相关平台信息，包括赛事项目、盘口更新时间、结算规则、入口状态和异常争议提醒。访问前建议核对平台公告与所在地法律法规。",
    strengths: ["电竞分类清楚", "关联赛事规则较方便", "风险提示可持续更新"],
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
      { label: "资料完整度", value: "待补充" },
      { label: "规则公开度", value: "部分条款需核验" },
      { label: "入口状态", value: "不稳定记录" },
      { label: "编辑备注", value: "建议强化风险提示" },
    ],
    overview:
      "河牌扑克资料风险等级较高，访问前建议重点查看资金规则、桌型说明、争议处理方式和使用前注意事项。",
    strengths: ["扑克规则信息明确", "风险等级提醒醒目", "常见问题可持续补充"],
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
      { label: "资料完整度", value: "较完整" },
      { label: "规则公开度", value: "活动限制明确" },
      { label: "入口状态", value: "稳定记录" },
      { label: "编辑备注", value: "适合活动规则页内链" },
    ],
    overview:
      "清线游戏资料主要整理棋牌游戏相关规则、活动限制、流水条件、有效投注和入口核对提醒。",
    strengths: ["规则信息清楚", "活动条件便于核对", "常见问题可持续补充"],
    cautions: ["不同活动限制不同", "需关注有效投注范围", "更新时间不能省略"],
    risks: ["流水误读", "活动排除项", "地区限制"],
  },
];

export const legalPages = [
  { href: "/about", label: "关于我们" },
  { href: "/disclaimer", label: "免责声明" },
  { href: "/sitemap.xml", label: "站点地图" },
  { href: "/robots.txt", label: "Robots" },
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
