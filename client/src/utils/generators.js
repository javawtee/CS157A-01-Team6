import React from 'react';

export function generateOptions(className, onChange, defaultValue, listOfOptions, options) {
    return React.createElement('select', { className, onChange, defaultValue, ...options }, [
        listOfOptions.map(opt => React.createElement("option", { key: opt.id, value: opt.text }, [opt.text]))
    ])
}

export function generateComponents(listOfData, ParentComponent) {
    return listOfData.map((data, id) =>
        React.createElement(ParentComponent, { key: id, data }, null))
}