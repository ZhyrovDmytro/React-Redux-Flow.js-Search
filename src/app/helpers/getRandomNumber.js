export default () => {
    const randomNumber = Math.random().toString(36).slice(-5);
    return randomNumber;
};
