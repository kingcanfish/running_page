const TYPE_ICONS: Record<string, string> = {
  Run: '🏃',
  Hiking: '🥾',
  Hike: '🥾',
};

export function typeIcon(type: string): string {
  return TYPE_ICONS[type] ?? '📌';
}
