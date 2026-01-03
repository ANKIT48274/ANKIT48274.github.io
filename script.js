const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const inc = Math.ceil(target / 50);

    if (current < target) {
      counter.innerText = current + inc;
      setTimeout(update, 40);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

