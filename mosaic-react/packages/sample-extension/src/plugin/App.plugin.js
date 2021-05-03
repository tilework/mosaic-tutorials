const plugin = (args, callback) => {
    return (
        <>
            {callback(...args)}
            <p>I bring the message from the plugin!</p>
        </>
    );
};

export default {
    'App/renderHeaderContents': {
        function: plugin
    }
};