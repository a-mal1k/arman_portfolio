import React from 'react'
import { certificationData } from '../utils/myData';
import Certification from './Certification';

const Certifications = () => {
    return (
        <div className="flex flex-col w-full mt-10 rounded-md lg:p-5">
            <h2 className="text-4xl font-bold leading-10 text-stone-950 dark:text-stone-50 mb-16">
                <span>Certifications</span>
            </h2>
            <div className="rounded-md">
                <div className="flex flex-col">
                    {certificationData.map((data) => {
                        return (
                            <Certification key={data.id} title={data.title} issueBy={data.issue_by} issueDate={data.issue_date} imgSrc={data.src} width={data.width} height={data.height} isCompleted={data.isCompleted} />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Certifications