// timeline-popup.js

document.addEventListener('DOMContentLoaded', function() {
  const months = {
    'Ianuarie': 'O seara trista pentru mine as putea spune, dar apoi ai aparut tu. De acolo, lumea mea s-a schimbat.',
    'Februarie': 'Primma luna poate nu am sarbatorit-o cum trebuie, dar ai fost alaturi de mine la greu si cred ca fara tine nu as fi rezistat.',
    'Martie': 'In Martie totul devenea mai frumos, mai usor si mai simplu. Tu ai fost motivul pentru care am zambit mereu.',
    'Aprilie': 'Aprilie a fost inca o luna plina de amintiri frumoase alaturi de tine.',
    'Mai': 'Mai a fost o luna mai grea, cu perioade in care nu ne-am vazut, dar te-am simtit aproape de mine mereu, fara tine nu as fi reusit sa ajung pe unde am fost si fara tine nu as fi reusit sa am performantele pe care le-am avut.',
    'Iunie': 'Iunie a fost o luna care a trecut prea repede pe langa noi, dar majoritatea amintirilor au fost legate de tine si de momentele frumoase petrecute de amandoi.',
    'Iulie': 'Iulie marcheaza 6 luni de poveste minunata! Te iubesc si iti multumesc ca esti langa mine mereu!'
  };

  const popupBg = document.createElement('div');
  popupBg.className = 'timeline-popup-bg';
  popupBg.style.display = 'none';
  document.body.appendChild(popupBg);

  const popup = document.createElement('div');
  popup.className = 'timeline-popup';
  popup.innerHTML = '<span class="timeline-popup-close">&times;</span><div class="timeline-popup-text"></div>';
  popupBg.appendChild(popup);

  function showPopup(month) {
    popup.querySelector('.timeline-popup-text').textContent = months[month] || '';
    popupBg.style.display = 'flex';
    setTimeout(() => popup.classList.add('show'), 10);
  }

  function hidePopup() {
    popup.classList.remove('show');
    setTimeout(() => { popupBg.style.display = 'none'; }, 300);
  }

  document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', function() {
      const month = this.getAttribute('data-month');
      showPopup(month);
    });
  });

  popupBg.addEventListener('click', function(e) {
    if (e.target === popupBg || e.target.classList.contains('timeline-popup-close')) {
      hidePopup();
    }
  });
});
