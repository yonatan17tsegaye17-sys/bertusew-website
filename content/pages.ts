export type Section = { h: string; b: string; tag?: string };
export type PageDef = { slug: string; title: string; kicker: string; intro: string; sections: Section[] };
const soon = "Schedule coming soon.";
export const pages: PageDef[] = [
 { slug:"about", title:"More than a running club.", kicker:"About", intro:"One year of community building. Bertusew started with running and grew through community.", sections:[
  {h:"Our story",b:"Bertusew began from a simple idea: people are stronger when they move together."},
  {h:"Our values",b:"Discipline. Health. Community."},
  {h:"Our activities",b:"Running and hiking are active now. Cycling is developing. Swimming is part of the future."},
  {h:"Our mindset",b:"Endurance is more than distance. It is the ability to keep showing up."},
  {h:"Our relationships",b:"Great Run Ethiopia, and future community and organizational relationships. See Recognition."},
  {h:"Our future",b:"A multi-discipline endurance environment.",tag:"FUTURE VISION"}]},
 { slug:"running", title:"Run Addis.", kicker:"Running", intro:"Running is at the heart of Bertusew. A space to start, improve and keep showing up.", sections:[{h:"Group runs",b:soon},{h:"Beginner running",b:"Never run before? Start here."},{h:"Endurance running",b:soon},{h:"Upcoming runs",b:"Next run coming soon."}]},
 { slug:"cycling", title:"Ride further.", kicker:"Cycling", intro:"Bertusew is expanding beyond running into cycling and broader endurance sport.", sections:[{h:"Group rides",b:soon,tag:"DEVELOPING"},{h:"Bertusew Bike",b:"Coming soon.",tag:"COMING SOON"}]},
 { slug:"hiking", title:"Explore beyond the road.", kicker:"Hiking", intro:"Hiking is an active Bertusew program and part of the endurance lifestyle: endurance, exploration, nature, community, elevation, resilience.", sections:[{h:"Upcoming hikes",b:"Next hike coming soon.",tag:"ACTIVE NOW"}]},
 { slug:"community", title:"The people make the club.", kicker:"Community", intro:"You don't have to move alone.", sections:[{h:"Find your people",b:"Runners. Cyclists. Beginners. Endurance athletes. Weekend movers."},{h:"Community stories",b:"More stories coming soon."}]},
 { slug:"events", title:"Events", kicker:"Events", intro:"Runs, rides, hikes and community challenges.", sections:[]},
 { slug:"media", title:"Media", kicker:"Media", intro:"Runs, cycling, community, Addis, hikes, events.", sections:[{h:"Gallery",b:"Club photos and videos will be added here."}]},
 { slug:"vision", title:"Build endurance.", kicker:"Our vision", intro:"One community. Multiple disciplines. One mindset.", sections:[{h:"Building toward a multi-discipline endurance community",b:"Run, ride, swim: a long-term direction. Triathlon is a future vision, not a current program. Everyone can choose their own level of endurance.",tag:"FUTURE VISION"}]},
 { slug:"join", title:"Ready to move with us?", kicker:"Join", intro:"Join the Bertusew community.", sections:[]},
 { slug:"recognition", title:"Letters & recognition", kicker:"Recognition", intro:"Stories, letters and recommendations from people and organizations we've connected with.", sections:[]},
];
