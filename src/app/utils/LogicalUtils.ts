export class LogicalUtils {

  static numberIsNull(val: number){
    return (val === null || val === undefined) ?  0: val;
  }

  static arrayIsEmpty(val: object[]){
    return (val === null || val === undefined || val.length === 0);
  }
}
