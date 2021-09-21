import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../App/models/activity";
import ActivityList from '../../activities/dashboard/ActivityList';
import ActivityDetails from '../../activities/details/ActivityDetails';

interface Props {
    activities: Activity[];
}

export default function ActivityDashboard({activities}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {activities[0] && 
                <ActivityDetails activity={activities[0]}/>}
            </Grid.Column>
        </Grid>
    )
}