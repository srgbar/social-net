import React, {ChangeEvent, useState} from 'react';
import {StatusPropsType} from "../ProfileContainer";

const ProfileStatusWithHooks = (props: StatusPropsType) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateMode}>{props.status || "---"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       autoFocus={true}
                       onBlur={deactivateEditMode}
                       value={status}
                />
            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;