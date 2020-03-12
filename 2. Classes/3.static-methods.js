/*
 instead of creating functions and attaching them to the global scope which might have conflicts
 we can create a class and add methods as StaticRange.
 */

class DoMath {
  static add(x, y) {
    return x + y;
  }
  static subtract(x, y) {
    return x - y;
  }
  static multiply(x, y) {
    return x * y;
  }
  static square(x) {
    return x * x;
  }
}