import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { Meeting, Evaluation } from "../models";
import { RootState } from "../reduxStore";
import { DataStore } from "aws-amplify";
import { ZenObservable } from "zen-observable-ts";

export const fetchActiveMeetingEvaluations = createAsyncThunk(
  "evaluations/fetchActiveMeetingEvaluations",
  async (_, { getState }): Promise<Evaluation[]> => {
    const state = getState() as RootState;
    if (!!state.meetings.activeMeeting) {
      const activeMeeting: Meeting | undefined =
        state.meetings.entities[state.meetings.activeMeeting];

      if (activeMeeting && activeMeeting.PublicMeetingInfo?.id) {
        return await DataStore.query(Evaluation, (r) =>
          r.publicmeetinginfoID("eq", activeMeeting.PublicMeetingInfo!.id)
        );
      }
    }

    return [];
  }
);

export const subscribeToActiveMeetingEvaluations = createAsyncThunk(
  "evaluations/subscribeToActiveMeetingEvaluations",
  async (_, { getState, dispatch }): Promise<() => void> => {
    const state = getState() as RootState;

    if (!!state.meetings.activeMeeting) {
      const activeMeeting: Meeting | undefined =
        state.meetings.entities[state.meetings.activeMeeting];

      if (activeMeeting) {
        const subscription: ZenObservable.Subscription = DataStore.observe(
          Evaluation
        ).subscribe((msg) => {
          if (
            msg.element &&
            msg.element.publicmeetinginfoID ===
              activeMeeting.PublicMeetingInfo?.id
          ) {
            dispatch(fetchActiveMeetingEvaluations());
          }
        });

        return () => {
          subscription.unsubscribe();
        };
      }
    }

    return () => {};
  }
);

const evaluationsAdapter = createEntityAdapter<Evaluation>();
const initialState = evaluationsAdapter.getInitialState({
  loading: true as boolean,
});

export const evaluationsSlice = createSlice({
  name: "evaluations",
  initialState,
  reducers: {
    deleteEvaluations: evaluationsAdapter.removeMany,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchActiveMeetingEvaluations.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchActiveMeetingEvaluations.fulfilled,
        (state, { payload }) => {
          evaluationsAdapter.upsertMany(state, payload);
          state.loading = false;
        }
      )
      .addCase(fetchActiveMeetingEvaluations.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { deleteEvaluations } = evaluationsSlice.actions;

export const { selectAll: selectAllEvaluations } =
  evaluationsAdapter.getSelectors((state: RootState) => state.evaluations);

export const selectActiveMeetingEvaluations = createSelector(
  [
    (state) =>
      !!state.meetings.activeMeeting
        ? state.meetings.entities[state.meetings.activeMeeting]
        : undefined,
    selectAllEvaluations,
  ],
  (activeMeeting?: Meeting, evaluations?: Evaluation[]) =>
    evaluations?.filter(
      (r) => r.publicmeetinginfoID === activeMeeting?.PublicMeetingInfo?.id
    ) || []
);

export default evaluationsSlice.reducer;
