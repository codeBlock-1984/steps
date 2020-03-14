var grid = [
  [1,0,0,1,0],
  [1,1,0,1,0],
  [1,0,1,0,1],
  [0,1,0,1,1]
 ];
 
 let newGrid = [];
 let newArr = [];
 let prevItem;
 let prevArr = [];
 let number = 0;
 for (let arr of grid) {
   let count = 0;
   prevItem = 100; 
   for (let item of arr) {
     //console.log(item);
     //console.log(item === 1);
     if (item === 1) {
       if (item === prevItem) {
         newArr[count] = newArr[count-1];
       } else {
         newArr[count] = count + 1;
       }
     } else {
       newArr[count] = 0;
     }
     prevItem = arr[count];
     count++;
   }
   //console.log(newArr);
   newGrid.push(newArr);
   //console.log(newGrid);
   const pour = newArr.concat(prevArr);
   var pourSet = new Set(pour);
   var prevSet = new Set(prevArr);
   console.log(pourSet);
   console.log(prevSet);
   number = number + (pourSet.size - prevSet.size);
   console.log(number);
   prevArr = newArr;
   newArr = [];
 }
 console.log(number - 1);
 