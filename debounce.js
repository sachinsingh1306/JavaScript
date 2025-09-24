function searchWithDebounce (fn, delay){
    let timer;
    return function (...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

function search(name) {
    console.log(`Searching for ${name}`);
}

const searchInput = searchWithDebounce(search,300);
searchInput("Sachin");
searchInput("Sachin Singh");
searchInput("Sachin Singh Thakur");