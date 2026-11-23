// © 2026 Canumpty Digital Studios. All rights reserved except as expressly granted under this licence.
// FiveM's embedded browser can occasionally swallow a normal click. Activate tabs on the first mouse press instead.
(() => {
  const activate = (tab) => {
    document.querySelectorAll('.tab, .panel').forEach((element) => element.classList.remove('active'));
    tab.classList.add('active');
    const panel = document.getElementById(tab.dataset.panel);
    if (panel) panel.classList.add('active');
  };

  const useTab = (event) => {
    const tab = event.target && event.target.closest ? event.target.closest('.tab') : null;
    if (!tab) return;
    event.preventDefault();
    activate(tab);
  };

  // CEF versions used by FiveM do not always deliver Pointer Events consistently.
  // Capture the older mouse event as well, before any overlay can consume it.
  document.addEventListener('mousedown', useTab, true);
  document.addEventListener('touchstart', useTab, { capture: true, passive: false });

  document.querySelectorAll('.tab').forEach((tab) => {
    tab.style.touchAction = 'manipulation';
    tab.style.userSelect = 'none';
    tab.style.pointerEvents = 'auto';
    tab.style.position = 'relative';
    tab.style.zIndex = '10';
    tab.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      activate(tab);
    }, { capture: true });
  });
})();
