import React from 'react'

const SelectionPanel = ({checkedList, setCheckedList}) => {
    const LIST_DATA = [
        {id: "1", value: "Objective Statement"},
        {id: "2", value: "Education"},
        {id: "3", value: "Professional Experience"},
        {id: "4", value: "Certifications"},
        {id: "5", value: "Projects"},
        {id: "6", value: "Volunter Experience"},
        {id: "7", value: "Skills"}
    ]

    const handleSelect = (event) => {
        

        const value = event.target.value
        const isChecked = event.target.checked

        if (isChecked) {
            //add checked item
            setCheckedList([...checkedList, value])
        } else {
            //removed unchecked items
            const filteredList = checkedList.filter((item) => item !== value);
            setCheckedList(filteredList)
        }
    }

    return(
        <div>
            {LIST_DATA.map((item) => {
                return (
                    <div key={item.id}>
                        <label for={item.id}>{item.value}</label>
                        <input
                            type="checkbox"
                            name="options"
                            id={item.id}
                            value={item.value}
                            onChange={handleSelect}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default SelectionPanel