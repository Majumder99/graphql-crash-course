let games = [
  { id: "1", title: "Super Mario Odyssey", platform: ["Switch"] },
  { id: "2", title: "Halo Infinite", platform: ["Xbox", "PC"] },
  { id: "3", title: "God of War", platform: ["PlayStation"] },
  {
    id: "4",
    title: "Minecraft",
    platform: ["PC", "Switch", "Xbox", "PlayStation"],
  },
  { id: "5", title: "The Witcher 3", platform: ["PC", "PlayStation", "Xbox"] },
  {
    id: "6",
    title: "Fortnite",
    platform: ["PC", "Switch", "Xbox", "PlayStation"],
  },
  { id: "7", title: "Zelda: Breath of the Wild", platform: ["Switch"] },
  { id: "8", title: "Cyberpunk 2077", platform: ["PC", "PlayStation", "Xbox"] },
  {
    id: "9",
    title: "Red Dead Redemption 2",
    platform: ["PC", "PlayStation", "Xbox"],
  },
  { id: "10", title: "Apex Legends", platform: ["PC", "Xbox", "PlayStation"] },
];

let reviews = [
  { id: "1", rating: 4, content: "Great game but some bugs." },
  { id: "2", rating: 5, content: "Amazing experience!" },
  { id: "3", rating: 3, content: "Average gameplay." },
  { id: "4", rating: 2, content: "Poor graphics." },
  { id: "5", rating: 5, content: "Excellent story!" },
  { id: "6", rating: 1, content: "Full of bugs." },
  { id: "7", rating: 4, content: "Good but not great." },
  { id: "8", rating: 5, content: "Immersive experience." },
  { id: "9", rating: 3, content: "Okay game." },
  { id: "10", rating: 2, content: "Disappointing." },
];

let authors = [
  { id: "1", name: "Alice", verified: true },
  { id: "2", name: "Bob", verified: false },
  { id: "3", name: "Charlie", verified: true },
  { id: "4", name: "Diana", verified: false },
  { id: "5", name: "Eve", verified: true },
  { id: "6", name: "Frank", verified: false },
  { id: "7", name: "Grace", verified: true },
  { id: "8", name: "Hank", verified: false },
  { id: "9", name: "Ivy", verified: true },
  { id: "10", name: "Jack", verified: false },
];

export default { games, authors, reviews };
