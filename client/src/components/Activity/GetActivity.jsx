import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getActivities } from "../../Redux/actions/actions"
import CardActivity from "./ActivityCard"

const GetActivity = () =>{
    const dispatch = useDispatch()
    const activity = useSelector((state)=>state.activities)

    useEffect(()=>{
        dispatch(getActivities())
    },[dispatch])
    
    return(
        <div>
        {activity?.map((act)=>{
            return(
            <CardActivity
            key={act.key}
            id={act.id}
            name={act.activityName}
            description={act.description}
            difficulty={act.difficulty}
            time={act.time}
            season={act.season}
            countries={act?.Countries}
            />
            )
        })}
        </div>
    )
}

export default GetActivity;