//  console.log(window.document)
 const heading = document.querySelector('#myHeading')
//  const innerHtml = heading.innerHTML 
//  const innerText = heading.innerText
//  const textContent = heading.textContent
//  console.log(innerHtml);
//  console.log(innerText);
//  console.log(textContent);
//  const mybtn = document.querySelector('#mybtn');
//  mybtn.addEventListener('mousemove',()=>{
//     heading.innerText = 'Button Clicked';
//     heading.toggleAttribute('hidden');
//  })
//  innerText
//  innerHtml
//  textContent
// const heading = document.getElementById('myHeading')
//  heading.innerHTML = 'Premier University'
//  heading.style.color = 'green'
//  let box1 = document.querySelector('#box1')
//  box1.style.width = '100px'
//  box1.style.height = '100px'
// box1.style.backgroundColor = 'red'
// let mylinks = window.document.links
// mylinks.array.forEach(element => {
    
// });

// let convertedArray = Array.from(mylinks)
// convertedArray.forEach((i)=>{
//     i.style.color = 'red';
// })
// console.log(convertedArray);

// let ul = document.querySelector('ul');
// let li = document.createElement('li');
// let a = document.createElement('a');
// a.textContent = 'New Item'
// a.setAttribute('href','#')
// ul.appendChild(li);
// li.appendChild(a)
let mytag = document.querySelectorAll('a')
mytag.forEach((i)=>{
    i.style.color = 'red';
})
console.log(mytag);

