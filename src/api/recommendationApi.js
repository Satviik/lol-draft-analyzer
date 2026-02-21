export async function fetchRecommendations(draftState) {
  try {
    const response = await fetch("https://provident-ninfa-volar.ngrok-free.dev/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        blue_team: draftState.blueTeam,
        red_team: draftState.redTeam,
        role: draftState.role,
        side: draftState.side
      })
    });

    if (!response.ok) {
      throw new Error("Failed to fetch recommendations");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}
