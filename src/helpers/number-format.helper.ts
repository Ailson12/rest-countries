export const numberFormat = (value: number | string) => {
  const formatter = Intl.NumberFormat("pt-BR");
    return formatter.format(Number(value));
}