class Cat{
  constructor(breed, color, name){
    this.breed = breed;
    this.color = color;
    this.name = name;
  }

sound(){
  console.log('meo');
}

sleep(){
  console.log('always');
}

}

class British extends Cat {
  constructor(breed, color, name){
    this.breed = breed;
    this.color = color;
  }
  sound(){
    super.sound()
    console.log('talkative')
  }
  sleep(){
    console.log('always')
  }
}

const british = new Cat('british', 'grey', 'Richard')
british.sound();
british.sleep();


const maineCoon = new Cat('maineCoon', 'red', 'Lys')
maineCoon.sound();
maineCoon.sleep();

/// array of 6 cats

new array = Cat [
  cat1 =
  cat2 =
  cat3 =
  cat4 =
  cat5 =
  cat6 =
]




////// part 3////
