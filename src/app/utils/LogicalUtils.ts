export class LogicalUtils {

  static numberIsNull(val: number){
    return (val === null || val === undefined) ?  0: val;
  }
}
