const converter = {
    optionTextToId: (options, text) => {
        return options.find(e => e.text === text).id
    },
    optionIdToText: (options, id) => {
        return options.find(e => e.id === id).text
    },
}

export default converter;