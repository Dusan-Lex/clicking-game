export function generateInitialLevelsScores() {
  let object = {};
  for (let i = 1; i <= 99; i++) {
    object = { ...object, [i]: [] };
  }
  return object;
}