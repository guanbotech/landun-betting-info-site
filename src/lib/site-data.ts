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
  {
    slug: "asia-betting-info-entry-check",
    title: "亚洲博彩资讯先看入口和规则",
    description: "亚洲地区平台、场馆和赛事资料差异很大，先核对入口、规则、年龄限制和所在地法规。",
    category: "platform-reviews",
    tags: ["亚洲博彩资讯", "入口核对", "规则核对"],
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    author: "编辑部",
    readTime: "6 分钟",
    summary: "亚洲博彩相关资料不能只看页面外观，入口来源和规则说明更重要。",
    body: [
      "亚洲博彩资讯覆盖的范围很宽，包括线上娱乐资料、体育赛事规则、电竞赛事信息、线下综合度假村和风险提醒。不同地区的法律、年龄限制、支付方式和入口状态都可能不同，不能把一个地区的规则直接套到另一个地区。",
      "核对资料时，第一步看入口来源。域名拼写、证书、公告渠道和客服信息需要一致。第二步看规则页面，尤其是延期、中断、提款、活动限制和账户冻结条款。第三步看更新时间，过期资料只能作为历史参考。",
      "本站整理亚洲博彩相关公开资料时，不做安全承诺，也不推荐读者参与任何平台。所有页面都应回到同一个原则：先看资料，再看风险，最后由读者自行核对所在地法律和个人预算。",
    ],
    faq: [
      {
        q: "亚洲博彩资讯适合只写平台排名吗？",
        a: "不适合。平台排名只能作为资料入口，更重要的是规则、入口状态、风险等级和更新时间。",
      },
      {
        q: "入口看起来正常就可以继续吗？",
        a: "不建议只看外观。还要核对域名、证书、公告来源和客服渠道。",
      },
    ],
  },
  {
    slug: "asia-sports-betting-rule-differences",
    title: "亚洲体育投注资料，重点看结算差异",
    description: "足球、篮球和赛车规则并不完全一样，延期、中断、加时和数据源都要分开核对。",
    category: "sports-betting",
    tags: ["亚洲体育投注", "体育博彩规则", "结算规则"],
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    author: "规则研究员",
    readTime: "6 分钟",
    summary: "体育投注资料最容易出争议的地方，是结算口径而不是赛事热度。",
    body: [
      "亚洲体育投注相关内容里，足球、篮球、赛车和综合赛事的规则不能混在一起看。足球常见问题是常规时间、加时、点球、延期和中断；篮球更需要看加时、球员出场状态和盘口关闭时间；赛车则要看排位、正赛、退赛和天气因素。",
      "不同平台对延期和中断的处理方式可能不一致。有的规则按指定时间内恢复计算，有的会取消部分市场，有的只保留已经结算的项目。读者在查看赛事资料时，应优先看平台公开规则，而不是只看二手截图。",
      "文章内容应保持资料口径，不写必中、稳单、推荐方向等诱导表达。更合适的写法是把规则拆清楚：赛事状态、盘口类型、数据来源、更新时间和风险提醒。",
    ],
    faq: [
      {
        q: "体育投注资料最先看什么？",
        a: "先看结算规则、延期或取消条款、加时是否计入和数据来源。",
      },
      {
        q: "亚洲体育赛事是否都用同一套规则？",
        a: "不是。不同赛事和平台规则不同，需要逐页核对。",
      },
    ],
  },
  {
    slug: "asia-esports-betting-data-checklist",
    title: "亚洲电竞博彩资料，先看版本和阵容",
    description: "电竞赛事变化快，版本、地图池、首发名单和技术暂停规则都可能影响资料判断。",
    category: "esports-betting",
    tags: ["亚洲电竞博彩", "电竞赛事规则", "版本阵容"],
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    author: "电竞资料编辑",
    readTime: "7 分钟",
    summary: "电竞资料的时效性很强，旧截图和旧阵容不能直接当成当前依据。",
    body: [
      "亚洲电竞博彩资讯常见于英雄联盟、DOTA2、CS2、王者荣耀、无畏契约和穿越火线等项目。比起传统体育，电竞资料变化更快，版本补丁、地图池、首发名单和临场换人都会影响理解。",
      "核对电竞赛事资料时，建议分成四层：第一层是赛制，确认 BO1、BO3、BO5 和重赛条款；第二层是阵容，确认首发、替补和临场变动；第三层是版本，确认补丁和地图池；第四层是平台结算说明，尤其是技术暂停、弃权和重赛。",
      "电竞内容不适合写成单纯赛事广告。更稳的方向是资讯站口径：记录公开资料、提醒读者核对时间、说明可能失效的地方，并保留风险提醒。",
    ],
    faq: [
      {
        q: "电竞博彩资料为什么容易过期？",
        a: "因为版本、阵容、地图池和赛制都可能临场变化，旧资料不能直接套用。",
      },
      {
        q: "技术暂停会影响结算吗？",
        a: "要看平台公开规则和赛事官方处理结果，不同场景口径不同。",
      },
    ],
  },
  {
    slug: "asia-card-games-offer-risk",
    title: "亚洲棋牌游戏活动，先看流水和地区限制",
    description: "牛牛、三公、百家乐、炸金花等活动规则差异大，流水、有效投注和排除项要提前看。",
    category: "online-games",
    tags: ["亚洲棋牌游戏", "活动规则", "流水限制"],
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    author: "内容编辑",
    readTime: "6 分钟",
    summary: "棋牌游戏活动看起来简单，真正需要核对的是限制条件。",
    body: [
      "亚洲棋牌游戏资料常见于牛牛、三公、百家乐、炸金花、龙虎斗和斗地主等页面。不同游戏的规则差异很大，同一个活动也可能只适用于部分游戏或部分地区。",
      "活动资料最需要看五个点：活动时间、流水倍数、有效投注范围、封顶金额和排除项。很多争议并不是来自玩法本身，而是来自读者没有注意活动限制、账户等级或提款条件。",
      "站内发布棋牌游戏内容时，建议用资料说明而不是娱乐广告口吻。标题和按钮都应围绕规则、限制和风险提醒，避免使用领取、稳赚、秒到账等诱导词。",
    ],
    faq: [
      {
        q: "什么是活动排除项？",
        a: "排除项通常指不计入活动或流水的游戏、地区、账户类型或投注类型。",
      },
      {
        q: "棋牌游戏活动可以只看主文案吗？",
        a: "不建议。主文案通常很短，具体限制往往写在细则里。",
      },
    ],
  },
  {
    slug: "asia-casino-travel-data-check",
    title: "亚洲赌场资料怎么查：入场、证件和预算",
    description: "新加坡、马来西亚、澳门等场馆资料需要分别核对入场年龄、证件要求、公告和责任博彩提示。",
    category: "platform-reviews",
    tags: ["亚洲赌场资料", "入场规则", "场馆资料"],
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    author: "资料库编辑",
    readTime: "7 分钟",
    summary: "线下场馆资料更要看地区法规和官方公告，不能只看旅游介绍。",
    body: [
      "亚洲赌场资料和线上平台资料不完全一样。线下场馆通常涉及入场年龄、证件要求、当地法规、开放状态、会员规则、消费预算和旅行成本。新加坡、马来西亚、澳门等地区的规则并不相同。",
      "整理场馆资料时，建议把内容拆成公开信息、入场规则、更新时间、风险提醒和常见问题。对于旅游属性较强的资料，要提醒读者核对最新公告，不把场馆介绍写成参与建议。",
      "预算也是场馆资料里不能省略的一项。交通、住宿、娱乐消费和个人财务风险都应提前评估。本站只做资料索引，不提供投注服务，也不构成前往建议。",
    ],
    faq: [
      {
        q: "亚洲赌场资料可以写成推荐榜吗？",
        a: "不建议。更稳妥的方式是资料索引，列出入场规则、更新时间和风险提醒。",
      },
      {
        q: "场馆资料最需要核对什么？",
        a: "年龄限制、证件要求、所在地法规、官方公告和个人预算。",
      },
    ],
  },
  {
    slug: "asia-betting-platform-data-ranking",
    title: "亚洲博彩平台资料榜怎么看",
    description: "资料完整度、规则说明、入口核对状态、风险等级和更新时间，比宣传语更值得看。",
    category: "rankings",
    tags: ["亚洲博彩平台", "平台资料榜", "风险等级"],
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    author: "资料库编辑",
    readTime: "6 分钟",
    summary: "资料榜不是背书，作用是让读者更快找到需要核对的信息。",
    body: [
      "亚洲博彩平台资料榜不应该写成推荐榜。更合适的定位是资料索引：把公开资料、规则说明、入口状态、更新时间和风险提醒放在同一页，方便读者比较。",
      "看资料榜时，先看资料是否完整，再看规则是否清楚。入口核对状态和更新时间也很重要，因为平台入口、公告和客服渠道都可能发生变化。风险等级只是一种编辑标记，不代表安全承诺。",
      "如果某个平台资料缺少规则说明、入口来源不清楚、风险提醒集中或更新时间过久，就应该在榜单里明显标出。这样的榜单才更像资料库，而不是广告页。",
    ],
    faq: [
      {
        q: "平台资料榜是不是推荐使用？",
        a: "不是。资料榜只方便查资料，不构成平台背书或使用建议。",
      },
      {
        q: "风险等级低是不是代表安全？",
        a: "不能这样理解。风险等级只是资料整理标记，读者仍需自行核对。",
      },
    ],
  },
  {
    slug: "asia-betting-risk-map",
    title: "亚洲博彩风险地图：先分清入口、规则和资金",
    description: "不同地区的入口、规则和支付限制不同，先把风险分层，再看具体资料。",
    category: "risk-warning",
    tags: ["亚洲博彩风险", "入口风险", "资金风险"],
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    author: "风控观察员",
    readTime: "6 分钟",
    summary: "亚洲博彩资料要分层看，入口风险、规则风险和资金风险不能混在一起。",
    body: [
      "亚洲博彩相关资料里，最容易混淆的是入口、规则和资金三类问题。入口风险主要看域名、证书、公告来源和客服渠道；规则风险主要看结算、延期、活动限制和账户条款；资金风险则集中在费用、提款条件、审核时间和预算控制。",
      "不同地区的法规和平台规则并不一致。读者看到一个页面时，不应先看宣传文案，而应先看它有没有清楚说明所在地限制、年龄要求、费用条款和风险提醒。",
      "本站建议把每个平台或专题都当作资料页来读。先看更新时间，再看入口来源，最后看具体规则。任何页面如果承诺绝对安全、稳定盈利或快速回款，都应提高警惕。",
    ],
    faq: [
      { q: "亚洲博彩风险主要看哪几类？", a: "主要看入口来源、规则条款、资金限制、账户安全和所在地法规。" },
      { q: "风险等级能不能当成安全承诺？", a: "不能。风险等级只是资料整理标记，不代表安全保证。" },
    ],
  },
  {
    slug: "asia-football-betting-timezone-settlement",
    title: "亚洲足球赛事资料，别忽略开赛时间和结算口径",
    description: "跨地区赛事容易出现时区、延期、加时和数据源差异，资料页要逐项核对。",
    category: "sports-betting",
    tags: ["亚洲足球博彩", "开赛时间", "结算口径"],
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    author: "体育资料编辑",
    readTime: "6 分钟",
    summary: "足球资料不是只看对阵，时间、赛制和结算口径都要一起看。",
    body: [
      "亚洲用户查看足球赛事资料时，经常遇到时区、开赛时间和结算口径差异。尤其是欧洲赛事、亚洲杯赛和跨洲比赛，页面显示时间可能来自不同地区，读者要确认本地时间和平台记录是否一致。",
      "足球结算还要分清常规时间、加时、点球、延期和中断。不同平台对这些场景的处理可能不同，不能只凭赛事结果判断资料是否有效。",
      "更稳妥的资料页写法，是把对阵、开赛时间、规则来源、数据更新时间和风险提醒分开列。这样既方便读者核对，也避免把赛事内容写成投注建议。",
    ],
    faq: [
      { q: "足球赛事资料为什么要看时区？", a: "因为跨地区赛事显示时间可能不同，错误时间会影响资料判断。" },
      { q: "加时和点球一定计入吗？", a: "不一定，要看平台公开规则和对应市场说明。" },
    ],
  },
  {
    slug: "asia-basketball-overtime-line-check",
    title: "亚洲篮球赛事资料，重点看加时和球员状态",
    description: "篮球资料要核对加时是否计入、球员出场状态、背靠背赛程和盘口关闭时间。",
    category: "sports-betting",
    tags: ["亚洲篮球博彩", "加时规则", "球员状态"],
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    author: "体育资料编辑",
    readTime: "6 分钟",
    summary: "篮球赛事临场变化多，出场状态和加时规则尤其重要。",
    body: [
      "篮球赛事资料比足球更依赖临场信息。球员出场状态、轮休、伤病名单、背靠背赛程和盘口关闭时间，都可能让旧资料很快失效。",
      "加时规则也是篮球资料里的重点。部分市场会计入加时，部分市场只计算常规时间，读者需要在平台规则页里找到清楚说明。",
      "文章写篮球赛事时，建议减少情绪化判断，多列核对项：球员状态、赛程密度、规则口径、数据来源和更新时间。这样更符合资料站定位。",
    ],
    faq: [
      { q: "篮球赛事资料最容易过期的是什么？", a: "球员出场状态、伤病信息和临场轮休最容易变化。" },
      { q: "篮球加时是否计入结算？", a: "要看具体市场和平台规则，不能默认计入或不计入。" },
    ],
  },
  {
    slug: "asia-esports-bo-rules-check",
    title: "亚洲电竞赛制资料：BO1、BO3、BO5 要分开看",
    description: "不同赛制容错不同，重赛、弃权、技术暂停和地图选择都要写清楚。",
    category: "esports-betting",
    tags: ["亚洲电竞赛制", "BO3", "BO5"],
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    author: "电竞资料编辑",
    readTime: "6 分钟",
    summary: "电竞赛制不是一个词，BO1、BO3、BO5 的资料核对重点不同。",
    body: [
      "亚洲电竞赛事常见 BO1、BO3 和 BO5。BO1 更容易受临场状态和阵容影响，BO3 和 BO5 则更需要看地图池、版本适应和队伍调整能力。",
      "赛制资料还要包含重赛、弃权、技术暂停和断线处理方式。这些内容如果没有写清楚，后续就容易出现结算争议。",
      "资讯站写电竞内容时，最好把赛制、阵容、版本、地图和结算规则分开，而不是只写比赛热度。这样文章更耐看，也更适合搜索收录。",
    ],
    faq: [
      { q: "BO1 和 BO5 的资料重点一样吗？", a: "不一样。BO1 更看临场状态，BO5 更看版本理解、地图池和调整能力。" },
      { q: "技术暂停会不会改变结算？", a: "需要看赛事处理结果和平台公开规则。" },
    ],
  },
  {
    slug: "asia-esports-map-pool-update-risk",
    title: "电竞地图池更新后，旧资料还能不能看",
    description: "地图池、版本补丁和阵容名单变化后，旧资料只能作为历史参考。",
    category: "esports-betting",
    tags: ["电竞地图池", "版本更新", "资料过期"],
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    author: "电竞资料编辑",
    readTime: "6 分钟",
    summary: "地图池和版本变化会让旧资料快速失效，更新时间必须醒目。",
    body: [
      "电竞项目里，地图池和版本补丁会直接影响资料价值。CS2、无畏契约、英雄联盟、DOTA2 等项目，只要地图、英雄、道具或机制发生变化，旧数据就不能简单套用。",
      "读者查看电竞资料时，应优先看更新时间和适用版本。没有写清版本或地图范围的内容，只能作为泛读，不能当成当前赛事依据。",
      "站内文章可以保留历史资料，但要标明更新日期，并提醒读者核对当前规则、首发名单和平台结算说明。",
    ],
    faq: [
      { q: "地图池变化为什么重要？", a: "因为地图选择会影响战队策略、阵容安排和赛制理解。" },
      { q: "旧电竞资料还能用吗？", a: "可以作为历史参考，但不能直接作为当前赛事依据。" },
    ],
  },
  {
    slug: "asia-poker-rake-withdrawal-check",
    title: "亚洲扑克平台资料，抽水和提款条件要单独看",
    description: "扑克资料不能只看桌型，抽水、提款限制、账户冻结和争议处理更关键。",
    category: "poker",
    tags: ["亚洲扑克平台", "抽水规则", "提款条件"],
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    author: "资料库编辑",
    readTime: "7 分钟",
    summary: "德州扑克资料里，费用和资金条款比宣传文案更重要。",
    body: [
      "亚洲扑克平台资料常见内容包括现金桌、锦标赛、盲注级别、桌型限制和活动规则。但真正容易引发争议的，往往是抽水、提款条件、账户审核和冻结条款。",
      "资料页应把费用和资金规则单独列出。抽水比例、提款门槛、审核时间、异常对局处理和多账号规则，都不应该藏在正文角落。",
      "本站写扑克内容时，不建议使用高手、稳赚、提升胜率等表达。更合适的方向是资料核对、资金风险、规则说明和自我限制。",
    ],
    faq: [
      { q: "扑克平台资料最重要的是什么？", a: "桌型、费用、提款条件、账户限制和争议处理方式。" },
      { q: "抽水规则为什么要单独看？", a: "抽水会影响成本理解，也常和桌型、级别、活动条件绑定。" },
    ],
  },
  {
    slug: "asia-poker-account-freeze-risk",
    title: "德州扑克账户限制，先看多账号和异常对局条款",
    description: "多账号、机器人治理、异常对局和冻结规则，是扑克资料页需要重点列出的内容。",
    category: "poker",
    tags: ["德州扑克账户", "账号冻结", "异常对局"],
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    author: "资料库编辑",
    readTime: "6 分钟",
    summary: "扑克账户规则不清楚，后续很容易出现资金和争议问题。",
    body: [
      "德州扑克平台资料里，账户限制经常被读者忽略。多账号、共享设备、异常对局、机器人治理和风控审核，都会影响账户状态。",
      "资料页应把这些条款拆开写，而不是只写平台支持现金桌或锦标赛。读者需要知道哪些行为可能触发审核，争议时应该看什么渠道和什么规则。",
      "对于任何涉及资金的页面，本站都应保持中性提醒：不承诺公平性，不替平台背书，只记录公开资料和需要读者自行核对的事项。",
    ],
    faq: [
      { q: "德州扑克账户为什么会被限制？", a: "常见原因包括多账号、异常对局、身份核验问题和违反平台公开条款。" },
      { q: "资料页应该承诺平台公平吗？", a: "不应该。资料页只记录公开说明和风险点，不做保证。" },
    ],
  },
  {
    slug: "asia-card-games-valid-bet-guide",
    title: "亚洲棋牌活动里的有效投注，应该怎么理解",
    description: "有效投注、流水倍数、封顶金额和排除游戏，是棋牌游戏活动最容易误读的地方。",
    category: "online-games",
    tags: ["有效投注", "棋牌流水", "活动限制"],
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    author: "内容编辑",
    readTime: "6 分钟",
    summary: "有效投注不是所有参与金额，具体范围要看活动细则。",
    body: [
      "亚洲棋牌游戏活动里，经常出现有效投注、流水倍数、封顶金额和排除游戏等词。读者如果只看活动标题，很容易误解条件。",
      "有效投注通常不是所有金额都计算。部分游戏、部分玩法、平局、取消局、特定账户等级或特定地区，可能被排除在活动之外。",
      "写这类文章时，要把规则拆成清单：适用游戏、活动时间、有效投注范围、流水倍数、提款条件和取消规则。这样更像资料说明，而不是活动广告。",
    ],
    faq: [
      { q: "有效投注等于所有投注吗？", a: "不一定。有效投注要看平台活动细则，不同活动排除项不同。" },
      { q: "流水倍数要在哪里看？", a: "通常在活动条款或提款条件里，需要和有效投注范围一起看。" },
    ],
  },
  {
    slug: "asia-baccarat-online-risk-check",
    title: "百家乐在线资料，先看规则、入口和预算限制",
    description: "百家乐在线页面要核对规则来源、活动条款、入口状态和个人预算，不要只看宣传图。",
    category: "online-games",
    tags: ["百家乐在线", "入口核对", "预算限制"],
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    author: "内容编辑",
    readTime: "6 分钟",
    summary: "百家乐在线资料要把规则、入口和风险放在同一页看。",
    body: [
      "百家乐在线资料经常同时出现玩法说明、活动文案和入口链接。读者查看这类页面时，应先确认规则来源和入口状态，再看活动限制和预算提醒。",
      "如果页面只强调奖励、速度或收益，却没有清楚说明规则、地区限制、有效投注和提款条件，就不适合作为可靠资料页。",
      "本站处理百家乐相关内容时，应采用规则核对口径：说明玩法差异、活动限制、入口来源和责任博彩提醒，不写诱导性结论。",
    ],
    faq: [
      { q: "百家乐在线资料先看什么？", a: "先看规则来源、入口状态、活动限制和预算提醒。" },
      { q: "宣传图可以作为规则依据吗？", a: "不建议。规则应以公开条款和平台说明为准。" },
    ],
  },
  {
    slug: "asia-platform-payment-delay-risk",
    title: "亚洲博彩平台支付延迟，资料页要怎么写",
    description: "支付延迟、费用不透明、审核时间和提款条件变化，都应作为风险提醒单独列出。",
    category: "risk-warning",
    tags: ["支付延迟", "提款风险", "平台资料"],
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    author: "风控观察员",
    readTime: "6 分钟",
    summary: "支付问题不能写成个案吐槽，资料页要按规则和证据分层记录。",
    body: [
      "亚洲博彩平台资料里，支付延迟和提款条件变化是读者最关心的风险之一。资料页不能只写情绪化描述，而应记录规则说明、更新时间、费用条款和审核条件。",
      "如果公开资料里没有写清审核时间、费用、提款门槛或异常处理方式，就应该在风险提醒里标注为需要核对，而不是替平台做安全承诺。",
      "读者遇到支付延迟时，应保存公开规则、公告截图和客服记录，并停止追加投入。本站只做风险提醒，不参与纠纷处理，也不保证任何结果。",
    ],
    faq: [
      { q: "支付延迟一定代表平台有问题吗？", a: "不能简单判断，但如果规则不透明或反复变化，就需要提高警惕。" },
      { q: "资料页能承诺到账时间吗？", a: "不能。资料页只能记录公开说明和风险点。" },
    ],
  },
  {
    slug: "asia-casino-age-id-requirements",
    title: "亚洲赌场入场资料：年龄、证件和当地法规",
    description: "线下场馆资料要把年龄限制、证件要求、场馆公告和当地法规放在前面。",
    category: "platform-reviews",
    tags: ["亚洲赌场入场", "年龄限制", "证件要求"],
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    author: "资料库编辑",
    readTime: "6 分钟",
    summary: "线下赌场资料不能只看建筑和旅游介绍，入场规则更重要。",
    body: [
      "亚洲赌场资料常见于新加坡、澳门、马来西亚等地区。不同地区对入场年龄、证件、居民限制、税费和场馆规则的要求都可能不同。",
      "资料页应把年龄限制、证件要求、官方公告、开放状态和责任博彩提示放在前面。旅游介绍可以作为背景，但不能替代规则核对。",
      "对于读者来说，线下场馆还涉及交通、住宿、时间和预算成本。本站整理这类资料时，只做公开信息索引，不构成前往或参与建议。",
    ],
    faq: [
      { q: "亚洲赌场入场规则都一样吗？", a: "不一样。不同地区和场馆要求可能不同，需要查看官方公告。" },
      { q: "旅游介绍能代替场馆规则吗？", a: "不能。入场、证件和当地法规应以官方资料为准。" },
    ],
  },
  {
    slug: "asia-betting-content-source-check",
    title: "亚洲博彩资料来源怎么判断可靠",
    description: "资料来源要看官方公告、规则页面、更新时间和是否保留风险提醒。",
    category: "platform-reviews",
    tags: ["亚洲博彩资料", "资料来源", "信息核对"],
    publishedAt: "2026-07-05",
    updatedAt: "2026-07-05",
    author: "编辑部",
    readTime: "6 分钟",
    summary: "博彩资料不是越热越可靠，来源和更新时间才是关键。",
    body: [
      "亚洲博彩相关内容很多，但并不是所有资料都适合引用。可靠资料通常会说明来源、更新时间、规则依据和限制条件，而不是只堆宣传词。",
      "判断资料来源时，可以看四点：是否有官方公告或公开规则，是否标明更新时间，是否说明适用地区，是否保留风险提醒和免责声明。",
      "本站后续扩展文章时，会优先使用公开规则、官方说明、责任博彩资料和平台资料页作为参考，再用自己的中文表达整理成资料文章。",
    ],
    faq: [
      { q: "博彩资料能不能不写来源？", a: "不建议。至少应说明根据公开资料整理，重要事实最好保留参考链接。" },
      { q: "热度高的内容一定可靠吗？", a: "不一定。热度不能替代规则来源和更新时间。" },
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
    slug: "singapore-marina-bay-sands",
    name: "新加坡金沙赌场",
    type: "综合度假村资料",
    supported: ["赌场资料", "酒店娱乐", "入场规则"],
    updatedAt: "2026-06-30",
    risk: "中",
    score: 86,
    basics: [
      { label: "资料情况", value: "较完整" },
      { label: "规则说明", value: "需核对入场限制" },
      { label: "入口状态", value: "以官方公告为准" },
      { label: "编辑备注", value: "重点看年龄、证件、地区法规和现场规则" },
    ],
    overview:
      "新加坡金沙赌场资料只整理公开信息、入场限制、娱乐设施和需要核对的规则。这里不提供投注服务，也不构成前往或参与建议。",
    strengths: ["入场年龄和证件要求是否清楚", "场馆规则是否有更新记录", "支付与会员规则是否公开", "客户服务渠道是否一致", "责任博彩提示是否明确"],
    cautions: ["需核对新加坡当地法规", "现场规则可能随公告调整", "旅游和消费预算需自行控制"],
    risks: ["地区法规限制", "预算超支", "规则临时变化"],
  },
  {
    slug: "malaysia-genting-casino",
    name: "马来西亚云顶赌场",
    type: "综合度假区资料",
    supported: ["赌场资料", "酒店娱乐", "规则核对"],
    updatedAt: "2026-06-28",
    risk: "中",
    score: 84,
    basics: [
      { label: "资料情况", value: "较完整" },
      { label: "规则说明", value: "需核对现场规则" },
      { label: "入口状态", value: "以公开公告为准" },
      { label: "编辑备注", value: "重点看入场、会员、支付和责任博彩规则" },
    ],
    overview:
      "马来西亚云顶赌场资料主要记录公开场馆信息、入场规则、娱乐设施和风险提醒。读者应自行核对当地法规、年龄限制和最新公告。",
    strengths: ["入场限制是否写清楚", "会员和消费规则是否公开", "交通与场馆信息是否一致", "公告更新时间是否明确", "责任博彩提示是否可见"],
    cautions: ["需确认当地法律限制", "现场开放状态可能调整", "不要把资料当作参与建议"],
    risks: ["法规限制", "费用和预算风险", "公告变更"],
  },
  {
    slug: "macau-mgm",
    name: "澳门美高梅",
    type: "澳门综合娱乐资料",
    supported: ["赌场资料", "酒店娱乐", "入场核对"],
    updatedAt: "2026-06-26",
    risk: "高",
    score: 82,
    basics: [
      { label: "资料情况", value: "较完整" },
      { label: "规则说明", value: "需核对澳门法规" },
      { label: "入口状态", value: "以官方信息为准" },
      { label: "编辑备注", value: "重点看入场年龄、证件、现场规则和预算风险" },
    ],
    overview:
      "澳门美高梅资料记录公开场馆信息、入场条件、娱乐设施和常见核对事项。本站只做资料索引，不构成平台背书或消费建议。",
    strengths: ["入场条件是否明确", "场馆公告是否及时", "消费和会员规则是否公开", "客服渠道是否一致", "风险提示是否独立"],
    cautions: ["需确认澳门当地法规", "活动和场馆安排可能变化", "娱乐消费需提前设定预算"],
    risks: ["财务损失风险", "活动规则变化", "跨境法规差异"],
  },
  {
    slug: "las-vegas-casino",
    name: "美国拉斯维加斯",
    type: "拉斯维加斯赌场资料",
    supported: ["赌场资料", "酒店娱乐", "旅行核对"],
    updatedAt: "2026-06-24",
    risk: "低",
    score: 80,
    basics: [
      { label: "资料情况", value: "较完整" },
      { label: "规则说明", value: "需按州法规核对" },
      { label: "入口状态", value: "以场馆公告为准" },
      { label: "编辑备注", value: "重点看年龄、证件、税务、费用和责任博彩规则" },
    ],
    overview:
      "美国拉斯维加斯资料用于整理公开旅游和赌场信息、场馆规则、年龄限制和风险提醒。不同场馆规则不同，访问前应自行核对最新公告。",
    strengths: ["年龄和证件要求是否清楚", "场馆规则是否公开", "费用和税务提示是否明确", "责任博彩工具是否可见", "客服渠道是否一致"],
    cautions: ["需核对美国当地和州法规", "不同场馆规则差异较大", "旅行预算和时间成本需提前评估"],
    risks: ["法规差异", "财务损失风险", "旅行成本风险"],
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
