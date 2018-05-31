const testUnclassisfied = () => {
    const unclassisfied = require('../src/unclassified');
    const a_fn = (params) => {};
    const render = unclassisfied.throttle(a_fn, 1600, null);
    render(1);
    render(2);
}

const testStringSet = () => {
    const StringSet = require('../src/string_set');

    const stringSet = new StringSet("chengc1");
    console.log(stringSet._items)
    console.log(stringSet._nums)
    console.log(stringSet.values());
}


testStringSet();
