"use client";

import { useMemo, useState } from "react";
import { RotateCcw, Sparkles } from "lucide-react";

type GameConfig = {
  title: string;
  intro: string;
  options: { label: string; odds: number }[];
  tableLabel: string;
};

const configs: Record<string, GameConfig> = {
  poker: {
    title: "德州扑克虚拟下注模拟",
    intro: "模拟底牌、公共牌和虚拟筹码变化，只用于体验下注节奏和资金波动。",
    tableLabel: "底牌与公共牌",
    options: [
      { label: "跟注", odds: 1 },
      { label: "加注", odds: 2 },
      { label: "全下", odds: 4 },
    ],
  },
  "niuniu-online": {
    title: "牛牛虚拟下注模拟",
    intro: "选一边、调筹码、开一局。结果只用于理解赔率、节奏和资金波动。",
    tableLabel: "五张牌点数",
    options: [
      { label: "闲家", odds: 1 },
      { label: "庄家", odds: 1 },
      { label: "牛牛", odds: 3 },
    ],
  },
  "sangong-online": {
    title: "三公虚拟下注模拟",
    intro: "模拟三张牌比点，不同平台规则可能不同，这里只做基础演示。",
    tableLabel: "三张牌点数",
    options: [
      { label: "闲胜", odds: 1 },
      { label: "庄胜", odds: 1 },
      { label: "三公", odds: 4 },
    ],
  },
  "baccarat-online": {
    title: "百家乐虚拟下注模拟",
    intro: "体验庄、闲、和三种常见选择，注意这不是投注技巧。",
    tableLabel: "庄闲点数",
    options: [
      { label: "庄", odds: 0.95 },
      { label: "闲", odds: 1 },
      { label: "和", odds: 8 },
    ],
  },
  "golden-flower-online": {
    title: "炸金花虚拟下注模拟",
    intro: "用虚拟筹码看牌型波动，重点观察追注带来的风险。",
    tableLabel: "牌型结果",
    options: [
      { label: "看牌跟注", odds: 1 },
      { label: "暗注", odds: 2 },
      { label: "豹子", odds: 8 },
    ],
  },
  "dragon-tiger-online": {
    title: "龙虎斗虚拟下注模拟",
    intro: "模拟龙、虎、和的即时开奖，适合了解高频结果波动。",
    tableLabel: "龙虎点数",
    options: [
      { label: "龙", odds: 1 },
      { label: "虎", odds: 1 },
      { label: "和", odds: 8 },
    ],
  },
  "doudizhu-online": {
    title: "斗地主虚拟加倍模拟",
    intro: "模拟叫地主和加倍选择，观察倍数变化对筹码的影响。",
    tableLabel: "叫牌局面",
    options: [
      { label: "叫地主", odds: 1 },
      { label: "不叫", odds: 0.5 },
      { label: "加倍", odds: 2 },
    ],
  },
};

const suits = ["♠", "♥", "♣", "♦"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function drawCards(count: number) {
  return Array.from({ length: count }, () => {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    return `${suit}${rank}`;
  });
}

function describeRound(slug: string, cards: string[]) {
  const scoreA = Math.floor(Math.random() * 10);
  const scoreB = Math.floor(Math.random() * 10);
  if (slug === "dragon-tiger-online") return `龙 ${scoreA} 点 / 虎 ${scoreB} 点`;
  if (slug === "baccarat-online") return `庄 ${scoreA} 点 / 闲 ${scoreB} 点`;
  if (slug === "golden-flower-online") {
    const types = ["散牌", "对子", "顺子", "金花", "豹子"];
    return types[Math.floor(Math.random() * types.length)];
  }
  if (slug === "poker") {
    const hands = ["高牌", "一对", "两对", "三条", "顺子", "同花", "葫芦"];
    return `本局牌型：${hands[Math.floor(Math.random() * hands.length)]}`;
  }
  if (slug === "doudizhu-online") {
    const states = ["农民牌面更整", "地主有炸弹机会", "底牌改善有限", "加倍后波动变大"];
    return states[Math.floor(Math.random() * states.length)];
  }
  return `${cards.length} 张牌，点数 ${scoreA}`;
}

export function GameSimulator({ slug }: { slug: string }) {
  const config = configs[slug];
  const [balance, setBalance] = useState(1000);
  const [stake, setStake] = useState(50);
  const [selected, setSelected] = useState(config?.options[0]?.label ?? "");
  const [cards, setCards] = useState<string[]>([]);
  const [result, setResult] = useState("等待开局");
  const [message, setMessage] = useState("选择一个下注项，点击开始模拟。");

  const cardCount = useMemo(() => {
    if (slug === "poker") return 7;
    if (slug === "sangong-online" || slug === "golden-flower-online") return 3;
    if (slug === "dragon-tiger-online" || slug === "baccarat-online") return 4;
    return 5;
  }, [slug]);

  if (!config) return null;

  function playRound() {
    const option = config.options.find((item) => item.label === selected) ?? config.options[0];
    const nextCards = drawCards(cardCount);
    const win = Math.random() < (option.odds >= 4 ? 0.18 : option.odds >= 2 ? 0.32 : 0.48);
    const delta = win ? Math.round(stake * option.odds) : -stake;
    setCards(nextCards);
    setResult(describeRound(slug, nextCards));
    setBalance((value) => Math.max(0, value + delta));
    setMessage(win ? `本局命中 ${option.label}，虚拟筹码 +${delta}` : `本局未命中 ${option.label}，虚拟筹码 ${delta}`);
  }

  function reset() {
    setBalance(1000);
    setStake(50);
    setSelected(config.options[0].label);
    setCards([]);
    setResult("等待开局");
    setMessage("选择一个下注项，点击开始模拟。");
  }

  return (
    <section className="game-sim">
      <div className="game-sim-head">
        <div>
          <p className="eyebrow risk">虚拟筹码 / 模拟操作</p>
          <h2>{config.title}</h2>
          <p>{config.intro}</p>
        </div>
        <div className="game-balance">
          <span>虚拟余额</span>
          <strong>{balance}</strong>
        </div>
      </div>

      <div className="game-table">
        <div className="game-panel">
          <span>{config.tableLabel}</span>
          <div className="game-cards" aria-label="模拟牌面">
            {(cards.length ? cards : Array.from({ length: cardCount }, () => "？")).map((card, index) => (
              <b key={`${card}-${index}`}>{card}</b>
            ))}
          </div>
          <strong>{result}</strong>
          <p>{message}</p>
        </div>

        <div className="game-controls">
          <div>
            <span className="game-label">下注项</span>
            <div className="game-option-grid">
              {config.options.map((option) => (
                <button
                  className={selected === option.label ? "active" : ""}
                  key={option.label}
                  onClick={() => setSelected(option.label)}
                  type="button"
                >
                  {option.label}
                  <small>{option.odds}x</small>
                </button>
              ))}
            </div>
          </div>

          <label className="stake-control">
            <span>虚拟筹码</span>
            <input min="10" max="200" step="10" type="range" value={stake} onChange={(event) => setStake(Number(event.target.value))} />
            <strong>{stake}</strong>
          </label>

          <div className="game-actions">
            <button className="btn-primary" disabled={balance <= 0} onClick={playRound} type="button">
              <Sparkles className="size-4" aria-hidden="true" />
              开始模拟下注
            </button>
            <button className="btn-secondary" onClick={reset} type="button">
              <RotateCcw className="size-4" aria-hidden="true" />
              重置
            </button>
          </div>
        </div>
      </div>

      <p className="game-disclaimer">仅为虚拟筹码演示，不提供真钱投注、充值、提现或任何投注建议。</p>
    </section>
  );
}
