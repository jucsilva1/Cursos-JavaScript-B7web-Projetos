// ------- INICIAL DATA  ------ //
let areas = {
   a: null,
   b: null,
   c: null
}
let code = {
   a: '',
   b: '',
   c: ''
} 
let hit = false;
randomCode();
console.log(`A sequecia aleatória é  ${code.a}-${code.b}-${code.c}`)




// ------- EVENTS  ------ //

//----------- neutralArea ----------------//

document.querySelectorAll('.item').forEach(item => {
   item.addEventListener('dragstart', dragStart)
   item.addEventListener('dragend', dragEnd)
})
document.querySelector('.neutralArea').addEventListener('dragover', neutralDragOver);
document.querySelector('.neutralArea').addEventListener('dragleave', neutralLeave);
document.querySelector('.neutralArea').addEventListener('drop', neutralDrop);
//------------ areas -----------------//

document.querySelectorAll('.area').forEach(area => {
   area.addEventListener('dragover', dragOver);
   area.addEventListener('dragleave', dragLeave);
   area.addEventListener('drop', drop);
})
//------------ BUTTON -----------------//

document.querySelector('#reset').addEventListener('click', reset);

// ------- FUNCTIONS  ------ //

function dragStart(e){
   e.currentTarget.classList.add('dragging');

}

function dragEnd(e){
   e.currentTarget.classList.remove('dragging');

}

function dragOver(e){
   if(e.currentTarget.querySelector('.item') === null){
      e.preventDefault();
      e.currentTarget.classList.add('hover');
   }
}

function dragLeave(e){
   e.currentTarget.classList.remove('hover');

}

function drop(e){
   e.currentTarget.classList.remove('hover');

// Pegando item que está sendo arrastado //
   
   if(e.currentTarget.querySelector('.item') === null){
      let dragItem = document.querySelector('.item.dragging');
      e.currentTarget.innerHTML = '';
      e.currentTarget.appendChild(dragItem);
      update();
   }
}
function neutralDragOver(e){
   e.currentTarget.classList.add('hover');
   e.preventDefault();

}

function neutralLeave(e){
   e.currentTarget.classList.remove('hover');

}

function neutralDrop(e){
   e.currentTarget.classList.remove('hover');
   let dragItem = document.querySelector('.item.dragging');
   e.currentTarget.appendChild(dragItem);
   update();
}

function update(){
   
   document.querySelectorAll('.area').forEach(area => {
      let name = area.getAttribute('data-name');
      if(area.querySelector('.item') !== null){
         areas[name] = area.querySelector('.item').innerHTML;
      }else{
         areas[name] = null;
         area.innerHTML = '?';
      }

   });
   if(areas.a === code.a && areas.b === code.b && areas.c === code.c){
      document.querySelector('.areas').classList.add('correct');
      document.querySelector('.neutralArea').classList.add('correct');
      document.querySelector('.warning').style.display = 'block';
      hit = true;
      
   }else{
      document.querySelector('.areas').classList.remove('correct');
      document.querySelector('.neutralArea').classList.remove('correct');
      document.querySelector('.warning').style.display = 'none';
      hit = false;
   }
}

function reset(){
   if(hit === true){
      document.querySelectorAll('.item').forEach(item =>{
      document.querySelector('.neutralArea').append(item);
      document.querySelector('.warning').style.display = 'none';
      update();
      });
      randomCode();
      console.log(`Nova sequência  ${code.a}-${code.b}-${code.c}` )
      hit = false;
   }else{
      document.querySelectorAll('.item').forEach(item =>{
      document.querySelector('.neutralArea').append(item);
      document.querySelector('.warning').style.display = 'none';
      update();
      });
   }
  
   
}

function randomCode(){
   
   let n = radom(6,1)
   switch(n) {
      case 1:
         code.a = "1";
         code.b = "2";
         code.c = "3";
         break;
      case 2:
         code.a = "2";
         code.b = "3";
         code.c = "1";
         break;
      case 3:
         code.a = "3";
         code.b = "2";
         code.c = "1";
         break;
      case 4:
         code.a = "1";
         code.b = "3";
         code.c = "2";
         break;
      case 5:
         code.a = "2";
         code.b = "1";
         code.c = "3";
         break;
      case 6:
         code.a = "3";
         code.b = "1";
         code.c = "2";
         break;
   }

}
function radom(max,min){
  return (Math.floor(Math.random() * (max - min)) + min);
}