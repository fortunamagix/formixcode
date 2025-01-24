`use Client`;
export default function ConTwo() {
  return (
    <div>
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          // padding: '0 30px',
          backgroundColor: "var(--tally-bg)",
          color: "var(--tally-text)",
        }}
      >
        <iframe
          data-tally-src="https://tally.so/embed/3Ev9vl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="620"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="formixcode-contact"
        ></iframe>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            var d = document,
                w = "https://tally.so/widgets/embed.js",
                v = function() {
                    if (typeof Tally !== 'undefined') {
                        Tally.loadEmbeds();
                        // Add message listener for form submission
                        window.addEventListener('message', function(event) {
                          if (event.data && event.data.event === 'Tally.FormSubmitted') {
                            // Hide the container div after submission
                            var container = d.querySelector('div[style*="max-width: 1320px"]');
                            if (container) {
                              container.style.display = 'none';
                            }
                          }
                        });
                    } else {
                        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e) {
                            e.src = e.dataset.tallySrc
                        });
                    }
                };
            
            if (typeof Tally !== 'undefined') {
                v();
            } else if (d.querySelector('script[src="' + w + '"]') == null) {
                var s = d.createElement("script");
                s.src = w;
                s.onload = v;
                s.onerror = v;
                d.body.appendChild(s);
            }
          `,
        }}
      />
    </div>
  );
}
