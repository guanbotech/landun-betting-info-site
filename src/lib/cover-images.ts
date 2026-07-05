export const categoryImagePaths: Record<string, string> = {
  "esports-betting": "/images/categories/esports-betting-v3.webp",
  "sports-betting": "/images/categories/sports-betting-v3.webp",
  poker: "/images/categories/poker-v3.webp",
  "online-games": "/images/categories/card-games-v3.webp",
  "risk-warning": "/images/categories/risk-warning-v3.webp",
  "platform-reviews": "/images/categories/platform-review-v3.webp",
  rankings: "/images/categories/rankings-v3.webp",
  "betting-guide": "/images/categories/betting-guide-v3.webp",
};

const articleImagePaths: Record<string, string> = {
  "esports-market-risk-checklist": "/images/covers/esports-moba-v3.webp",
  "sports-betting-rule-page-template": "/images/covers/football-v3.webp",
  "poker-platform-data-model": "/images/covers/poker-table-v3.webp",
  "online-games-offer-terms": "/images/covers/card-games-rules-v3.webp",
  "risk-alert-entry-verification": "/images/covers/risk-domain-security-v3.webp",
  "guide-responsible-gambling": "/images/covers/risk-domain-security-v3.webp",
  "asia-betting-info-entry-check": "/images/categories/platform-review-v3.webp",
  "asia-sports-betting-rule-differences": "/images/covers/football-v3.webp",
  "asia-esports-betting-data-checklist": "/images/covers/esports-moba-v3.webp",
  "asia-card-games-offer-risk": "/images/covers/card-games-rules-v3.webp",
  "asia-casino-travel-data-check": "/images/categories/platform-review-v3.webp",
  "asia-betting-platform-data-ranking": "/images/categories/rankings-v3.webp",
};

const topicImagePaths: Record<string, string> = {
  "champions-league": "/images/covers/football-v3.webp",
  "premier-league": "/images/covers/football-v3.webp",
  "chinese-super-league": "/images/covers/football-v3.webp",
  "sports-betting-regulation": "/images/covers/football-v3.webp",
  nba: "/images/covers/basketball-v3.webp",
  f1: "/images/covers/f1-v3.webp",
  "league-of-legends": "/images/covers/esports-moba-v3.webp",
  dota2: "/images/covers/esports-moba-v3.webp",
  "honor-of-kings": "/images/covers/esports-moba-v3.webp",
  cs2: "/images/covers/esports-fps-v3.webp",
  valorant: "/images/covers/esports-fps-v3.webp",
  crossfire: "/images/covers/esports-fps-v3.webp",
  "niuniu-online": "/images/covers/card-games-rules-v3.webp",
  "sangong-online": "/images/covers/card-games-rules-v3.webp",
  "baccarat-online": "/images/covers/card-games-rules-v3.webp",
  "golden-flower-online": "/images/covers/card-games-rules-v3.webp",
  "dragon-tiger-online": "/images/covers/card-games-rules-v3.webp",
  "doudizhu-online": "/images/covers/card-games-rules-v3.webp",
};

export function getArticleCoverImage(slug: string) {
  return articleImagePaths[slug];
}

export function getTopicCoverImage(slug: string) {
  return topicImagePaths[slug];
}

const platformImagePaths: Record<string, string> = {
  "singapore-marina-bay-sands": "/images/platforms/singapore-marina-bay-sands-v3.webp",
  "malaysia-genting-casino": "/images/platforms/malaysia-genting-casino-v3.webp",
  "macau-mgm": "/images/platforms/macau-mgm-v3.webp",
  "las-vegas-casino": "/images/platforms/las-vegas-casino-v3.webp",
};

export function getPlatformCoverImage(slug: string) {
  return platformImagePaths[slug];
}
