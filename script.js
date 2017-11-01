const blocks = [
  document.querySelector('#block1'),
  document.querySelector('#block2'),
  document.querySelector('#block3'),
];

const textBlocks = [
  document.querySelector('#textBlock1'),
  document.querySelector('#textBlock2'),
  document.querySelector('#textBlock3'),
];

blocks.forEach((block, i) => {
  block.addEventListener('click', function(event) {
    alert(`Bedankt voor het stemmen op ${block.dataset.name}.`);
  });
});

textBlocks.forEach((block, i) => {
  block.addEventListener('click', function(event) {
    alert(`Login en volg ons op ${block.dataset.name} ${block.dataset.value}.`);
  });
});
