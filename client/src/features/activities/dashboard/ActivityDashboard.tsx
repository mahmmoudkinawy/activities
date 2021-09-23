import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../App/layout/LoadingComponent";
import { useStore } from "../../../App/stores/store";
import ActivityList from '../../activities/dashboard/ActivityList';

export default observer(function ActivityDashboard() {
    
            const {activityStore} = useStore();

            useEffect(() => {
              activityStore.loadActivities();
            }, [activityStore])
          
            if(activityStore.loadingInitial) 
              return <LoadingComponent content='Loading App' />
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList  />
            </Grid.Column>
            <Grid.Column width='6'>
                <h2>Activity filters</h2>
            </Grid.Column>
        </Grid>
    )
})