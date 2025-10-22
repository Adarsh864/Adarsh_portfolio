'use server';

import { refineProfessionalSummary } from '@/ai/flows/refine-professional-summary';
import { portfolioData } from '@/data/portfolio-data';

export async function refineSummaryAction(): Promise<{refinedSummary: string} | {error: string}> {
  try {
    const skillsString = Object.values(portfolioData.skills).flat().join(', ');
    const result = await refineProfessionalSummary({
        summary: portfolioData.professionalSummary,
        skills: skillsString,
    });
    return result;
  } catch (e) {
    console.error(e);
    return { error: 'Failed to refine summary. Please try again later.' };
  }
}
