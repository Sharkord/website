import { readSupporters, tierSupporters } from "@/lib/supporters";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { CSSProperties } from "react";
import { ImageResponse } from "next/og";

export const dynamic = "force-dynamic";

const WIDTH = 800;
const PADDING = 32;
const GAP = 8;
const LABEL_HEIGHT = 28;
const SECTION_GAP = 28;
const PODIUM_HEIGHT = 92;

// colors mirror the landing page dark theme tokens so the image sits in both the readme and the site
const COLORS = {
  background: "#0a0a0a",
  card: "#141414",
  border: "#262626",
  foreground: "#fafafa",
  muted: "#a3a3a3",
  subtle: "#737373",
};

const loadFont = (file: string) =>
  readFile(path.join(process.cwd(), "assets", file));

const fonts = Promise.all([
  loadFont("Geist-Regular.ttf"),
  loadFont("Geist-SemiBold.ttf"),
]);

const PILL_TIERS = [
  {
    label: "Champions",
    fontSize: 18,
    padX: 16,
    padY: 8,
    style: {
      background: COLORS.card,
      border: `1px solid ${COLORS.border}`,
      color: COLORS.foreground,
    },
  },
  {
    label: "Supporters",
    fontSize: 15,
    padX: 12,
    padY: 6,
    style: {
      border: `1px solid ${COLORS.border}`,
      color: COLORS.muted,
    },
  },
];

type TPillTier = (typeof PILL_TIERS)[number];

// ponytail: chip widths are estimated from character count, real glyph widths can push a row to wrap early or late
const rowCount = (names: string[], tier: TPillTier) => {
  let rows = 1;
  let x = 0;

  for (const name of names) {
    const width = name.length * tier.fontSize * 0.58 + tier.padX * 2 + 2;

    if (x > 0 && x + width > WIDTH - PADDING * 2) {
      rows++;
      x = 0;
    }

    x += width + GAP;
  }

  return rows;
};

const Label = ({ children }: { children: string }) => (
  <div
    style={{
      display: "flex",
      height: LABEL_HEIGHT,
      fontSize: 12,
      letterSpacing: 1.5,
      textTransform: "uppercase",
      color: COLORS.subtle,
    }}
  >
    {children}
  </div>
);

const podiumStyle = (rank: number): CSSProperties => {
  if (rank === 1) {
    return { background: COLORS.foreground, color: COLORS.background };
  }

  return {
    background: COLORS.card,
    border: `1px solid ${COLORS.border}`,
    color: COLORS.foreground,
  };
};

export async function GET() {
  const [supporters, [regular, semibold]] = await Promise.all([
    readSupporters(),
    fonts,
  ]);
  const { podium, champions, rest } = tierSupporters(supporters);
  const [championsTier, restTier] = PILL_TIERS;
  const groups = [
    { tier: championsTier, group: champions },
    { tier: restTier, group: rest },
  ].filter(({ group }) => group.length > 0);

  const height =
    PADDING * 2 +
    (podium.length > 0 ? LABEL_HEIGHT + PODIUM_HEIGHT : 0) +
    groups.reduce(
      (total, { tier, group }) =>
        total +
        SECTION_GAP +
        LABEL_HEIGHT +
        rowCount(group, tier) *
          (tier.fontSize * 1.25 + tier.padY * 2 + 2 + GAP) -
        GAP,
      0,
    );

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        padding: PADDING,
        borderRadius: 16,
        border: `1px solid ${COLORS.border}`,
        background: COLORS.background,
      }}
    >
      {podium.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Label>Top supporters</Label>
          <div style={{ display: "flex", gap: 12, height: PODIUM_HEIGHT }}>
            {podium.map((name, index) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flex: 1,
                  padding: "14px 18px",
                  borderRadius: 12,
                  ...podiumStyle(index + 1),
                }}
              >
                <div style={{ display: "flex", fontSize: 13, opacity: 0.6 }}>
                  {`#${index + 1}`}
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 26,
                    fontWeight: 600,
                    letterSpacing: -0.5,
                  }}
                >
                  {name}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {groups.map(({ tier, group }) => (
        <div
          key={tier.label}
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: SECTION_GAP,
          }}
        >
          <Label>{tier.label}</Label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: GAP }}>
            {group.map((name) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  fontSize: tier.fontSize,
                  padding: `${tier.padY}px ${tier.padX}px`,
                  borderRadius: 999,
                  ...tier.style,
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>,
    {
      width: WIDTH,
      height: Math.max(Math.ceil(height), 80),
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: semibold, weight: 600, style: "normal" },
      ],
      headers: { "Cache-Control": "public, max-age=600" },
    },
  );
}
