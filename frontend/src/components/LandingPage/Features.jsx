import React from 'react';
import Feature from './Feature';

function Features() {
    return (
        <div className="flex flex-col justify-center pt-6 mx-[30px]">
            <div className="text-center mb-6">
                <h1 className="font-bold text-[50px] leading-[65px] mb-5">
                    Need something done?
                </h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-between p-5 mx-[50px] space-y-5 lg:space-y-0 lg:space-x-5">
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
