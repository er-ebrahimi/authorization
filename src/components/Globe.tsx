"use client";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import {
  sampleArcs,
  type GlobeConfig,
  type GlobeArc,
} from "./globe-shared-data";

const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
});

interface GlobeProps {
  /**
   * Override the theme detection - useful for forced theme modes
   */
  forceTheme?: "light" | "dark";
}

export function Globe({ forceTheme }: GlobeProps) {
  const { resolvedTheme } = useTheme();
  const currentTheme = forceTheme || resolvedTheme || "dark";
  const isDark = currentTheme === "dark";
  const globeConfig: GlobeConfig = useMemo(
    () => ({
      pointSize: 4,
      globeColor: isDark ? "#191919" : "#FFFFFF",
      showAtmosphere: true,
      atmosphereColor: "#FFFFFF",
      atmosphereAltitude: 0.1,
      emissive: "#062056",
      emissiveIntensity: 0.1,
      shininess: 0.9,
      polygonColor: isDark ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,1)",
      ambientLight: "#38bdf8",
      directionalLeftLight: "#ffffff",
      directionalTopLight: "#ffffff",
      pointLight: isDark ? "#ffffff" : "#000000",
      arcTime: 1000,
      arcLength: 0.9,
      rings: 1,
      maxRings: 3,
      initialPosition: { lat: 22.3193, lng: 114.1694 },
      autoRotate: true,
      autoRotateSpeed: 0.5,
    }),
    [isDark]
  );

  const { colors, processedArcs } = useMemo(() => {
    const themeColors = isDark
      ? ["#06b6d4", "#3b82f6", "#6366f1"]
      : ["#d1d3e8", "#3b82f6", "#a2c4fa"];

    const arcs = sampleArcs.map((arc, index) => ({
      ...arc,
      color: themeColors[index % themeColors.length],
    }));

    return {
      colors: themeColors,
      processedArcs: arcs,
    };
  }, [isDark]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden top-50">
      <World data={processedArcs} globeConfig={globeConfig} />
    </div>
  );
}
