import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  TypographyTypeMap,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Favorite, Security, Send } from "@material-ui/icons";
import { Alert, AlertTitle } from "@material-ui/lab";
import { formatDistanceToNow } from "date-fns";
import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../../error/Error";
import { useAppSelector } from "../../reduxHooks";
import NotFound from "../NotFound";
import {
  ErrorMessages,
  EXPIRATION_MINUTES,
  Question2Labels,
  Question3Labels,
  Question3Options,
} from "./constants";
import { useFetchPublicMeeting, useSubmitAnswer } from "./hooks";

export default function Feedback(): JSX.Element | null {
  const { publicMeetingId } = useParams() as any;
  const [meetingLoading, expired, publicMeeting] =
    useFetchPublicMeeting(publicMeetingId);
  const [submitLoading, submitted, submitAnswer] = useSubmitAnswer(
    publicMeeting?.id,
    publicMeeting?.owner
  );
  const signedIn: boolean = useAppSelector((state) => state.auth.signedIn);
  const userId: string | undefined = useAppSelector(
    (state) => state.auth.user?.id
  );

  const [code, setCode] = useState<string>("");
  const [cognitiveLoad, setCognitiveLoad] = useState<number>(-1);
  const [distractions, setDistractions] = useState<{ [id: number]: number }>(
    {}
  );
  const [errors, setErrors] = useState<
    Partial<
      {
        [key in keyof typeof ErrorMessages]: boolean;
      }
    >
  >({});

  const handleChangeQ1 = (event: ChangeEvent<HTMLInputElement>): void => {
    setCode(event.target.value);
  };

  const handleChangeQ2 = (event: ChangeEvent<HTMLInputElement>): void => {
    setCognitiveLoad(parseInt(event.target.value, 10));
  };

  const handleChangeQ3 = (
    event: ChangeEvent<HTMLInputElement>,
    id: number
  ): void => {
    setDistractions({
      ...distractions,
      [id]: parseInt(event.target.value, 10),
    });
  };

  const hasError = (questionId: keyof typeof ErrorMessages): boolean => {
    return errors[questionId] || false;
  };

  const getErrorMessage = (questionId: keyof typeof ErrorMessages): string => {
    return ErrorMessages[questionId];
  };

  const getQuestionLabelColor = (
    questionId: keyof typeof ErrorMessages
  ): TypographyTypeMap["props"]["color"] => {
    return hasError(questionId) ? "error" : "textPrimary";
  };

  const errorElement = (
    questionId: keyof typeof ErrorMessages
  ): false | JSX.Element => {
    return (
      hasError(questionId) && (
        <Box my={1}>
          <Typography variant="body2" color="error">
            {getErrorMessage(questionId)}
          </Typography>
        </Box>
      )
    );
  };

  const validate = (): boolean => {
    const errors: Partial<{ [key in keyof typeof ErrorMessages]: boolean }> =
      {};

    if (!/^[a-zA-Z]{4}(19|20)[0-9]{2}$/.test(code)) {
      errors["q1"] = true;
    }

    if (cognitiveLoad === -1) {
      errors["q2"] = true;
    }

    if (
      Object.keys(distractions).length < Object.keys(Question3Labels).length
    ) {
      errors["q3"] = true;
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  return !meetingLoading ? (
    !publicMeeting ? (
      <NotFound />
    ) : (
      <Container>
        <Box px={[0, 4, 8, 16]}>
          {userId === publicMeeting.owner ? (
            <Alert severity="warning">
              <Typography variant="body1">
                <strong>You cannot give yourself feedback!</strong>
              </Typography>
            </Alert>
          ) : !submitted ? (
            <>
              <Box mb={2}>
                <Error />
                <Typography variant="h1">Give Feedback</Typography>
                <Typography variant="h5">
                  for the presentation <strong>{publicMeeting?.name}</strong>{" "}
                  which has just ended{" "}
                  <strong>
                    {formatDistanceToNow(new Date(publicMeeting?.stoppedAt!), {
                      addSuffix: true,
                    })}
                  </strong>
                </Typography>
              </Box>
              {!expired ? (
                <>
                  <Box mt={2} mb={5}>
                    <Typography
                      variant="h4"
                      color={getQuestionLabelColor("q1")}
                    >
                      Please enter your personal code here
                    </Typography>
                    <Typography variant="subtitle1" display="block">
                      First 2 letters of mother's name, first 2 letters of
                      father's name, own birthyear (e.g. ANMA1990)
                    </Typography>
                    <Box mt={2}>
                      <FormControl fullWidth>
                        <TextField
                          variant="filled"
                          label="Code"
                          value={code}
                          onChange={handleChangeQ1}
                          required={true}
                        />
                        {errorElement("q1")}
                      </FormControl>
                    </Box>
                  </Box>
                  <Box mt={2} mb={5}>
                    <Typography
                      variant="h4"
                      color={getQuestionLabelColor("q2")}
                    >
                      Consider the meeting that was just held. In solving the
                      problems discussed, I invested...
                    </Typography>
                    <Box mt={2}>
                      <FormControl>
                        <RadioGroup
                          aria-label="cognitive_load"
                          name="cognitive_load"
                          value={cognitiveLoad}
                          onChange={handleChangeQ2}
                        >
                          {Question2Labels.map((question) => (
                            <FormControlLabel
                              key={`q2-l-${question.value}`}
                              value={question.value}
                              control={<Radio />}
                              label={question.label}
                            />
                          ))}
                        </RadioGroup>
                        {errorElement("q2")}
                      </FormControl>
                    </Box>
                  </Box>
                  <Box mt={2} mb={5}>
                    <Typography
                      variant="h4"
                      color={getQuestionLabelColor("q3")}
                    >
                      The following questions are meant to assess your attention
                      and performance during the meeting that was held.
                    </Typography>
                    <Typography variant="subtitle1" display="block">
                      Please indicate how often the following happened:
                    </Typography>
                    <Box mt={2}>
                      <div className="grid">
                        <div></div>
                        {Question3Options.map(({ label, value }) => (
                          <div key={`rating_label_${value}`}>
                            <Typography variant="body1">{label}</Typography>
                          </div>
                        ))}
                        {Question3Labels.map((question) => [
                          <div
                            className="grid__col__label"
                            key={`q3-l-${question.value}`}
                          >
                            <Typography variant="body1">
                              {question.label}
                            </Typography>
                          </div>,
                          ...Question3Options.map(({ label, value }) => (
                            <div key={`q3-a-${question.value}_${value}`}>
                              <Radio
                                checked={distractions[question.value] === value}
                                onChange={(e) =>
                                  handleChangeQ3(e, question.value)
                                }
                                value={value}
                                name={`q3-a-${question.value}`}
                                title={label}
                                inputProps={{ "aria-label": label }}
                              />
                            </div>
                          )),
                        ])}
                      </div>
                      {errorElement("q3")}
                    </Box>
                  </Box>
                  <Box mb={2}>
                    <Button
                      disabled={submitLoading}
                      endIcon={<Send />}
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        validate() &&
                        submitAnswer(code, cognitiveLoad, distractions)
                      }
                    >
                      Submit
                    </Button>
                  </Box>
                  <Box>
                    <Alert severity="info" icon={<Security />}>
                      <AlertTitle>Your feedback is anonymous</AlertTitle>
                      <Typography variant="body1">
                        We do not send any information related to your identity.{" "}
                        {signedIn &&
                          "Feel free to logout if you feel safer then."}
                      </Typography>
                    </Alert>
                  </Box>
                </>
              ) : (
                <Alert severity="warning">
                  <AlertTitle>This link is expired</AlertTitle>
                  <Typography variant="body1">
                    You cannot give feedback anymore as the expiration time for
                    this survey is <strong>{EXPIRATION_MINUTES} minutes</strong>
                    .
                  </Typography>
                </Alert>
              )}
            </>
          ) : (
            <Box
              height={300}
              mt={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
            >
              <Typography variant="h1">
                <Box display="flex">
                  <Box>Thank you</Box>
                  <Box color={red[500]} ml={2}>
                    <Favorite fontSize="inherit" />
                  </Box>
                </Box>
              </Typography>
              <Typography variant="subtitle1">
                You can close this page now.
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    )
  ) : null;
}
