// Atoms combine to form molecules. The base amount of atom = 1 at sec=1 that is combined into the molecule, and for every second that passes, their base amount doubles. So at sec=2, there are 2 atoms and now a total of 3 (previous 1 + 2(new)) atoms are present in the molecule. At sec=3, there are 4 atoms, and now the total is 7 (previous 3+4(new)) atoms present in the molecule. Return how many atoms are present in the molecule at a certain second.

const atomCombine = (s) => {
  let sum = 0;
  let atoms = 1;
  for (let index = 1; index <= s; index++) {
    sum += atoms;
    atoms *= 2;
  }

  console.log(sum);
};

atomCombine(3);
