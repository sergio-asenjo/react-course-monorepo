const formatter = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
});

export function formatNumber(value: number): string {
  if (value < 1 || value === Number.NaN) return '$0';
  return formatter.format(value);
}