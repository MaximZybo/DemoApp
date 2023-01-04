export const formatAmount = (value: number): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currencyDisplay: 'code',
    currency: 'USD',
  }).format(value);
};

export const getOnlyDigits = (value: string = ''): string => {
  return value.replace(/\D+/g, '');
};

export const digitSplit = (value: string = '') =>
  value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

export const getClearedAmount = (value: string = ''): string =>
  value
    .replace(/[^.\d]/g, '') // remove all but numbers and number signs
    .replace(/^(-)?\./g, '') // remove leading dot
    .replace(/(.*\.)\./g, '$1') // remove multiple dots
    .replace(/(?!^)-/g, '') // remove multiple minuses
    .replace(/^0+/, '') // remove leading zero
    .replace(/(.+[.].+)[.]/g, '$1') // remove second dot
    .replace(/^((-)?\d+\.?\d{0,2})\d*/g, '$1'); // remove extra precision numbers

export const amountFormatOnBlur = (value: string = '') =>
  value
    .replace(/(.*)\.$/g, '$1') // remove last dot
    .replace(/(^[\d,]+$)/, '$1.00') // add fractional zeros
    .replace(/(\.\d{1}$)/, '$10'); // add fractional part
