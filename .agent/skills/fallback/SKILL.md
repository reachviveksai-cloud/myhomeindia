# Fallback Logic Script

## IF intent_match < 0.5:
1.  **Search Broadly**: Use Integrated Browser to find "General Sentiment" or "Recent News".
2.  **Clarify Intent**: Ask, "Are you prioritizing the brand of the home or the distance to the school?"

## Avoid Hallucination
- **Estimations**: If specific price is missing in `property_schema.json`:
    - $$Price_{est} = Median_{micro\_market} \pm 15\%$$
- **Source Citation**: Any claim about distance/price must have a source (RERA or Google Maps link).
- **Visuals**: If image is missing, render "Generic Placeholder" vector. note: "Awaiting official 2026 brochure update."
