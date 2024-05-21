import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';

import { metadata as meta } from '@/app/config';
import { hero } from '../config';
import { Spotlight } from '@/components/ui/spotlight';

function Hero() {
  return (
    <MotionWrap className="relative mt-14 w-full overflow-hidden bg-background/[0.96] py-24 md:mt-0 lg:py-32 xl:py-48">
      {/* TODO: Add a bigger and more modern hero section */}
      <Spotlight
        className="-top-40 left-0 [animation-delay:_6s] md:-top-20 md:left-60"
        fill="hsl(var(--foreground))"
      />
      <div className="relative z-[5] mx-auto w-full">
        <div className=" grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-foreground/10">
              {hero.label}
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Hi, I&apos;m {hero.name}
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {hero.description}
            </p>
          </div>
          <Image
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
            height="450"
            sizes="100vw"
            src={'/images/hero.jpg'}
            width="800"
            priority={true}
          />
        </div>
      </div>
    </MotionWrap>
  );
}

export default Hero;
