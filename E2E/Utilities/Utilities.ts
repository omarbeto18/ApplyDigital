export default class Utilities{

  //Utility to create a random number receiving a min and max value that is the range of numbers
    static getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

}