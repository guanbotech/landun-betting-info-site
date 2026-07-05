export const categoryImagePaths: Record<string, string> = {
  "esports-betting": "/images/categories/esports-betting-v2.webp",
  "sports-betting": "/images/categories/sports-betting-v2.webp",
  poker: "/images/categories/poker-v2.webp",
  "online-games": "/images/categories/card-games-v2.webp",
  "risk-warning": "/images/categories/risk-warning.webp",
  "platform-reviews": "/images/categories/platform-review.webp",
  rankings: "/images/categories/rankings.webp",
  "betting-guide": "/images/categories/betting-guide.webp",
};

const articleImagePaths: Record<string, string> = {
  "esports-market-risk-checklist": "/images/covers/esports-moba-v2.webp",
  "sports-betting-rule-page-template": "/images/covers/football-v2.webp",
  "poker-platform-data-model": "/images/covers/poker-table-v2.webp",
  "online-games-offer-terms": "/images/covers/card-games-rules-v2.webp",
  "risk-alert-entry-verification": "/images/covers/risk-domain-security.webp",
  "guide-responsible-gambling": "/images/covers/risk-domain-security.webp",
};

const topicImagePaths: Record<string, string> = {
  "champions-league": "/images/covers/football-v2.webp",
  "premier-league": "/images/covers/football-v2.webp",
  "chinese-super-league": "/images/covers/football-v2.webp",
  "sports-betting-regulation": "/images/covers/football-v2.webp",
  nba: "/images/covers/basketball.webp",
  f1: "/images/covers/f1.webp",
  "league-of-legends": "/images/covers/esports-moba-v2.webp",
  dota2: "/images/covers/esports-moba-v2.webp",
  "honor-of-kings": "/images/covers/esports-moba-v2.webp",
  cs2: "/images/covers/esports-fps.webp",
  valorant: "/images/covers/esports-fps.webp",
  crossfire: "/images/covers/esports-fps.webp",
  "niuniu-online": "/images/covers/card-games-rules-v2.webp",
  "sangong-online": "/images/covers/card-games-rules-v2.webp",
  "baccarat-online": "/images/covers/card-games-rules-v2.webp",
  "golden-flower-online": "/images/covers/card-games-rules-v2.webp",
  "dragon-tiger-online": "/images/covers/card-games-rules-v2.webp",
  "doudizhu-online": "/images/covers/card-games-rules-v2.webp",
};

export function getArticleCoverImage(slug: string) {
  return articleImagePaths[slug];
}

export function getTopicCoverImage(slug: string) {
  return topicImagePaths[slug];
}

const platformImagePaths: Record<string, string> = {
  "singapore-marina-bay-sands": "/images/platforms/singapore-marina-bay-sands.webp",
  "malaysia-genting-casino": "/images/platforms/malaysia-genting-casino.webp",
  "macau-mgm": "/images/platforms/macau-mgm.webp",
  "las-vegas-casino": "/images/platforms/las-vegas-casino.webp",
};

export function getPlatformCoverImage(slug: string) {
  return platformImagePaths[slug];
}
