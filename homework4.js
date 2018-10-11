//2. Use While loop to create a function called 'triangleStars' that prints an upside-down triangle to the console of the given height.
//  So if we call your function with triangleStars(4), we should see:

const stars1 = function(height){
  let ast = 1 + (2 * (height));
  let space = -1
  while(height > 0){
    ast = ast - 2;
    space = space + 1;
    height = height - 1;

    let string1 = '';
    let a = ast;
    while(a > 0){
      string1 = string1 + '*';
      a = a - 1;
    };

    let string2 = '';
    let b = space;
    while(b > 0){
      string2 = string2 + ' ';
      b = b -1;
    };

    let string = string2 + string1;

    console.log(string);
  };
};
stars1(7);



//3. Write a function that takes a two dimensional array and returns a single array with all the values in the child arrays.
//Example:  multiToSingle([[1, 2, 3], [4, 5, 6]]);  // will return [1, 2, 3, 4, 5, 6]

const f1 = function(arr){
  let newArr = [];
  let index1 = 0;
  while(index1 < arr.length){
    let A1 = arr[index1];
    let indexA1 = 0;
    while(indexA1 < A1.length){
      newArr[newArr.length] = A1[indexA1];
      indexA1 = indexA1 +1
    };
    index1 = index1 + 1;
  };
  console.log(newArr);
};

const single = f1([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);



//4. Create a function 'findMinMax' that returns the largest number from the given array if the second argument is true.
//  It returns the smallest number in the given array if the second argument is false.

//Example: findMinMax([4, 2, 66, -44, 8], true); // should return 66
//Example: findMinMax([4, 2, 66, -44, 8], false); // should return -44

const MinMax = function(arr, bool){
  let index = 0;
  let max = arr[0];
  let min = arr[0];


  if(bool){

    while(index < arr.length){
      if(max < arr[index]){
        max = arr[index];
      }
      index = index + 1;
    }
    return max;

  }else{

    while(index < arr.length){
      if(min > arr[index]){
        min = arr[index];
      }
      index = index + 1;
    }
    return min;
  }
};

const t = MinMax([4, 2, 66, 44, 8], false);
console.log(t);



//5. Create a function 'forEach' that takes an array and a function and then calls the given function once with each value in the given array.

//Example: forEach([4, 3, 2], function(val) {

  //console.log(val);

//}); // doing this should result in this in the console:

//4
//3
//2

const forEach = function(arr, func){
  let index = 0;
  while(index < arr.length){
    func(arr[index])
    index = index + 1;
  }
}
const p = forEach([6, 7, 8, 9], function(v){
  console.log(v)
});



//6. Create a function 'sum' that takes an array of numbers and returns their sum.

//Example: sum([4, 3, 2]); // should return 9

const f6 = function(arr){
  let sum = 0;
  let index = 0
  
  while(index < arr.length){
    sum = sum + arr[index];
    index = index + 1;
  };
  return sum
};

const s = f6([9, 8, 7]);
console.log(s);



//7. Write a function 'reverse' that reverses the given string.  

const reverse = function(string){
  let strRev = '';
  let index = string.length - 1;
  while(index >= 0){
    strRev = strRev + string[index];
    index = index - 1;
  }
  return strRev
};

const name = reverse('nareg najarian');
console.log(name);



//8. Create a function called checkerboard using While loop which, given a size argument, will draw an n by n checkerboard on the screen.
//  Example: checkerboard(5)

//* * * * *
// * * * * *
//* * * * *
// * * * * *
//* * * * *

const checkerboard = function(n){
  let string = '';
  let row = 0;
  while(row < n){
    let space = row % 2;
    let ast = n;

    let a = 0;
    let string1 = '';
    while(a < space){
      string1 = string1 + ' ';
      a = a + 1;
    };

    let b = 0;
    let string2 = '';
    while(b < ast){
      string2 = string2 + '*';
      b = b + 1;
    };

    string = string1 + string2;

    row = row + 1;

    console.log(string);
  };
};

checkerboard(5);