const plugin = (args, callback) => {
    console.log('The plugin works!');

    return callback(...args);
};

export default {
    'App/getData': {
        function: plugin
    }
};