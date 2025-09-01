import type { SVGProps } from "react";
import { LinkedinIcon } from '@/components/icons/linkedin-icon';
import { GithubIcon } from '@/components/icons/github-icon';
import { MavenIcon } from '@/components/icons/maven-icon';
import { KaggleIcon } from '@/components/icons/kaggle-icon';
import { DatacampIcon } from '@/components/icons/datacamp-icon';
import { CourseraIcon } from '@/components/icons/coursera-icon';
import { MediumIcon } from '@/components/icons/medium-icon';
import { CredlyIcon } from '@/components/icons/credly-icon';
import { YoutubeIcon } from '@/components/icons/youtube-icon';
import { HackerrankIcon } from '@/components/icons/hackerrank-icon';
import { CodeforcesIcon } from '@/components/icons/codeforces-icon';

type Community = {
  name: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  href: string;
};

const communities: Community[] = [
  { name: 'LinkedIn', Icon: LinkedinIcon, href: '#' },
  { name: 'GitHub', Icon: GithubIcon, href: '#' },
  { name: 'Maven', Icon: MavenIcon, href: '#' },
  { name: 'Kaggle', Icon: KaggleIcon, href: '#' },
  { name: 'DataCamp', Icon: DatacampIcon, href: '#' },
  { name: 'Coursera', Icon: CourseraIcon, href: '#' },
  { name: 'Medium', Icon: MediumIcon, href: '#' },
  { name: 'Credly', Icon: CredlyIcon, href: '#' },
  { name: 'YouTube', Icon: YoutubeIcon, href: '#' },
  { name: 'HackerRank', Icon: HackerrankIcon, href: '#' },
  { name: 'CodeForces', Icon: CodeforcesIcon, href: '#' },
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
              <div className="p-3 bg-white/20 rounded-lg">
                <community.Icon className="w-12 h-12 text-white" />
              </div>
              <span className="font-medium">{community.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
