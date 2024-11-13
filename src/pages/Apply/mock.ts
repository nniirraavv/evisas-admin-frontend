import { ApiResponse, DocumentOptionInfo } from '@/types';

export const MockDocuments: DocumentOptionInfo[] = [
  {
    label: 'All Passport Old & New Used Pages Copies/Scanned Copies',
    key: 'All Passport Old & New Used Pages Copies/Scanned Copies',
  },
  {
    label:
      'Covering Letter (Address to Australia High Commission, New Delhi) - Download format',
    key: 'Covering Letter (Address to Australia High Commission, New Delhi) - Download format',
    downloadURL: 'https://pdfobject.com/pdf/sample.pdf',
  },
  {
    label: 'COVID Vaccination Certificate',
    key: 'COVID Vaccination Certificate',
  },
  {
    label: 'Form 54 - Download format',
    key: 'Form 54 - Download format',
    downloadURL: 'https://pdfobject.com/pdf/sample.pdf',
  },
  {
    label: 'GST Certificate - Company Bank Statement 6 Months',
    key: 'GST Certificate - Company Bank Statement 6 Months',
  },
  { label: 'Last 3 Months Salary Slip', key: 'Last 3 Months Salary Slip' },
  { label: 'Last 3 Years ITR', key: 'Last 3 Years ITR' },
  {
    label: 'Last 6 Months Bank Statement',
    key: 'Last 6 Months Bank Statement',
  },
  {
    label:
      'Leave Letter or Letter of Employment from the Company - Download format',
    key: 'Leave Letter or Letter of Employment from the Company - Download format',
    downloadURL: 'https://pdfobject.com/pdf/sample.pdf',
  },
  {
    label: 'Marriage Certificate (Optional)',
    key: 'Marriage Certificate (Optional)',
  },
  {
    label: 'National ID (Aadhar or PAN Card)',
    key: 'National ID (Aadhar or PAN Card)',
  },
  {
    label: 'Net Worth Certificate (Optional) - Download format',
    key: 'Net Worth Certificate (Optional) - Download format',
    downloadURL: 'https://pdfobject.com/pdf/sample.pdf',
  },
  {
    label: 'Other Saving & Investment (PPF, Fix Deposit, Shares)',
    key: 'Other Saving & Investment (PPF, Fix Deposit, Shares)',
  },
  { label: 'Passport', key: 'Passport' },
  { label: 'Passport Back', key: 'Passport Back' },
  { label: 'Traveler Photo', key: 'Traveler Photo' },
];
// export const MockData: VisaInfo[] = [
//   {
//     productSourceId: 'recS21rg54DnC1BjF',
//     requiredFields: [
//       'passportNumber',
//       'lastName',
//       'country',
//       'occupation',
//       'gender',
//       'postalCode',
//       'dateOfBirth',
//       'title',
//       'firstName',
//       'nationality',
//       'phone',
//       'state',
//       'email',
//       'line1',
//     ],
//     optionalFields: [
//       'passportIssuingDate',
//       'passportExpiration',
//       'oldPassportCount',
//       'passportIssuingPlace',
//       'passportIssuingCountry',
//     ],
//     products: [
//       {
//         id: 'OAVI55544387',
//         masterProductId: '69bc7045-5020-494a-867d-906de5b09e23',
//         name: 'Azerbaijan Single Entry Urgent Tourist E-Visa',
//         displayName: 'Azerbaijan Single Entry Urgent Tourist E-Visa',
//         supplierProductCode: 'recS21rg54DnC1BjF',
//         ancillaryType: 'EVISA',
//         cancellable: false,
//         supplierOrganizationId: '702373fe-ea4c-4a14-8b38-388155f2fbab',
//         associatedConsumerOrganization: [
//           'cd85953e-2c68-4963-898d-88a73e4b3b42',
//           'ec218387-eea7-4d87-8dd2-3b8af2971ba2',
//           '033f11f5-eed9-4a88-96e6-ab51c15a97d7',
//           'on-arrival-travel',
//           '702373fe-ea4c-4a14-8b38-388155f2fbab',
//           '94d46ee0-7e65-487c-ac5c-01da17fa59b2',
//           'b980eecc-ed6a-496c-9e52-6f43418adf06',
//           '9e079802-c4e4-4840-ac1d-90ba450b2516',
//         ],
//         origin: [
//           {
//             country: 'India',
//             countryCode: 'IN',
//           },
//         ],
//         destination: [
//           {
//             country: 'Azerbaijan',
//             countryCode: 'AZ',
//           },
//         ],
//         domestic: false,
//         requiredBulkFields: [
//           'orderNumber',
//           'tripStartDate',
//           'tripStartTimezone',
//           'tripEndDate',
//           'tripEndTimezone',
//           'title',
//           'firstName',
//           'lastName',
//           'dateOfBirth',
//           'gender',
//           'occupation',
//           'phone',
//           'email',
//           'nationality',
//           'passportIssuingCountry',
//           'passportIssuingPlace',
//           'passportNumber',
//           'passportIssuingDate',
//           'passportExpiration',
//           'addressLine',
//           'addressState',
//           'addressPostalCode',
//           'primaryTraveller',
//         ],
//         requiredFields: [
//           'passportNumber',
//           'lastName',
//           'country',
//           'occupation',
//           'gender',
//           'postalCode',
//           'dateOfBirth',
//           'title',
//           'firstName',
//           'nationality',
//           'phone',
//           'state',
//           'email',
//           'line1',
//         ],
//         optionalFields: [
//           'passportIssuingDate',
//           'passportExpiration',
//           'oldPassportCount',
//           'passportIssuingPlace',
//           'passportIssuingCountry',
//         ],
//         productInformation: {
//           id: 'e56f5c0b-d6c7-46ec-808a-74862e8ef772',
//           supplierId: 'recS21rg54DnC1BjF',
//           productAmount: {
//             id: '986994d1-7f58-4aca-a686-7a750e8f4728',
//             linkedProductId: 'e56f5c0b-d6c7-46ec-808a-74862e8ef772',
//             productId: 'OAVI55544387',
//             type: 'FIXED',
//             currency: 'INR',
//             totalAmount: 5626.3,
//             baseAmount: 5526,
//             serviceFee: 85,
//             serviceFeeAmountModifiers: {
//               type: 'SUPPLIER_FEE',
//               name: 'Supplier Fee',
//               currency: 'INR',
//               amount: 100.3,
//               tax: {
//                 totalTax: 15.3,
//                 taxRate: 18,
//                 totalAmountWithoutTax: 85,
//               },
//               quantity: 1,
//               baseAmount: 85,
//               amountCollected: true,
//             },
//             additionalAmountModifiers: [
//               {
//                 type: 'SUPPLIER_FEE',
//                 name: 'supplier fee',
//                 currency: 'INR',
//                 amount: 413,
//                 tax: {
//                   totalTax: 63,
//                   totalAmountWithoutTax: 350,
//                 },
//                 associatedConsumerOrganization:
//                   'b980eecc-ed6a-496c-9e52-6f43418adf06',
//                 amountCollected: true,
//               },
//               {
//                 type: 'SUPPLIER_FEE',
//                 name: 'supplier fee',
//                 currency: 'INR',
//                 amount: 413,
//                 tax: {
//                   totalTax: 63,
//                   totalAmountWithoutTax: 350,
//                 },
//                 associatedConsumerOrganization:
//                   'cd85953e-2c68-4963-898d-88a73e4b3b42, ec218387-eea7-4d87-8dd2-3b8af2971ba2, on-arrival-travel',
//                 amountCollected: true,
//               },
//             ],
//             status: 'ACTIVE',
//             updatedAt: '2024-05-13T06:43:27.176Z',
//             createdAt: '2024-05-13T06:43:27.175Z',
//           },
//           updatedAt: '2024-05-13T06:43:27.184Z',
//           createdAt: '2024-05-13T06:43:27.079Z',
//           productType: 'E-Visa',
//           name: 'Azerbaijan Single Entry Urgent Tourist E-Visa',
//           visaType: 'TOURIST',
//           tripType: 'SINGLE',
//           stayPeriod: '30 Days',
//           validity: '90 Days',
//           processingTime: '3 to 10 Hours',
//           minProcessingTime: 3,
//           maxProcessingTime: 10,
//           minProcessingTimeMatrix: 'Hours',
//           maxProcessingTimeMatrix: 'Hours',
//           processingType: 'standard',
//           consulateData: [
//             {
//               label: 'Default',
//               value: 'Azerbaijan-Default',
//               allowedStates: [],
//               requiredDocuments: [
//                 {
//                   fieldName: 'PassportBackImage',
//                   fieldType: 'upload',
//                   documentName: 'Passport Back Image',
//                   documentType: 'PASSPORT_BACK_IMAGE',
//                   required: true,
//                   submitted: false,
//                   description: 'Clear Scanned Copy Of Passport Back Image',
//                   supplierDocumentId: 'rec8oN8DhqE4yLY38',
//                   supplierSpecific: false,
//                   documentSpecifications: [
//                     {
//                       number: 1,
//                       description:
//                         '- Clear Scanned Copy Of Passport Back Image',
//                     },
//                   ],
//                 },
//                 {
//                   fieldName: 'PassportFrontImage',
//                   fieldType: 'upload',
//                   documentName: 'Passport Front Image',
//                   documentType: 'PASSPORT_FRONT_IMAGE',
//                   required: true,
//                   submitted: false,
//                   description:
//                     'Original Passport along with color copy issued within the last 10 years and with at least 6 months validity after the scheduled return, with at least two blank pages needs to be submitted. Handwritten passports and passports with observations regarding the front page (bio data) cannot be accepted. Also submit a clear scanned copy of passport front image and back image.',
//                   supplierDocumentId: 'recW4AJoZqp04ARQc',
//                   supplierSpecific: false,
//                   documentSpecifications: [
//                     {
//                       number: 1,
//                       description:
//                         '- Clear Scanned Copy Of Passport Front Image',
//                     },
//                   ],
//                 },
//               ],
//               requiredVisaForms: [],
//               consulateInfo: {
//                 name: 'Embassy Of Azerbaijan, New Delhi\n',
//                 description:
//                   'Address: Address:  41, Paschimi Marg, Vasant Vihar, New Delhi - 110057\nTel.: +91 11 26152228\nE-mail:  newdelhi@mission.mfa.gov.az\n',
//               },
//             },
//           ],
//           source: [
//             {
//               type: 'APPLICATION_SOURCE',
//               link: 'https://www.evisa.gov.az/en/',
//               createdAt: '2024-04-25T12:27:24.71Z',
//             },
//             {
//               type: 'INFORMATION_SOURCE',
//               link: 'https://www.evisa.gov.az/en/',
//               createdAt: '2024-04-25T12:27:24.71Z',
//             },
//           ],
//           notes: [],
//           additionalNotes: [
//             'Granting or refusing the visa is at sole discretion of respective Embassy/Consulate/High commissions. We only assists in the visa application process & doesn’t give any guarantees or assurances about the approval of the VISA or the time frame for processing the visa application\n',
//             'Documents may vary on case-to-case basis and Embassy/VFS may ask for some additional documents from the applicant as well as call the applicant for a personal interview\n',
//             'Providing accurate information about any previous visits to the disputed region of Nagorno-Karabakh is highly recommended. Providing incorrect information upon entry into Azerbaijan can result in a permanent ban and deportation.\n',
//             'Ensure you provide the address where you will stay in Azerbaijan. Although no document proof is asked while applying for e-visa, but you are requested to enter the address of stay during the data form-fill while applying for the e-visa.\n',
//             ' \n',
//           ],
//           processOfApplyingVisa: [
//             {
//               number: 1,
//               description:
//                 "Access the E-Visa application portal:\nThe initial step involves visiting the Azerbaijan E-Visa application portal and selecting the appropriate visa type, whether it's for a single entry or an urgent application, based on the specific requirements.",
//             },
//             {
//               number: 2,
//               description:
//                 'Input Applicant Details:\nProvide necessary information, including the applicant\'s nationality, passport type, and the intended date of arrival. After filling in these details, click "continue" to proceed to the next step.',
//             },
//             {
//               number: 3,
//               description:
//                 "Specify the Purpose of Your Trip:\nSelect the purpose of your visit, whether it's for tourism, business, science, education, labor, culture, medical, personal, or humanitarian reasons. Indicate the expected processing time, which can be 3 days for standard processing or 3 hours for urgent visa issuance.",
//             },
//             {
//               number: 4,
//               description:
//                 'Complete the Personal Information Form:\nProceed by filling out the personal details of the applicant, which should include passport number, issue and expiry dates, occupation, intended stay details in Azerbaijan, and more. Additionally, upload a copy of the passport and select the appropriate option regarding any previous visits to the disputed region of Nagorno-Karabakh.',
//             },
//             {
//               number: 5,
//               description:
//                 'Confirm Email Link:\nVerify your email link and continue to the payment section.',
//             },
//             {
//               number: 6,
//               description:
//                 'Await Visa Decision:\nAfter completing the payment process, you will receive an email notification regarding the approval or rejection of your E-Visa application. The processing time may vary, with urgent applications typically taking 3 hours and standard applications taking up to 3 days. The E-Visa is sent over the email id provided during the time of the application.',
//             },
//           ],
//           faqs: [
//             {
//               number: 1,
//               question: 'What are the advantages of e-visa?',
//               answer:
//                 'An e-Visa can be obtained easily anywhere with an internet connection and it saves time that you would otherwise spend on visa applications at Azerbaijani foreign representations or at the ports of entry into Azerbaijan (if you are eligible).',
//             },
//             {
//               number: 2,
//               question: 'What is the validity of e-visa?',
//               answer: 'Your e-Visa will be valid for 90 days.',
//             },
//             {
//               number: 3,
//               question:
//                 ' What if I have entered information with mismatch in spelling as per passport name?',
//               answer: 'You must create a new e-visa application.',
//             },
//           ],
//           recommended: false,
//           urgent: true,
//         },
//         supplierOrganization: {
//           id: '702373fe-ea4c-4a14-8b38-388155f2fbab',
//           name: 'onarrival-supplier',
//           legalName: 'onarrival-supplier',
//           email: 'siddharth+supplier@onarrival.travel',
//           type: 'SUPPLIER',
//           address: {
//             line1:
//               'NO 74, 3RD FLOOR, MASS COMPLEX 15 CROSS ROAD, JP NAGAR, 3RD PHASE',
//             state: 'KA',
//             country: 'IN',
//             postalCode: '560078',
//           },
//           countryCode: 'IN',
//           organizationCode: 'SUP012',
//           ancillaryType: ['EVISA'],
//           associatedOrganization: [
//             {
//               organizationId: '702373fe-ea4c-4a14-8b38-388155f2fbab',
//               ancillaries: [
//                 {
//                   ancillaryType: 'EVISA',
//                 },
//               ],
//             },
//           ],
//           liveModeEnabled: true,
//           isPaymentGatewayActive: false,
//           aliasedNames: [
//             {
//               organizationId: '94d46ee0-7e65-487c-ac5c-01da17fa59b2',
//               name: 'eVisa.io AL Saffron',
//             },
//           ],
//           createUser: true,
//           updatedAt: '2023-05-26T06:34:22.638Z',
//           createdAt: '2023-05-26T06:34:22.574Z',
//         },
//         submissionType: 'OFFLINE',
//         cancellationType: 'OFFLINE',
//         productSourceId: 'recWGDVsunnmGYbZi',
//         masterProductSourceId: 'recS21rg54DnC1BjF',
//         reviewRequired: true,
//         updatedAt: '2024-05-13T06:43:27.137Z',
//         createdAt: '2024-05-13T06:43:27.079Z',
//       },
//     ],
//     updatedAt: '2024-04-25T12:27:24.772Z',
//     id: '69bc7045-5020-494a-867d-906de5b09e23',
//     createdAt: '2024-04-25T12:27:24.71Z',
//     productType: 'E-Visa',
//     name: 'Azerbaijan Single Entry Urgent Tourist E-Visa',
//     country: 'AZ',
//     visaType: 'TOURIST',
//     tripType: 'SINGLE',
//     stayPeriod: '30 Days',
//     validity: '90 Days',
//     processingTime: '3 to 10 Hours',
//     minProcessingTime: 3,
//     maxProcessingTime: 10,
//     processingType: 'standard',
//     consulateData: [
//       {
//         label: 'Default',
//         value: 'Azerbaijan-Default',
//         allowedStates: [],
//         requiredDocuments: [
//           {
//             fieldName: 'PassportBackImage',
//             fieldType: 'upload',
//             documentName: 'Passport Back Image',
//             documentType: 'PASSPORT_BACK_IMAGE',
//             required: true,
//             submitted: false,
//             description: 'Clear Scanned Copy Of Passport Back Image',
//             supplierDocumentId: 'rec8oN8DhqE4yLY38',
//             supplierSpecific: false,
//             documentSpecifications: [
//               {
//                 number: 1,
//                 description: '- Clear Scanned Copy Of Passport Back Image',
//               },
//             ],
//           },
//           {
//             fieldName: 'PassportFrontImage',
//             fieldType: 'upload',
//             documentName: 'Passport Front Image',
//             documentType: 'PASSPORT_FRONT_IMAGE',
//             required: true,
//             submitted: false,
//             description:
//               'Original Passport along with color copy issued within the last 10 years and with at least 6 months validity after the scheduled return, with at least two blank pages needs to be submitted. Handwritten passports and passports with observations regarding the front page (bio data) cannot be accepted. Also submit a clear scanned copy of passport front image and back image.',
//             supplierDocumentId: 'recW4AJoZqp04ARQc',
//             supplierSpecific: false,
//             documentSpecifications: [
//               {
//                 number: 1,
//                 description: '- Clear Scanned Copy Of Passport Front Image',
//               },
//             ],
//           },
//         ],
//         requiredVisaForms: [],
//         consulateInfo: {
//           name: 'Embassy Of Azerbaijan, New Delhi\n',
//           description:
//             'Address: Address:  41, Paschimi Marg, Vasant Vihar, New Delhi - 110057\nTel.: +91 11 26152228\nE-mail:  newdelhi@mission.mfa.gov.az\n',
//         },
//       },
//     ],
//     source: [
//       {
//         type: 'APPLICATION_SOURCE',
//         link: 'https://www.evisa.gov.az/en/',
//         createdAt: '2024-04-25T12:27:24.71Z',
//       },
//       {
//         type: 'INFORMATION_SOURCE',
//         link: 'https://www.evisa.gov.az/en/',
//         createdAt: '2024-04-25T12:27:24.71Z',
//       },
//     ],
//     notes: [],
//     additionalNotes: [
//       'Granting or refusing the visa is at sole discretion of respective Embassy/Consulate/High commissions. We only assists in the visa application process & doesn’t give any guarantees or assurances about the approval of the VISA or the time frame for processing the visa application\n',
//       'Documents may vary on case-to-case basis and Embassy/VFS may ask for some additional documents from the applicant as well as call the applicant for a personal interview\n',
//       'Providing accurate information about any previous visits to the disputed region of Nagorno-Karabakh is highly recommended. Providing incorrect information upon entry into Azerbaijan can result in a permanent ban and deportation.\n',
//       'Ensure you provide the address where you will stay in Azerbaijan. Although no document proof is asked while applying for e-visa, but you are requested to enter the address of stay during the data form-fill while applying for the e-visa.\n',
//       ' \n',
//     ],
//     introductionOfVisa:
//       "Indian nationals have the option to apply for an electronic visa to visit Azerbaijan. Azerbaijan Urgent E-Visa processing time remains 3 hours from the time of submission. Applicants must ensure that the expiration date of their passport or travel document is at least three months beyond the e-Visa's expiry date. The official portal allows for the creation of e-Visa applications for individuals, families (with a minimum of 2 and a maximum of 10 individuals), or groups (with a minimum of 10 and a maximum of 300 individuals). All required data for the e-Visa should be entered directly into the system. The e-Visa fee is electronically paid through the system, and once processed, the e-Visa is delivered to the applicant's provided email address.\n",
//     processOfApplyingVisa: [
//       {
//         number: 1,
//         description:
//           "Access the E-Visa application portal:\nThe initial step involves visiting the Azerbaijan E-Visa application portal and selecting the appropriate visa type, whether it's for a single entry or an urgent application, based on the specific requirements.",
//       },
//       {
//         number: 2,
//         description:
//           'Input Applicant Details:\nProvide necessary information, including the applicant\'s nationality, passport type, and the intended date of arrival. After filling in these details, click "continue" to proceed to the next step.',
//       },
//       {
//         number: 3,
//         description:
//           "Specify the Purpose of Your Trip:\nSelect the purpose of your visit, whether it's for tourism, business, science, education, labor, culture, medical, personal, or humanitarian reasons. Indicate the expected processing time, which can be 3 days for standard processing or 3 hours for urgent visa issuance.",
//       },
//       {
//         number: 4,
//         description:
//           'Complete the Personal Information Form:\nProceed by filling out the personal details of the applicant, which should include passport number, issue and expiry dates, occupation, intended stay details in Azerbaijan, and more. Additionally, upload a copy of the passport and select the appropriate option regarding any previous visits to the disputed region of Nagorno-Karabakh.',
//       },
//       {
//         number: 5,
//         description:
//           'Confirm Email Link:\nVerify your email link and continue to the payment section.',
//       },
//       {
//         number: 6,
//         description:
//           'Await Visa Decision:\nAfter completing the payment process, you will receive an email notification regarding the approval or rejection of your E-Visa application. The processing time may vary, with urgent applications typically taking 3 hours and standard applications taking up to 3 days. The E-Visa is sent over the email id provided during the time of the application.',
//       },
//     ],
//     faqs: [
//       {
//         number: 1,
//         question: 'What are the advantages of e-visa?',
//         answer:
//           'An e-Visa can be obtained easily anywhere with an internet connection and it saves time that you would otherwise spend on visa applications at Azerbaijani foreign representations or at the ports of entry into Azerbaijan (if you are eligible).',
//       },
//       {
//         number: 2,
//         question: 'What is the validity of e-visa?',
//         answer: 'Your e-Visa will be valid for 90 days.',
//       },
//       {
//         number: 3,
//         question:
//           ' What if I have entered information with mismatch in spelling as per passport name?',
//         answer: 'You must create a new e-visa application.',
//       },
//     ],
//     recommended: false,
//     urgent: true,
//     displayName: 'Azerbaijan Single Entry Urgent Tourist E-Visa',
//     masterProductSourceId: 'recS21rg54DnC1BjF',
//     origin: [
//       {
//         country: 'India',
//         countryCode: 'IN',
//       },
//     ],
//     destination: [
//       {
//         country: 'Azerbaijan',
//         countryCode: 'AZ',
//       },
//     ],
//     processingTimeUnit: 'Hours',
//     visaFeeInInr: [
//       {
//         type: 'ADULT',
//         label: 'ADULT',
//         currency: 'INR',
//         amount: 5176.035,
//       },
//       {
//         type: 'CHILD',
//         label: 'CHILD',
//         currency: 'INR',
//         amount: 5176.035,
//       },
//     ],
//     visaFee: [
//       {
//         type: 'ADULT',
//         label: 'ADULT',
//         currency: 'USD',
//         amount: 62.1,
//       },
//       {
//         type: 'CHILD',
//         label: 'CHILD',
//         currency: 'USD',
//         amount: 62.1,
//       },
//     ],
//     cancellable: false,
//   },
//   {
//     productSourceId: 'recTwmfmQVGFJNON4',
//     requiredFields: [
//       'passportNumber',
//       'lastName',
//       'country',
//       'occupation',
//       'gender',
//       'postalCode',
//       'dateOfBirth',
//       'title',
//       'firstName',
//       'nationality',
//       'phone',
//       'state',
//       'email',
//       'line1',
//     ],
//     optionalFields: [
//       'passportIssuingDate',
//       'passportExpiration',
//       'oldPassportCount',
//       'passportIssuingPlace',
//       'passportIssuingCountry',
//     ],
//     products: [
//       {
//         id: 'OAVI50578938',
//         masterProductId: '427734c2-4cfa-4157-8fff-5e9cd0a7d543',
//         name: 'Azerbaijan Single Entry Standard Tourist E-Visa',
//         displayName: 'Azerbaijan Single Entry Standard Tourist E-Visa',
//         supplierProductCode: 'recTwmfmQVGFJNON4',
//         ancillaryType: 'EVISA',
//         cancellable: false,
//         supplierOrganizationId: '702373fe-ea4c-4a14-8b38-388155f2fbab',
//         associatedConsumerOrganization: [
//           'cd85953e-2c68-4963-898d-88a73e4b3b42',
//           'ec218387-eea7-4d87-8dd2-3b8af2971ba2',
//           '033f11f5-eed9-4a88-96e6-ab51c15a97d7',
//           'on-arrival-travel',
//           '702373fe-ea4c-4a14-8b38-388155f2fbab',
//           '94d46ee0-7e65-487c-ac5c-01da17fa59b2',
//           'b980eecc-ed6a-496c-9e52-6f43418adf06',
//           '1453c4df-d48e-4e92-9689-56cc59f6da8d',
//           '9e079802-c4e4-4840-ac1d-90ba450b2516',
//         ],
//         origin: [
//           {
//             country: 'India',
//             countryCode: 'IN',
//           },
//         ],
//         destination: [
//           {
//             country: 'Azerbaijan',
//             countryCode: 'AZ',
//           },
//         ],
//         domestic: false,
//         requiredBulkFields: [
//           'orderNumber',
//           'tripStartDate',
//           'tripStartTimezone',
//           'tripEndDate',
//           'tripEndTimezone',
//           'title',
//           'firstName',
//           'lastName',
//           'dateOfBirth',
//           'gender',
//           'occupation',
//           'phone',
//           'email',
//           'nationality',
//           'passportIssuingCountry',
//           'passportIssuingPlace',
//           'passportNumber',
//           'passportIssuingDate',
//           'passportExpiration',
//           'addressLine',
//           'addressState',
//           'addressPostalCode',
//           'primaryTraveller',
//         ],
//         requiredFields: [
//           'passportNumber',
//           'lastName',
//           'country',
//           'occupation',
//           'gender',
//           'postalCode',
//           'dateOfBirth',
//           'title',
//           'firstName',
//           'nationality',
//           'phone',
//           'state',
//           'email',
//           'line1',
//         ],
//         optionalFields: [
//           'passportIssuingDate',
//           'passportExpiration',
//           'oldPassportCount',
//           'passportIssuingPlace',
//           'passportIssuingCountry',
//         ],
//         productInformation: {
//           id: '2ff12ec2-8c66-4c91-b9ce-c765543cc8e5',
//           supplierId: 'recTwmfmQVGFJNON4',
//           productAmount: {
//             id: 'fa736d58-2606-4ba1-902b-e289b72c4684',
//             linkedProductId: '2ff12ec2-8c66-4c91-b9ce-c765543cc8e5',
//             productId: 'OAVI50578938',
//             type: 'FIXED',
//             currency: 'INR',
//             totalAmount: 2618.3,
//             baseAmount: 2518,
//             serviceFee: 85,
//             serviceFeeAmountModifiers: {
//               type: 'SUPPLIER_FEE',
//               name: 'Supplier Fee',
//               currency: 'INR',
//               amount: 100.3,
//               tax: {
//                 totalTax: 15.3,
//                 taxRate: 18,
//                 totalAmountWithoutTax: 85,
//               },
//               quantity: 1,
//               baseAmount: 85,
//               amountCollected: true,
//             },
//             additionalAmountModifiers: [
//               {
//                 type: 'SUPPLIER_FEE',
//                 name: 'supplier fee',
//                 currency: 'INR',
//                 amount: 413,
//                 tax: {
//                   totalTax: 63,
//                   totalAmountWithoutTax: 350,
//                 },
//                 associatedConsumerOrganization:
//                   'b980eecc-ed6a-496c-9e52-6f43418adf06',
//                 amountCollected: true,
//               },
//               {
//                 type: 'SUPPLIER_FEE',
//                 name: 'supplier fee',
//                 currency: 'INR',
//                 amount: 354,
//                 tax: {
//                   totalTax: 54,
//                   totalAmountWithoutTax: 300,
//                 },
//                 associatedConsumerOrganization:
//                   '033f11f5-eed9-4a88-96e6-ab51c15a97d7',
//                 amountCollected: true,
//               },
//               {
//                 type: 'SUPPLIER_FEE',
//                 name: 'supplier fee',
//                 currency: 'INR',
//                 amount: 413,
//                 tax: {
//                   totalTax: 63,
//                   totalAmountWithoutTax: 350,
//                 },
//                 associatedConsumerOrganization:
//                   'cd85953e-2c68-4963-898d-88a73e4b3b42',
//                 amountCollected: true,
//               },
//             ],
//             status: 'ACTIVE',
//             updatedAt: '2024-05-13T06:47:17.16Z',
//             createdAt: '2024-05-13T06:47:17.16Z',
//           },
//           updatedAt: '2024-05-13T06:47:17.169Z',
//           createdAt: '2024-05-13T06:47:17.027Z',
//           productType: 'E-Visa',
//           name: 'Azerbaijan Single Entry Standard Tourist E-Visa',
//           visaType: 'TOURIST',
//           tripType: 'SINGLE',
//           stayPeriod: '30 Days',
//           validity: '90 Days',
//           processingTime: '1 to 4 Days',
//           minProcessingTime: 1,
//           maxProcessingTime: 4,
//           minProcessingTimeMatrix: 'Days',
//           maxProcessingTimeMatrix: 'Days',
//           processingType: 'standard',
//           consulateData: [
//             {
//               label: 'Default',
//               value: 'Azerbaijan-Default',
//               allowedStates: [],
//               requiredDocuments: [
//                 {
//                   fieldName: 'PassportBackImage',
//                   fieldType: 'upload',
//                   documentName: 'Passport Back Image',
//                   documentType: 'PASSPORT_BACK_IMAGE',
//                   required: true,
//                   submitted: false,
//                   description: 'Clear Scanned Copy Of Passport Back Image',
//                   supplierDocumentId: 'rec8oN8DhqE4yLY38',
//                   supplierSpecific: false,
//                   documentSpecifications: [
//                     {
//                       number: 1,
//                       description:
//                         '- Clear Scanned Copy Of Passport Back Image',
//                     },
//                   ],
//                 },
//                 {
//                   fieldName: 'PassportFrontImage',
//                   fieldType: 'upload',
//                   documentName: 'Passport Front Image',
//                   documentType: 'PASSPORT_FRONT_IMAGE',
//                   required: true,
//                   submitted: false,
//                   description:
//                     'Original Passport along with color copy issued within the last 10 years and with at least 6 months validity after the scheduled return, with at least two blank pages needs to be submitted. Handwritten passports and passports with observations regarding the front page (bio data) cannot be accepted. Also submit a clear scanned copy of passport front image and back image.',
//                   supplierDocumentId: 'recW4AJoZqp04ARQc',
//                   supplierSpecific: false,
//                   documentSpecifications: [
//                     {
//                       number: 1,
//                       description:
//                         '- Clear Scanned Copy Of Passport Front Image',
//                     },
//                   ],
//                 },
//               ],
//               requiredVisaForms: [],
//               consulateInfo: {
//                 name: 'Embassy Of Azerbaijan, New Delhi\n',
//                 description:
//                   'Address: Address:  41, Paschimi Marg, Vasant Vihar, New Delhi - 110057\nTel.: +91 11 26152228\nE-mail:  newdelhi@mission.mfa.gov.az\n',
//               },
//             },
//           ],
//           source: [
//             {
//               type: 'APPLICATION_SOURCE',
//               link: 'https://www.evisa.gov.az/en/',
//               createdAt: '2024-04-25T12:24:35.294Z',
//             },
//             {
//               type: 'INFORMATION_SOURCE',
//               link: 'https://www.evisa.gov.az/en/',
//               createdAt: '2024-04-25T12:24:35.294Z',
//             },
//           ],
//           notes: [],
//           additionalNotes: [
//             'Granting or refusing the visa is at sole discretion of respective Embassy/Consulate/High commissions. We only assists in the visa application process & doesn’t give any guarantees or assurances about the approval of the VISA or the time frame for processing the visa application\n',
//             'Documents may vary on case-to-case basis and Embassy/VFS may ask for some additional documents from the applicant as well as call the applicant for a personal interview\n',
//             'Providing accurate information about any previous visits to the disputed region of Nagorno-Karabakh is highly recommended. Providing incorrect information upon entry into Azerbaijan can result in a permanent ban and deportation.\n',
//             'Ensure you provide the address where you will stay in Azerbaijan. Although no document proof is asked while applying for e-visa, but you are requested to enter the address of stay during the data form-fill while applying for the e-visa.\n',
//             ' \n',
//           ],
//           processOfApplyingVisa: [
//             {
//               number: 1,
//               description:
//                 "Access the E-Visa application portal:\nThe initial step involves visiting the Azerbaijan E-Visa application portal and selecting the appropriate visa type, whether it's for a single entry or an urgent application, based on the specific requirements.",
//             },
//             {
//               number: 2,
//               description:
//                 'Input Applicant Details:\nProvide necessary information, including the applicant\'s nationality, passport type, and the intended date of arrival. After filling in these details, click "continue" to proceed to the next step.',
//             },
//             {
//               number: 3,
//               description:
//                 "Specify the Purpose of Your Trip:\nSelect the purpose of your visit, whether it's for tourism, business, science, education, labor, culture, medical, personal, or humanitarian reasons. Indicate the expected processing time, which can be 3 days for standard processing or 3 hours for urgent visa issuance.",
//             },
//             {
//               number: 4,
//               description:
//                 'Complete the Personal Information Form:\nProceed by filling out the personal details of the applicant, which should include passport number, issue and expiry dates, occupation, intended stay details in Azerbaijan, and more. Additionally, upload a copy of the passport and select the appropriate option regarding any previous visits to the disputed region of Nagorno-Karabakh.',
//             },
//             {
//               number: 5,
//               description:
//                 'Confirm Email Link:\nVerify your email link and continue to the payment section.',
//             },
//             {
//               number: 6,
//               description:
//                 'Await Visa Decision:\nAfter completing the payment process, you will receive an email notification regarding the approval or rejection of your E-Visa application. The processing time may vary, with urgent applications typically taking 3 hours and standard applications taking up to 3 days. The E-Visa is sent over the email id provided during the time of the application.',
//             },
//           ],
//           faqs: [
//             {
//               number: 1,
//               question: 'What are the advantages of e-visa?',
//               answer:
//                 'An e-Visa can be obtained easily anywhere with an internet connection and it saves time that you would otherwise spend on visa applications at Azerbaijani foreign representations or at the ports of entry into Azerbaijan (if you are eligible).',
//             },
//             {
//               number: 2,
//               question: 'What is the validity of e-visa?',
//               answer: 'Your e-Visa will be valid for 90 days.',
//             },
//             {
//               number: 3,
//               question:
//                 ' What if I have entered information with mismatch in spelling as per passport name?',
//               answer: 'You must create a new e-visa application.',
//             },
//           ],
//           recommended: true,
//           urgent: false,
//         },
//         supplierOrganization: {
//           id: '702373fe-ea4c-4a14-8b38-388155f2fbab',
//           name: 'onarrival-supplier',
//           legalName: 'onarrival-supplier',
//           email: 'siddharth+supplier@onarrival.travel',
//           type: 'SUPPLIER',
//           address: {
//             line1:
//               'NO 74, 3RD FLOOR, MASS COMPLEX 15 CROSS ROAD, JP NAGAR, 3RD PHASE',
//             state: 'KA',
//             country: 'IN',
//             postalCode: '560078',
//           },
//           countryCode: 'IN',
//           organizationCode: 'SUP012',
//           ancillaryType: ['EVISA'],
//           associatedOrganization: [
//             {
//               organizationId: '702373fe-ea4c-4a14-8b38-388155f2fbab',
//               ancillaries: [
//                 {
//                   ancillaryType: 'EVISA',
//                 },
//               ],
//             },
//           ],
//           liveModeEnabled: true,
//           isPaymentGatewayActive: false,
//           aliasedNames: [
//             {
//               organizationId: '94d46ee0-7e65-487c-ac5c-01da17fa59b2',
//               name: 'eVisa.io AL Saffron',
//             },
//           ],
//           createUser: true,
//           updatedAt: '2023-05-26T06:34:22.638Z',
//           createdAt: '2023-05-26T06:34:22.574Z',
//         },
//         submissionType: 'OFFLINE',
//         cancellationType: 'OFFLINE',
//         productSourceId: 'recDJKj7KOfh2kdn5',
//         masterProductSourceId: 'recTwmfmQVGFJNON4',
//         reviewRequired: true,
//         updatedAt: '2024-05-13T06:47:17.115Z',
//         createdAt: '2024-05-13T06:47:17.027Z',
//       },
//     ],
//     updatedAt: '2024-04-25T12:24:35.339Z',
//     id: '427734c2-4cfa-4157-8fff-5e9cd0a7d543',
//     createdAt: '2024-04-25T12:24:35.294Z',
//     productType: 'E-Visa',
//     name: 'Azerbaijan Single Entry Standard Tourist E-Visa',
//     country: 'AZ',
//     visaType: 'TOURIST',
//     tripType: 'SINGLE',
//     stayPeriod: '30 Days',
//     validity: '90 Days',
//     processingTime: '1 to 4 Days',
//     minProcessingTime: 1,
//     maxProcessingTime: 4,
//     processingType: 'standard',
//     consulateData: [
//       {
//         label: 'Default',
//         value: 'Azerbaijan-Default',
//         allowedStates: [],
//         requiredDocuments: [
//           {
//             fieldName: 'PassportBackImage',
//             fieldType: 'upload',
//             documentName: 'Passport Back Image',
//             documentType: 'PASSPORT_BACK_IMAGE',
//             required: true,
//             submitted: false,
//             description: 'Clear Scanned Copy Of Passport Back Image',
//             supplierDocumentId: 'rec8oN8DhqE4yLY38',
//             supplierSpecific: false,
//             documentSpecifications: [
//               {
//                 number: 1,
//                 description: '- Clear Scanned Copy Of Passport Back Image',
//               },
//             ],
//           },
//           {
//             fieldName: 'PassportFrontImage',
//             fieldType: 'upload',
//             documentName: 'Passport Front Image',
//             documentType: 'PASSPORT_FRONT_IMAGE',
//             required: true,
//             submitted: false,
//             description:
//               'Original Passport along with color copy issued within the last 10 years and with at least 6 months validity after the scheduled return, with at least two blank pages needs to be submitted. Handwritten passports and passports with observations regarding the front page (bio data) cannot be accepted. Also submit a clear scanned copy of passport front image and back image.',
//             supplierDocumentId: 'recW4AJoZqp04ARQc',
//             supplierSpecific: false,
//             documentSpecifications: [
//               {
//                 number: 1,
//                 description: '- Clear Scanned Copy Of Passport Front Image',
//               },
//             ],
//           },
//         ],
//         requiredVisaForms: [],
//         consulateInfo: {
//           name: 'Embassy Of Azerbaijan, New Delhi\n',
//           description:
//             'Address: Address:  41, Paschimi Marg, Vasant Vihar, New Delhi - 110057\nTel.: +91 11 26152228\nE-mail:  newdelhi@mission.mfa.gov.az\n',
//         },
//       },
//     ],
//     source: [
//       {
//         type: 'APPLICATION_SOURCE',
//         link: 'https://www.evisa.gov.az/en/',
//         createdAt: '2024-04-25T12:24:35.294Z',
//       },
//       {
//         type: 'INFORMATION_SOURCE',
//         link: 'https://www.evisa.gov.az/en/',
//         createdAt: '2024-04-25T12:24:35.294Z',
//       },
//     ],
//     notes: [],
//     additionalNotes: [
//       'Granting or refusing the visa is at sole discretion of respective Embassy/Consulate/High commissions. We only assists in the visa application process & doesn’t give any guarantees or assurances about the approval of the VISA or the time frame for processing the visa application\n',
//       'Documents may vary on case-to-case basis and Embassy/VFS may ask for some additional documents from the applicant as well as call the applicant for a personal interview\n',
//       'Providing accurate information about any previous visits to the disputed region of Nagorno-Karabakh is highly recommended. Providing incorrect information upon entry into Azerbaijan can result in a permanent ban and deportation.\n',
//       'Ensure you provide the address where you will stay in Azerbaijan. Although no document proof is asked while applying for e-visa, but you are requested to enter the address of stay during the data form-fill while applying for the e-visa.\n',
//       ' \n',
//     ],
//     introductionOfVisa:
//       "Indian nationals have the option to apply for an electronic visa to visit Azerbaijan. To do so, they should submit their electronic visa applications at least three working days prior to their intended arrival date in Azerbaijan, following the standard processing category.\nApplicants must ensure that the expiration date of their passport or travel document is at least three months beyond the e-Visa's expiry date. The e-Visa is typically processed and issued within three working days.\nThe official portal allows for the creation of e-Visa applications for individuals, families (with a minimum of 2 and a maximum of 10 individuals), or groups (with a minimum of 10 and a maximum of 300 individuals). All required data for the e-Visa should be entered directly into the system.\nThe e-Visa fee is electronically paid through the system, and once processed, the e-Visa is delivered to the applicant's provided email address.\n",
//     processOfApplyingVisa: [
//       {
//         number: 1,
//         description:
//           "Access the E-Visa application portal:\nThe initial step involves visiting the Azerbaijan E-Visa application portal and selecting the appropriate visa type, whether it's for a single entry or an urgent application, based on the specific requirements.",
//       },
//       {
//         number: 2,
//         description:
//           'Input Applicant Details:\nProvide necessary information, including the applicant\'s nationality, passport type, and the intended date of arrival. After filling in these details, click "continue" to proceed to the next step.',
//       },
//       {
//         number: 3,
//         description:
//           "Specify the Purpose of Your Trip:\nSelect the purpose of your visit, whether it's for tourism, business, science, education, labor, culture, medical, personal, or humanitarian reasons. Indicate the expected processing time, which can be 3 days for standard processing or 3 hours for urgent visa issuance.",
//       },
//       {
//         number: 4,
//         description:
//           'Complete the Personal Information Form:\nProceed by filling out the personal details of the applicant, which should include passport number, issue and expiry dates, occupation, intended stay details in Azerbaijan, and more. Additionally, upload a copy of the passport and select the appropriate option regarding any previous visits to the disputed region of Nagorno-Karabakh.',
//       },
//       {
//         number: 5,
//         description:
//           'Confirm Email Link:\nVerify your email link and continue to the payment section.',
//       },
//       {
//         number: 6,
//         description:
//           'Await Visa Decision:\nAfter completing the payment process, you will receive an email notification regarding the approval or rejection of your E-Visa application. The processing time may vary, with urgent applications typically taking 3 hours and standard applications taking up to 3 days. The E-Visa is sent over the email id provided during the time of the application.',
//       },
//     ],
//     faqs: [
//       {
//         number: 1,
//         question: 'What are the advantages of e-visa?',
//         answer:
//           'An e-Visa can be obtained easily anywhere with an internet connection and it saves time that you would otherwise spend on visa applications at Azerbaijani foreign representations or at the ports of entry into Azerbaijan (if you are eligible).',
//       },
//       {
//         number: 2,
//         question: 'What is the validity of e-visa?',
//         answer: 'Your e-Visa will be valid for 90 days.',
//       },
//       {
//         number: 3,
//         question:
//           ' What if I have entered information with mismatch in spelling as per passport name?',
//         answer: 'You must create a new e-visa application.',
//       },
//     ],
//     recommended: true,
//     urgent: false,
//     displayName: 'Azerbaijan Single Entry Standard Tourist E-Visa',
//     masterProductSourceId: 'recTwmfmQVGFJNON4',
//     origin: [
//       {
//         country: 'India',
//         countryCode: 'IN',
//       },
//     ],
//     destination: [
//       {
//         country: 'Azerbaijan',
//         countryCode: 'AZ',
//       },
//     ],
//     processingTimeUnit: 'Days',
//     visaFeeInInr: [
//       {
//         type: 'ADULT',
//         label: 'ADULT',
//         currency: 'INR',
//         amount: 2167.1,
//       },
//       {
//         type: 'CHILD',
//         label: 'CHILD',
//         currency: 'INR',
//         amount: 2167.1,
//       },
//     ],
//     visaFee: [
//       {
//         type: 'ADULT',
//         label: 'ADULT',
//         currency: 'USD',
//         amount: 26,
//       },
//       {
//         type: 'CHILD',
//         label: 'CHILD',
//         currency: 'USD',
//         amount: 26,
//       },
//     ],
//     cancellable: false,
//   },
// ];
export const MockData: ApiResponse = {
  status: 'ok',
  item: {
    trip: {
      visaType: 'BUSINESS',
      origin: {
        countryCode: 'IN',
      },
      destination: [
        {
          countryCode: 'FR',
        },
      ],
      domestic: false,
    },
    visas: [
      {
        updatedAt: '2024-08-03T08:45:14.18Z',
        id: 'bcfa8d80-9fe4-4181-be09-99e9e1cca4bd',
        createdAt: '2024-08-03T08:45:14.18Z',
        productType: 'Sticker',
        name: 'France Business Visa',
        country: 'FR',
        visaType: 'BUSINESS',
        tripType: 'SINGLE',
        processingTime: '3 to 15 Days',
        minProcessingTime: 3,
        maxProcessingTime: 15,
        processingType: 'standard',
        validity: '90 Days', // TODO: missing on api response
        stayPeriod: '30 Days', // TODO: missing on api response
        consulateData: [
          {
            label: 'Bangalore',
            value: 'France-Bangalore',
            allowedStates: [],
            requiredDocuments: [
              {
                fieldName: 'PersonalITR',
                fieldType: 'info',
                documentName: 'Personal ITR',
                documentType: 'ITR',
                submitted: false,
                description: 'Personal ITR copy for last 3 years',
                supplierDocumentId: 'rec7LBdy3LEgSzNDV',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Personal ITR copy for last 3 years',
                  },
                ],
                applicableFor: ['SelfEmployed', 'Salaried'],
              },
              {
                fieldName: 'SalarySlip',
                fieldType: 'info',
                documentName: 'Salary Slip',
                documentType: 'PAYSLIP',
                submitted: false,
                description:
                  'Latest 3 months’ salary slips with company stamp & signature',
                supplierDocumentId: 'recIKInaTtpyFS0CJ',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Latest 3 months’ salary slips with company stamp & signature',
                  },
                ],
                applicableFor: ['Salaried'],
              },
              {
                fieldName: 'InvitationLetter(BusinessVisa)',
                fieldType: 'info',
                documentName: 'Invitation Letter (Business Visa)',
                documentType: 'INVITATION_LETTER',
                submitted: false,
                description:
                  'The invitation letter should include comprehensive information about the organization extending the invitation, including their complete name, address, email address, and telephone number. It should be either an original or a signed and stamped copy and must specify the details of the invitee, along with the intended travel dates and purpose of the trip. Additionally, it should provide a detailed itinerary of business meetings or training sessions, outlining the day-to-day schedule',
                supplierDocumentId: 'recrhFhg3geLWVNhI',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: 'Invitation Letter',
                  },
                ],
                applicableFor: ['Meeting'],
              },
              {
                fieldName: "Employer'sSignedSendingLetter",
                fieldType: 'info',
                documentName: "Employer's Signed Sending Letter",
                documentType: 'COVER_LETTER',
                submitted: false,
                description:
                  'Original signed sending letter from the Indian organization on official letterhead including: - name of traveler - passport number of traveler - details of purpose of trip and duration of stay - details concerning financing of the trip and the type of training the applicant shall be undergoing along with address of partner company/institution.',
                supplierDocumentId: 'recHud1z3ikGooDwU',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: 'Signed Sending Letter',
                  },
                ],
                applicableFor: ['Training'],
              },
              {
                fieldName: 'CompanyBankStatementForLast6Months',
                fieldType: 'info',
                documentName: 'Company Bank Statement For Last 6 Months',
                documentType: 'BANK_STATEMENT',
                submitted: false,
                description:
                  'Latest 6 months updated company current account bank statement with bank stamp & signature on each page.',
                supplierDocumentId: 'recXgrKz29B16NMUt',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Current Account Bank Statement from Last 6 months- The statement must be signed, stamped from the relevant banking authorities',
                  },
                ],
                applicableFor: ['SelfEmployed'],
              },
              {
                fieldName: 'CompanyITR',
                fieldType: 'info',
                documentName: 'Company ITR',
                documentType: 'ITR',
                submitted: false,
                description: 'Company ITR for last 3 years',
                supplierDocumentId: 'recEAATAzOQZCHSSG',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Company ITR for last 3 years',
                  },
                ],
                applicableFor: ['SelfEmployed'],
              },
              {
                fieldName: 'ConferenceInvitationLetter',
                fieldType: 'info',
                documentName: 'Conference Invitation Letter',
                documentType: 'INVITATION_LETTER',
                submitted: false,
                description:
                  'The invitation letter for the conference should originate from the individual or organization sponsoring your participation in the event. The invitation letter should be authored by the conference or trade show organizers and should explicitly mention your name.The letter should articulate the reasons why you are attending this event and provide additional information such as the schedule, conference dates, and accommodation arrangements. Furthermore, the sponsor should specify whether they will provide compensation for your participation or if they will cover your expenses.',
                supplierDocumentId: 'recHG55eK0OJyVs6t',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: 'Conference Invitation Letter',
                  },
                ],
                applicableFor: ['Conference'],
              },
              {
                fieldName: 'AirlineTicket',
                fieldType: 'info',
                documentName: 'Airline Ticket',
                documentType: 'FLIGHT_TICKET',
                required: true,
                submitted: false,
                description: 'Confirmed Return Airline Ticket',
                supplierDocumentId: 'recRRFJMckpTbTNfk',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Confirmed Return Airline Ticket',
                  },
                ],
              },
              {
                fieldName: 'AccommodationProof',
                fieldType: 'info',
                documentName: 'Accommodation Proof',
                documentType: 'HOTEL_RESERVATION',
                required: true,
                submitted: false,
                description:
                  'Confirmed Hotel Booking Reservation Voucher or any other accommodation proof',
                supplierDocumentId: 'recR8iNbNDgeLc9qI',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Confirmed Hotel Booking Reservation Voucher or any other accommodation proof',
                  },
                ],
              },
              {
                fieldName: 'PassportBackImage',
                fieldType: 'info',
                documentName: 'Passport Back Image',
                documentType: 'PASSPORT_BACK_IMAGE',
                required: true,
                submitted: false,
                description: 'Clear Scanned Copy Of Passport Back Image',
                supplierDocumentId: 'rec8oN8DhqE4yLY38',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Clear Scanned Copy Of Passport Back Image',
                  },
                ],
              },
              {
                fieldName: 'PassportFrontImage',
                fieldType: 'info',
                documentName: 'Passport Front Image',
                documentType: 'PASSPORT_FRONT_IMAGE',
                required: true,
                submitted: false,
                description:
                  'Original Passport along with color copy issued within the last 10 years and with at least 6 months validity after the scheduled return, with at least two blank pages needs to be submitted. Handwritten passports and passports with observations regarding the front page (bio data) cannot be accepted. Also submit a clear scanned copy of passport front image and back image.',
                supplierDocumentId: 'recW4AJoZqp04ARQc',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Clear Scanned Copy Of Passport Front Image',
                  },
                ],
              },
              {
                fieldName: 'PassportSizePhotograph',
                fieldType: 'info',
                documentName: 'Passport Size Photograph',
                documentType: 'PASSPORT_SIZE_PHOTO',
                required: true,
                submitted: false,
                description:
                  'Provide recent passport-size photographs with a matte or semi-matte finish, ensuring 60% to 80% face coverage. Please do not wear glasses or any headgear, and ensure your head is bare. The background should be plain white, without any borders, and the photograph should measure 35mm x 45mm in size.',
                supplierDocumentId: 'recbR8e7Ot4vU1LTx',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Provide two recent passport-size photographs.- Ensure the photographs have a matte or semi-matte finish.- Guarantee that your face covers 60% to 80% of the photograph.- Do not wear glasses or any headgear in the photographs.- Your head should be bare.- The background of the photographs should be plain white without any borders.- The photographs should measure 35mm x 45mm in size.',
                  },
                ],
                documentSamples: [
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/PWA/New+folder/Common.png',
                ],
              },
              {
                fieldName: 'VisaApplicationForm',
                fieldType: 'info',
                documentName: 'Visa Application Form',
                documentType: 'VISA_APPLICATION_FORM',
                required: true,
                submitted: false,
                description:
                  'Visa Application Form duly filled in and signed by the applicant',
                supplierDocumentId: 'recWWE26ipGvpmoLe',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Application Form duly filled in and signed by the applicant by blue ball pen.',
                  },
                ],
              },
              {
                fieldName: 'SchengenTravelInsurancePolicy',
                fieldType: 'info',
                documentName: 'Schengen Travel Insurance Policy',
                documentType: 'INSURANCE_POLICY',
                required: true,
                submitted: false,
                description:
                  "The travel medical insurance must have a minimum coverage of 30,000 euros and should remain in effect for the entire travel duration. The policy should provide coverage across the entire Schengen area. For applicants seeking a multiple-entry visa, the insurance policy can be valid for the first trip. It also should encompass expenses related to unexpected illness or accidents, on-site assistance, including the costs of medical repatriation to the insured person's permanent residence or repatriation in the unfortunate event of death. The Travel Insurance Policy must also explicitly include coverage for COVID-19",
                supplierDocumentId: 'recXfnjSXTa4ErAHZ',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Travel Medical Policy must have a coverage of minimum 30000 euros.-  The policy must be valid throughout the trip duration.',
                  },
                ],
              },
              {
                fieldName: 'EmployerCoverLetter',
                fieldType: 'info',
                documentName: 'Employer Cover Letter',
                documentType: 'COVER_LETTER',
                required: true,
                submitted: false,
                description:
                  "The cover letter from the employer must be an original document, presented on the official business letterhead of the employer or company. It should bear the signature and official stamp of either the HR department or the director, clearly indicating your job title and the length of your employment. The letter should also contain a 'no objection statement' affirming your intended journey to destination country, and it should specify the travel dates and the purpose of the trip.",
                supplierDocumentId: 'rec1VtKtojeuF8Qse',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: 'Employer Cover Letter',
                  },
                ],
              },
              {
                fieldName: 'PersonalBankStatementForLast6Months',
                fieldType: 'info',
                documentName: 'Personal Bank Statement For Last 6 Months',
                documentType: 'BANK_STATEMENT',
                required: true,
                submitted: false,
                description:
                  'Latest 6 months updated personal bank statement with bank stamp & signature on each page.',
                supplierDocumentId: 'recC413ogRTUTIWVa',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Personal Bank Statement from Last 6 monthsThe statement must be signed, stamped from the relevant banking authorities',
                  },
                ],
              },
            ],
            requiredVisaForms: [
              {
                formName: 'Employer Cover Letter Format (Bengaluru)',
                formLink:
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/France+Business+Visa/Employer+Cover+Letter+Format+(Bengaluru).docx',
                validOccupations: ['SALARIED'],
              },
              {
                formName: 'Invitation Letter (Bengaluru)',
                formLink:
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/France+Business+Visa/Invitation+Letter+(Bengaluru).docx',
                validOccupations: ['SALARIED'],
              },
              {
                formName: 'Employer Cover Letter Format (Bengaluru)',
                formLink:
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/France+Business+Visa/Employer+Cover+Letter+Format+(Bengaluru).docx',
                validOccupations: ['SELF_EMPLOYED'],
              },
              {
                formName: 'Invitation Letter (Bengaluru)',
                formLink:
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/France+Business+Visa/Invitation+Letter+(Bengaluru).docx',
                validOccupations: ['SELF_EMPLOYED'],
              },
            ],
            consulateInfo: {
              name: 'Consulate General Of France In Bangalore\n',
              description:
                'Address:  21 Palace Road, Vasanthnagar, Bangalore 560 052\nTel: +91 80 2214 1200\nEmail: visas.bangalore-fslt@diplomatie.gouv.fr\n',
              holidayListLink:
                'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/Holiday+List+2024/2024+Holiday+List/France+Embassy+Holiday+List+2024+(1).pdf',
            },
          },
          {
            label: 'Kolkata',
            value: 'France-Kolkata',
            allowedStates: [],
            requiredDocuments: [
              {
                fieldName: 'PersonalITR',
                fieldType: 'info',
                documentName: 'Personal ITR',
                documentType: 'ITR',
                submitted: false,
                description: 'Personal ITR copy for last 3 years',
                supplierDocumentId: 'rec7LBdy3LEgSzNDV',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Personal ITR copy for last 3 years',
                  },
                ],
                applicableFor: ['SelfEmployed', 'Salaried'],
              },
              {
                fieldName: 'SalarySlip',
                fieldType: 'info',
                documentName: 'Salary Slip',
                documentType: 'PAYSLIP',
                submitted: false,
                description:
                  'Latest 3 months’ salary slips with company stamp & signature',
                supplierDocumentId: 'recIKInaTtpyFS0CJ',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Latest 3 months’ salary slips with company stamp & signature',
                  },
                ],
                applicableFor: ['Salaried'],
              },
              {
                fieldName: 'InvitationLetter(BusinessVisa)',
                fieldType: 'info',
                documentName: 'Invitation Letter (Business Visa)',
                documentType: 'INVITATION_LETTER',
                submitted: false,
                description:
                  'The invitation letter should include comprehensive information about the organization extending the invitation, including their complete name, address, email address, and telephone number. It should be either an original or a signed and stamped copy and must specify the details of the invitee, along with the intended travel dates and purpose of the trip. Additionally, it should provide a detailed itinerary of business meetings or training sessions, outlining the day-to-day schedule',
                supplierDocumentId: 'recrhFhg3geLWVNhI',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: 'Invitation Letter',
                  },
                ],
                applicableFor: ['Meeting'],
              },
              {
                fieldName: "Employer'sSignedSendingLetter",
                fieldType: 'info',
                documentName: "Employer's Signed Sending Letter",
                documentType: 'COVER_LETTER',
                submitted: false,
                description:
                  'Original signed sending letter from the Indian organization on official letterhead including: - name of traveler - passport number of traveler - details of purpose of trip and duration of stay - details concerning financing of the trip and the type of training the applicant shall be undergoing along with address of partner company/institution.',
                supplierDocumentId: 'recHud1z3ikGooDwU',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: 'Signed Sending Letter',
                  },
                ],
                applicableFor: ['Training'],
              },
              {
                fieldName: 'CompanyBankStatementForLast6Months',
                fieldType: 'info',
                documentName: 'Company Bank Statement For Last 6 Months',
                documentType: 'BANK_STATEMENT',
                submitted: false,
                description:
                  'Latest 6 months updated company current account bank statement with bank stamp & signature on each page.',
                supplierDocumentId: 'recXgrKz29B16NMUt',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Current Account Bank Statement from Last 6 months- The statement must be signed, stamped from the relevant banking authorities',
                  },
                ],
                applicableFor: ['SelfEmployed'],
              },
              {
                fieldName: 'CompanyITR',
                fieldType: 'info',
                documentName: 'Company ITR',
                documentType: 'ITR',
                submitted: false,
                description: 'Company ITR for last 3 years',
                supplierDocumentId: 'recEAATAzOQZCHSSG',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Company ITR for last 3 years',
                  },
                ],
                applicableFor: ['SelfEmployed'],
              },
              {
                fieldName: 'ConferenceInvitationLetter',
                fieldType: 'info',
                documentName: 'Conference Invitation Letter',
                documentType: 'INVITATION_LETTER',
                submitted: false,
                description:
                  'The invitation letter for the conference should originate from the individual or organization sponsoring your participation in the event. The invitation letter should be authored by the conference or trade show organizers and should explicitly mention your name.The letter should articulate the reasons why you are attending this event and provide additional information such as the schedule, conference dates, and accommodation arrangements. Furthermore, the sponsor should specify whether they will provide compensation for your participation or if they will cover your expenses.',
                supplierDocumentId: 'recHG55eK0OJyVs6t',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: 'Conference Invitation Letter',
                  },
                ],
                applicableFor: ['Conference'],
              },
              {
                fieldName: 'AirlineTicket',
                fieldType: 'info',
                documentName: 'Airline Ticket',
                documentType: 'FLIGHT_TICKET',
                required: true,
                submitted: false,
                description: 'Confirmed Return Airline Ticket',
                supplierDocumentId: 'recRRFJMckpTbTNfk',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Confirmed Return Airline Ticket',
                  },
                ],
              },
              {
                fieldName: 'AccommodationProof',
                fieldType: 'info',
                documentName: 'Accommodation Proof',
                documentType: 'HOTEL_RESERVATION',
                required: true,
                submitted: false,
                description:
                  'Confirmed Hotel Booking Reservation Voucher or any other accommodation proof',
                supplierDocumentId: 'recR8iNbNDgeLc9qI',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Confirmed Hotel Booking Reservation Voucher or any other accommodation proof',
                  },
                ],
              },
              {
                fieldName: 'PassportBackImage',
                fieldType: 'info',
                documentName: 'Passport Back Image',
                documentType: 'PASSPORT_BACK_IMAGE',
                required: true,
                submitted: false,
                description: 'Clear Scanned Copy Of Passport Back Image',
                supplierDocumentId: 'rec8oN8DhqE4yLY38',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Clear Scanned Copy Of Passport Back Image',
                  },
                ],
              },
              {
                fieldName: 'PassportFrontImage',
                fieldType: 'info',
                documentName: 'Passport Front Image',
                documentType: 'PASSPORT_FRONT_IMAGE',
                required: true,
                submitted: false,
                description:
                  'Original Passport along with color copy issued within the last 10 years and with at least 6 months validity after the scheduled return, with at least two blank pages needs to be submitted. Handwritten passports and passports with observations regarding the front page (bio data) cannot be accepted. Also submit a clear scanned copy of passport front image and back image.',
                supplierDocumentId: 'recW4AJoZqp04ARQc',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Clear Scanned Copy Of Passport Front Image',
                  },
                ],
              },
              {
                fieldName: 'PassportSizePhotograph',
                fieldType: 'info',
                documentName: 'Passport Size Photograph',
                documentType: 'PASSPORT_SIZE_PHOTO',
                required: true,
                submitted: false,
                description:
                  'Provide recent passport-size photographs with a matte or semi-matte finish, ensuring 60% to 80% face coverage. Please do not wear glasses or any headgear, and ensure your head is bare. The background should be plain white, without any borders, and the photograph should measure 35mm x 45mm in size.',
                supplierDocumentId: 'recbR8e7Ot4vU1LTx',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Provide two recent passport-size photographs.- Ensure the photographs have a matte or semi-matte finish.- Guarantee that your face covers 60% to 80% of the photograph.- Do not wear glasses or any headgear in the photographs.- Your head should be bare.- The background of the photographs should be plain white without any borders.- The photographs should measure 35mm x 45mm in size.',
                  },
                ],
                documentSamples: [
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/PWA/New+folder/Common.png',
                ],
              },
              {
                fieldName: 'VisaApplicationForm',
                fieldType: 'info',
                documentName: 'Visa Application Form',
                documentType: 'VISA_APPLICATION_FORM',
                required: true,
                submitted: false,
                description:
                  'Visa Application Form duly filled in and signed by the applicant',
                supplierDocumentId: 'recWWE26ipGvpmoLe',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Application Form duly filled in and signed by the applicant by blue ball pen.',
                  },
                ],
              },
              {
                fieldName: 'SchengenTravelInsurancePolicy',
                fieldType: 'info',
                documentName: 'Schengen Travel Insurance Policy',
                documentType: 'INSURANCE_POLICY',
                required: true,
                submitted: false,
                description:
                  "The travel medical insurance must have a minimum coverage of 30,000 euros and should remain in effect for the entire travel duration. The policy should provide coverage across the entire Schengen area. For applicants seeking a multiple-entry visa, the insurance policy can be valid for the first trip. It also should encompass expenses related to unexpected illness or accidents, on-site assistance, including the costs of medical repatriation to the insured person's permanent residence or repatriation in the unfortunate event of death. The Travel Insurance Policy must also explicitly include coverage for COVID-19",
                supplierDocumentId: 'recXfnjSXTa4ErAHZ',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Travel Medical Policy must have a coverage of minimum 30000 euros.-  The policy must be valid throughout the trip duration.',
                  },
                ],
              },
              {
                fieldName: 'EmployerCoverLetter',
                fieldType: 'info',
                documentName: 'Employer Cover Letter',
                documentType: 'COVER_LETTER',
                required: true,
                submitted: false,
                description:
                  "The cover letter from the employer must be an original document, presented on the official business letterhead of the employer or company. It should bear the signature and official stamp of either the HR department or the director, clearly indicating your job title and the length of your employment. The letter should also contain a 'no objection statement' affirming your intended journey to destination country, and it should specify the travel dates and the purpose of the trip.",
                supplierDocumentId: 'rec1VtKtojeuF8Qse',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: 'Employer Cover Letter',
                  },
                ],
              },
              {
                fieldName: 'PersonalBankStatementForLast6Months',
                fieldType: 'info',
                documentName: 'Personal Bank Statement For Last 6 Months',
                documentType: 'BANK_STATEMENT',
                required: true,
                submitted: false,
                description:
                  'Latest 6 months updated personal bank statement with bank stamp & signature on each page.',
                supplierDocumentId: 'recC413ogRTUTIWVa',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Personal Bank Statement from Last 6 monthsThe statement must be signed, stamped from the relevant banking authorities',
                  },
                ],
              },
            ],
            requiredVisaForms: [
              {
                formName: 'Employer Cover Letter Format (Kolkata)',
                formLink:
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/France+Business+Visa/Employer+Cover+Letter+Format+(Kolkata).docx',
                validOccupations: ['SALARIED'],
              },
              {
                formName: 'Invitation Letter (Kolkata)',
                formLink:
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/France+Business+Visa/Invitation+Letter+(Kolkata).docx',
                validOccupations: ['SALARIED'],
              },
              {
                formName: 'Employer Cover Letter Format (Kolkata)',
                formLink:
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/France+Business+Visa/Employer+Cover+Letter+Format+(Kolkata).docx',
                validOccupations: ['SELF_EMPLOYED'],
              },
              {
                formName: 'Invitation Letter (Kolkata)',
                formLink:
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/France+Business+Visa/Invitation+Letter+(Kolkata).docx',
                validOccupations: ['SELF_EMPLOYED'],
              },
            ],
            consulateInfo: {
              name: 'Consulate General Of France In Kolkata\n',
              description:
                'Address:  21 C, Raja Santosh Road, Alipore\nKOLKATA 700 027\nTel : +91(33) 40 16 32 00\nFax : +91(33) 40 16 32 01\n@ : visas.calcutta-cslt@diplomatie.gouv.fr\n',
              holidayListLink:
                'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/Holiday+List+2024/2024+Holiday+List/France+Embassy+Holiday+List+2024+(1).pdf',
            },
          },
          {
            label: 'Mumbai',
            value: 'France-Mumbai',
            allowedStates: [],
            requiredDocuments: [
              {
                fieldName: 'PersonalITR',
                fieldType: 'info',
                documentName: 'Personal ITR',
                documentType: 'ITR',
                submitted: false,
                description: 'Personal ITR copy for last 3 years',
                supplierDocumentId: 'rec7LBdy3LEgSzNDV',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Personal ITR copy for last 3 years',
                  },
                ],
                applicableFor: ['SelfEmployed', 'Salaried'],
              },
              {
                fieldName: 'SalarySlip',
                fieldType: 'info',
                documentName: 'Salary Slip',
                documentType: 'PAYSLIP',
                submitted: false,
                description:
                  'Latest 3 months’ salary slips with company stamp & signature',
                supplierDocumentId: 'recIKInaTtpyFS0CJ',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Latest 3 months’ salary slips with company stamp & signature',
                  },
                ],
                applicableFor: ['Salaried'],
              },
              {
                fieldName: 'InvitationLetter(BusinessVisa)',
                fieldType: 'info',
                documentName: 'Invitation Letter (Business Visa)',
                documentType: 'INVITATION_LETTER',
                submitted: false,
                description:
                  'The invitation letter should include comprehensive information about the organization extending the invitation, including their complete name, address, email address, and telephone number. It should be either an original or a signed and stamped copy and must specify the details of the invitee, along with the intended travel dates and purpose of the trip. Additionally, it should provide a detailed itinerary of business meetings or training sessions, outlining the day-to-day schedule',
                supplierDocumentId: 'recrhFhg3geLWVNhI',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: 'Invitation Letter',
                  },
                ],
                applicableFor: ['Meeting'],
              },
              {
                fieldName: "Employer'sSignedSendingLetter",
                fieldType: 'info',
                documentName: "Employer's Signed Sending Letter",
                documentType: 'COVER_LETTER',
                submitted: false,
                description:
                  'Original signed sending letter from the Indian organization on official letterhead including: - name of traveler - passport number of traveler - details of purpose of trip and duration of stay - details concerning financing of the trip and the type of training the applicant shall be undergoing along with address of partner company/institution.',
                supplierDocumentId: 'recHud1z3ikGooDwU',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: 'Signed Sending Letter',
                  },
                ],
                applicableFor: ['Training'],
              },
              {
                fieldName: 'CompanyBankStatementForLast6Months',
                fieldType: 'info',
                documentName: 'Company Bank Statement For Last 6 Months',
                documentType: 'BANK_STATEMENT',
                submitted: false,
                description:
                  'Latest 6 months updated company current account bank statement with bank stamp & signature on each page.',
                supplierDocumentId: 'recXgrKz29B16NMUt',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Current Account Bank Statement from Last 6 months- The statement must be signed, stamped from the relevant banking authorities',
                  },
                ],
                applicableFor: ['SelfEmployed'],
              },
              {
                fieldName: 'CompanyITR',
                fieldType: 'info',
                documentName: 'Company ITR',
                documentType: 'ITR',
                submitted: false,
                description: 'Company ITR for last 3 years',
                supplierDocumentId: 'recEAATAzOQZCHSSG',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Company ITR for last 3 years',
                  },
                ],
                applicableFor: ['SelfEmployed'],
              },
              {
                fieldName: 'ConferenceInvitationLetter',
                fieldType: 'info',
                documentName: 'Conference Invitation Letter',
                documentType: 'INVITATION_LETTER',
                submitted: false,
                description:
                  'The invitation letter for the conference should originate from the individual or organization sponsoring your participation in the event. The invitation letter should be authored by the conference or trade show organizers and should explicitly mention your name.The letter should articulate the reasons why you are attending this event and provide additional information such as the schedule, conference dates, and accommodation arrangements. Furthermore, the sponsor should specify whether they will provide compensation for your participation or if they will cover your expenses.',
                supplierDocumentId: 'recHG55eK0OJyVs6t',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: 'Conference Invitation Letter',
                  },
                ],
                applicableFor: ['Conference'],
              },
              {
                fieldName: 'AirlineTicket',
                fieldType: 'info',
                documentName: 'Airline Ticket',
                documentType: 'FLIGHT_TICKET',
                required: true,
                submitted: false,
                description: 'Confirmed Return Airline Ticket',
                supplierDocumentId: 'recRRFJMckpTbTNfk',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Confirmed Return Airline Ticket',
                  },
                ],
              },
              {
                fieldName: 'AccommodationProof',
                fieldType: 'info',
                documentName: 'Accommodation Proof',
                documentType: 'HOTEL_RESERVATION',
                required: true,
                submitted: false,
                description:
                  'Confirmed Hotel Booking Reservation Voucher or any other accommodation proof',
                supplierDocumentId: 'recR8iNbNDgeLc9qI',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Confirmed Hotel Booking Reservation Voucher or any other accommodation proof',
                  },
                ],
              },
              {
                fieldName: 'PassportBackImage',
                fieldType: 'info',
                documentName: 'Passport Back Image',
                documentType: 'PASSPORT_BACK_IMAGE',
                required: true,
                submitted: false,
                description: 'Clear Scanned Copy Of Passport Back Image',
                supplierDocumentId: 'rec8oN8DhqE4yLY38',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Clear Scanned Copy Of Passport Back Image',
                  },
                ],
              },
              {
                fieldName: 'PassportFrontImage',
                fieldType: 'info',
                documentName: 'Passport Front Image',
                documentType: 'PASSPORT_FRONT_IMAGE',
                required: true,
                submitted: false,
                description:
                  'Original Passport along with color copy issued within the last 10 years and with at least 6 months validity after the scheduled return, with at least two blank pages needs to be submitted. Handwritten passports and passports with observations regarding the front page (bio data) cannot be accepted. Also submit a clear scanned copy of passport front image and back image.',
                supplierDocumentId: 'recW4AJoZqp04ARQc',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Clear Scanned Copy Of Passport Front Image',
                  },
                ],
              },
              {
                fieldName: 'PassportSizePhotograph',
                fieldType: 'info',
                documentName: 'Passport Size Photograph',
                documentType: 'PASSPORT_SIZE_PHOTO',
                required: true,
                submitted: false,
                description:
                  'Provide recent passport-size photographs with a matte or semi-matte finish, ensuring 60% to 80% face coverage. Please do not wear glasses or any headgear, and ensure your head is bare. The background should be plain white, without any borders, and the photograph should measure 35mm x 45mm in size.',
                supplierDocumentId: 'recbR8e7Ot4vU1LTx',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Provide two recent passport-size photographs.- Ensure the photographs have a matte or semi-matte finish.- Guarantee that your face covers 60% to 80% of the photograph.- Do not wear glasses or any headgear in the photographs.- Your head should be bare.- The background of the photographs should be plain white without any borders.- The photographs should measure 35mm x 45mm in size.',
                  },
                ],
                documentSamples: [
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/PWA/New+folder/Common.png',
                ],
              },
              {
                fieldName: 'VisaApplicationForm',
                fieldType: 'info',
                documentName: 'Visa Application Form',
                documentType: 'VISA_APPLICATION_FORM',
                required: true,
                submitted: false,
                description:
                  'Visa Application Form duly filled in and signed by the applicant',
                supplierDocumentId: 'recWWE26ipGvpmoLe',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Application Form duly filled in and signed by the applicant by blue ball pen.',
                  },
                ],
              },
              {
                fieldName: 'SchengenTravelInsurancePolicy',
                fieldType: 'info',
                documentName: 'Schengen Travel Insurance Policy',
                documentType: 'INSURANCE_POLICY',
                required: true,
                submitted: false,
                description:
                  "The travel medical insurance must have a minimum coverage of 30,000 euros and should remain in effect for the entire travel duration. The policy should provide coverage across the entire Schengen area. For applicants seeking a multiple-entry visa, the insurance policy can be valid for the first trip. It also should encompass expenses related to unexpected illness or accidents, on-site assistance, including the costs of medical repatriation to the insured person's permanent residence or repatriation in the unfortunate event of death. The Travel Insurance Policy must also explicitly include coverage for COVID-19",
                supplierDocumentId: 'recXfnjSXTa4ErAHZ',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Travel Medical Policy must have a coverage of minimum 30000 euros.-  The policy must be valid throughout the trip duration.',
                  },
                ],
              },
              {
                fieldName: 'EmployerCoverLetter',
                fieldType: 'info',
                documentName: 'Employer Cover Letter',
                documentType: 'COVER_LETTER',
                required: true,
                submitted: false,
                description:
                  "The cover letter from the employer must be an original document, presented on the official business letterhead of the employer or company. It should bear the signature and official stamp of either the HR department or the director, clearly indicating your job title and the length of your employment. The letter should also contain a 'no objection statement' affirming your intended journey to destination country, and it should specify the travel dates and the purpose of the trip.",
                supplierDocumentId: 'rec1VtKtojeuF8Qse',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: 'Employer Cover Letter',
                  },
                ],
              },
              {
                fieldName: 'PersonalBankStatementForLast6Months',
                fieldType: 'info',
                documentName: 'Personal Bank Statement For Last 6 Months',
                documentType: 'BANK_STATEMENT',
                required: true,
                submitted: false,
                description:
                  'Latest 6 months updated personal bank statement with bank stamp & signature on each page.',
                supplierDocumentId: 'recC413ogRTUTIWVa',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Personal Bank Statement from Last 6 monthsThe statement must be signed, stamped from the relevant banking authorities',
                  },
                ],
              },
            ],
            requiredVisaForms: [
              {
                formName: 'Employer Cover Letter Format (Mumbai)',
                formLink:
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/France+Business+Visa/Employer+Cover+Letter+Format+(Mumbai).docx',
                validOccupations: ['SALARIED'],
              },
              {
                formName: 'Invitation Letter (Mumbai)',
                formLink:
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/France+Business+Visa/Invitation+Letter+(Mumbai).docx',
                validOccupations: ['SALARIED'],
              },
              {
                formName: 'Employer Cover Letter Format (Mumbai)',
                formLink:
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/France+Business+Visa/Employer+Cover+Letter+Format+(Mumbai).docx',
                validOccupations: ['SELF_EMPLOYED'],
              },
              {
                formName: 'Invitation Letter (Mumbai)',
                formLink:
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/France+Business+Visa/Invitation+Letter+(Mumbai).docx',
                validOccupations: ['SELF_EMPLOYED'],
              },
            ],
            consulateInfo: {
              name: 'Consulate General Of France In Mumbai\n',
              description:
                'Address:  Wockhardt Towers,\nEast Wing, 5th Floor,\nBandra - Kurla Complex,\n400051 Mumbai, Maharashtra, India.\nContact: +91 (22) 66 69 40 00\nOpening hours are as follows:\nMonday to Thursday : 9 AM - 1 PM and 2 PM - 5:30 PM and\nFriday : 9 AM - 1 PM and 2 PM - 4:30 PM\n',
              holidayListLink:
                'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/Holiday+List+2024/2024+Holiday+List/France+Embassy+Holiday+List+2024+(1).pdf',
            },
          },
          {
            label: 'New Delhi',
            value: 'France-New Delhi',
            allowedStates: [],
            requiredDocuments: [
              {
                fieldName: 'PersonalITR',
                fieldType: 'info',
                documentName: 'Personal ITR',
                documentType: 'ITR',
                submitted: false,
                description: 'Personal ITR copy for last 3 years',
                supplierDocumentId: 'rec7LBdy3LEgSzNDV',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Personal ITR copy for last 3 years',
                  },
                ],
                applicableFor: ['SelfEmployed', 'Salaried'],
              },
              {
                fieldName: 'SalarySlip',
                fieldType: 'info',
                documentName: 'Salary Slip',
                documentType: 'PAYSLIP',
                submitted: false,
                description:
                  'Latest 3 months’ salary slips with company stamp & signature',
                supplierDocumentId: 'recIKInaTtpyFS0CJ',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Latest 3 months’ salary slips with company stamp & signature',
                  },
                ],
                applicableFor: ['Salaried'],
              },
              {
                fieldName: 'InvitationLetter(BusinessVisa)',
                fieldType: 'info',
                documentName: 'Invitation Letter (Business Visa)',
                documentType: 'INVITATION_LETTER',
                submitted: false,
                description:
                  'The invitation letter should include comprehensive information about the organization extending the invitation, including their complete name, address, email address, and telephone number. It should be either an original or a signed and stamped copy and must specify the details of the invitee, along with the intended travel dates and purpose of the trip. Additionally, it should provide a detailed itinerary of business meetings or training sessions, outlining the day-to-day schedule',
                supplierDocumentId: 'recrhFhg3geLWVNhI',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: 'Invitation Letter',
                  },
                ],
                applicableFor: ['Meeting'],
              },
              {
                fieldName: "Employer'sSignedSendingLetter",
                fieldType: 'info',
                documentName: "Employer's Signed Sending Letter",
                documentType: 'COVER_LETTER',
                submitted: false,
                description:
                  'Original signed sending letter from the Indian organization on official letterhead including: - name of traveler - passport number of traveler - details of purpose of trip and duration of stay - details concerning financing of the trip and the type of training the applicant shall be undergoing along with address of partner company/institution.',
                supplierDocumentId: 'recHud1z3ikGooDwU',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: 'Signed Sending Letter',
                  },
                ],
                applicableFor: ['Training'],
              },
              {
                fieldName: 'CompanyBankStatementForLast6Months',
                fieldType: 'info',
                documentName: 'Company Bank Statement For Last 6 Months',
                documentType: 'BANK_STATEMENT',
                submitted: false,
                description:
                  'Latest 6 months updated company current account bank statement with bank stamp & signature on each page.',
                supplierDocumentId: 'recXgrKz29B16NMUt',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Current Account Bank Statement from Last 6 months- The statement must be signed, stamped from the relevant banking authorities',
                  },
                ],
                applicableFor: ['SelfEmployed'],
              },
              {
                fieldName: 'CompanyITR',
                fieldType: 'info',
                documentName: 'Company ITR',
                documentType: 'ITR',
                submitted: false,
                description: 'Company ITR for last 3 years',
                supplierDocumentId: 'recEAATAzOQZCHSSG',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Company ITR for last 3 years',
                  },
                ],
                applicableFor: ['SelfEmployed'],
              },
              {
                fieldName: 'ConferenceInvitationLetter',
                fieldType: 'info',
                documentName: 'Conference Invitation Letter',
                documentType: 'INVITATION_LETTER',
                submitted: false,
                description:
                  'The invitation letter for the conference should originate from the individual or organization sponsoring your participation in the event. The invitation letter should be authored by the conference or trade show organizers and should explicitly mention your name.The letter should articulate the reasons why you are attending this event and provide additional information such as the schedule, conference dates, and accommodation arrangements. Furthermore, the sponsor should specify whether they will provide compensation for your participation or if they will cover your expenses.',
                supplierDocumentId: 'recHG55eK0OJyVs6t',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: 'Conference Invitation Letter',
                  },
                ],
                applicableFor: ['Conference'],
              },
              {
                fieldName: 'AirlineTicket',
                fieldType: 'info',
                documentName: 'Airline Ticket',
                documentType: 'FLIGHT_TICKET',
                required: true,
                submitted: false,
                description: 'Confirmed Return Airline Ticket',
                supplierDocumentId: 'recRRFJMckpTbTNfk',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Confirmed Return Airline Ticket',
                  },
                ],
              },
              {
                fieldName: 'AccommodationProof',
                fieldType: 'info',
                documentName: 'Accommodation Proof',
                documentType: 'HOTEL_RESERVATION',
                required: true,
                submitted: false,
                description:
                  'Confirmed Hotel Booking Reservation Voucher or any other accommodation proof',
                supplierDocumentId: 'recR8iNbNDgeLc9qI',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Confirmed Hotel Booking Reservation Voucher or any other accommodation proof',
                  },
                ],
              },
              {
                fieldName: 'PassportBackImage',
                fieldType: 'info',
                documentName: 'Passport Back Image',
                documentType: 'PASSPORT_BACK_IMAGE',
                required: true,
                submitted: false,
                description: 'Clear Scanned Copy Of Passport Back Image',
                supplierDocumentId: 'rec8oN8DhqE4yLY38',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Clear Scanned Copy Of Passport Back Image',
                  },
                ],
              },
              {
                fieldName: 'PassportFrontImage',
                fieldType: 'info',
                documentName: 'Passport Front Image',
                documentType: 'PASSPORT_FRONT_IMAGE',
                required: true,
                submitted: false,
                description:
                  'Original Passport along with color copy issued within the last 10 years and with at least 6 months validity after the scheduled return, with at least two blank pages needs to be submitted. Handwritten passports and passports with observations regarding the front page (bio data) cannot be accepted. Also submit a clear scanned copy of passport front image and back image.',
                supplierDocumentId: 'recW4AJoZqp04ARQc',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Clear Scanned Copy Of Passport Front Image',
                  },
                ],
              },
              {
                fieldName: 'PassportSizePhotograph',
                fieldType: 'info',
                documentName: 'Passport Size Photograph',
                documentType: 'PASSPORT_SIZE_PHOTO',
                required: true,
                submitted: false,
                description:
                  'Provide recent passport-size photographs with a matte or semi-matte finish, ensuring 60% to 80% face coverage. Please do not wear glasses or any headgear, and ensure your head is bare. The background should be plain white, without any borders, and the photograph should measure 35mm x 45mm in size.',
                supplierDocumentId: 'recbR8e7Ot4vU1LTx',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Provide two recent passport-size photographs.- Ensure the photographs have a matte or semi-matte finish.- Guarantee that your face covers 60% to 80% of the photograph.- Do not wear glasses or any headgear in the photographs.- Your head should be bare.- The background of the photographs should be plain white without any borders.- The photographs should measure 35mm x 45mm in size.',
                  },
                ],
                documentSamples: [
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/PWA/New+folder/Common.png',
                ],
              },
              {
                fieldName: 'VisaApplicationForm',
                fieldType: 'info',
                documentName: 'Visa Application Form',
                documentType: 'VISA_APPLICATION_FORM',
                required: true,
                submitted: false,
                description:
                  'Visa Application Form duly filled in and signed by the applicant',
                supplierDocumentId: 'recWWE26ipGvpmoLe',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Application Form duly filled in and signed by the applicant by blue ball pen.',
                  },
                ],
              },
              {
                fieldName: 'SchengenTravelInsurancePolicy',
                fieldType: 'info',
                documentName: 'Schengen Travel Insurance Policy',
                documentType: 'INSURANCE_POLICY',
                required: true,
                submitted: false,
                description:
                  "The travel medical insurance must have a minimum coverage of 30,000 euros and should remain in effect for the entire travel duration. The policy should provide coverage across the entire Schengen area. For applicants seeking a multiple-entry visa, the insurance policy can be valid for the first trip. It also should encompass expenses related to unexpected illness or accidents, on-site assistance, including the costs of medical repatriation to the insured person's permanent residence or repatriation in the unfortunate event of death. The Travel Insurance Policy must also explicitly include coverage for COVID-19",
                supplierDocumentId: 'recXfnjSXTa4ErAHZ',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Travel Medical Policy must have a coverage of minimum 30000 euros.-  The policy must be valid throughout the trip duration.',
                  },
                ],
              },
              {
                fieldName: 'EmployerCoverLetter',
                fieldType: 'info',
                documentName: 'Employer Cover Letter',
                documentType: 'COVER_LETTER',
                required: true,
                submitted: false,
                description:
                  "The cover letter from the employer must be an original document, presented on the official business letterhead of the employer or company. It should bear the signature and official stamp of either the HR department or the director, clearly indicating your job title and the length of your employment. The letter should also contain a 'no objection statement' affirming your intended journey to destination country, and it should specify the travel dates and the purpose of the trip.",
                supplierDocumentId: 'rec1VtKtojeuF8Qse',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: 'Employer Cover Letter',
                  },
                ],
              },
              {
                fieldName: 'PersonalBankStatementForLast6Months',
                fieldType: 'info',
                documentName: 'Personal Bank Statement For Last 6 Months',
                documentType: 'BANK_STATEMENT',
                required: true,
                submitted: false,
                description:
                  'Latest 6 months updated personal bank statement with bank stamp & signature on each page.',
                supplierDocumentId: 'recC413ogRTUTIWVa',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Personal Bank Statement from Last 6 monthsThe statement must be signed, stamped from the relevant banking authorities',
                  },
                ],
              },
            ],
            requiredVisaForms: [
              {
                formName: 'Invitation Letter (New Delhi)',
                formLink:
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/France+Business+Visa/Invitation+Letter+(New+Delhi).docx',
                validOccupations: ['SALARIED'],
              },
              {
                formName: 'Employer Cover Letter Format (New Delhi)',
                formLink:
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/France+Business+Visa/Employer+Cover+Letter+Format+(New+Delhi).docx',
                validOccupations: ['SALARIED'],
              },
              {
                formName: 'Invitation Letter (New Delhi)',
                formLink:
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/France+Business+Visa/Invitation+Letter+(New+Delhi).docx',
                validOccupations: ['SELF_EMPLOYED'],
              },
              {
                formName: 'Employer Cover Letter Format (New Delhi)',
                formLink:
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/France+Business+Visa/Employer+Cover+Letter+Format+(New+Delhi).docx',
                validOccupations: ['SELF_EMPLOYED'],
              },
            ],
            consulateInfo: {
              name: 'Embassy Of France In India, New Delhi\n',
              description:
                'Address:  2/50-E Shantipath,\nChanakyapuri,\nNew Delhi, 110 021\nTel : 91 (11) 4319 6100\nFax: 91 (11) 4319 6119\n',
              holidayListLink:
                'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/Holiday+List+2024/2024+Holiday+List/France+Embassy+Holiday+List+2024+(1).pdf',
            },
          },
          {
            label: 'Pondicherry',
            value: 'France-Pondicherry',
            allowedStates: [],
            requiredDocuments: [
              {
                fieldName: 'PersonalITR',
                fieldType: 'info',
                documentName: 'Personal ITR',
                documentType: 'ITR',
                submitted: false,
                description: 'Personal ITR copy for last 3 years',
                supplierDocumentId: 'rec7LBdy3LEgSzNDV',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Personal ITR copy for last 3 years',
                  },
                ],
                applicableFor: ['SelfEmployed', 'Salaried'],
              },
              {
                fieldName: 'SalarySlip',
                fieldType: 'info',
                documentName: 'Salary Slip',
                documentType: 'PAYSLIP',
                submitted: false,
                description:
                  'Latest 3 months’ salary slips with company stamp & signature',
                supplierDocumentId: 'recIKInaTtpyFS0CJ',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Latest 3 months’ salary slips with company stamp & signature',
                  },
                ],
                applicableFor: ['Salaried'],
              },
              {
                fieldName: 'InvitationLetter(BusinessVisa)',
                fieldType: 'info',
                documentName: 'Invitation Letter (Business Visa)',
                documentType: 'INVITATION_LETTER',
                submitted: false,
                description:
                  'The invitation letter should include comprehensive information about the organization extending the invitation, including their complete name, address, email address, and telephone number. It should be either an original or a signed and stamped copy and must specify the details of the invitee, along with the intended travel dates and purpose of the trip. Additionally, it should provide a detailed itinerary of business meetings or training sessions, outlining the day-to-day schedule',
                supplierDocumentId: 'recrhFhg3geLWVNhI',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: 'Invitation Letter',
                  },
                ],
                applicableFor: ['Meeting'],
              },
              {
                fieldName: "Employer'sSignedSendingLetter",
                fieldType: 'info',
                documentName: "Employer's Signed Sending Letter",
                documentType: 'COVER_LETTER',
                submitted: false,
                description:
                  'Original signed sending letter from the Indian organization on official letterhead including: - name of traveler - passport number of traveler - details of purpose of trip and duration of stay - details concerning financing of the trip and the type of training the applicant shall be undergoing along with address of partner company/institution.',
                supplierDocumentId: 'recHud1z3ikGooDwU',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: 'Signed Sending Letter',
                  },
                ],
                applicableFor: ['Training'],
              },
              {
                fieldName: 'CompanyBankStatementForLast6Months',
                fieldType: 'info',
                documentName: 'Company Bank Statement For Last 6 Months',
                documentType: 'BANK_STATEMENT',
                submitted: false,
                description:
                  'Latest 6 months updated company current account bank statement with bank stamp & signature on each page.',
                supplierDocumentId: 'recXgrKz29B16NMUt',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Current Account Bank Statement from Last 6 months- The statement must be signed, stamped from the relevant banking authorities',
                  },
                ],
                applicableFor: ['SelfEmployed'],
              },
              {
                fieldName: 'CompanyITR',
                fieldType: 'info',
                documentName: 'Company ITR',
                documentType: 'ITR',
                submitted: false,
                description: 'Company ITR for last 3 years',
                supplierDocumentId: 'recEAATAzOQZCHSSG',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Company ITR for last 3 years',
                  },
                ],
                applicableFor: ['SelfEmployed'],
              },
              {
                fieldName: 'ConferenceInvitationLetter',
                fieldType: 'info',
                documentName: 'Conference Invitation Letter',
                documentType: 'INVITATION_LETTER',
                submitted: false,
                description:
                  'The invitation letter for the conference should originate from the individual or organization sponsoring your participation in the event. The invitation letter should be authored by the conference or trade show organizers and should explicitly mention your name.The letter should articulate the reasons why you are attending this event and provide additional information such as the schedule, conference dates, and accommodation arrangements. Furthermore, the sponsor should specify whether they will provide compensation for your participation or if they will cover your expenses.',
                supplierDocumentId: 'recHG55eK0OJyVs6t',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: 'Conference Invitation Letter',
                  },
                ],
                applicableFor: ['Conference'],
              },
              {
                fieldName: 'AirlineTicket',
                fieldType: 'info',
                documentName: 'Airline Ticket',
                documentType: 'FLIGHT_TICKET',
                required: true,
                submitted: false,
                description: 'Confirmed Return Airline Ticket',
                supplierDocumentId: 'recRRFJMckpTbTNfk',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Confirmed Return Airline Ticket',
                  },
                ],
              },
              {
                fieldName: 'AccommodationProof',
                fieldType: 'info',
                documentName: 'Accommodation Proof',
                documentType: 'HOTEL_RESERVATION',
                required: true,
                submitted: false,
                description:
                  'Confirmed Hotel Booking Reservation Voucher or any other accommodation proof',
                supplierDocumentId: 'recR8iNbNDgeLc9qI',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Confirmed Hotel Booking Reservation Voucher or any other accommodation proof',
                  },
                ],
              },
              {
                fieldName: 'PassportBackImage',
                fieldType: 'info',
                documentName: 'Passport Back Image',
                documentType: 'PASSPORT_BACK_IMAGE',
                required: true,
                submitted: false,
                description: 'Clear Scanned Copy Of Passport Back Image',
                supplierDocumentId: 'rec8oN8DhqE4yLY38',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Clear Scanned Copy Of Passport Back Image',
                  },
                ],
              },
              {
                fieldName: 'PassportFrontImage',
                fieldType: 'info',
                documentName: 'Passport Front Image',
                documentType: 'PASSPORT_FRONT_IMAGE',
                required: true,
                submitted: false,
                description:
                  'Original Passport along with color copy issued within the last 10 years and with at least 6 months validity after the scheduled return, with at least two blank pages needs to be submitted. Handwritten passports and passports with observations regarding the front page (bio data) cannot be accepted. Also submit a clear scanned copy of passport front image and back image.',
                supplierDocumentId: 'recW4AJoZqp04ARQc',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: '- Clear Scanned Copy Of Passport Front Image',
                  },
                ],
              },
              {
                fieldName: 'PassportSizePhotograph',
                fieldType: 'info',
                documentName: 'Passport Size Photograph',
                documentType: 'PASSPORT_SIZE_PHOTO',
                required: true,
                submitted: false,
                description:
                  'Provide recent passport-size photographs with a matte or semi-matte finish, ensuring 60% to 80% face coverage. Please do not wear glasses or any headgear, and ensure your head is bare. The background should be plain white, without any borders, and the photograph should measure 35mm x 45mm in size.',
                supplierDocumentId: 'recbR8e7Ot4vU1LTx',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Provide two recent passport-size photographs.- Ensure the photographs have a matte or semi-matte finish.- Guarantee that your face covers 60% to 80% of the photograph.- Do not wear glasses or any headgear in the photographs.- Your head should be bare.- The background of the photographs should be plain white without any borders.- The photographs should measure 35mm x 45mm in size.',
                  },
                ],
                documentSamples: [
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/PWA/New+folder/Common.png',
                ],
              },
              {
                fieldName: 'VisaApplicationForm',
                fieldType: 'info',
                documentName: 'Visa Application Form',
                documentType: 'VISA_APPLICATION_FORM',
                required: true,
                submitted: false,
                description:
                  'Visa Application Form duly filled in and signed by the applicant',
                supplierDocumentId: 'recWWE26ipGvpmoLe',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Application Form duly filled in and signed by the applicant by blue ball pen.',
                  },
                ],
              },
              {
                fieldName: 'EmployerCoverLetter',
                fieldType: 'info',
                documentName: 'Employer Cover Letter',
                documentType: 'COVER_LETTER',
                required: true,
                submitted: false,
                description:
                  "The cover letter from the employer must be an original document, presented on the official business letterhead of the employer or company. It should bear the signature and official stamp of either the HR department or the director, clearly indicating your job title and the length of your employment. The letter should also contain a 'no objection statement' affirming your intended journey to destination country, and it should specify the travel dates and the purpose of the trip.",
                supplierDocumentId: 'rec1VtKtojeuF8Qse',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description: 'Employer Cover Letter',
                  },
                ],
              },
              {
                fieldName: 'PersonalBankStatementForLast6Months',
                fieldType: 'info',
                documentName: 'Personal Bank Statement For Last 6 Months',
                documentType: 'BANK_STATEMENT',
                required: true,
                submitted: false,
                description:
                  'Latest 6 months updated personal bank statement with bank stamp & signature on each page.',
                supplierDocumentId: 'recC413ogRTUTIWVa',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Personal Bank Statement from Last 6 monthsThe statement must be signed, stamped from the relevant banking authorities',
                  },
                ],
              },
              {
                fieldName: 'SchengenTravelInsurancePolicy',
                fieldType: 'info',
                documentName: 'Schengen Travel Insurance Policy',
                documentType: 'INSURANCE_POLICY',
                required: true,
                submitted: false,
                description:
                  "The travel medical insurance must have a minimum coverage of 30,000 euros and should remain in effect for the entire travel duration. The policy should provide coverage across the entire Schengen area. For applicants seeking a multiple-entry visa, the insurance policy can be valid for the first trip. It also should encompass expenses related to unexpected illness or accidents, on-site assistance, including the costs of medical repatriation to the insured person's permanent residence or repatriation in the unfortunate event of death. The Travel Insurance Policy must also explicitly include coverage for COVID-19",
                supplierDocumentId: 'recXfnjSXTa4ErAHZ',
                supplierSpecific: false,
                documentSpecifications: [
                  {
                    number: 1,
                    description:
                      '- Travel Medical Policy must have a coverage of minimum 30000 euros.-  The policy must be valid throughout the trip duration.',
                  },
                ],
              },
            ],
            requiredVisaForms: [
              {
                formName: 'Employer Cover Letter Format (Pondicherry)',
                formLink:
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/France+Business+Visa/Employer+Cover+Letter+Format+(Pondicherry).docx',
                validOccupations: ['SALARIED'],
              },
              {
                formName: 'Invitation Letter (Pondicherry)',
                formLink:
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/France+Business+Visa/Invitation+Letter+(Pondicherry).docx',
                validOccupations: ['SALARIED'],
              },
              {
                formName: 'Employer Cover Letter Format (Pondicherry)',
                formLink:
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/France+Business+Visa/Employer+Cover+Letter+Format+(Pondicherry).docx',
                validOccupations: ['SELF_EMPLOYED'],
              },
              {
                formName: 'Invitation Letter (Pondicherry)',
                formLink:
                  'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/France+Business+Visa/Invitation+Letter+(Pondicherry).docx',
                validOccupations: ['SELF_EMPLOYED'],
              },
            ],
            consulateInfo: {
              name: 'Consulate General Of France In Pondicherry\n',
              description: 'Address: 2, Marine Street - 605001 Pondichéry\n',
              holidayListLink:
                'https://visa-forms.s3.ap-south-1.amazonaws.com/Visa+Forms/Holiday+List+2024/2024+Holiday+List/France+Embassy+Holiday+List+2024+(1).pdf',
            },
          },
        ],
        source: [
          {
            type: 'APPLICATION_SOURCE',
            link: 'https://france-visas.gouv.fr/en/web/france-visas/ma-demande-en-ligne',
            createdAt: '2024-08-03T08:45:13.954Z',
          },
          {
            type: 'INFORMATION_SOURCE',
            link: 'https://france-visas.gouv.fr/en/web/france-visas/ma-demande-en-ligne',
            createdAt: '2024-08-03T08:45:13.954Z',
          },
        ],
        notes: [],
        additionalNotes: [
          'Granting or refusing the visa is at sole discretion of respective Embassy/Consulate/High commissions. We only assists in the visa application process & doesn’t give any guarantees or assurances about the approval of the VISA or the time frame for processing the visa application\n',
          'Documents may vary on case-to-case basis and Embassy/VFS may ask for some additional documents from the applicant as well as call the applicant for a personal interview\n',
          'The duration of the visa and whether it’s for Single / Multiple entry is at the sole discretion of the consulate \n',
        ],
        introductionOfVisa:
          "A short-term Type 'C' visa for business purposes is granted by Schengen Group countries to citizens of countries obligated to obtain Schengen Zone visas. This visa is exclusively intended for conducting business activities within the European Union. Individuals residing in India who intend to travel to the Schengen Zone in Europe for business reasons are required to apply for this particular Schengen visa. It permits them to visit any member country within the Schengen Area.\n",
        decisionGuideForVisaApplication: [
          'The Schengen Visa serves as a unified visa allowing travelers to visit multiple European countries that are part of the Schengen Area, thereby facilitating ease of travel within these countries. Holders of this visa can travel to 26 countries including Austria, Belgium, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden, and Switzerland, without the need for individual visas for each country.',
          'To apply for a Schengen Visa, applicants should be aware of three fundamental rules:',
          '**Primary Destination:**\nApplicants should direct their application to the embassy or consulate of the country where they intend to spend the majority of their time. For instance, if one plans to stay in Switzerland for 5 days and France for 3 days, the application should be made through the Swiss embassy or consulate.',
          '**First Point of Entry:**\nIn cases where multiple Schengen countries are to be visited with no primary destination, and the durations of stay are roughly equal, the application should be lodged at the embassy or consulate of the country which will be entered first. Thus, if one is visiting Switzerland and France for 4 days each, but entering through France, the application should be made for a French visa.',
          '**Purpose of the Visit:**\nFor travels encompassing different purposes such as tourism, family visits, or business across various Schengen countries, the visa application should be submitted to the country where the principal purpose of the visit is situated. For example, if a traveler intends to spend 4 days in Switzerland for tourism and 2 days in France for business, the application should be made through the French authorities, as the business component is deemed more significant.',
        ],
        securityGuidelinesDuringAppointment: [
          'Security Regulations do not permit you the following:',
          'Usage of mobile phones, laptops, iPods, electronic books, photo and video cameras, as well as other self-contained electronic devices, electronic storage media are prohibited. All of these devices should be switched off while visiting the Visa Application Centre.',
          'Prohibited items while visiting Visa Application Centre are (despite the possible existence of licenses and permits): Any type of firearms, air guns and traumatic guns;',
          'Electroshocks, sprays and other means of self-defense;',
          'Cold steel arms, piercing and cutting items, including household goods;',
          'Explosives, explosive and flammable substances, fireworks;',
          'Poisonous and toxic substances',
          'Sealed envelopes, and other packages, excluding the possibility of establishing a visual content',
          'Large suitcases, bags, checking of which may be complicated',
          'Alcoholic beverages and food',
          'This list provided is not finite. Other items may be prohibited based on security staff discretion',
          'Folders containing your PASSSPORT(S) and Visa application related papers would be permitted inside our Visa Application Center(s) after proper security check. Any objectionable object as enumerated above will not be permitted inside the center and we take no responsibility for its custody.',
          'Please note that we do not generally permit third parties such as friends, relatives, or business contacts to accompany visa applicants in to the center, unless special needs ( e.g. to accompany hearing impaired, physically challenged, elderly applicants, children or applicants requiring interpreters)',
          'CCTV system is installed in Visa Centre for your security.',
          'There is no facility at the Visa Application Center to store prohibited items or your personal belongings. You will have to make alternate arrangements to keep the same before entry into the Visa Center.',
        ],
        financialInformation: [
          'Visiting Schengen Countries Requires Proof of Financial Stability\nEach Schengen member state, including France, has minimum financial requirements for visitors. This ensures travelers have the resources to support themselves during their stay.\n',
          "Planning a trip to France? You'll need to demonstrate access to a minimum of €120 per day for the duration of your visit. So, for a 30-day trip, you'd need to show proof of at least €3,600.\n",
          'Remember: This is just the minimum. A stronger visa application will demonstrate access to additional financial resources beyond the bare minimum.\n',
        ],
        processOfApplyingVisa: [
          {
            number: 1,
            description:
              'Determine your eligibility:\nFrance Visa and identify the suitable visa category by visiting following website https://france-visas.gouv.fr/en-US/web/france-visas/.',
          },
          {
            number: 2,
            description:
              'Create an account on the official website  France Visas and fill out the france visa application form:\nFill out the visa application form.\nReceive a list of required supporting documents and visa fees upon completing the application.\n',
          },
          {
            number: 3,
            description:
              "Schedule an Appointment:\nCreate an account at VFS Global by selecting the 2nd option 'If you have ALREADY FILLED the France-Visas application form.'\nVerify your authentication email sent to the registered email ID.\nFollow the instructions on the website to book an appointment.\nPay the VFS Service Online.\nReceive an email confirmation with an Appointment Letter on the registered email ID.\nAppointment Rescheduling:\nYou can reschedule your appointment up to 3 Business Days prior to your scheduled appointment date.\n\n",
          },
          {
            number: 4,
            description:
              'Prepare Documents:\nAssemble the docket set specified in the final version of your application.\nInclude any additional documents you wish to submit along with your application.\nEnsure that your documentation complies with the latest requirements, which may involve updating bank statements, salary slips, and other necessary documents.\n',
          },
          {
            number: 5,
            description:
              'Visit to Visa Application Centre:\nOn the scheduled appointment date, visit the Visa Application Centre in person to submit your completed visa application form and supporting documents.\nVFS staff will re-verify your documents and may request additional documents if necessary.\nThey will capture digital photographs of the applicant and biometrics (no Mehendi or cuts on fingers allowed).\nIf you cannot provide biometrics due to a medical issue, carry a medical certificate from a certified (MBBS, MD) doctor.\nYour complete application will be forwarded to the Consulate/Embassy for processing.\nVFS will provide you with a submission receipt for the paid visa fee, which will also include instructions on how to track your application.\n\n',
          },
          {
            number: 6,
            description:
              'Tracking & Collection of Passport:\nTrack the status of your visa application using the reference number provided on your receipt.\nReceive updates via email regarding your application status or check it on the official website: France Visas Application Status.\nFor Passport Collection:\nIf you have chosen the Courier Service option, your passport will be delivered to the address you provided via BlueDart or a similar courier service provider.\nIf you have opted to collect your passport from VFS in person, follow these steps:\nCarry your personal ID proof.\nBring a copy of your passport.\nPresent the Original Submission receipt.\nCollect your passport during VFS working hours.',
          },
        ],
        faqs: [
          {
            number: 1,
            question: 'What is Schengen Visa Shopping?',
            answer:
              'Schengen Visa shopping" typically refers to the practice of applying for a Schengen Visa with the intention of using it to enter the Schengen Area other than the country from which the visa has been received or for purposes other than what the visa was originally intended for. This can involve obtaining a visa for tourism or a specific event but then using it for other activities like work, study or any other purposes which are not allowed under a tourist or short-stay visa.\nEngaging in Schengen Visa shopping or any form of visa fraud is illegal and can have serious consequences, including visa denial, deportation, and bans from entering the Schengen Area in the future.',
          },
          {
            number: 2,
            question: 'What if VFS Appointments are not available?',
            answer:
              'Please wait until you get the right appointment or you can opt for premium services offered by the VFS.\nVFS Offers wide range premium service such as Premium Lounge, Home Visit for visa submission etc. please visit the official website for more details.\n**In any case, we do not promote Visa Shopping to get the visa in time to travel. If applicant requests, we will provide the support but all the risks & liabilities will be of the applicant & end customers.',
          },
          {
            number: 3,
            question:
              'How long does it take to process a Schengen Visa application?',
            answer:
              'The processing time can vary depending on the country and the time of year. Typically, it takes 10 – 15 working days (from application reaches Consulate/Embassy) The earliest you can apply for the visa is 6 months prior from the date of travel.',
          },
          {
            number: 4,
            question: 'Will I get a refund if my visa application is refused?',
            answer:
              'VFS Service Fee & Consulate Visa Fee is non-refundable unless special provision is made by the authority.',
          },
          {
            number: 5,
            question: 'Do I need to attend an interview for a Schengen Visa?',
            answer:
              'In some cases, you may be required to attend an interview at the embassy or consulate.',
          },
          {
            number: 6,
            question:
              'Can I apply for a Schengen Visa if I already have a valid visa for one Schengen country?',
            answer:
              'If you have a valid visa for one Schengen country and you plan to visit only that country, you do not need to apply for another visa. However, if you plan to visit multiple Schengen countries, you should apply at the embassy or consulate of the main destination.',
          },
          {
            number: 7,
            question:
              'Can I change my travel dates after obtaining a Schengen Visa?',
            answer:
              "You can generally change your travel dates as long as your visa is still valid, and your main purpose of travel remains the same. However, it's advisable to inform the embassy or consulate if there are significant changes.",
          },
          {
            number: 8,
            question: 'Can I extend my Schengen Visa while in Europe?',
            answer:
              'Schengen Visas are usually not extendable. If you need to stay longer or have a change in your plans, you should apply for a new visa from your home country.',
          },
          {
            number: 9,
            question: 'What should I do if my Schengen Visa is denied?',
            answer:
              'If your visa is denied, the embassy or consulate should provide you with a reason for the denial. You may have the option to appeal the decision.\nYou can consider applying for a new visa application with justified documentation to refusal notice.',
          },
          {
            number: 10,
            question: 'What is the partial and full withdrawal procedure?',
            answer:
              'If the customer wants to withdraw their passport, we would like to request that you kindly follow the below procedure:\n1. The customer has to prepare a withdrawal letter mentioning the reason for the withdrawal of their passport.\n2. The customer needs to visit the nearest visa application centre between the submission times and submit the withdrawal letter.\n3. Further, it would take a minimum of 5-6 working days to get the passport back.\nNote: Appointment is not required for submitting the withdrawal letter. A third party can also submit the withdrawal letter on behalf of the customer with an authority letter from the customer.',
          },
        ],
        latestNewsAlerts: [
          {
            updatedAt: '2024-04-17T15:42:00Z',
            title: 'Important Update On France Visa Slots in New Delhi',
            summary:
              'It is to inform the visa applicants for France that the appointment slots for Delhi are opened on every wednesday between 11 AM to 2 PM.\n',
          },
        ],
        recommended: false,
        urgent: false,
        displayName: 'France Business Visa',
        masterProductSourceId: 'recuuUZTeeksRemKZ',
        origin: [
          {
            country: 'India',
            countryCode: 'IN',
          },
        ],
        destination: [
          {
            country: 'France',
            countryCode: 'FR',
          },
        ],
        processingTimeUnit: 'Days',
        visaFeeInInr: [
          {
            type: 'ADULT',
            label: 'ADULT',
            currency: 'INR',
            amount: 8065,
          },
          {
            type: 'CHILD',
            label: 'CHILD',
            currency: 'INR',
            amount: 4032,
          },
        ],
        visaFee: [
          {
            type: 'ADULT',
            label: 'ADULT',
            currency: 'INR',
            amount: 8065,
          },
          {
            type: 'CHILD',
            label: 'CHILD',
            currency: 'INR',
            amount: 4032,
          },
        ],
        addOnServicesFee: [
          {
            type: 'ADD_ON_SERVICE_FEE',
            label: 'Premium Lounge',
            currency: 'INR',
            amount: 3659,
          },
          {
            type: 'ADD_ON_SERVICE_FEE',
            label: 'Courier Assurance Charges',
            currency: 'INR',
            amount: 770,
          },
          {
            type: 'ADD_ON_SERVICE_FEE',
            label: 'Courier Charges',
            currency: 'INR',
            amount: 550,
          },
          {
            type: 'VAC_SERVICE_CHARGE',
            label: 'VAC Service Charge',
            currency: 'INR',
            amount: 1971,
          },
          {
            type: 'ADD_ON_SERVICE_FEE',
            label: 'Convenience Fee',
            currency: 'INR',
            amount: 150,
          },
          {
            type: 'ADD_ON_SERVICE_FEE',
            label: 'Prime Time Appointment',
            currency: 'INR',
            amount: 3000,
          },
          {
            type: 'ADD_ON_SERVICE_FEE',
            label: 'Form Filling Charges',
            currency: 'INR',
            amount: 1300,
          },
        ],
        addOnServicesFeeInr: [
          {
            type: 'ADD_ON_SERVICE_FEE',
            label: 'Premium Lounge',
            currency: 'INR',
            amount: 3659,
          },
          {
            type: 'ADD_ON_SERVICE_FEE',
            label: 'Courier Assurance Charges',
            currency: 'INR',
            amount: 770,
          },
          {
            type: 'ADD_ON_SERVICE_FEE',
            label: 'Courier Charges',
            currency: 'INR',
            amount: 550,
          },
          {
            type: 'VAC_SERVICE_CHARGE',
            label: 'VAC Service Charge',
            currency: 'INR',
            amount: 1971,
          },
          {
            type: 'ADD_ON_SERVICE_FEE',
            label: 'Convenience Fee',
            currency: 'INR',
            amount: 150,
          },
          {
            type: 'ADD_ON_SERVICE_FEE',
            label: 'Prime Time Appointment',
            currency: 'INR',
            amount: 3000,
          },
          {
            type: 'ADD_ON_SERVICE_FEE',
            label: 'Form Filling Charges',
            currency: 'INR',
            amount: 1300,
          },
        ],
        productAmount: {
          id: 'fa736d58-2606-4ba1-902b-e289b72c4684',
          linkedProductId: '2ff12ec2-8c66-4c91-b9ce-c765543cc8e5',
          productId: 'OAVI50578938',
          type: 'FIXED',
          currency: 'INR',
          totalAmount: 2618.3,
          baseAmount: 2518,
          serviceFee: 85,
          serviceFeeAmountModifiers: {
            type: 'SUPPLIER_FEE',
            name: 'Supplier Fee',
            currency: 'INR',
            amount: 100.3,
            tax: {
              totalTax: 15.3,
              taxRate: 18,
              totalAmountWithoutTax: 85,
            },
            quantity: 1,
            baseAmount: 85,
            amountCollected: true,
          },
          additionalAmountModifiers: [
            {
              type: 'SUPPLIER_FEE',
              name: 'supplier fee',
              currency: 'INR',
              amount: 413,
              tax: {
                totalTax: 63,
                totalAmountWithoutTax: 350,
              },
              associatedConsumerOrganization:
                'b980eecc-ed6a-496c-9e52-6f43418adf06',
              amountCollected: true,
            },
            {
              type: 'SUPPLIER_FEE',
              name: 'supplier fee',
              currency: 'INR',
              amount: 354,
              tax: {
                totalTax: 54,
                totalAmountWithoutTax: 300,
              },
              associatedConsumerOrganization:
                '033f11f5-eed9-4a88-96e6-ab51c15a97d7',
              amountCollected: true,
            },
            {
              type: 'SUPPLIER_FEE',
              name: 'supplier fee',
              currency: 'INR',
              amount: 413,
              tax: {
                totalTax: 63,
                totalAmountWithoutTax: 350,
              },
              associatedConsumerOrganization:
                'cd85953e-2c68-4963-898d-88a73e4b3b42',
              amountCollected: true,
            },
          ],
          status: 'ACTIVE',
          updatedAt: '2024-05-13T06: 47: 17.16Z',
          createdAt: '2024-05-13T06: 47: 17.16Z',
        },
        cancellable: false,
      },
    ],
    layovers: [],
  },
};

export function getMockData() {
  return new Promise<{ data: ApiResponse; success: boolean }>((resolve) => {
    setTimeout(() => {
      resolve({
        data: MockData,
        success: true,
      });
    }, 500);
  });
}
