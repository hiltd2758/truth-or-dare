import { QuestionCard } from "./QuestionCard";
import { InitialChoiceButtons } from "./InitialChoiceButtons";
import { QuestionActions } from "./QuestionActions";
import { FlashMessage } from "./FlashMessage";

export function GameMain({
  mode,
  question,
  qKey,
  flash,
  currentPlayer,
  onChooseTruth,
  onChooseDare,
  onRandom,
  onDone,
  onSkip,
  onNextQuestion,
}) {
  return (
    <div className="game-main">
      <div
        style={{
          fontFamily: "Playfair Display",
          fontSize: "clamp(0.95rem,1.1vw,1.25rem)",
          fontStyle: "italic",
          color: "#777",
        }}
      >
        {currentPlayer}, đến lượt bạn rồi...
      </div>

      {!mode ? (
        <InitialChoiceButtons
          onChooseTruth={onChooseTruth}
          onChooseDare={onChooseDare}
          onRandom={onRandom}
        />
      ) : (
        <>
          <QuestionCard mode={mode} question={question} qKey={qKey} />
          <FlashMessage flash={flash} />
          {!flash && (
            <QuestionActions
              onDone={onDone}
              onSkip={onSkip}
              onNextQuestion={onNextQuestion}
            />
          )}
        </>
      )}
    </div>
  );
}
