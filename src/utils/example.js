const sortByLastName = (arr) => {
    return arr.sort((a, b) => {
      const lastNameA = a.name.split(" ")[2]; // Отримуємо прізвище
      const lastNameB = b.name.split(" ")[2];
  
      return lastNameA.localeCompare(lastNameB);
    });
  };
  
  // Приклад використання:
  const psychologists = [
    { name: "Dr. Emily Turner" },
    { name: "Dr. John Smith" },
    { name: "Dr. Alice Brown" },
  ];
  
  console.log(sortByLastName(psychologists));