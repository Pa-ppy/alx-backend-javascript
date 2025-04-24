// Define branded types using interfaces with a unique tag

interface MajorCredits {
    credits: number;
    readonly __brand: 'Major';
  }
  
  interface MinorCredits {
    credits: number;
    readonly __brand: 'Minor';
  }
  
  // Create sum functions for each type
  
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      __brand: 'Major',
    };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      __brand: 'Minor',
    };
  }
  
  // Export interfaces and functions if needed
  export { MajorCredits, MinorCredits, sumMajorCredits, sumMinorCredits };
  