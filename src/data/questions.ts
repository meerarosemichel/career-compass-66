export interface Question {
  id: number;
  text: string;
  category: 'technical' | 'non-technical' | 'decision' | 'confusion' | 'study' | 'social';
}

export const allQuestions: Question[] = [
  // Technical Interest (10)
  { id: 1, text: "Do you enjoy solving logical problems?", category: 'technical' },
  { id: 2, text: "Do you like building or designing things?", category: 'technical' },
  { id: 3, text: "Do you watch technical tutorials online?", category: 'technical' },
  { id: 4, text: "Are you fascinated by how software or apps work?", category: 'technical' },
  { id: 5, text: "Do you enjoy learning about coding or programming?", category: 'technical' },
  { id: 6, text: "Do you find mathematics interesting?", category: 'technical' },
  { id: 7, text: "Do you enjoy working with data and numbers?", category: 'technical' },
  { id: 8, text: "Are you curious about cybersecurity and ethical hacking?", category: 'technical' },
  { id: 9, text: "Do you enjoy debugging or finding errors in things?", category: 'technical' },
  { id: 10, text: "Would you enjoy building a mobile app or website?", category: 'technical' },

  // Non-Technical Interest (10)
  { id: 11, text: "Do you prefer working with people over machines?", category: 'non-technical' },
  { id: 12, text: "Do you enjoy writing stories or articles?", category: 'non-technical' },
  { id: 13, text: "Are you interested in marketing and advertising?", category: 'non-technical' },
  { id: 14, text: "Do you like organizing events or managing teams?", category: 'non-technical' },
  { id: 15, text: "Do you enjoy creating visual designs or artwork?", category: 'non-technical' },
  { id: 16, text: "Are you good at persuading or negotiating with others?", category: 'non-technical' },
  { id: 17, text: "Do you enjoy helping others with their problems?", category: 'non-technical' },
  { id: 18, text: "Are you interested in business strategy and planning?", category: 'non-technical' },
  { id: 19, text: "Do you enjoy public speaking or presentations?", category: 'non-technical' },
  { id: 20, text: "Do you like reading about psychology or human behavior?", category: 'non-technical' },

  // Decision Making (10)
  { id: 21, text: "Do you make decisions quickly and confidently?", category: 'decision' },
  { id: 22, text: "Do you stick with your choices once you make them?", category: 'decision' },
  { id: 23, text: "Do you have a clear plan for the next 5 years?", category: 'decision' },
  { id: 24, text: "Do you feel confident about choosing a career path?", category: 'decision' },
  { id: 25, text: "Do you avoid overthinking your choices?", category: 'decision' },
  { id: 26, text: "Can you easily prioritize between multiple options?", category: 'decision' },
  { id: 27, text: "Do you trust your instincts when making choices?", category: 'decision' },
  { id: 28, text: "Are you comfortable with committing to long-term goals?", category: 'decision' },
  { id: 29, text: "Do you rarely second-guess your decisions?", category: 'decision' },
  { id: 30, text: "Do you set clear goals and work toward them?", category: 'decision' },

  // Confusion Indicators (10)
  { id: 31, text: "Do you often feel confused about your future career?", category: 'confusion' },
  { id: 32, text: "Do you frequently change your mind about what you want to do?", category: 'confusion' },
  { id: 33, text: "Do you feel overwhelmed by too many career options?", category: 'confusion' },
  { id: 34, text: "Do you struggle to identify your strengths?", category: 'confusion' },
  { id: 35, text: "Do you feel pressure from family about career choices?", category: 'confusion' },
  { id: 36, text: "Do you compare yourself to peers who seem certain?", category: 'confusion' },
  { id: 37, text: "Do you avoid thinking about career planning?", category: 'confusion' },
  { id: 38, text: "Do you feel anxious about making the wrong career choice?", category: 'confusion' },
  { id: 39, text: "Do you wish someone would just tell you what to do?", category: 'confusion' },
  { id: 40, text: "Do you feel equally interested in many different fields?", category: 'confusion' },

  // Study Habits (10)
  { id: 41, text: "Do you study regularly without being reminded?", category: 'study' },
  { id: 42, text: "Do you enjoy learning new skills on your own?", category: 'study' },
  { id: 43, text: "Do you complete assignments well before deadlines?", category: 'study' },
  { id: 44, text: "Do you take online courses or certifications?", category: 'study' },
  { id: 45, text: "Do you enjoy reading books related to your field?", category: 'study' },
  { id: 46, text: "Do you actively participate in class discussions?", category: 'study' },
  { id: 47, text: "Do you keep notes organized and review them?", category: 'study' },
  { id: 48, text: "Do you seek out extra learning beyond the curriculum?", category: 'study' },
  { id: 49, text: "Do you practice what you learn through projects?", category: 'study' },
  { id: 50, text: "Do you set study goals and track your progress?", category: 'study' },

  // Social vs Analytical (10)
  { id: 51, text: "Do you prefer working alone over working in groups?", category: 'social' },
  { id: 52, text: "Do you analyze situations before acting?", category: 'social' },
  { id: 53, text: "Do you enjoy brainstorming ideas with others?", category: 'social' },
  { id: 54, text: "Do you prefer structured tasks over creative ones?", category: 'social' },
  { id: 55, text: "Are you more comfortable with facts than feelings?", category: 'social' },
  { id: 56, text: "Do you enjoy networking and meeting new people?", category: 'social' },
  { id: 57, text: "Do you prefer detailed planning over spontaneity?", category: 'social' },
  { id: 58, text: "Do you feel energized after social interactions?", category: 'social' },
  { id: 59, text: "Do you enjoy solving puzzles and brain teasers?", category: 'social' },
  { id: 60, text: "Do you prefer leading a team or working independently?", category: 'social' },
];

export function shuffleAndSelect(questions: Question[], count: number): Question[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
