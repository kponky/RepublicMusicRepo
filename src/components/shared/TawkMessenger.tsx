import Script from "next/script";

const TawkMessenger = () => {
  return (
    <Script
      async
      src="https://embed.tawk.to/672262ca4304e3196adac064/1ibf53q3m"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};

export default TawkMessenger;
