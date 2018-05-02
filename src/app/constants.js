import getLocalStorage from '../app/helpers/get-local-storage';

export const API = {
    SEARCH_ITEMS: 'https://api.unsplash.com/search/photos/',
    SEARCH_ITEMS_RANDOM: 'https://api.unsplash.com/photos/random/'
};

export const storage = {
    local: getLocalStorage()
};

export const paths = {
    GLOBAL: `${window.location.origin}`
};

export const unsplashClient = {
    ID: '452c69632818336a2c6b341b066847cb873fd987fa1876c039f59b615bf3fb9b'
};
