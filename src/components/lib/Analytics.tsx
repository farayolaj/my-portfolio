'use client';

import Script from 'next/script';

export default function Analytics() {
  if (process.env.NODE_ENV !== 'production') return null;

  return (
    <div>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3RYY6V4M60"
        async
        onReady={() => {
          //@ts-ignore
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            //@ts-ignore
            dataLayer.push(arguments);
          }
          //@ts-ignore
          gtag('js', new Date());

          //@ts-ignore
          gtag('config', 'G-3RYY6V4M60');
        }}
      />
    </div>
  );
}
