// The number of minutes until expiration of the survey
import { PublicMeetingInfo } from "../../models";
import { useAppDispatch } from "../../reduxHooks";
import { useCallback, useEffect, useState } from "react";
import { API } from "aws-amplify";
import { getPublicMeetingInfo } from "../../graphql/queries";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
import { differenceInMinutes } from "date-fns";
import { addError } from "../../error/errorSlice";
import { createEvaluation } from "../../graphql/mutations";
import { EXPIRATION_MINUTES } from "./constants";

export const useFetchPublicMeeting = (
  id: string
): [boolean, boolean, PublicMeetingInfo | null] => {
  const dispatch = useAppDispatch();
  const [publicMeeting, setPublicMeeting] = useState<PublicMeetingInfo | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [expired, setExpired] = useState<boolean>(false);

  useEffect(() => {
    const fetchPublicMeeting = async () => {
      setLoading(true);
      try {
        const result = (await API.graphql({
          query: getPublicMeetingInfo,
          variables: { id },
          authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
        })) as any;
        setPublicMeeting(result?.data?.getPublicMeetingInfo);
        if (
          Math.abs(
            differenceInMinutes(
              new Date(result?.data?.getPublicMeetingInfo?.stoppedAt),
              new Date()
            )
          ) > EXPIRATION_MINUTES
        ) {
          setExpired(true);
        }
      } catch (e) {
        dispatch(addError(e.message));
        setExpired(false);
      } finally {
        setLoading(false);
      }
    };
    fetchPublicMeeting();
  }, [dispatch, id]);

  return [loading, expired, publicMeeting];
};

export const useSubmitAnswer = (
  publicmeetinginfoID?: string,
  owner?: string
): [
  boolean,
  boolean,
  (valueQ1: string, valueQ2: number, valueQ3: { [q1: number]: number }) => void
] => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const callback = useCallback(
    async (
      code: string,
      cognitiveLoad: number,
      distractions: { [id: number]: number }
    ): Promise<void> => {
      try {
        if (!publicmeetinginfoID || !owner) {
          dispatch(
            addError(
              "Something went wrong! This is most likely a bug. Please contact an administrator."
            )
          );
          return;
        }

        setLoading(true);

        const distractionsMapped = Object.keys(distractions)
          .map((id) => parseInt(id, 10))
          .reduce<{ [id: string]: number }>((mapped, id) => {
            mapped[`distraction_${id.toString(10)}`] = distractions[id];
            return mapped;
          }, {});

        await API.graphql({
          query: createEvaluation,
          variables: {
            input: {
              code,
              cognitive_load: cognitiveLoad,
              ...distractionsMapped,
              publicmeetinginfoID,
              owner,
            },
          },
          authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
        });
        setSubmitted(true);
      } catch (e) {
        dispatch(addError(e.message));
      } finally {
        setLoading(false);
      }
    },
    [dispatch, owner, publicmeetinginfoID]
  );

  return [loading, submitted, callback];
};
