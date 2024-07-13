import React from 'react';
import Feature from './Feature';

function Features() {
    return (
        <div className="flex flex-col justify-center pt-6 px-4 md:px-10">
            <div className="text-center mb-6">
                <h1 className="font-bold text-3xl md:text-4xl leading-tight mb-5">
                    Need something done?
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Feature
                    src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/need-work-done/post-a-job-redesign.svg"
                    title="Post a job"
                    content="It's easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes."
                />
                <Feature
                    src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/need-work-done/choose-freelancers-redesign.svg"
                    title="Choose freelancers"
                    content="Whatever your needs, there will be a freelancer to get it done: from web design, mobile app development, virtual assistants, product manufacturing, and graphic design (and a whole lot more)."
                />
                <Feature
                    src="https://www.f-cdn.com/assets/main/en/assets/home/redesign/need-work-done/pay-safely-redesign.svg"
                    title="Pay safely"
                    content="With secure payments and thousands of reviewed professionals to choose from, Freelancer.com is the simplest and safest way to get work done online."
                />
            </div>
        </div>
    );
}

export default Features;
