import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../reduxHooks";
import {
  fetchActiveMeetingEvaluations,
  selectActiveMeetingEvaluations,
  subscribeToActiveMeetingEvaluations,
} from "../../meetings/ratingsSlice";
import { Box, Grid, Typography } from "@material-ui/core";
import Loader from "../../components/Loader";
import { Alert } from "@material-ui/lab";
import RatingsBarChart from "./RatingsBarChart";
import { unwrapResult } from "@reduxjs/toolkit";
import { selectActiveMeetingFeedbackLinkId } from "../../meetings/meetingsSelectors";
import {
  Question2Labels,
  Question3Labels,
  Question3Options,
} from "../feedback/constants";
import { range } from "lodash-es";

export default function Ratings(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchActiveMeetingEvaluations());
  }, [dispatch]);

  const activeMeetingFeedbackLinkId = useAppSelector(
    selectActiveMeetingFeedbackLinkId
  );

  useEffect(() => {
    let unsubscribe: () => void;
    const subscribeToRatings = async () => {
      unsubscribe = unwrapResult(
        await dispatch(subscribeToActiveMeetingEvaluations())
      );
    };
    subscribeToRatings();
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [
    dispatch,
    // If the feedback link is created after opening the ratings page, the subscription should be run again
    activeMeetingFeedbackLinkId,
  ]);

  const ratingsLength = useAppSelector(
    (state) => selectActiveMeetingEvaluations(state).length
  );

  const loading = useAppSelector(
    (state) => state.evaluations.loading && state.evaluations.ids.length === 0
  );

  return loading ? (
    <Loader />
  ) : (
    <>
      <Typography variant="h3" gutterBottom>
        Ratings (N={ratingsLength})
      </Typography>
      {ratingsLength === 0 ? (
        <Alert severity="info">
          <Typography variant="body1">
            There are no ratings yet. Create a feedback link after you finished
            the meeting and send it to your audience. This page will refresh
            automatically.
            <br />
            <strong>
              Note: Feedback links are only valid for 30 minutes after the
              meeting has ended.
            </strong>
          </Typography>
        </Alert>
      ) : (
        <>
          <Box justifyContent="center" display="flex" mb={4}>
            <Grid xs={12} md={6} item>
              <RatingsBarChart
                labelInput={Question2Labels.map(({ label }) => label)}
                questionType="cognitive_load"
                title="cognitive load"
                explanation=" Consider the meeting that was just held. In solving the problems discussed, I invested..."
              />
            </Grid>
          </Box>
          <Grid spacing={4} container>
            {Question3Labels.map((question) => (
              <Grid xs={12} md={6} item key={"distraction_" + question.value}>
                <RatingsBarChart
                  labelInput={Question3Options.map(({ label }) => label)}
                  questionType={("distraction_" + question.value) as any}
                  title={question.label}
                  explanation={question.label}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
}
