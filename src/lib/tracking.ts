// Browser-side dataLayer helpers.
// Modern Enhanced Conversions: we pass email/phone in PLAIN TEXT inside `user_data`.
// The Google Tag (loaded by GTM) performs SHA-256 hashing automatically before sending to Google.
// Do NOT pre-hash here — that's the old guidance and breaks GTM's Enhanced Conversions flow.

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export const trackingScript = `
(function () {
  window.dataLayer = window.dataLayer || [];

  function push(name, params) {
    window.dataLayer.push(Object.assign({ event: name }, params || {}));
  }

  // Phone (tel:) clicks
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest && e.target.closest('a[href^="tel:"]');
    if (!a) return;
    push('phone_click', {
      phone_number: a.getAttribute('href').replace('tel:', ''),
      link_text: (a.textContent || '').trim(),
      page_path: location.pathname,
    });
  }, { passive: true });

  // WhatsApp (wa.me) clicks
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest && e.target.closest('a[href*="wa.me/"]');
    if (!a) return;
    push('whatsapp_click', {
      link_text: (a.textContent || '').trim(),
      page_path: location.pathname,
    });
  }, { passive: true });

  // Form submission — fired by LeadForm.astro after a successful POST
  window.trackLead = function (payload) {
    push('generate_lead', {
      form_id: payload.form_id || 'lead_form',
      page_path: location.pathname,
      value: payload.value || 0,
      currency: 'EUR',
      user_data: {
        email_address: payload.email || undefined,
        phone_number: payload.phone || undefined,
        address: {
          first_name: payload.first_name || undefined,
          last_name: payload.last_name || undefined,
          country: 'FR',
        },
      },
    });
  };
})();
`;
