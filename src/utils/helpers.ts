import "intl";

import "intl/locale-data/jsonp/ru-RU";

export const priceFormater = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 2,
});
