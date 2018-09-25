import {LogicalUtils} from './LogicalUtils';

export class FormatUtils {

  static currency(val: number) { return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'BYN',
    minimumFractionDigits: 2
  }).format(LogicalUtils.numberIsNull(val)); }

  static doSomethingElse(val: string) { return val; }
}
