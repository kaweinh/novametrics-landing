import nodemailer from 'nodemailer'

export const POST = async ( req: Request ) => {
    const body = await req.json()
    if ( !body.name || !body.email || !body.message || !body.organization ) {
        return new Response( 'missing required values', { status: 400 } )
    }

    if ( !body.email.includes( '@' ) ) {
        return new Response( 'invalid email', { status: 400 } )
    }

    if ( body.message.length > 1000 || body.name.length > 100 || body.organization.length > 500 || body.email.length > 100 ) {
        return new Response( 'invalid length', { status: 400 } )
    }

    if ( body.country && body.country.length > 100 ) {
        return new Response( 'invalid length', { status: 400 } )
    }

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: 'New Novametrics Website Contact -' + body.organization,
            text: `
                Name: ${ body.name }
                Email: ${ body.email }
                Organization: ${ body.organization }
                Country: ${ body.country }
                Message: ${ body.message }
            `,
            html: `<h1> New Novametrics Contact </h1>
                <p> Name: ${ body.name } </p>
                <p> Email: ${ body.email } </p>
                <p> Organization: ${ body.organization } </p>
                <p> Country: ${ body.country } </p>
                <p> Message: ${ body.message } </p>
            `
        })
    } catch ( e ) {
        console.error( e )
        return new Response( 'error sending email', { status: 500 } )
    }

    return new Response( 'success', { status: 200 } )
}

const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: 'admin@novametricsllc.com',
        pass: 'A=mB,A*_7dS;6h5'
    }
})

const mailOptions = { 
    from:'admin@novametricsllc.com',
    to:'admin@novametricsllc.com'
}