import * as React from 'react';

/*eslint react/jsx-no-bind:0*/

const renderOptions = (values, selected) => (
    values.map(val => (
        <option key={val} selected={val === selected}>{val}</option>
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
                <select onChange={onConfigChange} ref={select => horizontalSelect = select}>
                    {renderOptions(horizontalValues, horizontal)}
                </select>
            </label>

            <label>
                Vertical:
                <select onChange={onConfigChange} ref={select => verticalSelect = select}>
                    {renderOptions(verticalValues, vertical)}
                </select>
            </label>
        </div>
    );
};

export default ConfigSelector;
