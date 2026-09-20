"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

// Only the service buttons and form share this state. Page sections stay server-rendered.
const InquiryContext = createContext<{
  message: string;
  setMessage: (value: string) => void;
  chooseService: (title: string) => void;
} | null>(null);
export function InquiryProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState("");
  const [suggestion, setSuggestion] = useState("");
  function chooseService(title: string) {
    const next = `Потрібна консультація: ${title.toLocaleLowerCase("uk-UA")}.`;
    // Do not overwrite a description the visitor has already written.
    if (!message.trim() || message === suggestion) {
      setMessage(next);
      setSuggestion(next);
    }
  }
  return (
    <InquiryContext.Provider value={{ message, setMessage, chooseService }}>
      {children}
    </InquiryContext.Provider>
  );
}
export function useInquiry() {
  const context = useContext(InquiryContext);
  if (!context) throw new Error("InquiryProvider is missing");
  return context;
}
