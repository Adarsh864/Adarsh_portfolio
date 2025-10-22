"use client";

import { useState } from 'react';
import { portfolioData } from '@/data/portfolio-data';
import { Button } from '@/components/ui/button';
import { Sparkles, Loader2 } from 'lucide-react';
import { refineSummaryAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { AnimatedDiv } from '@/components/AnimatedDiv';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export function About() {
  const { professionalSummary } = portfolioData;
  const [currentSummary, setCurrentSummary] = useState(professionalSummary);
  const [refinedSummary, setRefinedSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleRefineClick = async () => {
    setIsLoading(true);
    const result = await refineSummaryAction();
    setIsLoading(false);

    if ('error' in result) {
      toast({
        variant: "destructive",
        title: "AI Refinement Failed",
        description: result.error,
      });
    } else {
      setRefinedSummary(result.refinedSummary);
      setIsDialogOpen(true);
    }
  };

  const handleAcceptRefinement = () => {
    setCurrentSummary(refinedSummary);
    setIsDialogOpen(false);
    toast({
        title: "Summary Updated!",
        description: "Your professional summary has been updated with the AI-powered version.",
    })
  };

  return (
    <>
      <section id="about" className="container mx-auto py-24 px-4 md:px-6">
        <AnimatedDiv>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
            Professional Summary
          </h2>
        </AnimatedDiv>
        <AnimatedDiv delay={0.2}>
          <div className="max-w-3xl mx-auto bg-card p-8 rounded-xl shadow-lg relative">
            <p className="text-lg text-card-foreground/90 leading-relaxed whitespace-pre-wrap">
              {currentSummary}
            </p>
            <div className="mt-8 text-center">
              <Button onClick={handleRefineClick} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Refining...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Refine with AI
                  </>
                )}
              </Button>
            </div>
          </div>
        </AnimatedDiv>
      </section>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent className="max-w-3xl">
          <AlertDialogHeader>
            <AlertDialogTitle>AI-Powered Refinement</AlertDialogTitle>
            <AlertDialogDescription>
              We've refined your summary. Choose which version you'd like to use.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
            <div>
              <h3 className="font-bold mb-2">Original Summary</h3>
              <div className="text-sm p-4 rounded-md border bg-muted/50 text-muted-foreground max-h-60 overflow-y-auto">
                {professionalSummary}
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2">Refined Summary</h3>
              <div className="text-sm p-4 rounded-md border bg-primary/10 text-primary-foreground/90 max-h-60 overflow-y-auto">
                {refinedSummary}
              </div>
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleAcceptRefinement}>
              Use Refined Version
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
