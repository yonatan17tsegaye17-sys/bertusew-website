// EDIT HERE. Files go in /public/documents, then reference as "/documents/name.pdf".
export type DocType = "RECOMMENDATION"|"APPRECIATION"|"PARTNERSHIP"|"RECOGNITION"|"CERTIFICATE"|"LETTER"|"OTHER";
export const documents: { id: string; title: string; organization: string; type: DocType; date?: string; description?: string; file_url: string; preview_image?: string; featured?: boolean }[] = [];
export const testimonials: { quote: string; name: string; organization?: string; role?: string; photo?: string; date?: string; logo?: string; source?: string }[] = [];
export const relationships: { name: string; description: string; type: string; link?: string; logo?: string; story?: string }[] = [
  { name: "Great Run Ethiopia", type: "Relationship", description: "Bertusew has built a strong relationship with Great Run Ethiopia as part of its journey through Ethiopia's running community.", story: "" /* [ADD GREAT RUN ETHIOPIA STORY] */ },
];
