import React from 'react'
import * as d3 from 'd3'
import { useInView } from 'framer-motion'

type Props = {}

type DataType = {
    date: string,
    value1: number,
    value2: number,
}

const VeBarChart = (props: Props) => {
    const [data, setData] = React.useState(Array<DataType>)
    const d3Container = React.useRef(null)
    const inView = useInView( d3Container, { once: false, amount: 0.1 } )
    const [width, setWidth] = React.useState( 600 )
    const [height, setHeight] = React.useState( 400 )
    
    React.useEffect(() => {
        if( inView ) {
            setData(createData())
        } else {
            setData(createEmptyDataSet())
        }
    }, [inView])

    const handleResize = () => {
        const lgBreakpoint = 1280; 
        if( window.innerWidth < lgBreakpoint ) {
            setWidth( 380 ) 
            setHeight( 250 )
        } else {
            setWidth( 600 ) 
            setHeight( 400 )
        }
    };

    React.useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const createEmptyDataSet = () => {
        let data = []
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        for (let year = 0; year < 6; year++) {
            for( let month = 0; month < 12; month++ ) {
                const date = (2015 + year).toString() + '-' + months[month]
                data.push({ date: date, value1: 0, value2: 0 })
            }
        }
        return data
    }

    const createData = () => {
        let data = []
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        for (let year = 0; year < 6; year++) {
            for( let month = 0; month < 12; month++ ) {
                const date = (2015 + year).toString() + '-' + months[month]

                if ( year == 1 && month == 8 ) {
                    data.push({ date: date, value1: 90, value2: 738 })
                } else if( year == 1 && month == 9 ) {
                    data.push({ date: date, value1: 64, value2: 545 })
                } else if( year == 1 && month == 10 ) {
                    data.push({ date: date, value1: 29, value2: 452 })
                } else if( year == 1 && month == 11 ) {
                    data.push({ date: date, value1: 40, value2: 372 })
                } else if( year == 2 && month == 0 ) {
                    data.push({ date: date, value1: 58, value2: 360 })
                } else if( year == 2 && month == 1 ) {
                    data.push({ date: date, value1: 69, value2: 270 })
                } else if( year == 2 && month == 2 ) {
                    data.push({ date: date, value1: 59, value2: 279 })
                } else if( year == 2 && month == 3 ) {
                    data.push({ date: date, value1: 129, value2: 254 })
                } else if( year == 2 && month == 4 ) {
                    data.push({ date: date, value1: 140, value2: 310 })
                } else if( year == 2 && month == 5 ) {
                    data.push({ date: date, value1: 55, value2: 247 })
                } else if( year == 2 && month == 6 ) {
                    data.push({ date: date, value1: 202, value2: 502 })
                } else if( year == 2 && month == 7 ) {
                    data.push({ date: date, value1: 96, value2: 334 })
                } else if( year == 2 && month == 8 ) {
                    data.push({ date: date, value1: 142, value2: 329 })
                } else if( year == 2 && month == 9 ) {
                    data.push({ date: date, value1: 134, value2: 381 })
                } else if( year == 2 && month == 10 ) {
                    data.push({ date: date, value1: 128, value2: 307 })
                } else if( year == 4 && month == 9 ) {
                    data.push({ date: date, value1: 42, value2: 240 })
                } else if( year == 4 && month == 10 ) {
                    data.push({ date: date, value1: 40, value2: 237 })
                } else {
                    let value1 = 0
                    let value2 = 0
                    if( year < 5 ) {
                        value1 = 50 + Math.floor(Math.random() * 50)
                    } else {
                        value1 = 25 + Math.floor(Math.random() * 25)
                    }

                    if( year < 1 ) {
                        value2 = 50 + Math.floor(Math.random() * 50)
                    } else {
                        value2 = 100 + Math.floor(Math.random() * 100)
                    }
                    data.push({ date: date, value1: value1, value2: value2 })
                }
            }
        }
        return data
    }

    React.useEffect(() => {
        setData(createData())
    }, [])

    React.useEffect(() => {
        if( data && d3Container.current ) {
            const svg = d3.select(d3Container.current)
            svg.selectAll("*").remove();

            const margin = { top: 30, right: 30, bottom: 50, left: 50 }
            const widthMargin = width - margin.left - margin.right
            const heightMargin = height - margin.top - margin.bottom

            const tickDates = data
                .filter((_, i) => i % 12 === 5) 
                .map( d => d.date );

            const legendData = [
                { color: "#AEDFF8", text: "Yes/Maybe" },
                { color: "#3A506B", text: "Other" },
            ]

            svg
                .attr('width', width)
                .attr('height', height)
                .append('g')
                .attr('transform', `translate(${margin.left}, ${margin.top})`)

            const x = d3.scaleBand()
                .range([0, widthMargin])
                .domain(data.map(d => d.date))
                .padding(0.5)
            svg.append('g')
                .attr('transform', `translate(50, ${heightMargin + 30})`)
                .call(d3.axisBottom(x).tickValues(tickDates))
                .style('font-size', '8px')
                .selectAll('text')
                .style("fill", "white")
            
            const y = d3.scaleLinear()
                .domain([0, 800])
                .range([heightMargin, 0])
            svg.append('g')
                .attr('transform', `translate(${50}, 30)`)
                .call(d3.axisLeft(y))
                .selectAll('text')
                .style("fill", "white")

            svg.selectAll('.tick line')
                .style('stroke', 'white')

            svg.selectAll('.domain')
                .style('stroke', 'white')

            svg.selectAll('bar')
                .data(data)
                .enter()
                .append('rect')
                .attr('x', (d: DataType ) => x(d.date) || 'None')
                .attr('y', (d: DataType ) => heightMargin)
                .attr('width', x.bandwidth())
                .attr('height', (d) => 0)
                .attr('fill', '#3A506B')
                .attr('transform', `translate(${50}, 30)`)
                .transition()
                .attr('height', (d: DataType) => heightMargin - y( d.value2 ) )
                .attr('y', (d: DataType) => y( d.value2 ) )
                .duration(1000)
                .ease(d3.easeLinear)
                .delay((d, i) => i * 20)

            svg.selectAll('bar')
                .data(data)
                .enter()
                .append('rect')
                .attr('x', (d: DataType ) => x(d.date) || 'None')
                .attr('y', (d: DataType ) => heightMargin)
                .attr('width', x.bandwidth())
                .attr('height', (d) => 0)
                .attr('fill', '#AEDFF8')
                .attr('transform', `translate(${50}, 30)`)
                .transition()
                .attr('height', (d: DataType) => heightMargin - y( d.value1 ) )
                .attr('y', (d: DataType) => y( d.value1 ) )
                .duration(1000)
                .ease(d3.easeLinear)
                .delay((d, i) => i * 10)


            svg.append('text')
                .attr("class", "x label")
                .attr("text-anchor", "middle")
                .attr('transform', `translate(${widthMargin / 2 + 40 }, ${height})`)
                .text(" Date of Event ")
                .style('font-size', '12px')
                .style('fill', 'white')

            svg.append('text')
                .attr("class", "y label")
                .attr("text-anchor", "middle")
                .attr('transform', `translate(10, ${height / 2}) rotate(-90)`)
                .text(" Number of Events ")
                .style('font-size', '12px')
                .style('fill', 'white')

            svg.append('text')
                .attr("class", "title label")
                .attr("text-anchor", "middle")
                .attr('transform', `translate(${widthMargin / 2 + 40 }, ${20})`)
                .text(" Frequency of VE and VE-Related Events Against Insurgency-Related Events ")
                .style('font-size', '12px')
                .style('fill', 'white')

            const legend = svg.append('g')
                .attr('class', 'legend')
                .attr('transform', `translate(${widthMargin - 50}, ${heightMargin - 270})`)

            legendData.forEach((item, index) => {
                legend.append('rect')
                    .attr('x', 0)
                    .attr('y', index * 20)
                    .attr('width', 10)
                    .attr('height', 10)
                    .attr('fill', item.color)

                legend.append('text')
                    .attr('x', 15)
                    .attr('y', index * 20 + 7)
                    .attr('fill', 'white')
                    .text(item.text)
                    .style('font-size', '12px')
                    .attr('alignment-baseline', 'middle')
            })
        }
    }, [data, width, height])


    return (
        <div className='relative flex justify-center items-center w-full h-fit'>
            <svg
                className='d3-component'
                width={width}
                height={height}
                ref={d3Container}
            />

            <div className='absolute font-mukta-mahee text-right xl:text-[0.6rem] text-[0.4rem] w-[70px] text-neutral-brown-orange mr-[190px] mb-[100px] xl:mr-[300px] xl:mb-[200px]'>
                President Duterte takes office and begins his &quot;war on drugs&quot;
            </div>

            <div className='absolute font-mukta-mahee text-right xl:text-[0.6rem] text-[0.4rem] w-[70px] text-neutral-brown-orange mr-[40px] mb-[90px] xl:mr-[30px] xl:mb-[150px]'>
                Battle of Marawi 
            </div>

            <div className='absolute font-mukta-mahee text-right xl:text-[0.6rem] text-[0.4rem] w-[100px] lg:w-[150px] text-neutral-brown-orange ml-[170px] xl:ml-[320px] xl:mt-[30px]'>
                BARMM is established between the Philippines government and the Moro Islamic Liberation Front (MILF)
            </div>
        </div>
    )
}

export default VeBarChart