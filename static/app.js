const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');


const p1Point = () => console.log('point to p1')
const p2Point = () => console.log('point to p2')

p1btn.addEventListener('click', p1Point);
p2btn.addEventListener('click', p2Point);
