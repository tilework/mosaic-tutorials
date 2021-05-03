const plugin = (args, callback) => {
    const originalData = callback(...args);
    const additionalData = [
        'Additional data'
    ];

    console.log({ originalData });

    return [
        ...originalData,
        ...additionalData
    ];
};

export default {
    'App/getData': {
        function: plugin
    }
};