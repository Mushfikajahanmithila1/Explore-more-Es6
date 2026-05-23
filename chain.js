// date address
const data = [{ id: 354, phone: 1456235, address: "gulsan" }];
// console.log(data[0].phone);

const user = {
  id: 2147,
  name: "sakib khan",
  address: {
    city: "dinajpur",
    street: {
      local: "kachinia",
      school: "winner residential school",
    },
  },
};
// console.log(user.address.street.school);

const product = {
  id: 2765,
  available: {
    laptop: [
      {
        no1: "lenovo idea pad 2",
        price: 25433,
        no2: "samsung",
        price: 14557,
        no3: "macbook",
        price: 245735,
      },
    ],
  },
};

// console.log(product.available.laptop[0].no1);

const user2 = {
  id: 2147,
  name: "sakib khan",
  address: {
    city: "dinajpur",
    countty: "bangladeh",
  },
};

console.log(user2.address.street?.school);
