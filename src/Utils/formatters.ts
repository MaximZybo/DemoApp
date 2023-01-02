export const formatAmount = (value: number): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currencyDisplay: 'code',
    currency: 'USD',
  }).format(value);
};
