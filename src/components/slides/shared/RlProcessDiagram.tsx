/**
 * RL proceso diagrama – horizontali schema (Agentas → Aplinka → Veiksmas → Atlygis).
 * Interaktyvi: currentStep, onStepClick – paspaudus žingsnį, rodomas paaiškinimas apačioje.
 * SCHEME_AGENT: 2 rodyklių tipai (forward grey, feedback ACCENT dashed), etiketės su bg rect.
 * Grįžtamasis ryšys: Atlygis → Agentas – punktyrinė, geltona, rankinis trikampis (ne SVG marker).
 */
import { useId, useState, useEffect } from 'react';

/* ═══ Viewbox – padidintas aukštis daugiau erdvės feedback kilpai ═══ */
const VIEWBOX_DESKTOP = '0 0 920 330';
const VIEWBOX_MOBILE = '0 0 520 460';
const VB_WIDTH_DESKTOP = 920;
const VB_HEIGHT_DESKTOP = 330;
const VB_WIDTH_MOBILE = 520;
const VB_HEIGHT_MOBILE = 460;
const STEP_ACTIVE_OPACITY = 1;
const STEP_INACTIVE_OPACITY = 0.5;

/* ═══ Geometrijos konstantos – viena tiesa (SCHEME_AGENT §3.1) ═══ */
const BOX_W = 200;
const BOX_H = 88;
const GAP = 28;
const ARROW_GAP_FWD = 5;   /** Forward: tight gap – 18px visible arrow in 28px gap */
const ARROW_GAP_FB = 12;   /** Feedback: comfortable gap below box */
const START_X = 32;         /** 32 (ne 40) – kad paskutinis box tilptų: 32+3×228+200=916<920 */
const ROW_Y = 82;           /** Pakelti (buvo 100) – centruoti aukštesniame viewbox */
const ARROW_MARKER_LEN = 12;

/* ═══ Forward labels – individualūs pločiai (centered-on-edge, yWorks pattern) ═══ */
// (eksportuojame tik komponentus; label fonų/plotų konstantos pašalintos – buvo nenaudojamos)

/* ═══ Feedback arrow – rankinis polygon, ne SVG marker (§3.4) ═══ */
const FB_TIP_H = 14;       /** Trikampio aukštis (bazė → smailė) */
const FB_TIP_W = 10;       /** Trikampio pusė pločio nuo centro */
const FB_CORNER_R = 16;    /** Rounded corners feedback path */

/* ═══ Spalvos ═══ */
const BRAND = '#334e68';
const BRAND_LIGHT = '#486581';
const ACCENT = '#b8860b';
const ACCENT_DARK = '#7a5807';
const ACCENT_LIGHT = '#d4a520';
const BORDER = '#bcccdc';
const GREY_FORWARD = '#7B8794';
const BG_LIGHT = '#f0f4f8';
const BG_LIGHT_END = '#f1f5f9';
const TEXT_DARK = '#102a43';
/* ═══ Desktop: viena eilė ═══ */
const STEPS_ROW = [
  { x: START_X, y: ROW_Y, w: BOX_W, h: BOX_H, title: 'Agentas', desc: 'DI sistema' },
  { x: START_X + (BOX_W + GAP) * 1, y: ROW_Y, w: BOX_W, h: BOX_H, title: 'Aplinka', desc: 'situacija / užduotis' },
  { x: START_X + (BOX_W + GAP) * 2, y: ROW_Y, w: BOX_W, h: BOX_H, title: 'Veiksmas', desc: 'ką padaro' },
  { x: START_X + (BOX_W + GAP) * 3, y: ROW_Y, w: BOX_W, h: BOX_H, title: 'Atlygis', desc: 'gerai / blogai' },
];

/* ═══ Mobile: 2×2 grid ═══ */
const MOBILE_OFFSET_X = 40;
const MOBILE_OFFSET_Y = 60;
const STEPS_GRID = [
  { x: MOBILE_OFFSET_X, y: MOBILE_OFFSET_Y, w: BOX_W, h: BOX_H, title: 'Agentas', desc: 'DI sistema' },
  { x: MOBILE_OFFSET_X + BOX_W + GAP, y: MOBILE_OFFSET_Y, w: BOX_W, h: BOX_H, title: 'Aplinka', desc: 'situacija / užduotis' },
  { x: MOBILE_OFFSET_X, y: MOBILE_OFFSET_Y + BOX_H + GAP, w: BOX_W, h: BOX_H, title: 'Veiksmas', desc: 'ką padaro' },
  { x: MOBILE_OFFSET_X + BOX_W + GAP, y: MOBILE_OFFSET_Y + BOX_H + GAP, w: BOX_W, h: BOX_H, title: 'Atlygis', desc: 'gerai / blogai' },
];

/** Etiketės ant forward rodyklių */
const FORWARD_LABELS = ['sprendimas', 'atlikimas', 'rezultatas'] as const;
/** Etiketė ant grįžtamosios rodyklės */
const FEEDBACK_LABEL = 'elgesio korekcija';

interface RlProcessDiagramProps {
  currentStep?: number;
  onStepClick?: (index: number) => void;
  className?: string;
}

function useIsCompact() {
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    setCompact(mq.matches);
    const fn = () => setCompact(mq.matches);
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, []);
  return compact;
}

export default function RlProcessDiagram({
  currentStep = 0,
  onStepClick,
  className = '',
}: RlProcessDiagramProps) {
  const uid = useId().replace(/:/g, '');
  const isInteractive = typeof onStepClick === 'function';
  const isCompact = useIsCompact();
  const STEPS = isCompact ? STEPS_GRID : STEPS_ROW;
  const viewBox = isCompact ? VIEWBOX_MOBILE : VIEWBOX_DESKTOP;
  const vbWidth = isCompact ? VB_WIDTH_MOBILE : VB_WIDTH_DESKTOP;
  const vbHeight = isCompact ? VB_HEIGHT_MOBILE : VB_HEIGHT_DESKTOP;

  const forwardEdges = isCompact
    ? [
        { from: 0, to: 1, axis: 'x' as const },
        { from: 1, to: 2, axis: 'y' as const },
        { from: 2, to: 3, axis: 'x' as const },
      ]
    : [
        { from: 0, to: 1, axis: 'x' as const },
        { from: 1, to: 2, axis: 'x' as const },
        { from: 2, to: 3, axis: 'x' as const },
      ];

  const last = STEPS[3];
  const first = STEPS[0];

  /* ═══ Feedback geometry ═══ */
  const firstCx = first.x + first.w / 2;
  const lastCx = last.x + last.w / 2;
  const firstBottom = first.y + first.h;
  const lastBottom = last.y + last.h;
  const fbY = isCompact
    ? MOBILE_OFFSET_Y + 2 * (BOX_H + GAP) + 56
    : ROW_Y + BOX_H + 56;

  /**
   * Feedback path: dashed ACCENT, rounded corners (Q bezier) desktop, straight mobile.
   * SCHEME_AGENT §3.4: path baigiasi ties trikampio baze, rankinis polygon rodo į Agentą.
   * Paskutinis segmentas į viršų – vizualiai aišku, kad grįžta.
   */
  const fbTriBase = firstBottom + FB_TIP_H;
  const R = FB_CORNER_R;
  const fbStartY = lastBottom + ARROW_GAP_FB;
  const feedbackPath = isCompact
    ? `M ${lastCx} ${fbStartY}
       L ${lastCx} ${fbY}
       L ${firstCx} ${fbY}
       L ${firstCx} ${fbTriBase}`
    : `M ${lastCx} ${fbStartY}
       L ${lastCx} ${fbY - R}
       Q ${lastCx} ${fbY}, ${lastCx - R} ${fbY}
       L ${firstCx + R} ${fbY}
       Q ${firstCx} ${fbY}, ${firstCx} ${fbY - R}
       L ${firstCx} ${fbTriBase}`;

  return (
    <svg
      viewBox={viewBox}
      className={`w-full max-w-3xl mx-auto block ${className}`}
      role="img"
      aria-label={`RL proceso schema.${isInteractive ? ' Paspauskite žingsnį, kad pamatytumėte paaiškinimą.' : ''}`}
    >
      <defs>
        <linearGradient id={`rl-bg-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={BG_LIGHT} />
          <stop offset="100%" stopColor={BG_LIGHT_END} />
        </linearGradient>
        {/* Forward arrow marker – grey, proportional (§3.3) */}
        <marker id={`rl-arrow-${uid}`} markerWidth={ARROW_MARKER_LEN + 2} markerHeight={10} refX={ARROW_MARKER_LEN} refY="5" orient="auto">
          <path d={`M0 0 L${ARROW_MARKER_LEN} 5 L0 10 Z`} fill={GREY_FORWARD} stroke={GREY_FORWARD} strokeWidth="0.5" />
        </marker>
        {/* Feedback marker pašalintas – naudojamas rankinis polygon (žr. apačioje) */}
        <linearGradient id={`rl-step-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={BRAND_LIGHT} />
          <stop offset="100%" stopColor={BRAND} />
        </linearGradient>
        <linearGradient id={`rl-atlygis-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={ACCENT_LIGHT} />
          <stop offset="100%" stopColor={ACCENT} />
        </linearGradient>
        <filter id={`rl-glow-${uid}`} x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor={ACCENT} floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Background */}
      <rect width={vbWidth} height={vbHeight} fill={`url(#rl-bg-${uid})`} rx="12" />
      <rect width={vbWidth} height={vbHeight} fill="none" stroke={BORDER} strokeWidth="1" rx="12" />

      {/* Title */}
      {!isCompact && (
        <>
          <text x={vbWidth / 2} y="28" textAnchor="middle" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="18" fontWeight="800" fill={TEXT_DARK}>
            RL proceso struktūra
          </text>
          <text x={vbWidth / 2} y="48" textAnchor="middle" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="13" fontWeight="500" fill={BRAND}>
            Paspausk žingsnį – paaiškinimas apačioje
          </text>
        </>
      )}
      {isCompact && (
        <text x={vbWidth / 2} y="36" textAnchor="middle" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="16" fontWeight="800" fill={TEXT_DARK}>
          RL struktūra
        </text>
      )}

      {/* ═══ Steps (boxes + forward arrows + labels) ═══ */}
      {STEPS.map((step, i) => {
        const isActive = currentStep === i;
        const isAtlygis = i === 3;
        const opacity = isActive ? STEP_ACTIVE_OPACITY : STEP_INACTIVE_OPACITY;
        const [x, y, w, h] = [step.x, step.y, step.w, step.h];
        const rightEdge = x + w;
        const bottomEdge = y + h;
        const centerX = x + w / 2;
        const centerY = y + h / 2;
        const next = STEPS[i + 1];

        return (
          <g key={i}>
            {/* Box */}
            <g opacity={opacity} style={{ transition: 'opacity 0.2s ease' }} aria-hidden>
              <rect
                x={x} y={y} width={w} height={h} rx="10"
                fill={isAtlygis ? `url(#rl-atlygis-${uid})` : `url(#rl-step-${uid})`}
                stroke={isAtlygis ? ACCENT_DARK : isActive ? TEXT_DARK : BRAND}
                strokeWidth={isAtlygis ? 2.5 : isActive ? 2.5 : 1.5}
                filter={isAtlygis ? `url(#rl-glow-${uid})` : undefined}
              />
              <text x={centerX} y={y + 32} textAnchor="middle" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="14" fontWeight="700" fill="white">
                {step.title}
              </text>
              <text x={centerX} y={y + 52} textAnchor="middle" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="12" fontWeight="500" fill="rgba(255,255,255,0.95)">
                {step.desc}
              </text>
            </g>

            {/* Click target (a11y: §3.5) */}
            {isInteractive && (
              <rect
                x={x} y={y} width={w} height={h} rx="10"
                fill="transparent" cursor="pointer"
                onClick={() => onStepClick(i)}
                aria-label={`Žingsnis ${i + 1}: ${step.title}. Paspauskite paaiškinimui.`}
                role="button" tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onStepClick(i); } }}
              />
            )}

            {/* Forward arrow + centered-on-edge label (yWorks / GoJS pattern) */}
            {next && (() => {
              const n = next;
              const labelText = FORWARD_LABELS[i];

              /* ── Etiketės VIRŠ rodyklių, laisvoje erdvėje tarp title ir box'ų ── */
              const gapCenterX = rightEdge + GAP / 2;
              const lblY = step.y - 6;          /* teksto baseline: 6px virš box viršaus */
              const lblRectY = lblY - 13;        /* rect viršus */
              const lblRectH = 18;

              if (forwardEdges[i]?.axis === 'y') {
                const nCenterX = n.x + n.w / 2;
                const y1 = bottomEdge + ARROW_GAP_FWD;
                const y2 = n.y - ARROW_MARKER_LEN;
                return (
                  <g key={`arrow-${i}`} aria-label={`${step.title} → ${n.title}: ${labelText}`}>
                    <line x1={centerX} y1={y1} x2={nCenterX} y2={y2} stroke={GREY_FORWARD} strokeWidth="3" markerEnd={`url(#rl-arrow-${uid})`} />
                    {labelText && (
                      <text x={(centerX + nCenterX) / 2 + 14} y={(y1 + y2) / 2 + 4} textAnchor="middle" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="11" fontWeight="700" fill={GREY_FORWARD}>{labelText}</text>
                    )}
                  </g>
                );
              }

              const fromX = rightEdge + ARROW_GAP_FWD;
              const arrowY = centerY;
              const toX = n.x - ARROW_GAP_FWD;
              const connTop = lblRectY + lblRectH;   /* connector start: label rect apačia */
              return (
                <g key={`arrow-${i}`} aria-label={`${step.title} → ${n.title}: ${labelText}`}>
                  {/* Rodyklė – pilnas gap */}
                  <line x1={fromX} y1={arrowY} x2={toX} y2={arrowY} stroke={GREY_FORWARD} strokeWidth="3" markerEnd={`url(#rl-arrow-${uid})`} />
                  {/* Etiketė virš gap'o + vertikalus connector */}
                  {labelText && (
                    <>
                      <line x1={gapCenterX} y1={connTop} x2={gapCenterX} y2={arrowY} stroke={GREY_FORWARD} strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
                      <text x={gapCenterX} y={lblY} textAnchor="middle" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="11" fontWeight="700" fill={TEXT_DARK}>{labelText}</text>
                    </>
                  )}
                </g>
              );
            })()}
          </g>
        );
      })}

      {/* ═══ Feedback loop: Atlygis → Agentas ═══ */}

      {/* Start indicator – circle at Atlygis bottom (origin of feedback) */}
      <circle cx={lastCx} cy={fbStartY} r={5} fill={ACCENT} stroke={ACCENT_DARK} strokeWidth="0.8" />

      {/* Dashed path – rounded corners desktop, straight mobile */}
      <path
        d={feedbackPath}
        stroke={ACCENT}
        strokeWidth="2.5"
        strokeDasharray="8 4"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <title>Grįžtamasis ryšys: atlygis grįžta į agentą ir keičia elgesį</title>
      </path>

      {/* Manual arrowhead – polygon aiškiai rodo Į VIRŠŲ, į Agentą (§3.4: ne SVG marker) */}
      <polygon
        points={`${firstCx - FB_TIP_W},${fbTriBase} ${firstCx},${firstBottom} ${firstCx + FB_TIP_W},${fbTriBase}`}
        fill={ACCENT}
        stroke={ACCENT_DARK}
        strokeWidth="0.8"
        strokeLinejoin="round"
      />

      {/* Feedback label */}
      <text
        x={(lastCx + firstCx) / 2}
        y={fbY + 16}
        textAnchor="middle"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        fontSize="11"
        fontWeight="600"
        fill={ACCENT_DARK}
      >
        {FEEDBACK_LABEL}
      </text>
    </svg>
  );
}
