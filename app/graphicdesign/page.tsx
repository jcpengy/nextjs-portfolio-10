'use client';
import React from "react";
import Link from 'next/link';
import NYTCover from 'public/images/nyt-cover.jpg';
import EtsyCover from 'public/images/etsy-cover.jpg';
import KesslerCover from 'public/images/kessler-slide-1.jpg';
import BabyCover from 'public/images/baby-cover.jpg';

export const revalidate = 60;

export default async function GraphicDesign() {
    return (
        <section id="portfolio-page">
            <div className="md:grid md:grid-cols-2">
                <img
                    id="graphic-design-project-image"
                    key='etsy-cover'
                    className='w-full rounded'
                    src={EtsyCover.src}
                    alt='etsy-cover'
                />
                <div id="graphic-design-project-card">
                    <p>
                        <span id="all-caps">ETSY</span><br/><br/>
                        Favorite projects from my best-selling graphic design shop.
                    </p>
                    <br/>
                    <Link
                    id="button"
                    key='/etsy'
                    href='/etsy'>
                        View project
                    </Link>
                </div>
            </div>   
            <br/>
            <div className="md:grid md:grid-cols-2">
                <img
                    id="graphic-design-project-image"
                    key='baby-cover'
                    className='w-full rounded'
                    src={BabyCover.src}
                    alt='baby-cover'
                />
                <div id="graphic-design-project-card">
                    <p>
                        <span id="all-caps">BABY SWADDLES</span><br/><br/>
                        A set of baby swaddles for my niece and nephew.
                    </p>
                    <br/>
                    <Link
                    id="button"
                    key='/baby'
                    href='/baby'>
                        View project
                    </Link>
                </div>
            </div>
            <br/>
            <div className="md:grid md:grid-cols-2">
                <img
                    id="graphic-design-project-image"
                    key='kessler 1'
                    className='w-full rounded'
                    src={KesslerCover.src}
                    alt='kessler 1'
                />
                <div id="graphic-design-project-card">
                    <p>
                        <span id="all-caps">KESSLER PROJECT</span><br/><br/>
                        Finalist in the 2018 Disney Imaginations contest.
                    </p><br/>
                    <Link
                    id="button"
                    key='/kessler'
                    href='/kessler'>
                        View project
                    </Link>
                </div>
            </div>
            <br/>
            <div className="md:grid md:grid-cols-2">
                <img
                    id="graphic-design-project-image"
                    key='nyt-cover'
                    className='w-full rounded'
                    src={NYTCover.src}
                    alt='nyt-cover'
                />
                <div id="graphic-design-project-card">
                    <p>
                        <span id="all-caps">THE NEW YORK TIMES</span><br/><br/>
                        Cover art and graphics for two high-profile breaking news pieces.
                    </p>
                    <br/>
                    <Link
                    id="button"
                    key='/new-york-times'
                    href='/new-york-times'>
                        View project
                    </Link>
                </div>
            </div>
        </section>
    );
}
