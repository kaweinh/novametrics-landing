import React from 'react'

import { motion } from 'framer-motion';
import { useOutsideHookBool } from './UseOutside';
import { FormControl, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { MenuItem } from '@mui/material';
import { InputLabel } from '@mui/material';
import { CircularProgress } from '@mui/material';

type Props = {
    contactOpen: boolean,
    setContactOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const ContactForm = (props: Props) => {
    const panelRef = React.useRef(null);
    const [dropOpen, setOpen] = React.useState<boolean>(false)
    useOutsideHookBool(panelRef, props.setContactOpen, false, dropOpen)
    const [country, setCountry] = React.useState<string>('United States of America')
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [returnValue, setReturnValue] = React.useState<string>('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (e.currentTarget.checkValidity()) {
            setIsLoading(true)

            const formData = {
                name: e.currentTarget.myname.value,
                organization: e.currentTarget.organization.value,
                email: e.currentTarget.email.value,
                message: e.currentTarget.message.value,
                country: country
            }


            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    },
                    body: JSON.stringify(formData)
                })

                if( response.status === 200 ) {
                    setReturnValue('Success')
                    setIsLoading(false)
                } else {
                    setReturnValue('Error sending message')
                    setIsLoading(false)
                }
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }
    }

    React.useEffect(() => {
        if (returnValue === 'Success') {
            const timer = setTimeout(() => {
                setReturnValue('')
                props.setContactOpen(false)
            }, 500)
            return () => clearTimeout(timer)
        } else {
            const time = setTimeout(() => {
                setReturnValue('')
            }, 3000)
        }
    }, [returnValue])

    const handleCountryChange = (event: SelectChangeEvent) => {
        setCountry(event.target.value as string);
    };

    const MenuProps = {
        PaperProps: {
          style: {
            maxHeight: 300,
            width: 250,
          },
        }
    };

    return (
        <div className=' h-screen w-screen fixed flex items-center justify-center z-[49] backdrop-blur-md bg-black bg-opacity-50'>
            { isLoading &&
                <div className='fixed w-screen h-screen flex items-center justify-center z-[50] backdrop-blur-sm'>
                    <CircularProgress />
                </div>
            }

            <div ref={ panelRef } className=' w-[95vw] h-[70vh] lg:mt-[10vh] 2xl:mt-[0vh] lg:max-h-[80vh] lg:h-fit overflow-y-scroll lg:w-[70vw] xl:w-[60vw] 2xl:w-[40vw] bg-white rounded-xl p-4 lg:p-12 font-mukta-mahee text-2xl xl:text-3xl flex flex-col justify-start items-start text-black font-thin'>
                <div className='flex w-full'>
                    <h1 className=' text-primary-dull font-bold'> Contact Us </h1>

                    <div className='ml-auto mr-0 cursor-pointer' onClick={ () => { props.setContactOpen(false)}}> &#x2715; </div>
                </div>

                <form className='w-full flex-flex-col text-base lg:text-xl mt-[2vh]' onSubmit={handleSubmit}>
                    <div className='flex items-center justify-between mb-[2vh]'>
                        <div className='py-2 font-semibold'> Name </div>
                        <input 
                            type="text" 
                            id="myname" 
                            name="myname"
                            placeholder='name' 
                            required
                            className='p-1 w-[60%] text-base border-b border-primary-dull-see-thru outline-none'
                        />
                    </div>

                    <div className='flex items-center justify-between mb-[2vh]'>
                        <div className='py-2 font-semibold'> Organization </div>
                        <input 
                            type="text" 
                            id="organization" 
                            name="organization"
                            placeholder='organization'
                            required 
                            className='w-[60%] text-base p-1 outline-none border-b border-primary-dull-see-thru'
                        />
                    </div>

                    <div className='flex items-center justify-between mb-[2vh]'>
                        <div className='py-2 font-semibold'> Email </div>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder='email' 
                            required
                            className='w-[60%] text-base p-1 border-b outline-none border-primary-dull-see-thru' 
                        />
                    </div>

                    <div className='flex items-center justify-between mb-[2vh]'>
                        <div className='py-2 font-semibold'> Country </div>
                        <FormControl className='w-[60%]'>
                            <InputLabel id="select-country-label">Country</InputLabel>
                            <Select
                                className='selection-none'
                                labelId="select-country-label"
                                id="select-country"
                                value={country}
                                label="Country"
                                onChange={handleCountryChange}
                                MenuProps={MenuProps}
                                onOpen={() => setOpen(true)}
                                onClose={() => setOpen(false)}
                                sx={{ height: 40 }}
                            >
                                { countries.map((country) => ( 
                                    <MenuItem key={ country } value={country}>{country}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>

                    <div className='flex items-start justify-between mb-[5vh]'>
                        <div className='py-2 font-semibold'> Message </div>
                        <textarea 
                            id="message"
                            name="message"
                            placeholder='message' 
                            className='w-[60%] h-[200px] text-base p-2 rounded-md border border-primary-dull-see-thru resize-none' 
                        />
                    </div>

                    <div className={`text-center w-full ${ returnValue == 'Success' ? 'text-green-500': 'text-red-500'} font-bold text-base mb-2`}>
                        { returnValue }
                    </div>

                    <motion.button 
                        type="submit"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        className='w-full py-3 rounded-xl bg-primary text-white font-bold flex justify-center items-center select-none'>
                        <div>
                            Send Message
                        </div>
                    </motion.button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm

const countries = [
    'Afghanistan',
    'Åland Islands',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia (Plurinational State of)',
    'Bonaire, Sint Eustatius and Saba',
    'Bosnia and Herzegovina',
    'Botswana',
    'Bouvet Island',
    'Brazil',
    'British Indian Ocean Territory',
    'United States Minor Outlying Islands',
    'Virgin Islands (British)',
    'Virgin Islands (U.S.)',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cabo Verde',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands',
    'Colombia',
    'Comoros',
    'Congo',
    'Congo (Democratic Republic of the)',
    'Cook Islands',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Curaçao',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands (Malvinas)',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Territories',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Heard Island and McDonald Islands',
    'Vatican City',
    'Honduras',
    'Hungary',
    'Hong Kong',
    'Iceland',
    'India',
    'Indonesia',
    'Ivory Coast',
    'Iran (Islamic Republic of)',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kuwait',
    'Kyrgyzstan',
    "Lao People's Democratic Republic",
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    'North Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia (Federated States of)',
    'Moldova (Republic of)',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    "Korea (Democratic People's Republic of)",
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine, State of',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcairn',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Republic of Kosovo',
    'Réunion',
    'Romania',
    'Russian Federation',
    'Rwanda',
    'Saint Barthélemy',
    'Saint Helena, Ascension and Tristan da Cunha',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin (French part)',
    'Saint Pierre and Miquelon',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Sint Maarten (Dutch part)',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Georgia and the South Sandwich Islands',
    'Korea (Republic of)',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'South Sudan',
    'Suriname',
    'Svalbard and Jan Mayen',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syrian Arab Republic',
    'Taiwan',
    'Tajikistan',
    'Tanzania, United Republic of',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom of Great Britain and Northern Ireland',
    'United States of America',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela (Bolivarian Republic of)',
    'Vietnam',
    'Wallis and Futuna',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]