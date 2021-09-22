import { observer } from "mobx-react-lite";
import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../App/models/activity";
import { useStore } from "../../../App/stores/store";
import ActivityList from '../../activities/dashboard/ActivityList';
import ActivityDetails from '../../activities/details/ActivityDetails';
import ActivityForm from '../../activities/form/ActivityForm';

interface Props {
    activities: Activity[];
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default observer(function ActivityDashboard({activities, 
        createOrEdit,
        deleteActivity,
        submitting }: Props) {
    
            const {activityStore} = useStore();
            const {selectedActivity, editMode} = activityStore;

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList submitting={submitting} activities={activities} deleteActivity={deleteActivity} />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode && 
                <ActivityDetails />}
                {editMode &&
                <ActivityForm submitting={submitting}  createOrEdit={createOrEdit} />}
            </Grid.Column>
        </Grid>
    )
})