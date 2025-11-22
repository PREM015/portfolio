"use client";

import React from "react";
import ScrollProgress from "./ScrollProgress";
import BackToTop from "./BackToTop";
import MobileNav from "./MobileNav";
import SpotifyNowPlaying from "./SpotifyNowPlaying";
import QuizModal from "./QuizModal";
import StickyCtaBar from "./StickyCtaBar";
import SocialProofNotifications from "./SocialProofNotifications";
import ProgressBar from "./ProgressBar";
import KeyboardShortcuts from "./KeyboardShortcuts";
import ExitIntentPopup from "./ExitIntentPopup";
import CookieConsent from "./CookieConsent";
import AnalyticsTracker from "./AnalyticsTracker";
import PerformanceMonitor from "./PerformanceMonitor";
import ToastNotifications from "./ToastNotifications";
import OnlineStatusIndicator from "./OnlineStatusIndicator";
import BackgroundControls from "./BackgroundControls";

interface Props {
  currentSection: string;
  backgroundVariant: string;
  onBackgroundChange: (variant: any) => void;
}

export default function FloatingWidgets({ currentSection, backgroundVariant, onBackgroundChange }: Props) {
  return (
    <>
      <ScrollProgress />
      <BackToTop />
      <MobileNav />
      <SpotifyNowPlaying />
      <QuizModal />
      <StickyCtaBar />
      <SocialProofNotifications />
      <ProgressBar />
      <KeyboardShortcuts />
      <ExitIntentPopup />
      <CookieConsent />
      <AnalyticsTracker />
      <PerformanceMonitor />
      <ToastNotifications />
      <OnlineStatusIndicator />
      <BackgroundControls 
        current={backgroundVariant}
        onChange={onBackgroundChange}
        section={currentSection}
      />
    </>
  );
}