import * as React from 'react';

/*eslint react/jsx-no-bind:0*/

const renderOptions = (values) => (
    values.map(val => (
        <option key={val}>{val}</option>
    ))
);

const ConfigSelector = ({ horizontal, horizontalValues, onChange, vertical, verticalValues }) => {
    let horizontalSelect, verticalSelect;

    const onConfigChange = () => {
        onChange({
            horizontal: horizontalSelect.value,
            vertical: verticalSelect.value
        });
    };

    return (
        <div>
            <label>
                Horizontal:
                <select onChange={onConfigChange} ref={select => horizontalSelect = select} value={horizontal}>
                    {renderOptions(horizontalValues)}
                </select>
            </label>

            <label>
                Vertical:
                <select onChange={onConfigChange} ref={select => verticalSelect = select} value={vertical}>
                    {renderOptions(verticalValues)}
                </select>
            </label>
        </div>
    );
};

export default ConfigSelector;
