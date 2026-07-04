export const categoryImagePaths: Record<string, string> = {
  "esports-betting": "/images/categories/esports-betting.webp",
  "sports-betting": "/images/categories/sports-betting.webp",
  poker: "/images/categories/poker.webp",
  "online-games": "/images/categories/card-games.webp",
  "risk-warning": "/images/categories/risk-warning.webp",
  "platform-reviews": "/images/categories/platform-review.webp",
  rankings: "/images/categories/rankings.webp",
  "betting-guide": "/images/categories/betting-guide.webp",
};

const articleImagePaths: Record<string, string> = {
  "esports-market-risk-checklist": "/images/covers/esports-moba.webp",
  "sports-betting-rule-page-template": "/images/covers/football.webp",
  "poker-platform-data-model": "/images/covers/poker-table.webp",
  "online-games-offer-terms": "/images/covers/card-games-rules.webp",
  "risk-alert-entry-verification": "/images/covers/risk-domain-security.webp",
  "guide-responsible-gambling": "/images/covers/risk-domain-security.webp",
};

const topicImagePaths: Record<string, string> = {
  "champions-league": "/images/covers/football.webp",
  "premier-league": "/images/covers/football.webp",
  "chinese-super-league": "/images/covers/football.webp",
  "sports-betting-regulation": "/images/covers/football.webp",
  nba: "/images/covers/basketball.webp",
  f1: "/images/covers/f1.webp",
  "league-of-legends": "/images/covers/esports-moba.webp",
  dota2: "/images/covers/esports-moba.webp",
  "honor-of-kings": "/images/covers/esports-moba.webp",
  cs2: "/images/covers/esports-fps.webp",
  valorant: "/images/covers/esports-fps.webp",
  crossfire: "/images/covers/esports-fps.webp",
  "niuniu-online": "/images/covers/card-games-rules.webp",
  "sangong-online": "/images/covers/card-games-rules.webp",
  "baccarat-online": "/images/covers/card-games-rules.webp",
  "golden-flower-online": "/images/covers/card-games-rules.webp",
  "dragon-tiger-online": "/images/covers/card-games-rules.webp",
  "doudizhu-online": "/images/covers/card-games-rules.webp",
};

export function getArticleCoverImage(slug: string) {
  return articleImagePaths[slug];
}

export function getTopicCoverImage(slug: string) {
  return topicImagePaths[slug];
}

const platformImagePaths: Record<string, string> = {
  "northstar-review": "/images/platforms/northstar-review.webp",
  "atlas-esports": "/images/platforms/atlas-esports.webp",
  "river-poker": "/images/platforms/river-poker.webp",
  "clearline-games": "/images/platforms/clearline-games.webp",
};

export function getPlatformCoverImage(slug: string) {
  return platformImagePaths[slug];
}
