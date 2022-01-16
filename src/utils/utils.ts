export function generateInitialLevelsScores(startLevel: number) {
  let object = {};
  for (let i = startLevel; i <= 99; i++) {
    object = { ...object, [i]: [] };
  }
  return object;
}
