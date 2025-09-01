import Image from 'next/image';

const communities = [
  { name: 'LinkedIn', imgSrc: 'https://picsum.photos/seed/linkedin/100/100', href: '#', hint: 'linkedin logo' },
  { name: 'GitHub', imgSrc: 'https://picsum.photos/seed/github/100/100', href: '#', hint: 'github logo' },
  { name: 'Maven', imgSrc: 'https://picsum.photos/seed/maven/100/100', href: '#', hint: 'maven analytics logo' },
  { name: 'Kaggle', imgSrc: 'https://picsum.photos/seed/kaggle/100/100', href: '#', hint: 'kaggle logo' },
  { name: 'DataCamp', imgSrc: 'https://picsum.photos/seed/datacamp/100/100', href: '#', hint: 'datacamp logo' },
  { name: 'Coursera', imgSrc: 'https://picsum.photos/seed/coursera/100/100', href: '#', hint: 'coursera logo' },
  { name: 'Medium', imgSrc: 'https://picsum.photos/seed/medium/100/100', href: '#', hint: 'medium logo' },
  { name: 'Credly', imgSrc: 'https://picsum.photos/seed/credly/100/100', href: '#', hint: 'credly logo' },
  { name: 'YouTube', imgSrc: 'https://picsum.photos/seed/youtube/100/100', href: '#', hint: 'youtube logo' },
  { name: 'HackerRank', imgSrc: 'https://picsum.photos/seed/hackerrank/100/100', href: '#', hint: 'hackerrank logo' },
  { name: 'CodeForces', imgSrc: 'https://picsum.photos/seed/codeforces/100/100', href: '#', hint: 'codeforces logo' },
];

export default function CommunityPresenceSection() {
  return (
    <section id="community" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">My Presence in the Data Community</h2>
        <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80">
          See how I engage and grow across key data and programming communities:
        </p>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
          {communities.map((community) => (
            <a
              key={community.name}
              href={community.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 transition-transform hover:scale-105"
            >
              <div className="p-2 bg-white/20 rounded-lg">
                <Image
                  src={community.imgSrc}
                  alt={`${community.name} logo`}
                  width={64}
                  height={64}
                  className="rounded-md object-contain aspect-square"
                  data-ai-hint={community.hint}
                />
              </div>
              <span className="font-medium">{community.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
