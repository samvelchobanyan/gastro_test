import React from 'react';
import { RatingStars } from '../rating/RatingStars.jsx';
import { Button } from '../buttons/Button.jsx';

/**
 * RatingReviewPrompt — post-delivery card asking the user to rate their
 * order and optionally leave a written review.
 */
export function RatingReviewPrompt({
  restaurantName = '',
  rating = 0,
  onRatingChange = () => {},
  review = '',
  onReviewChange = () => {},
  onSubmit = () => {},
  onSkip = () => {},
}) {
  return (
    <div style={{
      padding: 'var(--space-lg)', background: 'var(--card-bg)', border: 'var(--border-width-default) solid var(--card-border)',
      borderRadius: 'var(--radius-card)', boxShadow: 'var(--elevation-card)', textAlign: 'center', fontFamily: 'var(--font-family-base)',
    }}>
      <h3 style={{ margin: 0, fontSize: 'var(--font-size-h3)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-primary)' }}>How was {restaurantName}?</h3>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-md)' }}>
        <RatingStars value={rating} readOnly={false} onChange={onRatingChange} size={30} />
      </div>
      <textarea
        value={review} onChange={(e) => onReviewChange(e.target.value)} placeholder="Add a comment (optional)"
        rows={2} style={{
          width: '100%', marginTop: 'var(--space-md)', boxSizing: 'border-box', padding: 'var(--space-md)',
          border: 'var(--border-width-default) solid var(--color-border-default)', borderRadius: 'var(--radius-input)',
          fontFamily: 'var(--font-family-base)', fontSize: 'var(--font-size-body)', resize: 'vertical', outline: 'none',
        }}
      />
      <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-md)' }}>
        <Button variant="tertiary" onClick={onSkip} fullWidth>Skip</Button>
        <Button onClick={onSubmit} fullWidth disabled={rating === 0}>Submit</Button>
      </div>
    </div>
  );
}
