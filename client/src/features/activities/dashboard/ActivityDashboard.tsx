import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../App/models/activity";
import ActivityList from '../../activities/dashboard/ActivityList';

interface Props {
    activities: Activity[];
}

export default function ActivityDashboard({activities}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities}/>
            </Grid.Column>
        </Grid>
    )
}