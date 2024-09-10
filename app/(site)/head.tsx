export default function Head() {
  return (
    <>
      <title>SnapJob</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Helping people make quick cash" />
      <link rel="icon" href="/images/favicon.ico" />

      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-6HSCB9MGMN"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6HSCB9MGMN', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {/* End Google Analytics */}
    </>
  );
}
