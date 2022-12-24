// Code your solutions in this file

const count = [10,9,8,7,6,5,4,3,2,1,];

function countDown() {
  let i = 0;
  while (i < 10) {
    console.log(count[i]);
    i++;
  }

  return count;

}

countDown(10);
