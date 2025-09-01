'use server';

/**
 * @fileOverview Summarizes testimonials using a Genkit flow.
 *
 * - summarizeTestimonials - A function that summarizes a list of testimonials.
 * - SummarizeTestimonialsInput - The input type for the summarizeTestimonials function.
 * - SummarizeTestimonialsOutput - The return type for the summarizeTestimonials function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeTestimonialsInputSchema = z.array(
  z.object({
    name: z.string().describe('Name of the person giving the testimonial.'),
    text: z.string().describe('The testimonial text.'),
  })
).describe('An array of testimonial objects.');

export type SummarizeTestimonialsInput = z.infer<typeof SummarizeTestimonialsInputSchema>;

const SummarizeTestimonialsOutputSchema = z.string().describe('A summarized version of the testimonials.');
export type SummarizeTestimonialsOutput = z.infer<typeof SummarizeTestimonialsOutputSchema>;

export async function summarizeTestimonials(input: SummarizeTestimonialsInput): Promise<SummarizeTestimonialsOutput> {
  return summarizeTestimonialsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeTestimonialsPrompt',
  input: {schema: SummarizeTestimonialsInputSchema},
  output: {schema: SummarizeTestimonialsOutputSchema},
  prompt: `You are an AI that summarizes customer testimonials.

  Summarize the following testimonials, highlighting the key positive feedback points about the individual. Be concise and focus on the most impactful aspects of the feedback.

  Testimonials:
  {{#each this}}
  - "{{text}}" - {{name}}
  {{/each}}
  `,
});

const summarizeTestimonialsFlow = ai.defineFlow(
  {
    name: 'summarizeTestimonialsFlow',
    inputSchema: SummarizeTestimonialsInputSchema,
    outputSchema: SummarizeTestimonialsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

