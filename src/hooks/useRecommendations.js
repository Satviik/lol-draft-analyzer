import { useState, useCallback } from 'react';
import { fetchRecommendations } from '../api/recommendationApi';

/**
 * Custom hook for managing AI recommendations
 * Handles fetching, loading states, and error handling
 */
export function useRecommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [baselineWinProb, setBaselineWinProb] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Fetch recommendations for a given draft state
   * @param {Object} draftState - { blueTeam, redTeam, role, side }
   */
  const fetchRecs = useCallback(async (draftState) => {
    // Validate input
    if (!draftState || !draftState.role || !draftState.side) {
      setError('Invalid draft state');
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetchRecommendations(draftState);
      // Return backend response directly without normalization
      return response;
    } catch (err) {
      console.error('Failed to fetch recommendations:', err);
      setError(err.message || 'Failed to fetch recommendations');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Clear recommendations and reset state
   */
  const clearRecommendations = useCallback(() => {
    setRecommendations([]);
    setBaselineWinProb(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    recommendations,
    baselineWinProb,
    loading,
    error,
    fetchRecommendations: fetchRecs,
    clearRecommendations,
  };
}
