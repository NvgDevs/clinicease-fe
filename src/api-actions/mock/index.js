const patients = Array.from({ length: 10 }).map((_, i) => {
  return {
    id: `id-${i + 1}`,
    name: `patient-${i + 1}`,
    phone: "17 99191-9292",
    email: `patient-${i + 1}@hotmail.com`,
    address: `Rua São Paulo, ${i * 2}}`,
    cpf: '111.222.333-44',
    birthDate: '22/11/2000'
  };
});

module.exports = () => {
  const data = {
    patients: {
      patients,
      meta: {
        pageIndex: 0,
        perPage: 10,
        totalCount: 10,
      },
    },
  };
  return data;
};
