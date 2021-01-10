const listings = [
  {
    id: 201,
    title: "Grocery Shopping",
    images: [{ fileName: "grocery" }],
    minutes: 90,
    categoryId: 5,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 3,
    title: "Workout at Gym",
    images: [{ fileName: "gym" }],
    categoryId: 1,
    minutes: 120,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 7,
    title: "Have Mom's Spaghetti",
    images: [{ fileName: "spag" }],
    categoryId: 1,
    minutes: 20,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 1,
    title: "Dinner with Friends",
    description:
      "Location TBD.",
    images: [
      { fileName: "restaurant" },
      { fileName: "restaurant" },
      { fileName: "restaurant" },
    ],
    minutes: 120,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 2,
    title: "Deposit check at the bank/ATM",
    images: [{ fileName: "bank" }],
    categoryId: 5,
    minutes: 45,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 102,
    title: "Take in car for oil change",
    images: [{ fileName: "oilchange" }],
    minutes: 90,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 101,
    title: "Training for Work",
    images: [{ fileName: "training" }],
    minutes: 120,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 4,
    title: "Clean-out the Gutters",
    description: "Borrow next door neighbor's ladder",
    images: [{ fileName: "gutters" }],
    categoryId: 1,
    minutes: 30,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 6,
    title: "Gather-up and take-out the Garbage",
    images: [{ fileName: "garbage" }],
    categoryId: 5,
    minutes: 30,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
};
