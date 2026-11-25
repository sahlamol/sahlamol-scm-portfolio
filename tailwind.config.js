module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: { extend: {
    colors: { bg: "var(--bg)", panel: "var(--panel)", ink: "var(--ink)", mute: "var(--mute)", line: "var(--line)", accent: "var(--accent)" },
    fontFamily: { sans: ["ui-sans-serif","system-ui","Segoe UI","Roboto","sans-serif"], mono: ["ui-monospace","SFMono-Regular","Menlo","Consolas","monospace"] }
  } },
  plugins: []
};
