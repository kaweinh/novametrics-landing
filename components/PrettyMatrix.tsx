import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {}

const rowNames = [
    'Iodized salt consumptions',
    'Ever breastfed MICS',
    'Breastfed within 1 hour of birth',
    'Exclusive breastfeeding',
    'Continued breastfeeding at 1 year',
    'Neonatal tetanus protection',
    'Fully immunized children',
    'Children with fever in last 2 weeks',
    'Children with diarrhea in last 2 weeks',
    'Caesarean section delivery'
]

const colNames = [
    'Indicator',
    'Availability of playthings',
    'Birth registration',
    'Child violent discipline',
    'Women age 15-49 married before age 18',
    'Wommen agae 20-49 married before age 18',
    'Girls age 15-19 currently married',
    'Polygyny women age 15-49',
    'Children under 18 living with both parents',
    'Children under 18 living with neither parent',
    'Inadequate care for children under 5'
]

const PrettyMatrix = (props: Props) => {
    // Number of rows and columns
    const numRows = 47;
    const numCols = 70;

    const rows = Array.from({ length: numRows }, (_, index) => index + 1);
    const cols = Array.from({ length: numCols }, (_, index) => index + 1);

    const [ cellValues, setCellValues ] = React.useState<Array<Array<number>>>([])
    const [ center, setCenter ] = React.useState<Array<number>>([ 10, 10 ])
    const [ potentialCenter, setPotentialCenter ] = React.useState<Array<number>>([ 100, 100 ])

    useEffect(() => {
        const newCellValues = Array.from({ length: numRows }, (_, r_index) => {
            return Array.from({ length: numCols }, (_, c_index) => {
                return (c_index * r_index * Math.random() / 300 ) 
            })
        })

        setCellValues(newCellValues)
    }, [])

    const getColor = ( value: number ) => {
        if ( value < 0.1) return 'bg-accent-dark';
        if ( value < 0.2) return 'bg-neutral-white';
        if ( value < 1 ) return 'bg-neutral-brown-orange'
        if ( value < 2.5) return 'bg-accent';
        if ( value < 4.0) return 'bg-accent-soft';
        return 'bg-accent-light';
    }

    const getDisplayCell = ( row: number, col: number, value: number ) => {
        return (
            <td 
                key={ col } 
                className={ `border w-[20px] h-[20px] xl:w-[2vw] xl:h-[2vw] cursor-default border-white ${ getColor( value ) } text-center `}>
                { value.toFixed(2) }
            </td>
        )
    }

    const getFixedCell = ( row: number, col: number, value: number ) => {
        if ( row > center[0] - 5 && col > center[1] - 5 && row < center[0] + 5 && col < center[1] + 5 ) {
            return (
                <td 
                    key={ col } 
                    onMouseEnter={() => { setPotentialCenter([ Math.max(5, row) , Math.max(5, col) ]) }} 
                    onClick={() => { setCenter([ Math.max(5, row) , Math.max(5, col) ]) } }
                    className={ `border cursor-default opacity-10 border-white ${ getColor( value ) } text-center `}>
                    { value.toFixed(2) }
                </td>
            )
        } else if( row > potentialCenter[0] - 5 && col > potentialCenter[1] - 5 && row < potentialCenter[0] + 5 && col < potentialCenter[1] + 5 ) {
            return (
                <td 
                    key={ col } 
                    onMouseEnter={() => { setPotentialCenter([ Math.max(5, row) , Math.max(5, col) ]) }} 
                    onClick={() => { setCenter([ Math.max(5, row) , Math.max(5, col) ]) } }
                    className={ `border cursor-default opacity-40 border-white ${ getColor( value ) } text-center `}>
                    { value.toFixed(2) }
                </td>
            )
        } else {
            return (
                <td 
                    key={ col }
                    onMouseEnter={() => { setPotentialCenter([ Math.max(5, row) , Math.max(5, col) ]) }} 
                    onClick={() => { setCenter([ Math.max(5, row) , Math.max(5, col) ]) } }
                    className={ `border cursor-default border-white ${ getColor( value ) } text-center `}>
                    { value.toFixed(2) }
                </td>
            )
        }
    }

    return (
        <div className='w-full flex justify-center items-center'>
            <div className=' w-fit relative bg-primary-light mx-auto'>
                <table className=' table-auto border-collapse border border-white xl:text-[0.2rem] text-[0.1rem]'>
                    <tbody onMouseLeave={ () => { setPotentialCenter( [100, 100]) }}>
                        { cellValues.map((rowValues, row ) => (
                            <tr key={ row }>
                                { rowValues.map(( value, col ) => (
                                    getFixedCell( row, col, value ) 
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className='absolute bottom-0 bg-gradient-to-b from-transparent to-white h-[4vh] w-full'> </div>
                <div className='absolute right-0 top-0 bg-gradient-to-r from-transparent to-white w-[2vw] h-full'> </div>

                <div className='absolute bottom-[-5vh] text-center xl:text-sm text-[0.6rem] italic text-neutral-gray-light w-full'> * Please note these values are randomly generated and do not represent actual correlations </div>
            </div>

            <div className='relative bg-white mx-auto p-10 bg-opacity-50 rounded-3xl'>
                <table className=' table-fixed border-collapse text-[0.5rem] xl:text-[0.8rem]'>
                    <tbody>
                        <tr className=' text-white text-[0.4rem]'>
                            { colNames.map(( name, index ) => ( 
                                <td key={index} className={` ${ name == 'Indicator' ? 'min-w-[4vw]': 'w-[2vw]'}`}>
                                    { name }
                                </td>
                            ))}
                        </tr>

                        { cellValues.slice( Math.max(0, center[0] - 5), center[0] + 5).map((rowValues, row ) => (
                            <tr key={ row }>
                                <td className=' text-white text-[0.4rem]'>
                                    { rowNames[ row ] }
                                </td>

                                { rowValues.slice( Math.max(0, center[1] - 5), center[1] + 5 ).map(( value, col ) => (
                                    getDisplayCell( row, col, value ) 
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default PrettyMatrix