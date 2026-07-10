"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Confetti Canvas ─────────────────────────────────────────────────────────
function ConfettiCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animationId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COLORS = [
      "#FF6B6B", "#FFE66D", "#4ECDC4", "#45B7D1", "#96CEB4",
      "#FFEAA7", "#DDA0DD", "#FF69B4", "#00CED1", "#FF8C00",
      "#7B68EE", "#32CD32", "#FF1493", "#00BFFF", "#FFD700",
    ];

    interface Particle {
      x: number; y: number; w: number; h: number;
      color: string; vx: number; vy: number;
      rotation: number; rotationSpeed: number;
      opacity: number; shape: "rect" | "circle" | "star";
    }

    const particles: Particle[] = [];
    const PARTICLE_COUNT = 200;

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 10 + 4,
      h: Math.random() * 6 + 4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      vx: (Math.random() - 0.5) * 3,
      vy: Math.random() * 3 + 1.5,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 8,
      opacity: Math.random() * 0.6 + 0.4,
      shape: (["rect", "circle", "star"] as const)[Math.floor(Math.random() * 3)],
    });

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = createParticle();
      p.y = Math.random() * canvas.height; // spread initially
      particles.push(p);
    }

    const drawStar = (cx: number, cy: number, size: number) => {
      const spikes = 5;
      const outerR = size;
      const innerR = size / 2;
      ctx.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        const r = i % 2 === 0 ? outerR : innerR;
        const angle = (Math.PI / spikes) * i - Math.PI / 2;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx + Math.sin(p.y * 0.01) * 0.5;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        if (p.y > canvas.height + 20) {
          Object.assign(p, createParticle());
          p.y = -20;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;

        if (p.shape === "rect") {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        } else if (p.shape === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          drawStar(0, 0, p.w / 2);
        }

        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 50 }}
    />
  );
}

// ─── Floating Emoji Bubbles ──────────────────────────────────────────────────
function FloatingEmoji({ emoji, delay, duration, left }: {
  emoji: string; delay: number; duration: number; left: string;
}) {
  return (
    <motion.div
      className="fixed text-4xl md:text-5xl pointer-events-none select-none"
      style={{ left, zIndex: 40 }}
      initial={{ y: "100vh", opacity: 0, rotate: 0, scale: 0.5 }}
      animate={{
        y: ["100vh", "-10vh"],
        opacity: [0, 1, 1, 0],
        rotate: [0, 360],
        scale: [0.5, 1.2, 1, 0.8],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {emoji}
    </motion.div>
  );
}

// ─── Sparkle Effect ──────────────────────────────────────────────────────────
function Sparkles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 30 }}>
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${["#FFD700", "#FF69B4", "#00CED1", "#FF6B6B", "#7B68EE"][
              Math.floor(Math.random() * 5)
            ]
              } 0%, transparent 70%)`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1.5,
            delay: Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ─── Burst Rings ─────────────────────────────────────────────────────────────
function BurstRing({ delay, color, size }: { delay: number; color: string; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full border-2 pointer-events-none"
      style={{
        width: size,
        height: size,
        borderColor: color,
        left: "50%",
        top: "50%",
        marginLeft: -size / 2,
        marginTop: -size / 2,
      }}
      animate={{
        scale: [0, 3, 5],
        opacity: [0.8, 0.3, 0],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function DemoPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const EMOJIS = ["🎂", "🎁", "🎈", "🥳", "🎉", "✨", "🪅", "🎊", "🍰", "🕯️", "💫", "⭐"];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0015]">
      {/* ── Animated gradient background ── */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 50%, #1a0533 0%, #0a0015 50%, #0d001a 100%)",
              "radial-gradient(ellipse at 80% 20%, #1e0840 0%, #0a0015 50%, #150025 100%)",
              "radial-gradient(ellipse at 50% 80%, #200845 0%, #0a0015 50%, #0d001a 100%)",
              "radial-gradient(ellipse at 20% 50%, #1a0533 0%, #0a0015 50%, #0d001a 100%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating blobs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "linear-gradient(135deg, #ff6b6b, #ee5a24)" }}
          animate={{
            x: ["-10%", "60%", "30%", "-10%"],
            y: ["20%", "-10%", "60%", "20%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
          style={{ background: "linear-gradient(135deg, #a855f7, #6366f1)" }}
          animate={{
            x: ["70%", "10%", "50%", "70%"],
            y: ["50%", "20%", "-10%", "50%"],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full opacity-15 blur-[100px]"
          style={{ background: "linear-gradient(135deg, #06b6d4, #14b8a6)" }}
          animate={{
            x: ["30%", "70%", "10%", "30%"],
            y: ["-10%", "50%", "30%", "-10%"],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ── Confetti ── */}
      <ConfettiCanvas />

      {/* ── Floating Emojis ── */}
      {EMOJIS.map((emoji, i) => (
        <FloatingEmoji
          key={i}
          emoji={emoji}
          delay={i * 1.2}
          duration={8 + Math.random() * 6}
          left={`${5 + (i / EMOJIS.length) * 90}%`}
        />
      ))}

      {/* ── Main Content ── */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <AnimatePresence>
          {showContent && (
            <motion.div
              className="flex flex-col items-center text-center max-w-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Burst rings behind text */}
              <div className="absolute">
                <BurstRing delay={0} color="#FF6B6B44" size={200} />
                <BurstRing delay={1} color="#A855F744" size={300} />
                <BurstRing delay={2} color="#06B6D444" size={400} />
              </div>

              <Sparkles />

              {/* Party popper top */}
              <motion.div
                className="text-7xl md:text-8xl mb-4"
                animate={{ rotate: [0, -15, 15, -10, 10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                🎉
              </motion.div>

              {/* Subtitle "It's" */}
              <motion.p
                className="text-xl md:text-2xl font-medium tracking-[0.3em] uppercase mb-2"
                style={{
                  background: "linear-gradient(90deg, #FFD700, #FF69B4, #00CED1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                It&apos;s
              </motion.p>

              {/* Name */}
              <motion.h2
                className="text-5xl md:text-7xl lg:text-8xl font-black mb-2 relative"
                style={{
                  background: "linear-gradient(135deg, #FF6B6B, #FFE66D, #4ECDC4, #45B7D1, #A855F7, #FF69B4)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                initial={{ scale: 0, rotate: -10 }}
                animate={{
                  scale: 1,
                  rotate: 0,
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  scale: { delay: 0.8, duration: 0.6, type: "spring", bounce: 0.5 },
                  backgroundPosition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                Anjney&apos;s
              </motion.h2>

              {/* Birthday text */}
              <motion.p
                className="text-2xl md:text-3xl font-semibold tracking-[0.2em] uppercase mb-4"
                style={{
                  background: "linear-gradient(90deg, #DDA0DD, #FFD700, #FF69B4)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                initial={{ y: 30, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  y: { delay: 1.2, duration: 0.8 },
                  opacity: { delay: 1.2, duration: 0.8 },
                  backgroundPosition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                Birthday
              </motion.p>

              {/* Divider line */}
              <motion.div
                className="w-40 h-[2px] mb-6 rounded-full"
                style={{
                  background: "linear-gradient(90deg, transparent, #FFD700, #FF69B4, #00CED1, transparent)",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              />

              {/* HAPPY */}
              <motion.div
                className="text-3xl md:text-5xl font-black tracking-[0.15em] uppercase mb-2"
                style={{
                  background: "linear-gradient(90deg, #FFD700, #FF8C00, #FFD700)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 40px rgba(255, 215, 0, 0.3)",
                }}
                initial={{ y: 40, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  y: { delay: 1.8, duration: 0.8, type: "spring" },
                  opacity: { delay: 1.8, duration: 0.8 },
                  backgroundPosition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                Happy
              </motion.div>

              {/* 350th */}
              <motion.div
                className="relative mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.2, duration: 0.8, type: "spring", bounce: 0.6 }}
              >
                <motion.span
                  className="text-8xl md:text-[10rem] lg:text-[12rem] font-black leading-none block"
                  style={{
                    background: "linear-gradient(135deg, #FF6B6B 0%, #FF69B4 20%, #A855F7 40%, #6366F1 60%, #06B6D4 80%, #FFD700 100%)",
                    backgroundSize: "400% 400%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 60px rgba(168, 85, 247, 0.4)) drop-shadow(0 0 120px rgba(255, 105, 180, 0.2))",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  40
                  <sup className="text-4xl md:text-6xl lg:text-7xl align-top relative -top-4 md:-top-8 lg:-top-12">
                    th
                  </sup>
                </motion.span>

                {/* Glow ring behind 350 */}
                <motion.div
                  className="absolute inset-0 -z-10 rounded-full blur-[60px]"
                  style={{
                    background: "radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)",
                  }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* BIRTHDAY */}
              <motion.div
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[0.2em] uppercase"
                style={{
                  background: "linear-gradient(90deg, #FF6B6B, #FFE66D, #4ECDC4, #45B7D1, #FF69B4, #FFD700)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  y: { delay: 2.6, duration: 0.8, type: "spring" },
                  opacity: { delay: 2.6, duration: 0.8 },
                  backgroundPosition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                Birthday!
              </motion.div>

              {/* Cake row */}
              <motion.div
                className="flex gap-4 mt-8 text-5xl md:text-6xl"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 3.2, duration: 0.8 }}
              >
                {["🎂", "🎈", "🎁", "🥳", "🎊"].map((emoji, i) => (
                  <motion.span
                    key={i}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, i % 2 === 0 ? 10 : -10, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </motion.div>

              {/* Message card */}
              <motion.div
                className="mt-10 px-8 py-6 rounded-2xl max-w-lg mx-auto relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
                initial={{ y: 40, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 3.6, duration: 1, type: "spring" }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 55%, transparent 60%)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{ backgroundPosition: ["-100% 0%", "200% 0%"] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                />

                <motion.p
                  className="text-lg md:text-xl leading-relaxed relative z-10"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.7))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Wishing you a legendary <strong>40th</strong> birthday filled with
                  joy, laughter, and all the magic you deserve! 🪄✨
                </motion.p>
              </motion.div>

              {/* Pulsing hearts at bottom */}
              <motion.div
                className="mt-8 flex gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.2, duration: 0.8 }}
              >
                {["❤️", "🧡", "💛", "💚", "💙", "💜", "🩷"].map((heart, i) => (
                  <motion.span
                    key={i}
                    className="text-2xl md:text-3xl"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{
                      duration: 1,
                      delay: i * 0.15,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {heart}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to top, #0a0015 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
