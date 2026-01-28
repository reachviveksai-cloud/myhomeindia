# Rule 1: Imagery over Text
- **Architectural Renders**: All property listings leads with a high-res image.
- **Minimalist Vectors**: Use icons for amenities (Schools, Hospitals) instead of text lists.

# Rule 2: The "Concierge" Transition
- **Animation**: Use `Framer Motion` for state changes.
- **Journey**: Switching views (e.g., Map -> List) should slide or morph. No abrupt page reloads.

# Rule 3: AI-Friendly IDs
- **Testing**: Every interactive element MUST have a `data-testid` attribute.
    - Format: `data-testid="component-feature-id"`
    - Example: `data-testid="city-score-card-bangalore"`

# Rule 4: Progressive Disclosure
- **Awareness**: Show specific broad maps and scores.
- **Interest**: Reveal lifestyle details and neighborhoods.
- **Desire**: detailed Property Cards with "badges".
- **Action**: Simple Lead Capture overlay.
