// © 2026 Canumpty Digital Studios. All rights reserved except as expressly granted under this licence.
// Configurable local playlist player for FiveM's loading-screen browser.
(() => {
  const config = window.CanumptyLoadingConfig;
  const audio = document.getElementById('audio');
  const tracks = Array.isArray(config.playlist) && config.playlist.length ? config.playlist : (config.music ? [{ title: 'Server Radio', artist: '', file: config.music }] : []);
  let current = 0;
  const title = document.getElementById('trackTitle') || document.querySelector('.player strong');
  const status = document.getElementById('audioStatus');
  const slider = document.getElementById('volume');
  const cleanButton = (id) => { const oldButton = document.getElementById(id); const button = oldButton.cloneNode(true); oldButton.replaceWith(button); return button; };
  const previous = cleanButton('previous');
  const playPause = cleanButton('playPause');
  const next = cleanButton('next');
  const updateButton = () => { playPause.textContent = audio.paused ? '▶' : 'Ⅱ'; };
  const play = () => audio.play().then(updateButton).catch(() => { status.textContent = 'Click play to start audio'; updateButton(); });
  const load = (index, shouldPlay = true) => {
    if (!tracks.length) { title.textContent = 'No music configured'; status.textContent = ''; return; }
    current = (index + tracks.length) % tracks.length;
    const track = tracks[current];
    audio.src = track.file;
    audio.volume = Number(slider.value);
    title.textContent = track.title || 'Untitled track';
    status.textContent = track.artist || 'Loading screen music';
    audio.load();
    if (shouldPlay) play();
  };
  previous.addEventListener('click', () => load(current - 1));
  next.addEventListener('click', () => load(current + 1));
  playPause.addEventListener('click', () => audio.paused ? play() : audio.pause());
  audio.addEventListener('play', updateButton);
  audio.addEventListener('pause', updateButton);
  audio.addEventListener('ended', () => load(current + 1));
  slider.addEventListener('input', () => { audio.volume = Number(slider.value); });
  load(0, true);
})();
