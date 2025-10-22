'use server';

/**
 * @fileOverview An AI agent to refine a professional summary for a software engineer position.
 *
 * - refineProfessionalSummary - A function that refines the professional summary.
 * - RefineProfessionalSummaryInput - The input type for the refineProfessionalSummary function.
 * - RefineProfessionalSummaryOutput - The return type for the refineProfessionalSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RefineProfessionalSummaryInputSchema = z.object({
  summary: z.string().describe('The professional summary to refine.'),
  skills: z.string().describe('The skills of the person.'),
});
export type RefineProfessionalSummaryInput = z.infer<typeof RefineProfessionalSummaryInputSchema>;

const RefineProfessionalSummaryOutputSchema = z.object({
  refinedSummary: z.string().describe('The refined professional summary.'),
});
export type RefineProfessionalSummaryOutput = z.infer<typeof RefineProfessionalSummaryOutputSchema>;

export async function refineProfessionalSummary(
  input: RefineProfessionalSummaryInput
): Promise<RefineProfessionalSummaryOutput> {
  return refineProfessionalSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'refineProfessionalSummaryPrompt',
  input: {schema: RefineProfessionalSummaryInputSchema},
  output: {schema: RefineProfessionalSummaryOutputSchema},
  prompt: `You are an expert resume writer, specializing in professional summaries for software engineers.

  You will take the existing summary and refine it to be more impactful and tailored to software engineering positions.
  Incorporate relevant keywords and highlight key skills based on the provided skills.

  Existing Summary: {{{summary}}}
  Skills: {{{skills}}}

  Refined Summary:`,
});

const refineProfessionalSummaryFlow = ai.defineFlow(
  {
    name: 'refineProfessionalSummaryFlow',
    inputSchema: RefineProfessionalSummaryInputSchema,
    outputSchema: RefineProfessionalSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
