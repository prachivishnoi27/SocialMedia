// let animal = {
//     jumps: null
//   };
//   let rabbit = {
//     __proto__: animal,
//     jumps: true
//   };
  
//   console.log( rabbit.jumps ); // ? (1)
  
//   delete rabbit.jumps;
  
//   console.log( rabbit.jumps ); // ? (2)
  
//   delete animal.jumps;
  
//   console.log( rabbit.jumps );



// let head = {
//     glasses: 1
//   };
  
//   let table = {
//     pen: 3,
//     __proto__: head
//   };
  
//   let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
//   };
  
//   let pockets = {
//     money: 2000,
//     __proto__: bed
//   };

//   console.time("fg")
//   console.log(pockets.glasses)
//   console.timeEnd("fg")

//   console.time("h")
//   console.log(head.glasses)
//   console.timeEnd("h")



// let animal = {
//     eat() {
//       this.full = true;
//     }
//   };
  
//   let rabbit = {
//     __proto__: animal
//   };
  
//   rabbit.eat();
//   console.log(rabbit, animal)



let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // This one found the food
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // This one also has it, why? fix please.
  console.log( lazy.stomach ); // apple


//   corrected code
  let hamster = {
    stomach: [],
  
    eat(food) {
      // assign to this.stomach instead of this.stomach.push
      this.stomach = [food];
    }
  };

  // 608ba5c95155595a6fc5a6a4 harry
  // 6099695789ab70684c12c412 tony
  // 609a63a8e89c15acabb5f6f9 prachi