"use client";

import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";

import { ReactNode } from "react";

type Props = {
  messages: AbstractIntlMessages;
  locale: string;
  children: ReactNode;
};

export default function NextIntlProvider({
  messages,
  locale,
  children,
}: Props) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      defaultTranslationValues={{
        i: (text) => <i>{text}</i>,
      }}
      timeZone="Africa/Dakar"
    >
      {children}
    </NextIntlClientProvider>
  );
}
