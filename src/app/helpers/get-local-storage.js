export default function getLocalStorage() {
    let storage;
    try {
        storage = JSON.parse(localStorage.getItem(('list'))) || [];
    } catch (e) {
        console.log('Something wrong!');
    }
    return storage;
}
