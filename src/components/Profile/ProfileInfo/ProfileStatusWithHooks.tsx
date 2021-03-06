import React, {ChangeEvent, useEffect, useState} from 'react';
import {ProfilesType} from "../../../redux/profile-reducer";

export type StatusPropsType = {
    profile: ProfilesType
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: StatusPropsType) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

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
                <span onDoubleClick={activateMode}>{props.status || "I have not status"}</span>
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