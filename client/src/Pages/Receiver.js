import React, { useState } from 'react'
import PromptProcessing from '../Components/PromptProcessing'
import SelectionPanel from '../Components/SelectionPanel';
import Input from '../Components/Input';

const Receiver = () => {
    const [objective, setObjective] = useState('')
    // const [education, setEducation] = useState('')
    // const [professionalExp, setProfessionalExp] = useState('')
    // const [certifications, setCertifications] = useState('')
    // const [projects, setProjects] = useState('')
    // const [skills, setSkills] = useState('')
    // const [volunteerExp, setVolunteerExp] = useState('')
    const [checkedList, setCheckedList] = useState([])
    


    const submitData = () => {
        console.log(PromptProcessing.sendObjective(objective))
    }

    return (
        <div>
            <div>
                <SelectionPanel checkedList={checkedList} setCheckedList={setCheckedList}/>
                <span>
                    {checkedList.map((item) => {
                        return (
                            <div>
                                <Input setObjective = {setObjective} value={item}/>
                            </div>
                        )
                    })}
                </span>
                <button onClick={submitData}>Submit</button>
            </div>
        </div>
    )
}

export default Receiver;