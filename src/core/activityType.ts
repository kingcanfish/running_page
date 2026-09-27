// Data sources disagree on type names (Keep/Joyrun write "Hiking", Strava/Codoon
// write "Hike"). Normalize once at load time so every theme sees one name.
const TYPE_ALIASES: Record<string, string> = {
  Hiking: 'Hike',
  hiking: 'Hike',
};

export function normalizeActivityType<T extends { type: string }>(
  activity: T
): T {
  const type = TYPE_ALIASES[activity.type];
  if (type) activity.type = type;
  return activity;
}
