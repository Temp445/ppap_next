'use client'

import React from 'react'

const features = [
  {
    number: 1,
    title: 'Design Records',
    description:
      'Complete design drawings supplied by either AIE or the supplier, depending on design responsibility.',
  },
  {
    number: 2,
    title: 'Ballooned Drawing',
    description:
      'Visual diagrams highlighting all part specifications with corresponding numbered measurements for easy reference.',
  },
  {
    number: 3,
    title: 'Engineering Change Documents',
    description:
      'Formal records such as Engineering Change Notices (ECNs) describing any product or design modifications.',
  },
  {
    number: 4,
    title: 'Customer Engineering Approval',
    description:
      'Pre-PPAP engineering trials and approvals by AIE, typically through temporary deviations and sample testing.',
  },
  {
    number: 5,
    title: 'Design FMEA (DFMEA)',
    description:
      'Risk analysis of potential design failure modes and their effects, signed off by both AIE and the supplier.',
  },
  {
    number: 6,
    title: 'Process Flow Diagram',
    description:
      'Detailed visualization of the entire manufacturing process, including quality checks and handling of non-conforming parts.',
  },
  {
    number: 7,
    title: 'Process FMEA (PFMEA)',
    description:
      'Evaluation of potential failure modes during production with corrective action plans for high-risk issues.',
  },
  {
    number: 8,
    title: 'Control Plans',
    description:
      'Define and document quality control measures for every stage of production.',
  },
  {
    number: 9,
    title: 'Measurement System Analysis (MSA)',
    description:
      'Perform Gage R&R studies and maintain calibration records for critical measurement tools.',
  },
  {
    number: 10,
    title: 'Dimensional Results',
    description:
      'Record actual measurement values and results for all features on the ballooned drawing',
  },
  {
    number: 11,
    title: 'Material & Performance Test Results',
    description:
      'Store DVP&R documents, test outcomes, and material certifications.',
  },
  {
    number: 12,
    title: 'Initial Process Studies',
    description:
      'Generate SPC charts and capability indices to demonstrate process stability',
  },
  {
    number: 13,
    title: 'Qualified Laboratory Documentation',
    description:
      'Attach certifications from accredited labs for all external test results.',
  },
  {
    number: 14,
    title: 'Appearance Approval Report (AAR)',
    description:
      'Submit AAI forms, surface finish tests, and part appearance validations.',
  },
  {
    number: 15,
    title: 'Sample Product',
    description:
      'Manage submission and tracking of physical samples from initial production.',
  },
  {
    number: 16,
    title: 'Master Sample',
    description:
      'Record and store final approved samples for operator training and future reference.',
  },
  {
    number: 17,
    title: 'Checking Aids',
    description:
      'Upload images, calibration data, and dimensional reports for special inspection tools.',
  },
  {
    number: 18,
    title: 'Part Submission Warrant (PSW)',
    description:
      'Automatically generate PSWs to summarize all submitted documentation and approvals.',
  },
]

const Feature = () => {
  return (
    <div className="mx-auto px-4 py-10" id='features'>
          <div className="bg-blue-600 text-white p-8 md:p-10 text-center mb-8 rounded-t-md">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
             Core Features of {' '}
              <span className="bg-white text-blue-600 px-4 py-2 rounded-lg inline-block transform  shadow-lg font-black">
            ACE  PPAP {' '}
              </span>
              
            </h1>
            <div className="w-32 h-1 bg-white mx-auto rounded-full mt-6"></div>
          </div>
      {/* <h1 className="text-3xl font-bold mb-8 text-center"> <span className='bg-blue-600 rounded p-2 rotate-6'><span className='text-white rotate-45'>ACE PPAP</span></span></h1> */}
      {/* <p className='text-lg mb-8 text-left px-5'>ACE PPAP offers a complete digital solution for managing every stage of the Production Part Approval Process. From documentation control to quality analysis and compliance tracking, it simplifies complex workflows, reduces manual effort, and accelerates approvals. Designed for manufacturers and suppliers, ACE PPAP ensures all submissions are organized, audit-ready, and aligned with industry standards.</p> */}
      <div className='container mx-auto'>
        <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.number}
            className="flex items-start gap-4 p-5  rounded-lg  bg-white hover:scale-105 shadow-lg hover:shadow-2xl border border-black/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            <div className="flex-shrink-0 rounded-full bg-blue-500 bg-radial-[at_25%_25%] from-blue-300 to-blue-600 to-75% text-white w-12 h-12 flex items-center justify-center text-xl font-bold">
              {feature.number}
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-1 ">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Feature
