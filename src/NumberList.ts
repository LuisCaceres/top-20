/*
 *
 */
class NumberList extends Array<number> {
  constructor(...numbers: number[]) {
    super();
    this.push(...numbers);
  }

  /* Returns true 
   * @example
   * // Returns true
   * new NumberList(5, 4, 3, 2, 1).isDecreasing();
   * // Returns false
   * new NumberList(1, 2, 3, 4, 5).isDecreasing();
   * @return {Boolean}
   */
  isDecreasing() {
    return this.slice().reverse().isIncreasing();
  }

  /** Returns true
   * @example
   * // Returns true
   * new NumberList(1, 1, 1, 1, 1).isLogical();
   * new NumberList(1, 2, 3, 4, 5).isLogical();
   * new NumberList(5, 4, 3, 2, 1).isLogical();
   * new NumberList(4, 3, 2, 1, 2).isLogical();
   * new NumberList(2, 1, 2, 3, 4).isLogical();
   * // Returns false
   * new NumberList(1, 2, 3, 4, 1).isLogical();
   * new NumberList(4, 1, 2, 1, 4).isLogical();
   * @returns {Boolean}
   */
  isLogical() {
    const numberList = this;
    const segments = numberList.getSegments();
   
    if (segments.length > 2) {
      return false;
    }

    if (segments.length === 2) {

      if (segments[0].isAscending() && segments[1].isDescending()) {
        return false;
      }
    }

    return true;
  }


  isWave() {

  }


  isPulse() {

  }

  /* Returns a list of segments in this number list. A segment is
   * is a sequence of numbers that express an increment or decrement.
   * @example
   * new NumberList(1, 1, 1, 1, 1).getSegments();
   * // Returns [[1, 1, 1, 1, 1]]
   * new NumberList(1, 2, 3, 4, 5).getSegments();
   * // Returns [[1, 2, 3, 4, 5]]
   * new NumberList(5, 4, 3, 2, 1).getSegments();
   * // Returns [[5, 4, 3, 2, 1]]
   * new NumberList(1, 2, 3, 4, 1).getSegments();
   * // Returns [[1, 2, 3, 4], [4, 1]]
   * @return {NumberList[]}
   */
  getSegments(): NumberList[] {
    // Let `numberList` be this number list.
    const numberList = this;
    // Let `segments` be an initially empty list of segments.
    const segments: NumberList[] = [];
    // Let `segment` be a segment whose first number is `numberLists`'s fisrt number.
    const segment = numberList.slice(0, 1) as NumberList;
    // Add `segment` to `segments`.
    segments.push(segment);

    // Let `direction` be 
    let direction: string;

    // For each number `number` in `numbers`.
    numberList.forEach((number, index, array) => {
      // Let `number` be the current number.
      // Let `index` be the numeric position of `number` in `numberList`.

      // If this is the first number in this number list, skip this number.
      if (index === 0) {
        return;
      }

      // Let `currentDirection` be either.
      let currentDirection = direction;
      // Let `previousNumber` be the number in immediately preceding `number`.
      const previousNumber = array[index - 1];

      switch (true) {
        // If `previousNumber` is less than `number`.
        case previousNumber < number:
          // Let `currentDirection` be ascending.
          currentDirection = 'ascending';
          break;
        // Else if `previousNumber` is greater than `number`.
        case previousNumber > number:
          // Let `currentDirection` be descending.
          currentDirection = 'descending';
          break;
        default:
          break;
      }

      if (typeof direction === 'string' && direction !== currentDirection) {
        const segment = new NumberList();
        segment.push(previousNumber);
        segments.push(segment);
      }

      (segments.at(-1) as NumberList).push(number);
      direction = currentDirection;
    })

    // Return `segments`.
    return segments;
  }

  /** Returns true if this number list is neither increasing or decreasing.
   * @example
   * new NumberList(1, 1, 1, 1, 1).isFlat();
   * // Returns true
   * new NumberList(1, 2, 3, 4, 5).isFlat();
   * // Returns false
   * @return {Boolean}
   */
  isFlat() {
    return Math.min(...this) === Math.max(...this);
  }

  /* Returns true 
   * @example
   * new NumberList(1, 2, 3, 4, 5).isIncreasing();
   * // Returns true
   * new NumberList(5, 4, 3, 2, 1).isIncreasing();
   * // Returns false
   * @return {Boolean}
   */
  isIncreasing() {
    const condition = this.every((n, index) => {
      const next = this[index + 1];
      return next === undefined ? true : n <= next;
    });

    return this.isFlat() === false && condition;
  }

  /**
   * Returns true if the last number in this number list indicates the start of an ascending pattern.
   * @example
   * // Returns true
   * new NumberList(4, 3, 2, 1, 2).hasBegunDescending();
   * // Returns false
   * new NumberList(5, 4, 3, 2, 1).hasBegunDescending();
   * @returns {Boolean}
   */
  hasBegunDescending() {
    const segments = this.getSegments();

    if (segments.length !== 2) {
      return false;
    }
    else {
      const lastSegment = segments.at(-1) as NumberList;

      if (lastSegment.length !== 2) {
        return false;
      }

      const [previousNumber, number] = lastSegment;
      
      if (previousNumber > number) {
        return false;
      }
    }

    return true;  
  }

  /**
   * Returns true if the maximum number of in this number list isn't the last number.
   * @example
   * new NumberList(4, 3, 2, 1, 2).hasPeaked();
   * // Returns true
   * new NumberList(5, 4, 3, 2, 1).hasBegunDescending();
   * // Returns false
   * @returns {Boolean}
   */
    hasPeaked() {
      // const segments = this.getSegments();
  
      // if (segments.length !== 2) {
      //   return false;
      // }
      // else {
      //   const lastSegment = segments.at(-1) as NumberList;
  
      //   if (lastSegment.length !== 2) {
      //     return false;
      //   }
  
      //   const [previousNumber, number] = lastSegment;
        
      //   if (previousNumber > number) {
      //     return false;
      //   }
      // }
  
      // return true;  
    }

  /**
   * Returns true if the numbers in this number list is in descending order.
   * @example
   * // Returns true
   * new NumberList(5, 4, 3, 2, 1).isDescending();
   * // Returns false
   * new NumberList(5, 4, 3, 2, 1).isDescending();
   * @returns {Boolean}
   */
  isDescending() {
    const numberList = this;

    // For each number `number` in `numberList`.
    const isDescending = numberList.every((number, index, list) => {
      // Let `number` be the current number.
      // Let `index` be the numeric position of `number` in `numberList`.

      // If `number` is the first number in this number list, skip `number`.
      if (index === 0) {
        return true;
      }

      // Let `previousNumber` be the number in immediately preceding `number`.
      const previousNumber = list[index - 1];
      // If `number` is greater than `previousNumber` then `numberList` isn't in descending order.
      return previousNumber > number || previousNumber === number;
    });

    return isDescending;
  }

  /* Returns true 
   * @example
   * // Returns true
   * new NumberList(1, 2, 3, 4, 5).isIncreasing();
   * // Returns false
   * new NumberList(5, 4, 3, 2, 1).isIncreasing();
   * @return {Boolean}
   */
  isAscending() {
    return this.isDescending() === false;
  }
}

export {
  NumberList
}