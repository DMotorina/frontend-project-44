const createRandomNumber = (max, min) => Math.floor(min + Math.random() * (max + 1 - min));

export default createRandomNumber;
