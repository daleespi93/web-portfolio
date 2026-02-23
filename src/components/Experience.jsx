import React from 'react'

function Experience() {
  return (
    <div id='Experience'className='flex min-h-screen w-full flex-col items-center justify-center gap-20 p-14 md:p-20 lg:p-36'>
        <h1 className='text-center text-5xl font-light dark:text-white'>Experience</h1>
        <div>
            <div className='max-w-3xl'>
                {/* each div here is one card */}
                <div className="relative space-y-1 border-l-2 p-8 text-left dark:border-zinc-200">
                    <h3 className='text-xl font-semibold md:text-2xl dark:text-white'>Z Suds Laundromat</h3>
                    <p className='font-light text-lg text-gray-600 dark:text-white'>Operations Manager</p>
                    <p className='text-sm text-gray-600 text-justify dark:text-gray-100'>I managed daily operations and staff to make sure everything ran smoothly and customers stayed happy. 
                        I kept a close eye on the budget and sales to ensure the business stayed profitable and on track. By staying on top of inventory and supplies, 
                        I made sure we never ran out of what we needed to get the job done. 
                        I also led local marketing efforts through social media and flyers to bring in new faces and keep regulars coming back.</p>
                    <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-[#3780C8] dark:bg-zinc-400'></span>
                </div>
                <div className="relative space-y-1 border-l-2 p-8 text-left dark:border-zinc-200">
                    <h3 className='text-xl font-semibold md:text-2xl dark:text-white'>Espiritu Farm</h3>
                    <p className='font-light text-lg text-gray-600 dark:text-white'>Farm Sales Coordinator</p>
                    <p className='text-sm text-gray-600 text-justify dark:text-gray-100'>I connected with new customers and built strong relationships with buyers to keep our produce moving. By managing orders and delivery schedules, I made sure every harvest was sold on time and arrived in great condition. I paid close attention to what customers wanted so we could match our stock to their needs. This approach helped us sell more of our crop while cutting down on spoilage and unsold inventory.</p>
                    <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-[#3780C8] dark:bg-zinc-400'></span>
                </div>
                <div className="relative space-y-1 border-l-2 p-8 text-left dark:border-zinc-200">
                    <h3 className='text-xl font-semibold md:text-2xl dark:text-white'>Rarejob Inc.</h3>
                    <p className='font-light text-lg text-gray-600 dark:text-white'>ESL Teacher</p>
                    <p className='text-sm text-gray-600 text-justify dark:text-gray-100'>I led one-on-one English sessions for Japanese learners, adjusting my pace and materials to fit each student’s goals. I helped students improve their speaking, grammar, and business communication through focused practice and helpful feedback. By being punctual and well-prepared, I built a friendly rapport that kept students coming back for more lessons. My consistent performance ensured that every session met high quality standards while helping students see real progress.</p>
                    <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-[#3780C8] dark:bg-zinc-400'></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience