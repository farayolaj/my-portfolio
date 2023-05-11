import Script from 'next/script';

export default function Analytics() {
  if (process.env.NODE_ENV !== 'production') return null;

  return (
    <div>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0MDZSQ818D"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-0MDZSQ818D');
        `}
      </Script>
    </div>
  );
}
