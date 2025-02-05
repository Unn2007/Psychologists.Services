export const sortByLastName = (arr, order = 'asc') => {
  return arr.sort((a, b) => {
    const lastNameA = a.name.split(' ')[2]; // Отримуємо прізвище
    const lastNameB = b.name.split(' ')[2];

    return order === 'asc'
      ? lastNameA.localeCompare(lastNameB)
      : lastNameB.localeCompare(lastNameA);
  });
};

export const sortArray = (arr, field, order = 'asc') => {
  return arr.slice().sort((a, b) => {
    const valueA = a[field];
    const valueB = b[field];

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return order === 'asc' ? valueA - valueB : valueB - valueA;
    }

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return order === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }

    return 0;
  });
};

export const filterAndSortByPrice = (arr, isGreaterThan10 = true) => {
  const filteredArray = arr.filter((item) =>
    isGreaterThan10 ? item.price_per_hour > 10 : item.price_per_hour < 10
  );

  const sortOrder = isGreaterThan10 ? 'desc' : 'asc';

  return sortArray(filteredArray, 'price_per_hour', sortOrder);
};
