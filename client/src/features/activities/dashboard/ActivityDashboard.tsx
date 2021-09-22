import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../App/models/activity";
import ActivityList from '../../activities/dashboard/ActivityList';
import ActivityDetails from '../../activities/details/ActivityDetails';
import ActivityForm from '../../activities/form/ActivityForm';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default function ActivityDashboard({activities, 
        selectedActivity,
        selectActivity, 
        cancelSelectActivity,
        editMode,
        openForm,
        closeForm,
        createOrEdit,
        deleteActivity,
        submitting }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList submitting={submitting} activities={activities} deleteActivity={deleteActivity} selectActivity={selectActivity}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode && 
                <ActivityDetails 
                    activity={selectedActivity} 
                    cancelSelectActivity={cancelSelectActivity}
                    openForm={openForm}
                />}
                {editMode &&
                <ActivityForm submitting={submitting} closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit} />}
            </Grid.Column>
        </Grid>
    )
}