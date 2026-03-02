"use client";

import React from "react";
import { Project } from "./types";

export const PortfolioIcon = () => (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const WebAppIcon = () => (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M3 9h18" stroke="currentColor" strokeWidth="2" />
        <circle cx="6" cy="6" r="1" fill="currentColor" />
        <circle cx="9" cy="6" r="1" fill="currentColor" />
    </svg>
);

export const FrontendIcon = () => (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M4 17l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const OpenSourceIcon = () => (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const ExtensionIcon = () => (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const NPMIcon = () => (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331z" />
    </svg>
);

export const ThreeJSIcon = () => (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
    </svg>
);

export const AlgorithmIcon = () => (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="14" width="4" height="6" rx="1" fill="currentColor" opacity="0.5" />
        <rect x="8" y="10" width="4" height="10" rx="1" fill="currentColor" opacity="0.7" />
        <rect x="13" y="6" width="4" height="14" rx="1" fill="currentColor" opacity="0.85" />
        <rect x="18" y="2" width="4" height="18" rx="1" fill="currentColor" />
    </svg>
);

export const PlaceholderIcon = () => (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
    </svg>
);

export const getIcon = (type: Project["type"]) => {
    switch (type) {
        case "portfolio": return <PortfolioIcon />;
        case "webapp": return <WebAppIcon />;
        case "frontend": return <FrontendIcon />;
        case "opensource": return <OpenSourceIcon />;
        case "extension": return <ExtensionIcon />;
        case "npm": return <NPMIcon />;
        case "threejs": return <ThreeJSIcon />;
        case "algorithm": return <AlgorithmIcon />;
        case "placeholder": return <PlaceholderIcon />;
        default: return <PortfolioIcon />;
    }
};
