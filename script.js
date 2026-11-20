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
 // El codi oficial de HubSpot ja és a index.html; no l'inserim dues vegades.
 if (document.getElementById('hs-script-loader')) {
  document.getElementById('chat-indicator')?.classList.add('on');
  const msg=document.getElementById('chat-message');
  if (msg) msg.textContent='HubSpot connectat a la web. El xat apareixerà quan el chatflow estigui activat.';
 }
})();