import React from 'react'
import achievement1 from '../Images/AchievementsIcons/1.png';
import achievement2 from '../Images/AchievementsIcons/2.png';
import achievement3 from '../Images/AchievementsIcons/3.png';
import achievement4 from '../Images/AchievementsIcons/4.png';
import achievement5 from '../Images/AchievementsIcons/5.png';
import achievement6 from '../Images/AchievementsIcons/6.png';


const AccomplishmentSection = () => {
  return (
    <div className="">
        {/* FIRST SECTION */}
        <div className="bg-white p-4 lg:mr-10 lg:flex lg:flex-row-reverse lg:items-center lg:gap-10 flex flex-col border-b-1">
            <div className="w-full lg:w-1/2 flex justify-center rounded">
                <img
                    src={achievement1}
                    alt="History"
                    className="max-w-full rounded-sm"
                    width={300}
                    height={300}
                />
            </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-8 mt-8 lg:mt-0">
            <h1 className="text-green-500 text-2xl font-semibold">Community Health Initiatives</h1>
            <p>
                Successfully launched annual health campaigns, including
                free medical check-ups, vaccination drives, and mental health awareness seminars. These
                efforts have made healthcare more accessible to all residents, especially the elderly and
                underserved.
            </p>
        </div>
        </div>


        {/* SECOND SECTION */}
        <div className="bg-white p-4 lg:mr-10 lg:flex lg:flex-row lg:items-center lg:gap-10 flex flex-col border-b-1">
            <div className="w-full lg:w-1/2 flex justify-center rounded">
                <img
                    src={achievement2}
                    alt="History"
                    className="max-w-full rounded-sm"
                    width={300}
                    height={300}
                />
            </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-8 mt-8 lg:mt-0">
            <h1 className="text-green-500 text-2xl font-semibold">Infrastructure Improvements</h1>
            <p>
                Upgraded essential infrastructure, such as roads, drainage
                systems, and public lighting, to enhance safety and connectivity. The barangay has also
                improved parks and recreational areas, providing residents with safe and welcoming spaces
                for leisure and exercise.
            </p>
        </div>
        </div>

        {/* THIRD SECTION */}
        <div className="bg-white p-4 lg:mr-10 lg:flex lg:flex-row-reverse lg:items-center lg:gap-10 flex flex-col border-b-1">
            <div className="w-full lg:w-1/2 flex justify-center rounded">
                <img
                    src={achievement3}
                    alt="History"
                    className="max-w-full rounded-sm"
                    width={300}
                    height={300}
                />
            </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-8 mt-8 lg:mt-0">
            <h1 className="text-green-500 text-2xl font-semibold">Disaster Preparedness Programs</h1>
            <p>
                Implemented a comprehensive disaster preparedness
                program, including regular training for community responders and residents. This has
                equipped the barangay to respond effectively to emergencies and natural disasters,
                ensuring the safety of all residents.
            </p>
        </div>
        </div>


        {/* IKAAPAT */}
        <div className="bg-white p-4 lg:mr-10 lg:flex lg:flex-row lg:items-center lg:gap-10 flex flex-col border-b-1">
            <div className="w-full lg:w-1/2 flex justify-center rounded">
                <img
                    src={achievement4}
                    alt="History"
                    className="max-w-full rounded-sm"
                    width={300}
                    height={300}
                />
            </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-8 mt-8 lg:mt-0">
            <h1 className="text-green-500 text-2xl font-semibold">Environmental Sustainability Efforts</h1>
            <p>
                Launched the "Green Balon" initiative, aimed at
                promoting environmental consciousness. Activities include tree planting, waste segregation
                campaigns, and coastal cleanup drives, contributing to a cleaner and greener community.
            </p>
        </div>
        </div>

        {/* FIFTH SECTION */}
        <div className="bg-white p-4 lg:mr-10 lg:flex lg:flex-row-reverse lg:items-center lg:gap-10 flex flex-col border-b-1">
            <div className="w-full lg:w-1/2 flex justify-center rounded">
                <img
                    src={achievement5}
                    alt="History"
                    className="max-w-full rounded-sm"
                    width={300}
                    height={300}
                />
            </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-8 mt-8 lg:mt-0">
            <h1 className="text-green-500 text-2xl font-semibold">Youth Engagement Programs</h1>
            <p>
                Established youth-focused programs, such as sports
                leagues, academic scholarships, and skills training, to empower young residents. These
                programs provide opportunities for personal growth, community involvement, and career
                readiness, fostering a promising future for the youth of Balon Anito.
            </p>
        </div>
        </div>

        {/* SEXt SECTION */}
        <div className="bg-white p-4 lg:mr-10 lg:flex lg:flex-row lg:items-center lg:gap-10 flex flex-col">
            <div className="w-full lg:w-1/2 flex justify-center rounded">
                <img
                    src={achievement6}
                    alt="History"
                    className="max-w-full rounded-sm"
                    width={300}
                    height={300}
                />
            </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-8 mt-8 lg:mt-0">
            <h1 className="text-green-500 text-2xl font-semibold">Recognition Awards</h1>
            <p>
            Barangay Balon Anito has received numerous awards from municipal
            and provincial organizations for its outstanding community service, efficient governance,
            and commitment to sustainable development.
            </p>
        </div>
        </div>
    </div>
    
  )
}

export default AccomplishmentSection