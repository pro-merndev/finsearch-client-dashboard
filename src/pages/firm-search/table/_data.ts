export interface Person {
  id: string;
  firstName: string;
  location: string;
  totalAUM: number;
  individualAUM: number;
}

export const data: Person[] = [
  {
    id: "1",
    firstName: "Roberta Roberts",
    location: "Saint Louis, MO",
    totalAUM: 489,
    individualAUM: 450,
  },
  {
    id: "2",
    firstName: "Elmer Spencer",
    location: "Saint Louis, MO",
    totalAUM: 532,
    individualAUM: 780,
  },
  {
    id: "3",
    firstName: "Marta McKenzie",
    location: "Saint Louis, MO",
    totalAUM: 415,
    individualAUM: 320,
  },
  {
    id: "4",
    firstName: "Roman Terry",
    location: "865 E Market Street",
    totalAUM: 678,
    individualAUM: 590,
  },
  {
    id: "5",
    firstName: "Sheri Raynor",
    location: "1366 Bartholome Haven",
    totalAUM: 250,
    individualAUM: 210,
  },
  {
    id: "6",
    firstName: "Hugh Corkery",
    location: "3273 Charles Street",
    totalAUM: 390,
    individualAUM: 850,
  },
  {
    id: "7",
    firstName: "Dolores Harvey",
    location: "463 Orchard Road",
    totalAUM: 512,
    individualAUM: 670,
  },
  // Generate more data for pagination demo
  ...Array.from({ length: 3232 }, (_, i) => ({
    id: `${i + 8}`,
    firstName: `Person ${i + 8}`,
    location: `Location ${i % 10}`,
    totalAUM: Math.floor(Math.random() * 800) + 200,
    individualAUM: Math.floor(Math.random() * 800) + 200,
  })),
];
