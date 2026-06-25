const emojis = [
  "⍟",
  "⎊",
  "⧗",
  "✇",
  "✵",
  "۞",
  "ϟ",
  "४",
  "𖤍",
  "꘩",
  "ᗢ",
  "✪",
  "🕸️",
  "➳",
  "◊",
  "Ⓐ",
  "➃",
  "⩔",
  "🕷️",
  "⚡",
  "🛡️",
  "🟢",
  "🤖",
  "🎯",
  "🖤",
  "🔮",
  "💀",
  "🐱",
  "🔥",
  "💎",
  "👓",
  "🐜",
  "🦅",
];

function getEmoji(){
    const emoji = emojis[Math.floor(Math.random()*emojis.length)];
    return emoji;
}
export default getEmoji;