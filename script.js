const button = document.getElementById('copy');
button.addEventListener('click', async () => {
  const text = document.getElementById('bib').textContent;
  try {
    await navigator.clipboard.writeText(text);
    button.textContent = 'Copied';
    document.getElementById('copy-status').textContent = 'BibTeX copied to clipboard.';
    setTimeout(() => {button.textContent = 'Copy BibTeX';}, 2500);
  } catch {
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('bib'));
    const selection = window.getSelection();
    selection.removeAllRanges(); selection.addRange(range);
    document.getElementById('copy-status').textContent = 'Citation selected. Use your browser’s Copy command.';
  }
});
