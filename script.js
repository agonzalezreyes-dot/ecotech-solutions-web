(() => {
 const config = window.ECOTECH_CONFIG || {};
 const email = String(config.CONTACT_EMAIL || '').trim();
 const portalId = String(config.HUBSPOT_PORTAL_ID || '').trim();
 const emailNode = document.getElementById('email-link');
 if (emailNode && email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  emailNode.textContent = email;
  emailNode.href = 'mailto:' + email;
 }
 const year = document.getElementById('year');
 if (year) year.textContent = String(new Date().getFullYear());
 if (/^\d+$/.test(portalId)) {
  const script = document.createElement('script');
  script.async = true;
  script.defer = true;
  script.id = 'hs-script-loader';
  script.src = 'https://js.hs-scripts.com/' + portalId + '.js';
  document.body.appendChild(script);
  document.getElementById('chat-indicator')?.classList.add('on');
  const msg=document.getElementById('chat-message');
  if (msg) msg.textContent='HubSpot configurat. El xat apareixerà quan estigui actiu a HubSpot.';
 }
})();